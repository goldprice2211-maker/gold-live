"use client";

import { useEffect, useMemo, useState } from "react";

type Prices = { gram24: number; gram22: number; gram21: number; gram18: number };
type CurrencyKey = "USD" | "EUR" | "AED" | "SAR" | "QAR" | "KWD" | "OMR";

const CURRENCY: Record<CurrencyKey, { label: string; symbol: string }> = {
  USD: { label: "الدولار الأمريكي", symbol: "$" },
  EUR: { label: "اليورو", symbol: "€" },
  AED: { label: "الدرهم الإماراتي", symbol: "د.إ" },
  SAR: { label: "الريال السعودي", symbol: "ر.س" },
  QAR: { label: "الريال القطري", symbol: "ر.ق" },
  KWD: { label: "الدينار الكويتي", symbol: "د.ك" },
  OMR: { label: "الريال العُماني", symbol: "ر.ع" },
};

function fmt(n: number) {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// 5% متوسط زيادة المحلات (تقدر تغيرها لاحقاً: 0.03 = 3% ، 0.07 = 7%)
const shopMargin = 0.05;

// أوزان السبائك (جرام) — تشمل 1 جرام
const BAR_WEIGHTS = [1, 5, 10, 20, 50, 100, 250, 1000];

function priceForWeight(gramPrice: number, grams: number) {
  return gramPrice * grams;
}

export default function Home() {
  const [active, setActive] = useState<CurrencyKey>("AED");
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [usdBase, setUsdBase] = useState<Prices | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string>("");
  const [err, setErr] = useState<string>("");
  const T = useMemo(() => {
  const ar = {
    live: "تحديث مباشر كل دقيقة",
    title: "أسعار الذهب اليوم",
    note: "معلومات فقط — الأسعار تقديرية وتعتمد على السعر العالمي (XAU).",
    lastUpdate: "آخر تحديث",
    refreshNow: "تحديث الآن",
    pricesIn: "الأسعار بـ",
    perGram: "السعر لكل 1 جرام",
    loadingCurrency: "جاري تحميل بيانات العملة…",
    barsTitle: "سعر سبائك الذهب في محلات الصياغة (عيار 24)",
    barsNote: "الأسعار المعروضة تقديرية بناءً على متوسط السوق، وقد تختلف حسب محل الصياغة والمصنعية.",
    quickInfo: "معلومات سريعة",
    tipTitle: "ملاحظة",
    tipBody: "اختر العملة المناسبة لك، وسيتم عرض أسعار العيارات مباشرة.",
    disclaimer: "معلومات فقط وليست نصيحة استثمارية.",
    gram: "جرام",
    karat: "عيار",
    language: "اللغة",
  };

  const en = {
    live: "Live update every minute",
    title: "Gold Prices Today",
    note: "Info only — approximate prices based on global XAU spot price.",
    lastUpdate: "Last update",
    refreshNow: "Refresh now",
    pricesIn: "Prices in",
    perGram: "Price per 1 gram",
    loadingCurrency: "Loading currency data…",
    barsTitle: "Gold Bar Prices in Jewelry Shops (24K)",
    barsNote: "Approximate market prices. May vary by shop and workmanship fees.",
    quickInfo: "Quick info",
    tipTitle: "Note",
    tipBody: "Choose your currency to see karat prices instantly.",
    disclaimer: "Info only. Not investment advice.",
    gram: "gram",
    karat: "Karat",
    language: "Language",
  };

  return lang === "ar" ? ar : en;
}, [lang]);

  // Rates are “units per 1 USD” (e.g., AED ~ 3.67, EUR ~ 0.92)
  const [rates, setRates] = useState<Record<CurrencyKey, number>>({
    USD: 1,
    EUR: 0,
    AED: 0,
    SAR: 0,
    QAR: 0,
    KWD: 0,
    OMR: 0,
  });

  async function loadPrices() {
    try {
      setErr("");

      const [goldRes, fxRes] = await Promise.all([
        fetch("https://api.gold-api.com/price/XAU", { cache: "no-store" }),
        fetch("https://open.er-api.com/v6/latest/USD", { cache: "no-store" }),
      ]);

      const goldData = await goldRes.json();
      const fxData = await fxRes.json();

      const ounceUSD = Number(goldData?.price);
      if (!ounceUSD || Number.isNaN(ounceUSD)) throw new Error("لم يتم جلب سعر الذهب حالياً");

      // Update gold (USD base)
      const gram24USD = ounceUSD / 31.1034768;
      setUsdBase({
        gram24: gram24USD,
        gram22: gram24USD * (22 / 24),
        gram21: gram24USD * (21 / 24),
        gram18: gram24USD * (18 / 24),
      });

      // Update FX silently (no UI). If missing, keep old value.
      const nextRates: Record<CurrencyKey, number> = { ...rates };
      const r = fxData?.rates || {};

      const maybe = (k: CurrencyKey) => {
        const v = Number(r?.[k]);
        return Number.isFinite(v) && v > 0 ? v : null;
      };

      // USD base
      nextRates.USD = 1;

      const eur = maybe("EUR");
      const aed = maybe("AED");
      const sar = maybe("SAR");
      const qar = maybe("QAR");
      const kwd = maybe("KWD");
      const omr = maybe("OMR");

      if (eur) nextRates.EUR = eur;
      if (aed) nextRates.AED = aed;
      if (sar) nextRates.SAR = sar;
      if (qar) nextRates.QAR = qar;
      if (kwd) nextRates.KWD = kwd;
      if (omr) nextRates.OMR = omr;

      setRates(nextRates);
      setUpdatedAt(new Date().toISOString());
    } catch (e: any) {
      setErr(e?.message || "صار خطأ في جلب البيانات");
    }
  }

  useEffect(() => {
    loadPrices();
    const t = setInterval(loadPrices, 60000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const display = useMemo(() => {
    if (!usdBase) return null;

    const r = rates[active] || 0;
    if (!r) return null;

    return {
      gram24: usdBase.gram24 * r,
      gram22: usdBase.gram22 * r,
      gram21: usdBase.gram21 * r,
      gram18: usdBase.gram18 * r,
    };
  }, [usdBase, active, rates]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-black text-zinc-100">
      {/* Glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute top-40 right-[-120px] h-[420px] w-[420px] rounded-full bg-yellow-200/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 py-10">
        {/* Header */}
        <header className="flex flex-col gap-6 rounded-3xl border border-amber-300/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,215,0,0.06),0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur">
          <div className="flex flex-col gap-2">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200/15 bg-amber-300/10 px-3 py-1 text-sm text-amber-200">
              <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(255,215,0,0.55)]" />
              تحديث مباشر كل دقيقة
            </p>

            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              أسعار الذهب اليوم{" "}
              <span className="ml-2 bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent">
                (24 / 22 / 21 / 18)
              </span>
            </h1>

            <p className="text-sm text-zinc-300 md:text-base">
              معلومات فقط — الأسعار تقديرية وتعتمد على السعر العالمي (XAU).
            </p>
          </div>

          {/* Currency switch */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

  {/* العملات */}
  <div className="flex w-full flex-wrap items-center gap-2">
    {(["AED", "USD", "EUR", "SAR", "QAR", "KWD", "OMR"] as CurrencyKey[]).map((k) => {
      const on = k === active;
      return (
        <button
          key={k}
          onClick={() => setActive(k)}
          className={[
            "rounded-xl px-4 py-2 text-sm font-medium transition",
            "border",
            on
              ? "border-amber-200/30 bg-amber-300/15 text-amber-100"
              : "border-white/10 bg-white/5 text-zinc-200",
          ].join(" ")}
        >
          {k}
        </button>
      );
    })}
  </div>

  {/* 🔥 زر اللغة هنا */}
  <div className="flex items-center gap-2">
    <button
      onClick={() => setLang("ar")}
      className={`px-3 py-1 rounded-lg text-sm border ${
        lang === "ar"
          ? "bg-amber-300/20 border-amber-300 text-amber-200"
          : "border-white/10 text-zinc-300"
      }`}
    >
      عربي
    </button>

    <button
      onClick={() => setLang("en")}
      className={`px-3 py-1 rounded-lg text-sm border ${
        lang === "en"
          ? "bg-amber-300/20 border-amber-300 text-amber-200"
          : "border-white/10 text-zinc-300"
      }`}
    >
      English
    </button>
  </div>

</div>

            <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 md:min-w-[320px]">
              <div className="flex flex-col">
                <span className="text-xs text-zinc-400">آخر تحديث</span>
                <span className="font-medium">{updatedAt ? new Date(updatedAt).toLocaleString() : "—"}</span>
              </div>
              <button
                onClick={loadPrices}
                className="rounded-xl border border-amber-200/20 bg-amber-300/10 px-3 py-2 text-xs font-medium text-amber-100 hover:bg-amber-300/15"
              >
                تحديث الآن
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {/* Price card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold">
              الأسعار بـ{" "}
              <span className="text-amber-200">
                {active} ({CURRENCY[active].symbol})
              </span>
            </h2>
            <p className="mt-1 text-sm text-zinc-400">السعر لكل 1 جرام</p>

            {err && (
              <div className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
                {err}
              </div>
            )}

            {!display && !err && (
              <div className="mt-6 animate-pulse space-y-3">
                <div className="h-14 rounded-2xl bg-white/10" />
                <div className="h-14 rounded-2xl bg-white/10" />
                <div className="h-14 rounded-2xl bg-white/10" />
                <div className="h-14 rounded-2xl bg-white/10" />
              </div>
            )}

            {!display && !err && rates[active] === 0 && (
              <div className="mt-4 rounded-2xl border border-amber-200/15 bg-amber-300/10 p-4 text-sm text-amber-100">
                جاري تحميل بيانات العملة…
              </div>
            )}

            {display && (
              <div className="mt-6 grid gap-3">
                <PriceRow k="24" v={display.gram24} sym={CURRENCY[active].symbol} />
                <PriceRow k="22" v={display.gram22} sym={CURRENCY[active].symbol} />
                <PriceRow k="21" v={display.gram21} sym={CURRENCY[active].symbol} />
                <PriceRow k="18" v={display.gram18} sym={CURRENCY[active].symbol} />
              </div>
            )}

            {/* Gold Bars Section (ONE VERSION ONLY) */}
            {display && (
              <div className="mt-10 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-6">
                <h3 className="mb-4 text-lg font-semibold text-amber-300">
                  سعر سبائك الذهب في محلات الصياغة (عيار 24)
                </h3>

                <p className="mb-4 text-xs text-zinc-400">
                  الأسعار المعروضة تقديرية بناءً على متوسط السوق، وقد تختلف حسب محل الصياغة والمصنعية.
                </p>

                <div className="mt-6 grid gap-3">
                  {BAR_WEIGHTS.map((g) => (
                    <div
                      key={g}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
                    >
                      <span>{g === 1000 ? "1 كيلو" : `${g} جرام`}</span>

                      <span className="font-semibold text-amber-100">
                        {fmt(priceForWeight(display.gram24 * (1 + shopMargin), g))} {CURRENCY[active].symbol}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold">معلومات سريعة</h2>

            <div className="mt-5 grid gap-3">
              <InfoCard title="عيار 24" desc="أنقى ذهب (تقريباً 99.9%)." />
              <InfoCard title="عيار 22" desc="شائع في الخليج للمجوهرات." />
              <InfoCard title="عيار 21" desc="الأكثر تداولاً في كثير من الأسواق." />
              <InfoCard title="عيار 18" desc="مناسب للتصاميم الحديثة ومقاوم للخدش أكثر." />
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200/15 bg-amber-300/10 p-4 text-sm text-amber-100">
              <p className="font-medium">ملاحظة</p>
              <p className="mt-1 text-amber-100/90">اختر العملة المناسبة لك، وسيتم عرض أسعار العيارات مباشرة.</p>
            </div>
          </div>
        </section>

        <footer className="mt-10 flex flex-col items-center gap-2 text-center text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} — Gold Live</p>
          <p>Disclaimer: معلومات فقط وليست نصيحة استثمارية.</p>
        </footer>
      </div>
    </main>
  );
}

function PriceRow({ k, v, sym }: { k: string; v: number; sym: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-200 shadow-[0_0_0_1px_rgba(255,215,0,0.08)]">
          {k}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">عيار {k}</span>
          <span className="text-xs text-zinc-400">جرام</span>
        </div>
      </div>

      <div className="text-right">
        <div className="text-lg font-semibold text-amber-100">{fmt(v)}</div>
        <div className="text-xs text-zinc-400">{sym}</div>
      </div>
    </div>
  );
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="text-sm font-semibold text-zinc-100">{title}</div>
      <div className="mt-1 text-sm text-zinc-400">{desc}</div>
    </div>
  );
}
