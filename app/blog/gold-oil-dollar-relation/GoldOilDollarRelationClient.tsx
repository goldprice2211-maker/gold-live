"use client";

import { useState } from "react";

export default function GoldOilDollarRelationClient() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const t =
    lang === "ar"
      ? {
          back: "← الرجوع إلى المدونة",
          switch: "English",
          title: "كيف تعرف أن الذهب سيرتفع؟ العلاقة بين الذهب والنفط والدولار",
          intro:
            "يتساءل كثير من الناس عن الطريقة التي يمكن من خلالها معرفة ما إذا كان الذهب قد يرتفع أو ينخفض. ورغم أن السوق لا يمكن التنبؤ به بدقة كاملة، إلا أن هناك عوامل مهمة تساعد على فهم الاتجاه، وأبرزها الدولار الأمريكي وأسعار النفط والتضخم العالمي.",
          h1: "1. ما علاقة الدولار بالذهب؟",
          p1:
            "غالبًا ما توجد علاقة عكسية بين الدولار الأمريكي والذهب. عندما يقوى الدولار، يصبح الذهب أغلى على المستثمرين الذين يستخدمون عملات أخرى، مما قد يقلل الطلب عليه. أما عندما يضعف الدولار، فقد يصبح الذهب أكثر جاذبية عالميًا.",
          h2: "2. ما علاقة النفط بالذهب؟",
          p2:
            "أسعار النفط تؤثر بشكل غير مباشر على الذهب. عندما يرتفع النفط، قد ترتفع تكاليف الطاقة والنقل والإنتاج عالميًا، وهذا قد يزيد الضغوط التضخمية. وعندما يرتفع التضخم، يتجه بعض المستثمرين إلى الذهب باعتباره أداة لحفظ القيمة.",
          h3: "3. لماذا قد يؤدي ارتفاع النفط إلى دعم الذهب؟",
          p3:
            "إذا أدى ارتفاع النفط إلى زيادة التضخم أو زاد القلق من تباطؤ الاقتصاد، فقد يزداد الاهتمام بالذهب كملاذ نسبي. لذلك يراقب كثير من المستثمرين حركة النفط باعتبارها إشارة غير مباشرة على اتجاه الذهب.",
          h4: "4. متى يرتفع الذهب عادة؟",
          p4:
            "يميل الذهب إلى الارتفاع في بعض الحالات مثل ضعف الدولار، وارتفاع التضخم، وانخفاض أسعار الفائدة، ووجود أزمات اقتصادية أو سياسية. كلما اجتمعت هذه العوامل، زادت احتمالات دعم الذهب.",
          h5: "5. كيف تعرف أن الذهب قد يرتفع؟",
          p5:
            "يمكنك متابعة بعض الإشارات المهمة مثل تراجع الدولار الأمريكي، وارتفاع النفط بشكل واضح، وازدياد الحديث عن التضخم، أو توقع خفض أسعار الفائدة. هذه العوامل لا تعني بالضرورة أن الذهب سيرتفع فورًا، لكنها تساعد على فهم اتجاه السوق.",
          h6: "الخلاصة",
          p6:
            "معرفة اتجاه الذهب لا تعتمد على عامل واحد فقط. لكن فهم العلاقة بين الذهب والنفط والدولار يمنحك صورة أوضح عن السوق. متابعة هذه المؤشرات بشكل منتظم تساعدك على قراءة حركة الذهب بطريقة أفضل.",
          cta: "تابع سعر الذهب اليوم",
          note:
            "تنويه: هذا المقال لأغراض معلوماتية فقط ولا يُعد نصيحة استثمارية أو مالية.",
        }
      : {
          back: "← Back to Blog",
          switch: "العربية",
          title: "How Can You Tell if Gold May Rise? The Relationship Between Gold, Oil, and the Dollar",
          intro:
            "Many people wonder how they can tell whether gold may rise or fall. While markets can never be predicted with complete certainty, some important factors help in understanding direction, especially the US dollar, oil prices, and global inflation.",
          h1: "1. What Is the Relationship Between the Dollar and Gold?",
          p1:
            "Gold often has an inverse relationship with the US dollar. When the dollar strengthens, gold becomes more expensive for investors using other currencies, which may reduce demand. When the dollar weakens, gold may become more attractive globally.",
          h2: "2. What Is the Relationship Between Oil and Gold?",
          p2:
            "Oil prices affect gold indirectly. When oil rises, energy, transport, and production costs may increase globally, which can add inflationary pressure. When inflation rises, some investors move toward gold as a store of value.",
          h3: "3. Why Can Higher Oil Prices Support Gold?",
          p3:
            "If higher oil prices contribute to inflation or increase concerns about the economy, demand for gold may rise as a relative safe haven. That is why many investors watch oil as an indirect signal for gold.",
          h4: "4. When Does Gold Usually Rise?",
          p4:
            "Gold often rises during periods of a weaker dollar, higher inflation, lower interest rates, or economic and geopolitical uncertainty. The more these factors combine, the stronger the potential support for gold.",
          h5: "5. How Can You Tell Gold May Rise?",
          p5:
            "You can watch several key signals such as a weaker US dollar, noticeably higher oil prices, increased inflation concerns, or expectations of lower interest rates. These do not guarantee that gold will rise immediately, but they help in understanding market direction.",
          h6: "Conclusion",
          p6:
            "Gold direction is never based on one factor alone. But understanding the relationship between gold, oil, and the dollar gives you a clearer market view. Following these indicators regularly can help you read gold movements more effectively.",
          cta: "Check Gold Prices Today",
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

          <a
            href="/"
            className="mt-8 inline-flex rounded-2xl border border-amber-300/30 bg-amber-300/10 px-5 py-3 text-amber-200 hover:bg-amber-300/20"
          >
            {t.cta}
          </a>

          <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5 text-sm text-amber-100/90">
            {t.note}
          </div>
        </article>
      </div>
    </main>
  );
}
