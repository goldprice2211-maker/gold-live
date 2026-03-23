"use client";

import { useState } from "react";

export default function GoldMarket2026Client() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const t = {
    ar: {
      back: "الرجوع إلى المدونة",
      switch: "English",
      title: "العوامل التي تؤثر على أسعار الذهب عالميًا وتوقعات 2026",
      dateLabel: "تاريخ النشر",
      dateValue: "23/03/2026",

      intro1:
        "يُعد الذهب من أهم الأصول التي يتابعها المستثمرون والأفراد حول العالم، نظرًا لدوره كملاذ آمن ووسيلة لحفظ القيمة على المدى الطويل. ومع استمرار التقلبات الاقتصادية وتغير السياسات النقدية وارتفاع حساسية الأسواق للأحداث العالمية، يزداد الاهتمام بفهم العوامل التي تؤثر على أسعار الذهب بشكل مباشر وغير مباشر.",
      intro2:
        "في هذا المقال نستعرض أهم المؤثرات الرئيسية على الذهب عالميًا، مثل أسعار الفائدة الأمريكية، والتضخم، وقوة الدولار، والأزمات الجيوسياسية، ومشتريات البنوك المركزية، ثم نعرض تصورًا مبسطًا لعدة سيناريوهات محتملة لحركة الذهب خلال عام 2026.",

      h1: "أسعار الفائدة الأمريكية",
      p1a:
        "تُعتبر أسعار الفائدة من أهم العوامل التي تؤثر على الذهب. عندما ترتفع أسعار الفائدة، تصبح الأصول ذات العائد مثل السندات والودائع والدولار أكثر جاذبية للمستثمرين، مما قد يقلل الإقبال على الذهب لأنه لا يدر عائدًا مباشرًا.",
      p1b:
        "أما عندما تنخفض الفائدة أو تتجه السياسة النقدية نحو التيسير، فقد يستعيد الذهب جاذبيته باعتباره أصلًا للحفاظ على القيمة، خاصة إذا صاحب ذلك تباطؤ اقتصادي أو زيادة في حالة القلق داخل الأسواق.",

      h2: "التضخم العالمي",
      p2a:
        "يرى كثير من المستثمرين أن الذهب وسيلة لحفظ القيمة في أوقات التضخم. عندما ترتفع الأسعار وتضعف القوة الشرائية للعملات، يتجه بعض المستثمرين إلى الذهب باعتباره أصلًا يمكن أن يحافظ على قيمته بشكل أفضل على المدى الطويل.",
      p2b:
        "لكن تأثير التضخم على الذهب لا يُقرأ بمعزل عن غيره، لأن رد فعل البنوك المركزية مهم جدًا. فإذا ارتفع التضخم وارتفعت معه الفائدة بقوة، فقد يستفيد الدولار مؤقتًا، مما قد يحد من مكاسب الذهب أو يضغط عليه في بعض الفترات.",

      h3: "قوة الدولار الأمريكي",
      p3a:
        "عادة ما توجد علاقة عكسية بين الدولار والذهب. عندما يقوى الدولار، يصبح الذهب أكثر تكلفة للمستثمرين خارج الولايات المتحدة، مما قد يقلل الطلب عليه. أما عندما يضعف الدولار، يصبح الذهب أرخص نسبيًا، وقد يزيد الإقبال عليه عالميًا.",
      p3b:
        "لذلك تُعد حركة الدولار مؤشرًا مهمًا في فهم اتجاه الذهب. ومع ذلك، لا ينبغي الاعتماد عليها وحدها، لأن الأسواق قد تشهد فترات يرتفع فيها الذهب والدولار معًا عند تصاعد المخاطر العالمية وارتفاع الطلب على الأصول الآمنة.",

      h4: "الأزمات الجيوسياسية",
      p4a:
        "الحروب، والتوترات السياسية، والأزمات الإقليمية، والاضطرابات المالية تدفع الأسواق عادة إلى البحث عن الأمان. وفي مثل هذه الحالات، يزداد اهتمام المستثمرين بالذهب باعتباره ملاذًا آمنًا نسبيًا مقارنة ببعض الأصول الأخرى.",
      p4b:
        "لهذا السبب، كثيرًا ما ترتفع أسعار الذهب خلال فترات عدم الاستقرار العالمي. وكلما زادت الضبابية في المشهد الاقتصادي أو السياسي، ارتفعت احتمالات توجه جزء من السيولة نحو الذهب.",

      h5: "مشتريات البنوك المركزية",
      p5a:
        "في السنوات الأخيرة، زادت بعض البنوك المركزية من مشترياتها للذهب بهدف تنويع الاحتياطيات وتقليل الاعتماد على بعض العملات الأجنبية. هذا العامل مهم لأنه يعزز الطلب المؤسسي على الذهب ويدعم السوق على المدى المتوسط والطويل.",
      p5b:
        "وعندما تتجه بنوك مركزية كبرى أو عدة بنوك في وقت واحد إلى زيادة حيازاتها من الذهب، فقد يُنظر إلى ذلك على أنه إشارة ثقة إضافية في الذهب كأصل استراتيجي، وهو ما قد ينعكس على الأسعار بمرور الوقت.",

      h6: "توقعات الذهب في 2026",
      p6a:
        "لا يمكن الجزم بمسار الذهب في 2026 بشكل دقيق، لكن يمكن تصور ثلاثة سيناريوهات رئيسية. السيناريو الأول هو استمرار الدعم للذهب إذا ضعفت الفائدة أو استمر التضخم أو زادت التوترات العالمية، ما قد يدفع الأسعار إلى مزيد من الصعود.",
      p6b:
        "السيناريو الثاني هو تحرك الذهب في نطاق سعري متوازن إذا هدأت الأسواق واستقرت الفائدة والدولار دون تغييرات حادة. أما السيناريو الثالث فهو تعرض الذهب لبعض الضغط إذا ارتفعت الفائدة بقوة، وتحسن الاقتصاد العالمي، وازداد دعم الدولار.",

      h7: "كيف تقرأ توقعات الذهب بشكل واقعي؟",
      p7a:
        "من المهم فهم أن التوقعات ليست ضمانًا لوقوع سيناريو معين، بل هي قراءة محتملة مبنية على المعطيات الحالية. لذلك لا ينبغي التعامل مع أي توقع على أنه نتيجة مؤكدة، بل كاحتمال من بين عدة احتمالات.",
      p7b:
        "أفضل طريقة لقراءة توقعات الذهب هي متابعة العوامل المؤثرة بشكل منتظم، مثل الفائدة والتضخم والدولار والأخبار الجيوسياسية، مع فهم أن حركة السوق قد تتغير بسرعة عند ظهور بيانات أو أحداث جديدة.",

      h8: "الخلاصة",
      p8a:
        "يتحرك الذهب نتيجة مزيج من العوامل، وليس بسبب عامل واحد فقط. فالفائدة، والتضخم، والدولار، والأزمات العالمية، ومشتريات البنوك المركزية، كلها عناصر تلعب دورًا في تشكيل اتجاه السوق.",
      p8b:
        "فهم هذه العوامل يمنحك رؤية أوضح عند متابعة أسعار الذهب أو محاولة تقدير اتجاهه خلال 2026، ويجعل قراءتك للسوق أكثر عمقًا من مجرد متابعة التغيرات اليومية في السعر.",

      note:
        "تنويه: هذا المقال لأغراض معلوماتية فقط ولا يُعد نصيحة استثمارية أو مالية. الأسواق قد تتغير بسرعة، لذلك يُفضل دائمًا متابعة المستجدات واتخاذ القرارات بناءً على دراسة كافية.",
    },

    en: {
      back: "Back to Blog",
      switch: "العربية",
      title: "Key Factors Affecting Global Gold Prices & 2026 Outlook",
      dateLabel: "Published on",
      dateValue: "03/23/2026",

      intro1:
        "Gold remains one of the most closely watched assets in the world because of its role as a safe-haven asset and a long-term store of value. As economic uncertainty, monetary policy shifts, and global market volatility continue, interest in understanding what drives gold prices has become even stronger.",
      intro2:
        "In this article, we review the main factors that influence gold globally, including US interest rates, inflation, dollar strength, geopolitical tensions, and central bank buying, then look at a few simplified scenarios for how gold may behave in 2026.",

      h1: "US Interest Rates",
      p1a:
        "Interest rates are among the most important drivers of gold. When rates rise, yield-generating assets such as bonds, deposits, and the US dollar often become more attractive to investors, which can reduce demand for gold because gold itself does not provide direct income.",
      p1b:
        "When rates decline, or when policy moves toward easing, gold may regain appeal as a store of value, especially if lower rates are accompanied by slower growth or rising market uncertainty.",

      h2: "Global Inflation",
      p2a:
        "Many investors view gold as a store of value during inflationary periods. When prices rise and the purchasing power of currencies weakens, some investors move toward gold as a way to preserve value over time.",
      p2b:
        "However, inflation should not be analyzed alone. The response of central banks is also critical. If inflation rises and rates are pushed up sharply as well, the dollar may benefit in the short term, which can limit gold gains or create downward pressure in certain periods.",

      h3: "US Dollar Strength",
      p3a:
        "Gold often has an inverse relationship with the US dollar. When the dollar strengthens, gold becomes more expensive for investors outside the United States, which can reduce demand. When the dollar weakens, gold becomes relatively cheaper and may attract stronger global buying interest.",
      p3b:
        "That is why the dollar is an important indicator when reading gold direction. Still, it should not be used alone, because there are periods when both gold and the dollar can rise together as investors seek safety during times of elevated global risk.",

      h4: "Geopolitical Tensions",
      p4a:
        "Wars, political tensions, regional crises, and financial instability usually push markets toward safer assets. In such conditions, gold often becomes more attractive because it is widely viewed as a relative safe haven compared with many other asset classes.",
      p4b:
        "For this reason, gold prices often rise during periods of global instability. The greater the uncertainty in the political or economic environment, the stronger the chance that part of market liquidity will move toward gold.",

      h5: "Central Bank Buying",
      p5a:
        "In recent years, some central banks have increased their gold purchases as part of reserve diversification and to reduce reliance on certain foreign currencies. This matters because it adds institutional demand and can support the market over the medium and long term.",
      p5b:
        "When several central banks increase their gold holdings at the same time, markets may interpret this as an additional signal of confidence in gold as a strategic asset, which can gradually influence prices.",

      h6: "Gold Outlook for 2026",
      p6a:
        "No one can predict gold prices with full certainty in 2026, but three main scenarios can be imagined. The first is a supportive scenario where lower rates, persistent inflation, or greater global tension help gold extend its strength.",
      p6b:
        "The second is a more balanced scenario where gold trades within a stable range if markets calm down and rates and the dollar remain relatively steady. The third is a weaker scenario for gold if rates rise sharply, the global economy improves, and the dollar strengthens further.",

      h7: "How Should You Read Gold Forecasts Realistically?",
      p7a:
        "It is important to understand that forecasts are not guarantees. They are only possible interpretations based on the information available at a given time. No single forecast should be treated as a certainty.",
      p7b:
        "The most practical way to read gold forecasts is to keep following the key drivers such as rates, inflation, the dollar, and geopolitical developments while remembering that markets can react quickly to new data or unexpected events.",

      h8: "Conclusion",
      p8a:
        "Gold is driven by a combination of forces rather than a single reason. Interest rates, inflation, the US dollar, geopolitical tensions, and central bank buying all contribute to shaping market direction.",
      p8b:
        "Understanding these drivers gives you a clearer view when following gold prices or trying to assess its direction in 2026, and it makes your reading of the market more meaningful than simply watching short-term price moves.",

      note:
        "Disclaimer: This article is for informational purposes only and does not constitute financial or investment advice. Markets can change quickly, so decisions should always be based on careful review and updated information.",
    },
  }[lang];

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-black px-6 py-12 text-white"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between gap-3">
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

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">{t.h1}</h2>
              <p>{t.p1a}</p>
              <p>{t.p1b}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">{t.h2}</h2>
              <p>{t.p2a}</p>
              <p>{t.p2b}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">{t.h3}</h2>
              <p>{t.p3a}</p>
              <p>{t.p3b}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">{t.h4}</h2>
              <p>{t.p4a}</p>
              <p>{t.p4b}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">{t.h5}</h2>
              <p>{t.p5a}</p>
              <p>{t.p5b}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">{t.h6}</h2>
              <p>{t.p6a}</p>
              <p>{t.p6b}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">{t.h7}</h2>
              <p>{t.p7a}</p>
              <p>{t.p7b}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">{t.h8}</h2>
              <p>{t.p8a}</p>
              <p>{t.p8b}</p>
            </section>
          </div>

          <div className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-zinc-300">
            {t.note}
          </div>
        </article>
      </div>
    </main>
  );
}
