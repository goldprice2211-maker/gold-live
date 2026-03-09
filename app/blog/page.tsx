"use client";

import { useState } from "react";

export default function BlogPage() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const content = {
    ar: {
      title: "تحليلات الذهب",
      desc: "مقالات وتحليلات تساعدك على فهم سوق الذهب والعوامل المؤثرة على الأسعار.",
      articleTitle:
        "العوامل التي تؤثر على أسعار الذهب عالميًا وتوقعات 2026",
      articleDesc:
        "تعرف على أهم العوامل الاقتصادية والسياسية التي تحرك أسعار الذهب عالميًا، واستعرض أبرز السيناريوهات المحتملة لحركة الذهب في عام 2026.",
      article2Title: "كيف يتم تحديد سعر الذهب عالميًا؟",
      article2Desc:
        "تعرف على الطريقة التي يتم بها تحديد سعر الذهب يوميًا عالميًا، وكيف يؤثر الدولار، العرض والطلب، والتضخم على حركة الأسعار.",
      article3Title: "هل الذهب استثمار آمن في أوقات التضخم؟",
      article3Desc:
        "تحليل مبسط للعلاقة بين الذهب والتضخم، ومتى يكون الذهب خيارًا مناسبًا لحفظ القيمة.",
      article4Title: "حكم زكاة الذهب في الإسلام",
article4Desc:
  "تعرف على حكم زكاة الذهب، وما هو النصاب، ومتى تجب الزكاة، وكيف يمكن حسابها بسهولة.",
      read: "اقرأ المقال ←",
      switch: "English",
    },
    en: {
      title: "Gold Market Insights",
      desc: "Articles and analysis to help you understand the gold market and price movements.",
      articleTitle:
        "Key Factors Affecting Global Gold Prices & 2026 Outlook",
      articleDesc:
        "Explore the major economic and geopolitical factors influencing gold prices worldwide and possible scenarios for 2026.",
      article2Title: "How Is the Global Gold Price Determined?",
      article2Desc:
        "Learn how the global gold price is determined and how the dollar, supply and demand, and inflation affect market movements.",
      article3Title: "Is Gold a Safe Investment During Inflation?",
      article3Desc:
        "A simple analysis of the relationship between gold and inflation and when gold may help preserve value.",
      article4Title: "The Ruling on Gold Zakat in Islam",
article4Desc:
  "Learn the ruling on gold zakat, the nisab, when zakat becomes due, and how to calculate it easily.",
      read: "Read Article →",
      switch: "العربية",
    },
  };

  const t = content[lang];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="text-sm text-amber-400 hover:underline"
          >
            {t.switch}
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
        <p className="text-zinc-400 mb-8">{t.desc}</p>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-amber-400/40 transition">
            <a href="/blog/gold-market-2026" className="block">
              <h2 className="text-2xl font-semibold text-amber-300 mb-3">
                {t.articleTitle}
              </h2>
              <p className="text-zinc-300 leading-7">
                {t.articleDesc}
              </p>
              <p className="mt-4 text-sm text-amber-200">{t.read}</p>
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-amber-400/40 transition">
  <a href="/blog/zakat-gold-ruling" className="block">
    <h2 className="text-2xl font-semibold text-amber-300 mb-3">
      {t.article4Title}
    </h2>
    <p className="text-zinc-300 leading-7">
      {t.article4Desc}
    </p>
    <p className="mt-4 text-sm text-amber-200">{t.read}</p>
  </a>
</div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-amber-400/40 transition">
            <a href="/blog/how-gold-price-is-determined" className="block">
              <h2 className="text-2xl font-semibold text-amber-300 mb-3">
                {t.article2Title}
              </h2>
              <p className="text-zinc-300 leading-7">
                {t.article2Desc}
              </p>
              <p className="mt-4 text-sm text-amber-200">{t.read}</p>
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-amber-400/40 transition">
            <a href="/blog/is-gold-a-safe-investment-during-inflation" className="block">
              <h2 className="text-2xl font-semibold text-amber-300 mb-3">
                {t.article3Title}
              </h2>
              <p className="text-zinc-300 leading-7">
                {t.article3Desc}
              </p>
              <p className="mt-4 text-sm text-amber-200">{t.read}</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
