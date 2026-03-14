"use client";

import { useEffect, useMemo, useState } from "react";

type KaratKey = "24" | "22" | "21" | "18";
type CurrencyKey = "USD" | "EUR" | "AED" | "SAR" | "QAR" | "KWD" | "OMR";

const CURRENCY: Record<CurrencyKey, { labelAr: string; symbol: string }> = {
  USD: { labelAr: "الدولار الأمريكي", symbol: "$" },
  EUR: { labelAr: "اليورو", symbol: "€" },
  AED: { labelAr: "الدرهم الإماراتي", symbol: "د.إ" },
  SAR: { labelAr: "الريال السعودي", symbol: "ر.س" },
  QAR: { labelAr: "الريال القطري", symbol: "ر.ق" },
  KWD: { labelAr: "الدينار الكويتي", symbol: "د.ك" },
  OMR: { labelAr: "الريال العُماني", symbol: "ر.ع" },
};

const KARAT_RATIO: Record<KaratKey, number> = {
  "24": 1,
  "22": 22 / 24,
  "21": 21 / 24,
  "18": 18 / 24,
};

function fmt(n: number) {
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function ZakatGoldCalculatorClient() {
  const [karat, setKarat] = useState<KaratKey>("24");
  const [grams, setGrams] = useState<number>(0);
  const [currency, setCurrency] = useState<CurrencyKey>("AED");

  const [price24, setPrice24] = useState<number>(0);
  const [loadingPrice, setLoadingPrice] = useState(true);
  const [error, setError] = useState("");

  const nisabPureGold = 85;

  async function loadMarketPrice() {
    try {
      setError("");
      setLoadingPrice(true);

      const [goldRes, fxRes] = await Promise.all([
        fetch("https://api.gold-api.com/price/XAU", { cache: "no-store" }),
        fetch("https://open.er-api.com/v6/latest/USD", { cache: "no-store" }),
      ]);

      const goldData = await goldRes.json();
      const fxData = await fxRes.json();

      const ounceUSD = Number(goldData?.price);
      const rates = fxData?.rates || {};
      const currencyRate = currency === "USD" ? 1 : Number(rates?.[currency]);

      if (!ounceUSD || Number.isNaN(ounceUSD)) {
        throw new Error("تعذر جلب سعر الذهب الحالي");
      }

      if (!currencyRate || Number.isNaN(currencyRate)) {
        throw new Error("تعذر جلب سعر العملة الحالية");
      }

      const gram24USD = ounceUSD / 31.1034768;
      const gram24Local = gram24USD * currencyRate;

      setPrice24(gram24Local);
    } catch (e: any) {
      setError(e?.message || "حدث خطأ أثناء جلب السعر");
    } finally {
      setLoadingPrice(false);
    }
  }

  useEffect(() => {
    loadMarketPrice();
    const timer = setInterval(loadMarketPrice, 60000);
    return () => clearInterval(timer);
  }, [currency]);

  const result = useMemo(() => {
    if (!grams || grams <= 0 || !price24 || price24 <= 0) return null;

    const ratio = KARAT_RATIO[karat];
    const pureGoldGrams = grams * ratio;
    const selectedGramPrice = price24 * ratio;

    const totalValue = grams * selectedGramPrice;
    const zakatValue = totalValue * 0.025;
    const zakatGoldWeight = pureGoldGrams * 0.025;
    const isAboveNisab = pureGoldGrams >= nisabPureGold;

    return {
      pureGoldGrams,
      selectedGramPrice,
      totalValue,
      zakatValue,
      zakatGoldWeight,
      isAboveNisab,
    };
  }, [grams, karat, price24]);

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <a href="/" className="text-sm text-amber-400 hover:underline">
            ← الرجوع إلى الرئيسية
          </a>
        </div>

        <h1 className="mb-8 text-3xl font-bold text-amber-400">
          حاسبة زكاة الذهب
        </h1>

        <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              اختر العملة
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyKey)}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
            >
              {(Object.keys(CURRENCY) as CurrencyKey[]).map((key) => (
                <option key={key} value={key}>
                  {key} — {CURRENCY[key].labelAr}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              اختر العيار
            </label>
            <select
              value={karat}
              onChange={(e) => setKarat(e.target.value as KaratKey)}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
            >
              <option value="24">24K</option>
              <option value="22">22K</option>
              <option value="21">21K</option>
              <option value="18">18K</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              عدد الجرامات
            </label>
            <input
              type="number"
              value={grams || ""}
              onChange={(e) => setGrams(Number(e.target.value))}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
              placeholder="مثال: 120"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              سعر جرام 24 اليوم
            </label>
            <input
              type="text"
              value={
                loadingPrice
                  ? "جاري جلب السعر..."
                  : price24
                  ? `${fmt(price24)} ${CURRENCY[currency].symbol}`
                  : ""
              }
              readOnly
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-amber-300"
            />
          </div>

          {error && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}
        </div>

        <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
          {!result ? (
            <p className="text-sm text-zinc-300">
              أدخل عدد الجرامات وانتظر تحميل سعر السوق الحالي.
            </p>
          ) : !result.isAboveNisab ? (
            <div>
              <p className="font-medium text-red-400">
                لا تجب الزكاة (لم يبلغ النصاب 85 جرام ذهب خالص)
              </p>
              <p className="mt-3 text-sm text-zinc-400">
                الذهب الخالص المكافئ: {fmt(result.pureGoldGrams)} جرام
              </p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-zinc-400">مقدار الزكاة الواجبة</p>
                <p className="mt-2 text-3xl font-bold text-amber-300">
                  {fmt(result.zakatValue)} {CURRENCY[currency].symbol}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-zinc-400">زكاة الذهب بالوزن</p>
                <p className="mt-2 text-3xl font-bold text-emerald-300">
                  {fmt(result.zakatGoldWeight)} جرام
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-zinc-400">
                  سعر الجرام حسب العيار المختار
                </p>
                <p className="mt-2 text-2xl font-semibold text-zinc-100">
                  {fmt(result.selectedGramPrice)} {CURRENCY[currency].symbol}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-zinc-400">القيمة التقديرية الكاملة</p>
                <p className="mt-2 text-2xl font-semibold text-zinc-100">
                  {fmt(result.totalValue)} {CURRENCY[currency].symbol}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 md:col-span-2">
                <p className="text-sm text-zinc-400">الذهب الخالص المكافئ</p>
                <p className="mt-2 text-2xl font-semibold text-zinc-100">
                  {fmt(result.pureGoldGrams)} جرام
                </p>
              </div>
            </div>
          )}

          <p className="mt-4 text-xs text-zinc-400">
            ملاحظة: يتم احتساب الزكاة بنسبة 2.5% إذا بلغ الذهب النصاب، وهذه
            الحاسبة تقديرية للتوعية وليست فتوى شرعية.
          </p>
        </div>
      </div>
    </main>
  );
}
