"use client";

import { useMemo, useState } from "react";

type KaratKey = "24" | "22" | "21" | "18";

const KARAT_PURITY: Record<KaratKey, number> = {
  "24": 24 / 24,
  "22": 22 / 24,
  "21": 21 / 24,
  "18": 18 / 24,
};

export const metadata = {
  title: "حاسبة زكاة الذهب | Gold Zakat Calculator",
  description:
    "احسب زكاة الذهب بسهولة حسب الوزن والعيار وسعر الذهب الحالي. Gold Zakat Calculator based on weight, karat and current gold price.",
};

export default function ZakatGoldCalculatorPage() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [grams, setGrams] = useState<string>("");
  const [karat, setKarat] = useState<KaratKey>("24");
  const [price24, setPrice24] = useState<string>("");

  const t =
    lang === "ar"
      ? {
          back: "← الرجوع إلى الرئيسية",
          title: "حاسبة زكاة الذهب",
          desc: "احسب زكاة الذهب بسهولة بناءً على الوزن والعيار وسعر جرام الذهب عيار 24.",
          goldWeight: "وزن الذهب (جرام)",
          karat: "العيار",
          current24: "سعر جرام الذهب عيار 24",
          nisabTitle: "النصاب",
          nisabText:
            "النصاب التقريبي للذهب هو 85 جرامًا من الذهب الخالص. إذا بلغ الذهب هذا المقدار أو أكثر، وحال عليه الحول، فقد تجب فيه الزكاة.",
          pureGold: "الذهب الخالص المكافئ",
          totalValue: "القيمة التقديرية للذهب",
          zakatValue: "قيمة الزكاة (2.5%)",
          zakatGold: "الزكاة وزنًا من الذهب",
          notes: "ملاحظات مهمة",
          notesText:
            "هذه الحاسبة تقديرية ومفيدة للتوعية فقط. بعض الأحكام الفقهية قد تختلف حسب نوع الذهب وهل هو للادخار أو للزينة، لذلك عند الحاجة يُرجع لفتوى موثوقة.",
          eligibleYes: "الذهب بلغ النصاب أو أكثر",
          eligibleNo: "الذهب أقل من النصاب",
          gram: "جرام",
          currency: "بالعملة التي أدخلتها",
          placeholderWeight: "مثال: 120",
          placeholderPrice: "مثال: 350",
        }
      : {
          back: "← Back to home",
          title: "Gold Zakat Calculator",
          desc: "Calculate gold zakat based on weight, karat, and the current 24K gold gram price.",
          goldWeight: "Gold weight (grams)",
          karat: "Karat",
          current24: "24K gold price per gram",
          nisabTitle: "Nisab",
          nisabText:
            "The approximate nisab for gold is 85 grams of pure gold. If your gold reaches this amount or more and a lunar year has passed, zakat may be due.",
          pureGold: "Equivalent pure gold",
          totalValue: "Estimated gold value",
          zakatValue: "Zakat value (2.5%)",
          zakatGold: "Zakat as gold weight",
          notes: "Important notes",
          notesText:
            "This calculator is an estimate for awareness purposes only. Religious rulings may differ depending on whether the gold is for savings or personal jewelry, so consult a trusted source when needed.",
          eligibleYes: "Gold has reached nisab or more",
          eligibleNo: "Gold is below nisab",
          gram: "gram",
          currency: "in your entered currency",
          placeholderWeight: "Example: 120",
          placeholderPrice: "Example: 350",
        };

  const result = useMemo(() => {
    const g = Number(grams);
    const p24 = Number(price24);

    if (!g || !p24 || g <= 0 || p24 <= 0) return null;

    const purity = KARAT_PURITY[karat];
    const pureGoldGrams = g * purity;

    const pricePerGramSelected = p24 * purity;
    const totalValue = g * pricePerGramSelected;
    const zakatValue = totalValue * 0.025;
    const zakatGoldWeight = pureGoldGrams * 0.025;
    const reachedNisab = pureGoldGrams >= 85;

    return {
      pureGoldGrams,
      totalValue,
      zakatValue,
      zakatGoldWeight,
      reachedNisab,
    };
  }, [grams, karat, price24]);

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-black px-5 py-10 text-zinc-100"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          <a href="/" className="text-sm text-amber-400 hover:underline">
            {t.back}
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang("ar")}
              className={`rounded-xl border px-3 py-2 text-sm ${
                lang === "ar"
                  ? "border-amber-300 bg-amber-300/20 text-amber-200"
                  : "border-white/10 text-zinc-300 hover:bg-white/10"
              }`}
            >
              عربي
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-xl border px-3 py-2 text-sm ${
                lang === "en"
                  ? "border-amber-300 bg-amber-300/20 text-amber-200"
                  : "border-white/10 text-zinc-300 hover:bg-white/10"
              }`}
            >
              English
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-amber-300/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,215,0,0.06),0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur">
          <h1 className="text-3xl font-semibold tracking-tight text-amber-300 md:text-4xl">
            {t.title}
          </h1>

          <p className="mt-3 text-sm text-zinc-300 md:text-base">{t.desc}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">{t.goldWeight}</label>
              <input
                type="number"
                inputMode="decimal"
                value={grams}
                onChange={(e) => setGrams(e.target.value)}
                placeholder={t.placeholderWeight}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-zinc-100 outline-none ring-0 placeholder:text-zinc-500 focus:border-amber-300/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">{t.karat}</label>
              <select
                value={karat}
                onChange={(e) => setKarat(e.target.value as KaratKey)}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-zinc-100 outline-none focus:border-amber-300/40"
              >
                <option value="24">24K</option>
                <option value="22">22K</option>
                <option value="21">21K</option>
                <option value="18">18K</option>
              </select>
            </div>

            <div className="md:col-span-2">
  <label className="mb-2 block text-sm text-zinc-300">
    {t.current24}
  </label>

  <input
    type="number"
    inputMode="decimal"
    value={price24}
    onChange={(e) => setPrice24(Number(e.target.value))}
    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white focus:border-amber-400 focus:outline-none"
    placeholder="مثال: 240"
  />
</div>
