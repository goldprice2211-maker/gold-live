"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Prices = {
  gram24: number;
  gram22: number;
  gram21: number;
  gram18: number;
};

type CurrencyKey = "USD" | "EUR" | "AED" | "SAR" | "QAR" | "KWD" | "OMR";
type KaratKey = "24" | "22" | "21" | "18";

type DailyHistoryItem = {
  date: string;
  gram24: number;
  gram22: number;
  gram21: number;
  gram18: number;
};

const CURRENCY: Record<
  CurrencyKey,
  { labelAr: string; labelEn: string; symbol: string }
> = {
  USD: { labelAr: "الدولار الأمريكي", labelEn: "US Dollar", symbol: "$" },
  EUR: { labelAr: "اليورو", labelEn: "Euro", symbol: "€" },
  AED: { labelAr: "الدرهم الإماراتي", labelEn: "UAE Dirham", symbol: "د.إ" },
  SAR: { labelAr: "الريال السعودي", labelEn: "Saudi Riyal", symbol: "ر.س" },
  QAR: { labelAr: "الريال القطري", labelEn: "Qatari Riyal", symbol: "ر.ق" },
  KWD: { labelAr: "الدينار الكويتي", labelEn: "Kuwaiti Dinar", symbol: "د.ك" },
  OMR: { labelAr: "الريال العُماني", labelEn: "Omani Rial", symbol: "ر.ع" },
};

