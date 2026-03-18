"use client";

import { useState } from "react";

export default function GoldMarket2026Client() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const t = {
    ar: {
      back: "← الرجوع إلى المدونة",
      title: "العوامل التي تؤثر على أسعار الذهب عالميًا وتوقعات 2026",
      intro:
        "يُعد الذهب من أهم الأصول التي يتابعها المستثمرون والأفراد حول العالم...",
      h1: "1. أسعار الفائدة الأمريكية",
      p1:
        "عندما ترتفع أسعار الفائدة، تصبح الأصول ذات العائد مثل السندات والدولار أكثر جاذبية...",
      h2: "2. التضخم العالمي",
      p2:
        "يرى كثير من المستثمرين أن الذهب وسيلة لحفظ القيمة في أوقات التضخم...",
      h3: "3. قوة الدولار الأمريكي",
      p3:
        "عادة ما توجد علاقة عكسية بين الدولار والذهب...",
      h4: "4. الأزمات الجيوسياسية",
      p4:
        "الحروب والتوترات السياسية والأزمات الإقليمية تدفع الأسواق إلى البحث عن الأمان...",
      h5: "5. مشتريات البنوك المركزية",
      p5:
        "في السنوات الأخيرة، زادت بعض البنوك المركزية من مشترياتها للذهب...",
      h6: "6. توقعات الذهب في 2026",
      p6:
        "لا يمكن الجزم بمسار الذهب في 2026، لكن يمكن تصور ثلاثة سيناريوهات...",
      h7: "الخلاصة",
      p7:
        "يتحرك الذهب نتيجة مزيج من العوامل وليس بسبب سبب واحد فقط...",
      note:
        "تنويه: هذا المقال لأغراض معلوماتية فقط ولا يُعد نصيحة استثمارية.",
      switch: "English",
    },
    en: {
      back: "← Back to Blog",
      title: "Key Factors Affecting Global Gold Prices & 2026 Outlook",
      intro:
        "Gold remains one of the most closely watched assets...",
      h1: "1. US Interest Rates",
      p1:
        "When interest rates rise, yield-generating assets...",
      h2: "2. Global Inflation",
      p2:
        "Many investors view gold as a store of value...",
      h3: "3. US Dollar Strength",
      p3:
        "Gold often has an inverse relationship with the US dollar...",
      h4: "4. Geopolitical Tensions",
      p4:
        "Wars, political tensions, and regional crises...",
      h5: "5. Central Bank Buying",
      p5:
        "In recent years, some central banks have increased...",
      h6: "6. Gold Outlook for 2026",
      p6:
        "No one can predict gold prices with certainty...",
      h7: "Conclusion",
      p7:
        "Gold is driven by a mix of forces...",
      note:
        "Disclaimer: This article is for informational purposes only.",
      switch: "العربية",
    },
  }[lang];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <a href="/blog" className="text-sm text-amber-400 hover:underline">
            {t.back}
          </a>

          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="text-sm text-amber-400 hover:underline"
          >
            {t.switch}
          </button>
        </div>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-amber-300">
            {t.title}
          </h1>

          <p className="text-zinc-300 leading-8 mb-8">{t.intro}</p>

          <section className="space-y-8 text-zinc-200 leading-8">
            <div>
              <h2 className="text-2xl font-semibold mb-3">{t.h1}</h2>
              <p>{t.p1}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">{t.h2}</h2>
              <p>{t.p2}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">{t.h3}</h2>
              <p>{t.p3}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">{t.h4}</h2>
              <p>{t.p4}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">{t.h5}</h2>
              <p>{t.p5}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">{t.h6}</h2>
              <p>{t.p6}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">{t.h7}</h2>
              <p>{t.p7}</p>
            </div>
          </section>

          <div className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-zinc-300">
            {t.note}
          </div>
        </article>
      </div>
    </main>
  );
}
