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
            "في فترات ارتفاع التضخم، يبدأ الكثير من المستثمرين والأفراد بالبحث عن أصول يمكنها الحفاظ على قيمة أموالهم. ومن بين هذه الأصول، يأتي الذهب في مقدمة الخيارات التي يتم اللجوء إليها منذ عقود طويلة.",
          intro2:
            "لكن هل الذهب فعلًا يحمي من التضخم؟ وهل هو دائمًا الخيار الأفضل؟ في هذا المقال سنشرح العلاقة بين الذهب والتضخم بشكل عميق، ونوضح متى يكون الذهب استثمارًا ذكيًا ومتى قد لا يكون كذلك.",

          h1: "ما هو التضخم؟",
          p1a:
            "التضخم هو ارتفاع عام ومستمر في أسعار السلع والخدمات، مما يؤدي إلى انخفاض القوة الشرائية للعملة. بمعنى أن نفس المبلغ من المال يصبح أقل قيمة مع مرور الوقت.",
          p1b:
            "وعندما يرتفع التضخم، يشعر الأفراد بأن مدخراتهم تفقد قيمتها تدريجيًا، مما يدفعهم للبحث عن أصول تحافظ على القيمة مثل الذهب.",

          h2: "لماذا يعتبر الذهب ملاذًا في التضخم؟",
          p2a:
            "الذهب يُعتبر أصلًا محدودًا لا يمكن طباعته مثل العملات، وله تاريخ طويل كوسيلة لحفظ القيمة. لذلك يزداد الطلب عليه عندما تضعف العملات أو ترتفع الأسعار.",
          p2b:
            "كما أن الذهب لا يعتمد على نظام مالي معين أو حكومة، وهذا يجعله خيارًا جذابًا في أوقات عدم الاستقرار الاقتصادي.",

          h3: "العلاقة بين الذهب والتضخم",
          p3a:
            "في كثير من الحالات، يرتفع الذهب مع ارتفاع التضخم، لأن المستثمرين يحاولون حماية أموالهم من انخفاض قيمة العملة.",
          p3b:
            "لكن هذه العلاقة ليست ثابتة دائمًا، لأن الذهب يتأثر بعوامل أخرى مثل الفائدة والدولار والسياسات النقدية.",

          h4: "تأثير أسعار الفائدة",
          p4a:
            "عندما ترفع البنوك المركزية أسعار الفائدة لمحاربة التضخم، تصبح الأصول التي تعطي عائدًا أكثر جاذبية، مثل السندات.",
          p4b:
            "وهذا قد يؤدي إلى انخفاض الطلب على الذهب، لأنه لا يدر عائدًا مباشرًا.",

          h5: "تأثير الدولار الأمريكي",
          p5a:
            "عادة ما تكون العلاقة بين الذهب والدولار عكسية. عندما يقوى الدولار، ينخفض الطلب على الذهب.",
          p5b:
            "وعندما يضعف الدولار، يصبح الذهب أكثر جاذبية عالميًا، مما قد يؤدي إلى ارتفاع أسعاره.",

          h6: "متى يرتفع الذهب فعليًا؟",
          p6a:
            "يرتفع الذهب عادة عندما يجتمع أكثر من عامل مثل التضخم المرتفع، الفائدة المنخفضة، وضعف الدولار، أو وجود أزمات اقتصادية.",
          p6b:
            "لذلك يعتمد الذهب على مجموعة من العوامل وليس التضخم فقط.",

          h7: "متى لا يكون الذهب خيارًا جيدًا؟",
          p7a:
            "قد لا يكون الذهب الخيار الأفضل عندما ترتفع الفائدة بشكل كبير، أو عندما يكون الاقتصاد قوي والدولار مرتفع.",
          p7b:
            "في هذه الحالات، قد يفضل المستثمرون أصولًا أخرى تعطي عائدًا أعلى.",

          h8: "هل الذهب أفضل من باقي الاستثمارات؟",
          p8a:
            "الذهب ليس أفضل من كل الاستثمارات، لكنه مهم كجزء من محفظة متنوعة.",
          p8b:
            "أفضل استراتيجية هي توزيع الاستثمار بين عدة أصول لتقليل المخاطر.",

          h9: "الخلاصة",
          p9a:
            "الذهب يمكن أن يكون أداة قوية للتحوط ضد التضخم، لكنه ليس ضمانًا دائمًا للربح.",
          p9b:
            "فهم العوامل مثل الفائدة والدولار والتضخم يساعدك على اتخاذ قرارات استثمارية أفضل.",

          note:
            "تنويه: هذا المقال لأغراض معلوماتية فقط ولا يُعد نصيحة استثمارية.",
        }
      : {
          back: "Back to Blog",
          switch: "العربية",
          title: "Is Gold a Safe Investment During Inflation?",
          dateLabel: "Published on",
          dateValue: "03/23/2026",

          intro1:
            "During inflation, investors look for assets that protect value. Gold is one of the most popular choices.",
          intro2:
            "But is gold always the best option? This article explains the real relationship.",

          h1: "What is Inflation?",
          p1a: "Inflation reduces purchasing power.",
          p1b: "Prices increase over time.",

          h2: "Why Gold?",
          p2a: "Gold stores value.",
          p2b: "It cannot be printed.",

          h3: "Gold & Inflation",
          p3a: "Gold often rises with inflation.",
          p3b: "But not always.",

          h4: "Interest Rates",
          p4a: "Higher rates hurt gold.",
          p4b: "Lower rates help gold.",

          h5: "Dollar Impact",
          p5a: "Gold moves opposite dollar.",
          p5b: "Weak dollar = strong gold.",

          h6: "When Gold Rises",
          p6a: "High inflation + low rates.",
          p6b: "Economic uncertainty.",

          h7: "When Gold Falls",
          p7a: "High interest rates.",
          p7b: "Strong economy.",

          h8: "Diversification",
          p8a: "Gold is part of portfolio.",
          p8b: "Not the only asset.",

          h9: "Conclusion",
          p9a: "Gold helps but not always.",
          p9b: "Understand the market.",

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
          <h1 className="text-3xl font-bold text-amber-300 md:text-4xl mb-6">
            {t.title}
          </h1>

          <p className="text-sm text-zinc-400 mb-6">
            {t.dateLabel}: {t.dateValue}
          </p>

          <p className="mb-4">{t.intro1}</p>
          <p className="mb-6">{t.intro2}</p>

          {[1,2,3,4,5,6,7,8,9].map((i) => (
            <section key={i} className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {t[`h${i}` as keyof typeof t]}
              </h2>
              <p>{t[`p${i}a` as keyof typeof t]}</p>
              <p>{t[`p${i}b` as keyof typeof t]}</p>
            </section>
          ))}

          <div className="mt-10 text-sm text-zinc-400">{t.note}</div>
        </article>
      </div>
    </main>
  );
}
