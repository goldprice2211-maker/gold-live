"use client";

import { useState } from "react";

export default function GoldInflationPage() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const t =
    lang === "ar"
      ? {
          back: "← الرجوع إلى المدونة",
          switch: "English",
          title: "هل الذهب استثمار آمن في أوقات التضخم؟",
          intro:
            "يعتبر الذهب من أكثر الأصول التي يلجأ إليها المستثمرون عند ارتفاع معدلات التضخم. لكن هل هو فعلًا استثمار آمن في كل الظروف؟ في هذا المقال نستعرض العلاقة بين الذهب والتضخم، ومتى يكون خيارًا مناسبًا.",
          h1: "1. ما هو التضخم؟",
          p1:
            "التضخم هو ارتفاع عام ومستمر في أسعار السلع والخدمات، مما يؤدي إلى انخفاض القوة الشرائية للعملة. عندما يرتفع التضخم، تصبح النقود أقل قدرة على شراء نفس الكمية من السلع.",
          h2: "2. لماذا يرتفع الذهب مع التضخم؟",
          p2:
            "يُنظر إلى الذهب كوسيلة لحفظ القيمة. فعندما تفقد العملات جزءًا من قوتها الشرائية بسبب التضخم، يتجه بعض المستثمرين إلى الذهب لحماية أموالهم.",
          h3: "3. هل الذهب يرتفع دائمًا مع التضخم؟",
          p3:
            "ليس بالضرورة. في بعض الفترات قد يرتفع التضخم دون أن يصعد الذهب بقوة، خاصة إذا كانت أسعار الفائدة مرتفعة أو الدولار قوي. لذلك العلاقة ليست ميكانيكية بالكامل.",
          h4: "4. دور أسعار الفائدة",
          p4:
            "عندما ترفع البنوك المركزية أسعار الفائدة لمحاربة التضخم، قد يقل الإقبال على الذهب لأن الأصول ذات العائد تصبح أكثر جاذبية. لذلك يجب متابعة السياسة النقدية بجانب التضخم.",
          h5: "5. متى يكون الذهب خيارًا مناسبًا؟",
          p5:
            "قد يكون الذهب خيارًا جيدًا عندما يكون التضخم مرتفعًا وأسعار الفائدة منخفضة أو مستقرة، أو في أوقات عدم اليقين الاقتصادي والسياسي.",
          h6: "الخلاصة",
          p6:
            "الذهب يمكن أن يكون أداة تحوط ضد التضخم، لكنه ليس ضمانًا مطلقًا للربح. فهم العوامل الاقتصادية المحيطة يساعدك على اتخاذ قرار أكثر وعيًا.",
          note:
            "تنويه: هذا المقال لأغراض معلوماتية فقط ولا يُعد نصيحة استثمارية أو مالية.",
        }
      : {
          back: "← Back to Blog",
          switch: "العربية",
          title: "Is Gold a Safe Investment During Inflation?",
          intro:
            "Gold is often considered a go-to asset when inflation rises. But is it always a safe investment? In this article, we explore the relationship between gold and inflation and when it may be a suitable option.",
          h1: "1. What Is Inflation?",
          p1:
            "Inflation is a general and sustained increase in prices, which reduces the purchasing power of money. When inflation rises, your currency buys less than before.",
          h2: "2. Why Does Gold Rise During Inflation?",
          p2:
            "Gold is widely seen as a store of value. When currencies lose purchasing power due to inflation, some investors move into gold to preserve wealth.",
          h3: "3. Does Gold Always Rise With Inflation?",
          p3:
            "Not necessarily. There have been periods when inflation was high but gold did not rise significantly, especially if interest rates were also high or the US dollar was strong.",
          h4: "4. The Role of Interest Rates",
          p4:
            "When central banks raise interest rates to fight inflation, yield-producing assets may become more attractive than gold. That’s why monetary policy must be considered alongside inflation.",
          h5: "5. When Can Gold Be a Good Option?",
          p5:
            "Gold may be more attractive when inflation is high and interest rates are low or stable, or during periods of economic and geopolitical uncertainty.",
          h6: "Conclusion",
          p6:
            "Gold can act as an inflation hedge, but it is not a guaranteed profit tool. Understanding the broader economic context helps you make more informed decisions.",
          note:
            "Disclaimer: This article is for informational purposes only and does not constitute financial or investment advice.",
        };

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
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-amber-300">
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
          </section>

          <div className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-zinc-300">
            {t.note}
          </div>
        </article>
      </div>
    </main>
  );
}
