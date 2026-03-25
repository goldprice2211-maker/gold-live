"use client";

import { useState } from "react";

type Lang = "ar" | "en";

type Article = {
  slug: string;
  title: string;
  desc: string;
  date: string;
  readTime: string;
};

export default function BlogPage() {
  const [lang, setLang] = useState<Lang>("ar");

  const content: Record<
    Lang,
    {
      title: string;
      desc: string;
      back: string;
      switch: string;
      read: string;
      dateLabel: string;
      articles: Article[];
    }
  > = {
    ar: {
      title: "تحليلات الذهب",
      desc: "مقالات وتحليلات تساعدك على فهم سوق الذهب والعوامل المؤثرة على الأسعار، مع شروحات عملية مبسطة تساعدك على اتخاذ قرارات أفضل.",
      back: "الرجوع للرئيسية",
      switch: "English",
      read: "اقرأ المقال ←",
      dateLabel: "مدة القراءة",
      articles: [
        {
          slug: "best-time-to-buy-gold",
          title: "5 إشارات تساعدك تعرف هل الوقت مناسب لشراء الذهب الآن",
          desc: "دليل عملي طويل ومفيد يشرح أهم الإشارات التي تساعدك على اتخاذ قرار شراء الذهب بشكل أذكى، مثل حركة السعر، الدولار، الفائدة، التضخم، والأخبار العالمية.",
          date: "2026-03-25",
          readTime: "6 دقائق",
        },
        {
          slug: "gold-oil-dollar-relation",
          title: "كيف تعرف أن الذهب سيرتفع؟ العلاقة بين الذهب والنفط والدولار",
          desc: "مقال يشرح العلاقة بين الذهب والنفط والدولار وكيف تساعد هذه العوامل على فهم اتجاه الذهب.",
          date: "2026-03-19",
          readTime: "4 دقائق",
        },
        {
          slug: "dollar-impact-gold",
          title: "كيف يؤثر الدولار الأمريكي على سعر الذهب؟",
          desc: "تعرف على العلاقة بين الدولار الأمريكي وأسعار الذهب عالميًا، وكيف تؤثر الفائدة الأمريكية والتضخم على حركة الذهب في الأسواق العالمية.",
          date: "2026-03-12",
          readTime: "4 دقائق",
        },
        {
          slug: "zakat-gold-ruling",
          title: "حكم زكاة الذهب في الإسلام",
          desc: "تعرف على حكم زكاة الذهب، وما هو النصاب، ومتى تجب الزكاة، وكيف يمكن حسابها بسهولة.",
          date: "2026-03-11",
          readTime: "4 دقائق",
        },
        {
          slug: "gold-market-2026",
          title: "العوامل التي تؤثر على أسعار الذهب عالميًا وتوقعات 2026",
          desc: "تعرف على أهم العوامل الاقتصادية والسياسية التي تحرك أسعار الذهب عالميًا، واستعرض أبرز السيناريوهات المحتملة لحركة الذهب في عام 2026.",
          date: "2026-03-10",
          readTime: "4 دقائق",
        },
        {
          slug: "how-gold-price-is-determined",
          title: "كيف يتم تحديد سعر الذهب عالميًا؟",
          desc: "تعرف على الطريقة التي يتم بها تحديد سعر الذهب يوميًا عالميًا، وكيف يؤثر الدولار، العرض والطلب، والتضخم على حركة الأسعار.",
          date: "2026-03-10",
          readTime: "3 دقائق",
        },
        {
          slug: "gold-inflation",
          title: "هل الذهب استثمار آمن في أوقات التضخم؟",
          desc: "تحليل مبسط ومفيد للعلاقة بين الذهب والتضخم، ومتى يكون الذهب خيارًا مناسبًا لحفظ القيمة، وكيف تؤثر الفائدة والدولار على اتجاهه.",
          date: "2026-03-10",
          readTime: "5 دقائق",
        },
      ],
    },
    en: {
      title: "Gold Market Insights",
      desc: "Articles and analysis to help you understand the gold market, price movements, and the key factors that influence buying decisions.",
      back: "Back to Home",
      switch: "العربية",
      read: "Read Article →",
      dateLabel: "Read time",
      articles: [
        {
          slug: "best-time-to-buy-gold",
          title: "5 Signs to Help You Know if Now Is a Good Time to Buy Gold",
          desc: "A practical long-form guide explaining the key signals that may help you decide whether now is a good time to buy gold, including price action, the dollar, rates, inflation, and global news.",
          date: "2026-03-25",
          readTime: "6 min",
        },
        {
          slug: "gold-oil-dollar-relation",
          title:
            "How Can You Tell if Gold May Rise? The Relationship Between Gold, Oil, and the Dollar",
          desc: "An article explaining the relationship between gold, oil, and the dollar and how these factors help you understand gold direction.",
          date: "2026-03-19",
          readTime: "4 min",
        },
        {
          slug: "dollar-impact-gold",
          title: "How the US Dollar Affects Gold Prices",
          desc: "Learn how the US dollar impacts global gold prices and why interest rates and inflation play a major role in gold market movements.",
          date: "2026-03-12",
          readTime: "4 min",
        },
        {
          slug: "zakat-gold-ruling",
          title: "The Ruling on Gold Zakat in Islam",
          desc: "Learn the ruling on gold zakat, the nisab, when zakat becomes due, and how to calculate it easily.",
          date: "2026-03-11",
          readTime: "4 min",
        },
        {
          slug: "gold-market-2026",
          title: "Key Factors Affecting Global Gold Prices & 2026 Outlook",
          desc: "Explore the major economic and geopolitical factors influencing gold prices worldwide and possible scenarios for 2026.",
          date: "2026-03-10",
          readTime: "4 min",
        },
        {
          slug: "how-gold-price-is-determined",
          title: "How Is the Global Gold Price Determined?",
          desc: "Learn how the global gold price is determined and how the dollar, supply and demand, and inflation affect market movements.",
          date: "2026-03-10",
          readTime: "3 min",
        },
        {
          slug: "gold-inflation",
          title: "Is Gold a Safe Investment During Inflation?",
          desc: "A useful and clearer analysis of the relationship between gold and inflation, and when gold may help preserve value.",
          date: "2026-03-10",
          readTime: "5 min",
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-12 text-white"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-amber-300 transition hover:bg-white/10"
          >
            ← {t.back}
          </a>

          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="rounded-xl border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm text-amber-200 transition hover:bg-amber-300/20"
          >
            {t.switch}
          </button>
        </div>

        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h1 className="mb-4 text-3xl font-bold text-amber-300 md:text-4xl">
            {t.title}
          </h1>
          <p className="max-w-3xl text-zinc-400 md:text-base">{t.desc}</p>
        </div>

        <div className="grid gap-6">
          {t.articles.map((article) => (
            <a
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-amber-400/40 hover:bg-white/10"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                  {article.date}
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                  {t.dateLabel}: {article.readTime}
                </span>
              </div>

              <h2 className="mb-3 text-2xl font-semibold text-amber-300 transition group-hover:text-amber-200">
                {article.title}
              </h2>

              <p className="leading-7 text-zinc-300">{article.desc}</p>

              <div className="mt-5 text-sm font-medium text-amber-200">
                {t.read}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
