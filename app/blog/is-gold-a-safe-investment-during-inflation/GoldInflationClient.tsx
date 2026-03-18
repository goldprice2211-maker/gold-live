"use client";

import { useState } from "react";

export default function GoldInflationClient() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const t =
    lang === "ar"
      ? {
          back: "← الرجوع إلى المدونة",
          switch: "English",
          title: "هل الذهب استثمار آمن في أوقات التضخم؟",
          intro:
            "يعتبر الذهب من أكثر الأصول التي يلجأ إليها المستثمرون عند ارتفاع معدلات التضخم...",
          h1: "1. ما هو التضخم؟",
          p1:
            "التضخم هو ارتفاع عام ومستمر في أسعار السلع والخدمات...",
          h2: "2. لماذا يرتفع الذهب مع التضخم؟",
          p2:
            "يُنظر إلى الذهب كوسيلة لحفظ القيمة...",
          h3: "3. هل الذهب يرتفع دائمًا مع التضخم؟",
          p3:
            "ليس بالضرورة...",
          h4: "4. دور أسعار الفائدة",
          p4:
            "عندما ترفع البنوك المركزية أسعار الفائدة...",
          h5: "5. متى يكون الذهب خيارًا مناسبًا؟",
          p5:
            "قد يكون الذهب خيارًا جيدًا...",
          h6: "الخلاصة",
          p6:
            "الذهب يمكن أن يكون أداة تحوط ضد التضخم...",
          note:
            "تنويه: هذا المقال لأغراض معلوماتية فقط...",
        }
      : {
          back: "← Back to Blog",
          switch: "العربية",
          title: "Is Gold a Safe Investment During Inflation?",
          intro:
            "Gold is often considered a go-to asset...",
          h1: "1. What Is Inflation?",
          p1:
            "Inflation is a general and sustained increase in prices...",
          h2: "2. Why Does Gold Rise During Inflation?",
          p2:
            "Gold is widely seen as a store of value...",
          h3: "3. Does Gold Always Rise With Inflation?",
          p3:
            "Not necessarily...",
          h4: "4. The Role of Interest Rates",
          p4:
            "When central banks raise interest rates...",
          h5: "5. When Can Gold Be a Good Option?",
          p5:
            "Gold may be more attractive...",
          h6: "Conclusion",
          p6:
            "Gold can act as an inflation hedge...",
          note:
            "Disclaimer: This article is for informational purposes only.",
        };

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
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
          <h1 className="mb-6 text-3xl font-bold text-amber-300 md:text-4xl">
            {t.title}
          </h1>

          <p className="mb-8 leading-8 text-zinc-300">{t.intro}</p>

          <section className="space-y-8 leading-8 text-zinc-200">
            <div>
              <h2 className="mb-3 text-2xl font-semibold">{t.h1}</h2>
              <p>{t.p1}</p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">{t.h2}</h2>
              <p>{t.p2}</p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">{t.h3}</h2>
              <p>{t.p3}</p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">{t.h4}</h2>
              <p>{t.p4}</p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">{t.h5}</h2>
              <p>{t.p5}</p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">{t.h6}</h2>
              <p>{t.p6}</p>
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
