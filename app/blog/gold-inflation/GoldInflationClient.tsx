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
            "يُعد الذهب من أكثر الأصول التي يلجأ إليها المستثمرون عند ارتفاع معدلات التضخم، وذلك بسبب سمعته الطويلة كوسيلة لحفظ القيمة. فعندما تبدأ العملات في فقدان قوتها الشرائية، يبحث الكثيرون عن أصول يمكنها حماية أموالهم من التآكل مع مرور الوقت.",
          intro2:
            "لكن هل الذهب دائمًا الخيار الأفضل في أوقات التضخم؟ أم أن هناك عوامل أخرى تؤثر على أدائه؟ في هذا المقال نشرح العلاقة بين الذهب والتضخم بشكل مفصل، ونوضح متى يكون الذهب استثمارًا مناسبًا ومتى قد لا يكون كذلك.",

          h1: "ما هو التضخم؟",
          p1a:
            "التضخم هو ارتفاع عام ومستمر في أسعار السلع والخدمات، مما يؤدي إلى انخفاض القوة الشرائية للعملة. بمعنى بسيط، نفس المبلغ من المال يصبح قادرًا على شراء كمية أقل من السلع مع مرور الوقت.",
          p1b:
            "عندما يرتفع التضخم، يشعر الأفراد بأن أموالهم تفقد قيمتها، وهذا يدفعهم للبحث عن أصول تحافظ على القيمة مثل الذهب.",

          h2: "لماذا يرتفع الذهب في أوقات التضخم؟",
          p2a:
            "يُنظر إلى الذهب تاريخيًا كوسيلة لحفظ القيمة، لذلك يزداد الطلب عليه في فترات التضخم. فعندما تضعف العملات، يميل المستثمرون إلى شراء الذهب لأنه أصل ملموس لا يمكن طباعته مثل النقود.",
          p2b:
            "كما أن الذهب غالبًا ما يرتبط بالأمان المالي، لذلك يرتفع الاهتمام به في أوقات عدم اليقين الاقتصادي.",

          h3: "هل الذهب يرتفع دائمًا مع التضخم؟",
          p3a:
            "ليس بالضرورة. رغم أن الذهب قد يستفيد من التضخم، إلا أن العلاقة ليست ثابتة دائمًا. في بعض الأحيان يكون التضخم مرتفعًا، لكن الذهب لا يرتفع بالشكل المتوقع.",
          p3b:
            "والسبب هو وجود عوامل أخرى مثل أسعار الفائدة وقوة الدولار وتوقعات السوق، والتي قد تؤثر بشكل أكبر من التضخم نفسه.",

          h4: "تأثير أسعار الفائدة على الذهب",
          p4a:
            "تلعب أسعار الفائدة دورًا مهمًا في حركة الذهب. عندما ترتفع الفائدة، تصبح الأصول التي تعطي عائدًا مثل الودائع والسندات أكثر جاذبية، مما قد يقلل الطلب على الذهب.",
          p4b:
            "أما عندما تكون الفائدة منخفضة، يصبح الذهب خيارًا أفضل لأنه لا يوجد بديل قوي يعطي عائدًا مرتفعًا.",

          h5: "تأثير الدولار على الذهب",
          p5a:
            "عادة ما توجد علاقة عكسية بين الدولار والذهب. عندما يقوى الدولار، يصبح الذهب أكثر تكلفة للمستثمرين خارج الولايات المتحدة، مما يقلل الطلب عليه.",
          p5b:
            "أما عندما يضعف الدولار، يصبح الذهب أرخص نسبيًا، مما قد يزيد الطلب ويرفع الأسعار.",

          h6: "متى يكون الذهب خيارًا مناسبًا؟",
          p6a:
            "يكون الذهب خيارًا جيدًا عندما يكون التضخم مرتفعًا، والفائدة منخفضة، والدولار ضعيف، أو عند وجود أزمات اقتصادية أو سياسية.",
          p6b:
            "في هذه الحالات، يلجأ المستثمرون إلى الذهب كملاذ آمن، مما يدعم ارتفاع أسعاره.",

          h7: "هل يجب الاعتماد على الذهب فقط؟",
          p7a:
            "لا يُنصح بالاعتماد على الذهب فقط كاستثمار، بل من الأفضل تنويع الاستثمارات لتقليل المخاطر.",
          p7b:
            "الذهب يمكن أن يكون جزءًا مهمًا من المحفظة الاستثمارية، لكنه ليس الحل الوحيد في جميع الحالات.",

          h8: "الخلاصة",
          p8a:
            "الذهب قد يكون وسيلة فعالة للتحوط ضد التضخم، لكنه لا يرتفع دائمًا في كل الحالات. فحركته تعتمد على مجموعة من العوامل مثل الفائدة والدولار وحالة الاقتصاد العالمي.",
          p8b:
            "فهم هذه العوامل يساعدك على اتخاذ قرارات أفضل، ويمنحك رؤية أوضح عند متابعة أسعار الذهب.",

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
            "Gold is often one of the first assets investors turn to when inflation rises, due to its long-standing reputation as a store of value. When currencies lose purchasing power, investors look for assets that can better preserve wealth over time.",
          intro2:
            "But is gold always the best choice during inflation? In this article, we explore the relationship between gold and inflation and when gold may or may not be a good investment.",

          h1: "What Is Inflation?",
          p1a:
            "Inflation is a general increase in prices over time, reducing purchasing power.",
          p1b:
            "When inflation rises, people look for assets that protect value, such as gold.",

          h2: "Why Does Gold Rise During Inflation?",
          p2a:
            "Gold is seen as a store of value, which is why demand often increases.",
          p2b:
            "It is a tangible asset that cannot be printed like money.",

          h3: "Does Gold Always Rise With Inflation?",
          p3a:
            "Not always. Gold does not rise every time inflation increases.",
          p3b:
            "Other factors like interest rates and the dollar also play a role.",

          h4: "Interest Rates Impact",
          p4a:
            "Higher interest rates make other assets more attractive.",
          p4b:
            "This can reduce demand for gold.",

          h5: "Dollar Impact",
          p5a:
            "Gold usually moves inversely to the US dollar.",
          p5b:
            "A stronger dollar can pressure gold prices.",

          h6: "When Is Gold a Good Option?",
          p6a:
            "Gold is stronger when inflation is high and rates are low.",
          p6b:
            "It is often used as a safe-haven asset.",

          h7: "Diversification",
          p7a:
            "Gold should be part of a diversified portfolio.",
          p7b:
            "It is not the only investment option.",

          h8: "Conclusion",
          p8a:
            "Gold can hedge inflation but is not guaranteed.",
          p8b:
            "Understanding market factors is key.",

          note:
            "Disclaimer: This article is for informational purposes only.",
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

            {[t.h1, t.h2, t.h3, t.h4, t.h5, t.h6, t.h7, t.h8].map((h, i) => (
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