function fmt(n: number) {
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

const shopMargin = 0.05;
const BAR_WEIGHTS = [1, 5, 10, 20, 50, 100, 250, 1000];

function priceForWeight(gramPrice: number, grams: number) {
  return gramPrice * grams;
}

export default function Home({
  defaultCurrency = "AED",
  country = "",
}: {
  defaultCurrency?: CurrencyKey;
  country?: string;
}) {
  const [active, setActive] = useState<CurrencyKey>(defaultCurrency);
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [usdBase, setUsdBase] = useState<Prices | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string>("");
  const [err, setErr] = useState<string>("");
  const [selectedChartKarat, setSelectedChartKarat] =
    useState<KaratKey>("24");

  const [history, setHistory] = useState<{
    gram24: number[];
    gram22: number[];
    gram21: number[];
    gram18: number[];
  }>(() => {
    if (typeof window === "undefined") {
      return {
        gram24: [],
        gram22: [],
        gram21: [],
        gram18: [],
      };
    }

    const saved = localStorage.getItem("gold_history");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return {
          gram24: [],
          gram22: [],
          gram21: [],
          gram18: [],
        };
      }
    }

    return {
      gram24: [],
      gram22: [],
      gram21: [],
      gram18: [],
    };
  });

  const [dailyHistory, setDailyHistory] = useState<DailyHistoryItem[]>(() => {
    if (typeof window === "undefined") return [];

    const saved = localStorage.getItem("gold_daily_history");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }

    return [];
  });

  const T = useMemo(() => {
    const ar = {
      live: "تحديث مباشر كل دقيقة",
      title: "أسعار الذهب اليوم",
      subtitle:
        "تابع أسعار الذهب لحظة بلحظة، وتعرف على أسعار الجرام والسبائك، واقرأ أحدث التحليلات لفهم حركة السوق بشكل أوضح.",
      note: "معلومات فقط — الأسعار تقديرية وتعتمد على السعر العالمي (XAU).",
      lastUpdate: "آخر تحديث",
      refreshNow: "تحديث الآن",
      pricesIn: "الأسعار بـ",
      perGram: "السعر لكل 1 جرام",
      loadingCurrency: "جاري تحميل بيانات العملة...",
      barsTitle: "سعر سبائك الذهب في محلات الصياغة (عيار 24)",
      barsNote:
        "الأسعار المعروضة تقديرية بناءً على متوسط السوق، وقد تختلف حسب محل الصياغة والمصنعية.",
      quickInfo: "معلومات سريعة",
      tipTitle: "ملاحظة",
      tipBody: "اختر العملة المناسبة لك، وسيتم عرض أسعار العيارات مباشرة.",
      disclaimer: "المحتوى المعروض لأغراض معلوماتية فقط وليس نصيحة استثمارية.",
      gram: "جرام",
      kilo: "1 كيلو",
      karat: "عيار",
      errorFetch: "لم يتم جلب سعر الذهب حالياً",
      loading: "جاري التحميل...",
      globalChartTitle: "الرسم البياني التاريخي للذهب بالأونصة",
      globalChartDesc:
        "مخطط زمني لسعر الذهب العالمي (XAU/USD). الأونصة الواحدة ≈ 31.10 جرام.",
      globalChartNote:
        "ملاحظة: هذا الرسم يعرض سعر الذهب العالمي بالدولار، وليس سعر الجرام المحلي بعد التحويل.",
      localChartTitle: "الرسم البياني المحلي الاحترافي",
      localChartDesc:
        "حركة سعر الجرام حسب العيار والعملة المختارة خلال آخر 60 تحديث.",
      last60: "آخر 60 تحديث",
      latestAnalysis: "آخر التحليلات",
      latestAnalysisDesc:
        "اقرأ أحدث المقالات والتحليلات لفهم حركة سوق الذهب والعوامل المؤثرة على الأسعار.",
      viewArticles: "عرض المقالات",
      localGramMovement: "حركة جرام عيار",
      localGramDesc: "الرسم يتحدث تلقائيًا حسب العملة المختارة.",
      last7Table: "أسعار الذهب آخر 7 أيام",
      tableNote: "اختر العيار لعرض الأسعار الفعلية لآخر 7 أيام.",
      dateLabel: "التاريخ",
      priceLabel: "السعر",
      noDataYet:
        "لا توجد بيانات كافية بعد. سيتم بناء الجدول تلقائيًا يومًا بعد يوم.",
      whyGoldMoves: "لماذا يتغير سعر الذهب؟",
      whyGoldMovesDesc:
        "تعرف بسرعة على أهم العوامل التي تحرك السوق وروابط مفيدة لفهم الاتجاه.",
      heroPrimary: "آخر التحليلات",
      heroSecondary: "حاسبة زكاة الذهب",
      cardsTitle: "روابط مفيدة",
    };

    const en = {
      live: "Live update every minute",
      title: "Gold Prices Today",
      subtitle:
        "Track live gold prices, compare gram and bar prices, and read useful analysis to better understand market direction.",
      note: "Info only — approximate prices based on global XAU spot price.",
      lastUpdate: "Last update",
      refreshNow: "Refresh now",
      pricesIn: "Prices in",
      perGram: "Price per 1 gram",
      loadingCurrency: "Loading currency data...",
      barsTitle: "Gold Bar Prices in Jewelry Shops (24K)",
      barsNote:
        "Approximate market prices. May vary by shop and workmanship fees.",
      quickInfo: "Quick info",
      tipTitle: "Note",
      tipBody: "Choose your currency to see karat prices instantly.",
      disclaimer: "Content is for informational purposes only, not investment advice.",
      gram: "gram",
      kilo: "1 kg",
      karat: "Karat",
      errorFetch: "Could not fetch gold price right now",
      loading: "Loading...",
      globalChartTitle: "Historical Gold Chart in Ounces",
      globalChartDesc:
        "A time-based chart for global gold spot price (XAU/USD). 1 ounce ≈ 31.10 grams.",
      globalChartNote:
        "Note: This chart shows global gold price in USD, not the converted local gram price.",
      localChartTitle: "Professional Local Chart",
      localChartDesc:
        "Gram price movement by selected karat and currency across the last 60 updates.",
      last60: "Last 60 updates",
      latestAnalysis: "Latest Analysis",
      latestAnalysisDesc:
        "Read our latest insights to better understand gold market movements and price drivers.",
      viewArticles: "View Articles",
      localGramMovement: "Gram Movement",
      localGramDesc:
        "This chart updates automatically based on the selected currency.",
      last7Table: "Gold Prices - Last 7 Days",
      tableNote:
        "Choose a karat to view real saved daily prices for the last 7 days.",
      dateLabel: "Date",
      priceLabel: "Price",
      noDataYet:
        "Not enough daily data yet. The table will build automatically day by day.",
      whyGoldMoves: "Why does gold move?",
      whyGoldMovesDesc:
        "Quick links to the most important factors that influence gold prices.",
      heroPrimary: "Latest Analysis",
      heroSecondary: "Gold Zakat Calculator",
      cardsTitle: "Useful Links",
    };

    return lang === "ar" ? ar : en;
  }, [lang]);

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
      if (!ounceUSD || Number.isNaN(ounceUSD)) {
        throw new Error(T.errorFetch);
      }

      const gram24USD = ounceUSD / 31.1034768;
      const nextUsdBase = {
        gram24: gram24USD,
        gram22: gram24USD * (22 / 24),
        gram21: gram24USD * (21 / 24),
        gram18: gram24USD * (18 / 24),
      };

      setUsdBase(nextUsdBase);

      setHistory((prev) => {
        const limit = 60;
        return {
          gram24: [...prev.gram24.slice(-limit + 1), gram24USD],
          gram22: [...prev.gram22.slice(-limit + 1), gram24USD * (22 / 24)],
          gram21: [...prev.gram21.slice(-limit + 1), gram24USD * (21 / 24)],
          gram18: [...prev.gram18.slice(-limit + 1), gram24USD * (18 / 24)],
        };
      });

      const today = new Date().toISOString().slice(0, 10);

      setDailyHistory((prev) => {
        const nextItem: DailyHistoryItem = {
          date: today,
          gram24: gram24USD,
          gram22: gram24USD * (22 / 24),
          gram21: gram24USD * (21 / 24),
          gram18: gram24USD * (18 / 24),
        };

        const existingIndex = prev.findIndex((item) => item.date === today);

        let updated: DailyHistoryItem[];

        if (existingIndex >= 0) {
          updated = [...prev];
          updated[existingIndex] = nextItem;
        } else {
          updated = [...prev, nextItem];
        }

        return updated.slice(-7);
      });

      const r = fxData?.rates || {};
      const maybe = (k: CurrencyKey) => {
        const v = Number(r?.[k]);
        return Number.isFinite(v) && v > 0 ? v : null;
      };

      const nextRates: Record<CurrencyKey, number> = {
        USD: 1,
        EUR: maybe("EUR") ?? 0,
        AED: maybe("AED") ?? 0,
        SAR: maybe("SAR") ?? 0,
        QAR: maybe("QAR") ?? 0,
        KWD: maybe("KWD") ?? 0,
        OMR: maybe("OMR") ?? 0,
      };

      setRates(nextRates);
      setUpdatedAt(new Date().toISOString());
    } catch (e: any) {
      setErr(
        e?.message ||
          (lang === "ar" ? "صار خطأ في جلب البيانات" : "Something went wrong")
      );
    }
  }

  useEffect(() => {
    loadPrices();
    const t = setInterval(loadPrices, 60000);
    return () => clearInterval(t);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("gold_history", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem("gold_daily_history", JSON.stringify(dailyHistory));
  }, [dailyHistory]);

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

  const chartData = useMemo(() => {
    const r = rates[active] || 0;
    if (!r) return [];

    if (selectedChartKarat === "24") return history.gram24.map((v) => v * r);
    if (selectedChartKarat === "22") return history.gram22.map((v) => v * r);
    if (selectedChartKarat === "21") return history.gram21.map((v) => v * r);
    return history.gram18.map((v) => v * r);
  }, [history, selectedChartKarat, active, rates]);

  const chartChange = useMemo(() => {
    if (chartData.length < 2) return 0;
    const first = chartData[0];
    const last = chartData[chartData.length - 1];
    if (!first) return 0;
    return ((last - first) / first) * 100;
  }, [chartData]);

  const last7Rows = useMemo(() => {
    const r = rates[active] || 0;
    if (!r) return [];

    return [...dailyHistory]
      .slice(-7)
      .reverse()
      .map((item) => {
        const value =
          selectedChartKarat === "24"
            ? item.gram24 * r
            : selectedChartKarat === "22"
            ? item.gram22 * r
            : selectedChartKarat === "21"
            ? item.gram21 * r
            : item.gram18 * r;

        return {
          date: item.date,
          value,
        };
      });
  }, [dailyHistory, selectedChartKarat, active, rates]);

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-black text-zinc-100"
    >
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute top-40 right-[-120px] h-[420px] w-[420px] rounded-full bg-yellow-200/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 py-10">
        <header className="rounded-3xl border border-amber-300/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,215,0,0.06),0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur">
          <div className="flex flex-col gap-3">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200/15 bg-amber-300/10 px-3 py-1 text-sm text-amber-200">
              <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(255,215,0,0.55)]" />
              {T.live}
            </p>

            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {country
                ? lang === "ar"
                  ? `سعر الذهب اليوم في ${country}`
                  : `Gold Price Today in ${country}`
                : T.title}
              <span className="mr-2 bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent">
                (24 / 22 / 21 / 18)
              </span>
            </h1>

            <p className="max-w-3xl text-sm leading-8 text-zinc-300 md:text-base">
              {T.subtitle}
            </p>

            <p className="text-sm text-zinc-400">{T.note}</p>
          </div>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {(
                ["AED", "USD", "EUR", "SAR", "QAR", "KWD", "OMR"] as CurrencyKey[]
              ).map((k) => {
                const on = k === active;
                const label =
                  lang === "ar" ? CURRENCY[k].labelAr : CURRENCY[k].labelEn;

                return (
                  <button
                    key={k}
                    onClick={() => setActive(k)}
                    className={[
                      "rounded-xl px-4 py-2 text-sm font-medium transition border",
                      on
                        ? "border-amber-200/30 bg-amber-300/15 text-amber-100 shadow-[0_0_0_1px_rgba(255,215,0,0.12)]"
                        : "border-white/10 bg-white/5 text-zinc-200 hover:border-amber-200/20 hover:bg-white/10",
                    ].join(" ")}
                  >
                    {k} — {label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 self-start lg:self-auto">
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

          <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
              <span className="block text-xs text-zinc-400">{T.lastUpdate}</span>
              <span className="font-medium">
                {updatedAt ? new Date(updatedAt).toLocaleString() : "—"}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={loadPrices}
                className="rounded-xl border border-amber-200/20 bg-amber-300/10 px-4 py-3 text-sm font-medium text-amber-100 hover:bg-amber-300/15"
              >
                {T.refreshNow}
              </button>

              <Link
                href="/blog"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-200 hover:bg-white/10"
              >
                {T.heroPrimary}
              </Link>

              <Link
                href="/zakat-gold-calculator"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-200 hover:bg-white/10"
              >
                {T.heroSecondary}
              </Link>
            </div>
          </div>
        </header>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-amber-300">
              {T.whyGoldMoves}
            </h2>
            <p className="mt-2 text-sm text-zinc-400">{T.whyGoldMovesDesc}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/blog/dollar-impact-gold"
              className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-amber-400/40 hover:bg-white/5"
            >
              <h3 className="text-lg font-semibold text-amber-200">
                {lang === "ar"
                  ? "تأثير الدولار على الذهب"
                  : "Dollar Impact on Gold"}
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                {lang === "ar"
                  ? "افهم العلاقة بين قوة الدولار الأمريكي وحركة أسعار الذهب."
                  : "Understand how US dollar strength affects gold prices."}
              </p>
            </Link>

            <Link
              href="/blog/gold-inflation"
              className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-amber-400/40 hover:bg-white/5"
            >
              <h3 className="text-lg font-semibold text-amber-200">
                {lang === "ar"
                  ? "الذهب والتضخم"
                  : "Gold and Inflation"}
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                {lang === "ar"
                  ? "متى يكون الذهب خيارًا مناسبًا في فترات ارتفاع الأسعار؟"
                  : "When can gold be useful during inflationary periods?"}
              </p>
            </Link>

            <Link
              href="/blog/gold-market-2026"
              className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-amber-400/40 hover:bg-white/5"
            >
              <h3 className="text-lg font-semibold text-amber-200">
                {lang === "ar"
                  ? "توقعات الذهب 2026"
                  : "Gold Forecast 2026"}
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                {lang === "ar"
                  ? "نظرة مبسطة على أهم العوامل التي قد تؤثر على الذهب في 2026."
                  : "A simple outlook on the factors that may affect gold in 2026."}
              </p>
            </Link>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold">
              {T.pricesIn}{" "}
              <span className="text-amber-200">
                {active} ({CURRENCY[active].symbol})
              </span>
            </h2>
            <p className="mt-1 text-sm text-zinc-400">{T.perGram}</p>

            {err && (
              <div className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
                {err}
              </div>
            )}

            {!display && !err && (
              <div className="mt-6 space-y-3">
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
              </div>
            )}

            {!display && !err && rates[active] === 0 && (
              <div className="mt-4 rounded-2xl border border-amber-200/15 bg-amber-300/10 p-4 text-sm text-amber-100">
                {T.loadingCurrency}
              </div>
            )}

            {display && (
              <div className="mt-6 grid gap-3">
                <PriceRow
                  k="24"
                  v={display.gram24}
                  sym={CURRENCY[active].symbol}
                  t={T}
                />
                <PriceRow
                  k="22"
                  v={display.gram22}
                  sym={CURRENCY[active].symbol}
                  t={T}
                />
                <PriceRow
                  k="21"
                  v={display.gram21}
                  sym={CURRENCY[active].symbol}
                  t={T}
                />
                <PriceRow
                  k="18"
                  v={display.gram18}
                  sym={CURRENCY[active].symbol}
                  t={T}
                />
              </div>
            )}

            {display && (
              <div className="mt-10 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-6">
                <h3 className="mb-4 text-lg font-semibold text-amber-300">
                  {T.barsTitle}
                </h3>

                <p className="mb-4 text-xs text-zinc-400">{T.barsNote}</p>

                <div className="mt-6 grid gap-3">
                  {BAR_WEIGHTS.map((g) => (
                    <div
                      key={g}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
                    >
                      <span>{g === 1000 ? T.kilo : `${g} ${T.gram}`}</span>

                      <span className="font-semibold text-amber-100">
                        {fmt(
                          priceForWeight(display.gram24 * (1 + shopMargin), g)
                        )}{" "}
                        {CURRENCY[active].symbol}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold">{T.quickInfo}</h2>

            <div className="mt-5 grid gap-3">
              <InfoCard
                title={lang === "ar" ? "عيار 24" : "24K"}
                desc={
                  lang === "ar"
                    ? "أنقى ذهب (تقريباً 99.9%)."
                    : "Purest gold (~99.9%)."
                }
              />
              <InfoCard
                title={lang === "ar" ? "عيار 22" : "22K"}
                desc={
                  lang === "ar"
                    ? "شائع في الخليج للمجوهرات."
                    : "Common in the Gulf for jewelry."
                }
              />
              <InfoCard
                title={lang === "ar" ? "عيار 21" : "21K"}
                desc={
                  lang === "ar"
                    ? "الأكثر تداولاً في كثير من الأسواق."
                    : "Most traded in many markets."
                }
              />
              <InfoCard
                title={lang === "ar" ? "عيار 18" : "18K"}
                desc={
                  lang === "ar"
                    ? "مناسب للتصاميم الحديثة ومقاوم للخدش أكثر."
                    : "Good for modern designs; more scratch-resistant."
                }
              />
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200/15 bg-amber-300/10 p-4 text-sm text-amber-100">
              <p className="font-medium">{T.tipTitle}</p>
              <p className="mt-1 text-amber-100/90">{T.tipBody}</p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <h3 className="mb-3 text-base font-semibold text-white">
                {T.cardsTitle}
              </h3>
              <div className="grid gap-3">
                <Link
                  href="/zakat-gold-calculator"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:bg-white/10"
                >
                  {lang === "ar" ? "حاسبة زكاة الذهب" : "Gold Zakat Calculator"}
                </Link>
                <Link
                  href="/about"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:bg-white/10"
                >
                  {lang === "ar" ? "من نحن" : "About Us"}
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:bg-white/10"
                >
                  {lang === "ar" ? "اتصل بنا" : "Contact Us"}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 grid gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="mb-4 text-xl font-semibold text-amber-300">
              {T.last7Table}
            </h3>

            <p className="mb-4 text-sm text-zinc-400">{T.tableNote}</p>

            <div className="mb-4 flex gap-2">
              {(["24", "22", "21", "18"] as KaratKey[]).map((k) => (
                <button
                  key={k}
                  onClick={() => setSelectedChartKarat(k)}
                  className={`rounded border px-3 py-1 ${
                    selectedChartKarat === k
                      ? "border-amber-400 text-amber-300"
                      : "border-white/20 text-zinc-400"
                  }`}
                >
                  {lang === "ar" ? `عيار ${k}` : `${k}K`}
                </button>
              ))}
            </div>

            <table className="w-full text-right text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-400">
                  <th className="py-2">{T.dateLabel}</th>
                  <th className="py-2">{T.priceLabel}</th>
                </tr>
              </thead>

              <tbody>
                {last7Rows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-2 text-white">{row.date}</td>
                    <td className="py-2 text-white">
                      {fmt(row.value)} {CURRENCY[active].symbol}
                    </td>
                  </tr>
                ))}

                {last7Rows.length === 0 && (
                  <tr>
                    <td className="py-3 text-zinc-400" colSpan={2}>
                      {T.noDataYet}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {chartData.length > 1 && (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-amber-300">
                    {lang === "ar"
                      ? `${T.localGramMovement} ${selectedChartKarat}`
                      : `${selectedChartKarat}K ${T.localGramMovement}`}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    {T.localGramDesc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(["24", "22", "21", "18"] as KaratKey[]).map((k) => (
                    <button
                      key={k}
                      onClick={() => setSelectedChartKarat(k)}
                      className={`rounded-xl border px-3 py-2 text-sm ${
                        selectedChartKarat === k
                          ? "border-amber-300 bg-amber-300/20 text-amber-200"
                          : "border-white/10 text-zinc-300 hover:bg-white/10"
                      }`}
                    >
                      {lang === "ar" ? `عيار ${k}` : `${k}K`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm text-zinc-400">{T.last60}</div>

                <div
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    chartChange >= 0
                      ? "bg-emerald-500/15 text-emerald-300"
                      : "bg-red-500/15 text-red-300"
                  }`}
                >
                  {chartChange >= 0 ? "▲" : "▼"} {chartChange.toFixed(2)}%
                </div>
              </div>

              <LineChart
                data={chartData}
                symbol={CURRENCY[active].symbol}
                positive={chartChange >= 0}
              />
            </div>
          )}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-amber-300">
              {T.globalChartTitle}
            </h3>
            <p className="mt-2 text-sm text-zinc-400">{T.globalChartDesc}</p>
            <p className="mt-1 text-xs text-zinc-500">
              {lang === "ar"
                ? "الأونصة الواحدة ≈ 31.1035 جرام"
                : "1 ounce ≈ 31.1035 grams"}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Gold Historical Chart"
              src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_gold_chart&symbol=OANDA%3AXAUUSD&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=0&toolbarbg=0F172A&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&hidevolume=1&allow_symbol_change=0&calendar=0"
              width="100%"
              height="520"
              frameBorder="0"
              allowTransparency={true}
            />
          </div>

          <p className="mt-3 text-xs text-zinc-500">{T.globalChartNote}</p>
        </div>

        <div className="mt-12 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-6 backdrop-blur">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-amber-300">
                {T.latestAnalysis}
              </h3>

              <p className="mt-2 max-w-xl text-sm text-zinc-400">
                {T.latestAnalysisDesc}
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-xl bg-amber-400/20 px-5 py-3 text-sm font-medium text-amber-200 transition hover:bg-amber-400/30"
            >
              {T.viewArticles}
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/zakat-gold-ruling"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-amber-400/40 hover:bg-white/10"
            >
              <h4 className="text-lg font-semibold text-amber-200">
                {lang === "ar"
                  ? "حكم زكاة الذهب في الإسلام"
                  : "The Ruling on Gold Zakat in Islam"}
              </h4>
              <p className="mt-2 text-sm text-zinc-400">
                {lang === "ar"
                  ? "شرح مبسط لحكم زكاة الذهب، النصاب، مقدار الزكاة، مع رابط مباشر إلى الحاسبة."
                  : "A simple guide to gold zakat, nisab, the due amount, and a direct link to the calculator."}
              </p>
            </Link>

            <Link
              href="/blog/dollar-impact-gold"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-amber-400/40 hover:bg-white/10"
            >
              <h4 className="text-lg font-semibold text-amber-200">
                {lang === "ar"
                  ? "كيف يؤثر الدولار الأمريكي على سعر الذهب؟"
                  : "How the US Dollar Affects Gold Prices"}
              </h4>
              <p className="mt-2 text-sm text-zinc-400">
                {lang === "ar"
                  ? "تعرف على العلاقة بين قوة الدولار الأمريكي وحركة أسعار الذهب عالميًا."
                  : "Learn how dollar strength influences global gold price movements."}
              </p>
            </Link>

            <Link
              href="/blog/gold-market-2026"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-amber-400/40 hover:bg-white/10"
            >
              <h4 className="text-lg font-semibold text-amber-200">
                {lang === "ar"
                  ? "توقعات أسعار الذهب 2026"
                  : "Gold Price Forecast 2026"}
              </h4>
              <p className="mt-2 text-sm text-zinc-400">
                {lang === "ar"
                  ? "تحليل لأهم العوامل الاقتصادية والسياسية التي قد تؤثر على الذهب في 2026."
                  : "An analysis of the main economic and geopolitical factors that may affect gold in 2026."}
              </p>
            </Link>

            <Link
              href="/blog/how-gold-price-is-determined"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-amber-400/40 hover:bg-white/10"
            >
              <h4 className="text-lg font-semibold text-amber-200">
                {lang === "ar"
                  ? "كيف يتم تحديد سعر الذهب عالميًا؟"
                  : "How Is the Global Gold Price Determined?"}
              </h4>
              <p className="mt-2 text-sm text-zinc-400">
                {lang === "ar"
                  ? "تعرف على طريقة تسعير الذهب عالميًا ودور الأونصة والدولار والعرض والطلب."
                  : "Learn how global gold prices are determined and the role of the ounce, dollar, and supply-demand."}
              </p>
            </Link>

            <Link
              href="/blog/gold-inflation"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-amber-400/40 hover:bg-white/10"
            >
              <h4 className="text-lg font-semibold text-amber-200">
                {lang === "ar"
                  ? "هل الذهب استثمار آمن في أوقات التضخم؟"
                  : "Is Gold a Safe Investment During Inflation?"}
              </h4>
              <p className="mt-2 text-sm text-zinc-400">
                {lang === "ar"
                  ? "شرح العلاقة بين الذهب والتضخم ومتى يكون الذهب خيارًا مناسبًا."
                  : "A simple explanation of the relationship between gold and inflation and when gold may be a suitable option."}
              </p>
            </Link>

            <Link
              href="/blog/gold-oil-dollar-relation"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-amber-400/40 hover:bg-white/10"
            >
              <h4 className="text-lg font-semibold text-amber-200">
                {lang === "ar"
                  ? "كيف تعرف أن الذهب سيرتفع؟ العلاقة بين الذهب والنفط والدولار"
                  : "How Can You Tell if Gold May Rise? The Relationship Between Gold, Oil, and the Dollar"}
              </h4>
              <p className="mt-2 text-sm text-zinc-400">
                {lang === "ar"
                  ? "مقال يشرح العلاقة بين الذهب والنفط والدولار وكيف تساعد هذه العوامل على فهم اتجاه الذهب."
                  : "An article explaining the relationship between gold, oil, and the dollar and how these factors help you understand gold direction."}
              </p>
            </Link>

            <Link
              href="/zakat-gold-calculator"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-amber-400/40 hover:bg-white/10"
            >
              <h4 className="text-lg font-semibold text-amber-200">
                {lang === "ar"
                  ? "حاسبة زكاة الذهب"
                  : "Gold Zakat Calculator"}
              </h4>
              <p className="mt-2 text-sm text-zinc-400">
                {lang === "ar"
                  ? "احسب زكاة الذهب بسهولة حسب الوزن والعيار وسعر الذهب الحالي."
                  : "Calculate gold zakat easily based on weight, karat, and current gold price."}
              </p>
            </Link>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-center text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} — Gold Live Prices</p>
          <p>{T.disclaimer}</p>
        </footer>
      </div>
    </main>
  );
}

function PriceRow({
  k,
  v,
  sym,
  t,
}: {
  k: string;
  v: number;
  sym: string;
  t: { karat: string; gram: string };
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-200 shadow-[0_0_0_1px_rgba(255,215,0,0.08)]">
          {k}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">
            {t.karat} {k}
          </span>
          <span className="text-xs text-zinc-400">{t.gram}</span>
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

function SkeletonRow() {
  return (
    <div className="animate-pulse rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="h-10 w-32 rounded-xl bg-white/10" />
        <div className="h-10 w-24 rounded-xl bg-white/10" />
      </div>
    </div>
  );
}

function LineChart({
  data,
  symbol,
  positive,
}: {
  data: number[];
  symbol: string;
  positive: boolean;
}) {
  const width = 900;
  const height = 280;
  const padding = 24;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data
    .map((value, index) => {
      const x =
        padding +
        (index / Math.max(data.length - 1, 1)) * (width - padding * 2);
      const y =
        height - padding - ((value - min) / range) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");

  const lastValue = data[data.length - 1] ?? 0;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-4">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-72 w-full">
        {[0, 1, 2, 3].map((i) => {
          const y = padding + (i / 3) * (height - padding * 2);
          return (
            <line
              key={i}
              x1={padding}
              x2={width - padding}
              y1={y}
              y2={y}
              stroke="rgba(255,255,255,0.08)"
              strokeDasharray="4 6"
            />
          );
        })}

        <polyline
          fill="none"
          stroke={positive ? "#34d399" : "#f87171"}
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          points={points}
        />

        <circle
          cx={
            padding +
            ((data.length - 1) / Math.max(data.length - 1, 1)) *
              (width - padding * 2)
          }
          cy={
            height -
            padding -
            ((lastValue - min) / range) * (height - padding * 2)
          }
          r="5"
          fill={positive ? "#34d399" : "#f87171"}
        />
      </svg>

      <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
        <span>1</span>
        <span>15</span>
        <span>30</span>
        <span>45</span>
        <span>60</span>
      </div>

      <div className="mt-4 text-right text-sm text-zinc-300">
        {data.length ? `${fmt(lastValue)} ${symbol}` : "—"}
      </div>
    </div>
  );
}
