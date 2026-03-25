"use client";

import { useState } from "react";

export default function BestTimeToBuyGoldClient() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const t =
    lang === "ar"
      ? {
          back: "الرجوع إلى المدونة",
          switch: "English",
          title: "5 إشارات تساعدك تعرف هل الوقت مناسب لشراء الذهب الآن",
          dateLabel: "تاريخ النشر",
          dateValue: "25/03/2026",

          intro1:
            "هل الوقت مناسب لشراء الذهب الآن؟ هذا السؤال يتكرر كثيرًا، خاصة مع التغيرات المستمرة في أسعار الذهب والتقلبات الاقتصادية العالمية.",
          intro2:
            "في الحقيقة، لا يوجد جواب بسيط بنعم أو لا. لأن سعر الذهب لا يتحرك بشكل عشوائي، بل يتأثر بعوامل مهمة مثل الدولار الأمريكي، وأسعار الفائدة، والتضخم، والأحداث العالمية.",
          intro3:
            "بدل محاولة التنبؤ بالسوق بشكل كامل، يمكنك الاعتماد على إشارات واضحة تساعدك على فهم الوضع الحالي بشكل أفضل واتخاذ قرار مدروس.",
          intro4:
            "في هذا المقال، سنستعرض 5 إشارات مهمة تساعدك على معرفة ما إذا كان الوقت مناسبًا لشراء الذهب الآن، ومتى قد يكون الانتظار خيارًا أفضل.",

          note:
            "تنويه: هذا المقال لأغراض معلوماتية فقط ولا يُعد نصيحة استثمارية أو مالية.",
        }
      : {
          back: "Back to Blog",
          switch: "العربية",
          title: "5 Signs to Help You Know if Now Is a Good Time to Buy Gold",
          dateLabel: "Published on",
          dateValue: "03/25/2026",

          intro1:
            "Is now a good time to buy gold? This question comes up often, especially with ongoing changes in gold prices and global economic uncertainty.",
          intro2:
            "In reality, there is no simple yes or no answer. Gold prices do not move randomly — they are influenced by important factors such as the US dollar, interest rates, inflation, and global events.",
          intro3:
            "Instead of trying to predict the market perfectly, you can rely on clear signals that help you better understand the current situation and make a more informed decision.",
          intro4:
            "In this article, we will look at 5 important signs that can help you judge whether now may be a good time to buy gold, and when waiting might be the better option.",

          note:
            "Disclaimer: This article is for informational purposes only and does not constitute financial or investment advice.",
        };

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-black px-6 py-12 text-white"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <a href="/blog" className="text-sm text-amber-400 hover:underline">
            {lang === "ar" ? "→" : "←"} {t.back}
          </a>

          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="text-sm text-amber-400 hover:underline"
          >
            {t.switch}
          </button>
        </div>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <header className="mb-8 space-y-3">
            <h1 className="text-3xl font-bold text-amber-300 md:text-4xl">
              {t.title}
            </h1>
            <p className="text-sm text-zinc-400">
              {t.dateLabel}: {t.dateValue}
            </p>
          </header>

          <div className="space-y-6 leading-8 text-zinc-300">
            <p>{t.intro1}</p>
            <p>{t.intro2}</p>
            <p>{t.intro3}</p>
            <p>{t.intro4}</p>
          </div>

          <div className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-zinc-300">
            {t.note}
          </div>
        </article>
      </div>
    </main>
  );
}
