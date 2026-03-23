"use client";

import { useState } from "react";

export default function GoldInflationClient() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const t =
    lang === "ar"
      ? {
          back: "الرجوع إلى المدونة",
          switch: "English",
          title: "هل الذهب استثمار آمن في أوقات التضخم؟",
          dateLabel: "تاريخ النشر",
          dateValue: "23/03/2026",

          intro1:
            "يعتبر الذهب من أكثر الأصول التي يلجأ إليها المستثمرون عند ارتفاع معدلات التضخم، وذلك بسبب سمعته الطويلة كوسيلة لحفظ القيمة. فعندما تبدأ العملات في فقدان قوتها الشرائية، يبحث الكثيرون عن أصول يمكنها حماية أموالهم من التآكل مع مرور الوقت.",
          intro2:
            "لكن السؤال المهم هو: هل الذهب دائمًا الخيار الأفضل في أوقات التضخم؟ أم أن هناك عوامل أخرى يجب أخذها في الاعتبار؟ في هذا المقال نشرح العلاقة بين الذهب والتضخم بشكل واضح، ونساعدك على فهم متى يكون الذهب خيارًا مناسبًا ومتى لا يكون كذلك.",

          h1: "ما هو التضخم؟",
          p1a:
            "التضخم هو ارتفاع عام ومستمر في أسعار السلع والخدمات، مما يؤدي إلى انخفاض القوة الشرائية للعملة. بمعنى بسيط، نفس المبلغ من المال الذي كان يكفي لشراء شيء معين في الماضي، قد لا يكفي لشرائه اليوم.",
          p1b:
            "وعندما يرتفع التضخم بشكل ملحوظ، يشعر الأفراد بأن أموالهم تفقد قيمتها تدريجيًا، وهنا يبدأ البحث عن أصول تحافظ على القيمة مثل الذهب.",

          h2: "لماذا يرتفع الذهب مع التضخم؟",
          p2a:
            "يُنظر إلى الذهب تاريخيًا كأداة لحفظ القيمة، لذلك يزداد الطلب عليه في فترات التضخم. فعندما تضعف العملات، يميل بعض المستثمرين إلى تحويل أموالهم إلى الذهب لأنه أصل ملموس لا يمكن طباعته مثل النقود.",
          p2b:
            "كما أن الذهب لا يعتمد على جهة إصدار مثل العملات، وهذا يجعله خيارًا جذابًا في أوقات عدم الاستقرار الاقتصادي أو فقدان الثقة في الأنظمة المالية.",

          h3: "هل الذهب يرتفع دائمًا مع التضخم؟",
          p3a:
            "الإجابة هي: ليس دائمًا. رغم أن الذهب قد يستفيد من التضخم، إلا أن العلاقة ليست مضمونة في كل الحالات. أحيانًا قد يكون التضخم مرتفعًا، لكن الذهب لا يرتفع بالشكل المتوقع.",
          p3b:
            "والسبب هو وجود عوامل أخرى تؤثر على الذهب، مثل أسعار الفائدة، وقوة الدولار، وتوقعات الأسواق. لذلك لا يمكن الاعتماد على التضخم وحده لتوقع حركة الذهب.",

          h4: "دور أسعار الفائدة",
          p4a:
            "تلعب أسعار الفائدة دورًا مهمًا في تحديد اتجاه الذهب. عندما ترفع البنوك المركزية الفائدة لمواجهة التضخم، تصبح الأصول التي تعطي عائدًا مثل الودائع والسندات أكثر جاذبية.",
          p4b:
            "وهذا قد يقلل من الإقبال على الذهب لأنه لا يدر عائدًا مباشرًا. لذلك أحيانًا نرى الذهب يتراجع رغم وجود تضخم مرتفع، بسبب ارتفاع الفائدة.",

          h5: "متى يكون الذهب خيارًا مناسبًا؟",
          p5a:
            "يكون الذهب أكثر جاذبية عندما يجتمع أكثر من عامل داعم، مثل ارتفاع التضخم مع انخفاض الفائدة، أو ضعف الدولار، أو وجود أزمات اقتصادية أو سياسية.",
          p5b:
            "في هذه الحالات، يميل المستثمرون إلى الذهب كملاذ آمن، مما قد يدفع أسعاره للارتفاع. لذلك ينظر المستثمرون المحترفون إلى الذهب كجزء من تنويع الاستثمار وليس كخيار وحيد.",

          h6: "الخلاصة",
          p6a:
            "الذهب يمكن أن يكون أداة قوية للتحوط ضد التضخم، لكنه ليس ضمانًا ثابتًا للربح. فحركته تعتمد على مجموعة من العوامل مثل الفائدة والدولار وحالة الاقتصاد العالمي.",
          p6b:
            "فهم هذه العوامل يساعدك على اتخاذ قرارات أكثر وعيًا، ويمنحك رؤية أوضح عند التفكير في الاستثمار في الذهب خلال فترات التضخم.",

          note:
            "تنويه: هذا المقال لأغراض معلوماتية فقط ولا يُعد نصيحة استثمارية أو مالية.",
        }
      : {
          back: "Back to Blog",
          switch: "العربية",
          title: "Is Gold a Safe Investment During Inflation?",
          dateLabel: "Published on",
          dateValue: "03/23/2026",

          intro1:
            "Gold is often one of the first assets investors turn to when inflation rises, largely because of its long-standing reputation as a store of value. When currencies begin to lose purchasing power, many people look for assets that can better preserve wealth over time.",
          intro2:
            "But an important question remains: is gold always the best option during inflation? Or are there other factors to consider? In this article, we explain the relationship between gold and inflation and help you understand when gold may be a suitable choice.",

          h1: "What Is Inflation?",
          p1a:
            "Inflation is a general and sustained increase in the prices of goods and services over time, which reduces the purchasing power of money. In simple terms, the same amount of money buys less than it did before.",
          p1b:
            "When inflation rises significantly, individuals begin to feel that their money is losing value, and they start looking for assets that can preserve that value, such as gold.",

          h2: "Why Does Gold Rise During Inflation?",
          p2a:
            "Gold is historically viewed as a store of value, which is why demand often increases during inflation. When currencies weaken, investors may move part of their wealth into gold as a tangible asset that cannot be printed.",
          p2b:
            "Gold also does not rely on a central authority like fiat currencies, which makes it attractive during times of economic instability or reduced trust in financial systems.",

          h3: "Does Gold Always Rise With Inflation?",
          p3a:
            "Not always. Although gold can benefit from inflation, the relationship is not guaranteed in every situation. There are times when inflation is high but gold does not rise as expected.",
          p3b:
            "This is because other factors also influence gold, such as interest rates, the US dollar, and overall market expectations. Therefore, inflation alone is not enough to predict gold prices.",

          h4: "The Role of Interest Rates",
          p4a:
            "Interest rates play a key role in gold movements. When central banks raise rates to fight inflation, yield-generating assets like bonds and deposits become more attractive.",
          p4b:
            "This can reduce demand for gold since it does not produce income. That is why gold may sometimes decline even when inflation is high, especially if interest rates are rising strongly.",

          h5: "When Can Gold Be a Good Option?",
          p5a:
            "Gold tends to be more attractive when several supportive factors come together, such as high inflation with low interest rates, a weaker dollar, or increased economic and geopolitical uncertainty.",
          p5b:
            "In such cases, investors often turn to gold as a safe-haven asset. However, professional investors usually treat gold as part of a diversified strategy rather than a single solution.",

          h6: "Conclusion",
          p6a:
            "Gold can be a useful hedge against inflation, but it is not a guaranteed profit asset. Its movement depends on multiple factors including interest rates, the dollar, and overall economic conditions.",
          p6b:
            "Understanding these factors helps you make more informed decisions and gives you a clearer perspective when considering gold during inflationary periods.",

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

            {[t.h1, t.h2, t.h3, t.h4, t.h5, t.h6].map((h, i) => (
              <section key={i} className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">{h}</h2>
                <p>{t[`p${i + 1}a` as keyof typeof t]}</p>
                <p>{t[`p${i + 1}b` as keyof typeof t]}</p>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-zinc-300">
            {t.note}
          </div>
        </article>
      </div>
    </main>
  );
}
