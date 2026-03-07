use client";

import { useState } from "react";

export const metadata = {
  title: "توقعات الذهب 2026 | Gold Market 2026 Outlook - Gold Live Prices",
  description:
    "تعرف على العوامل التي تؤثر على أسعار الذهب عالميًا واستكشف أبرز السيناريوهات المحتملة لحركة الذهب في 2026.",
};

export default function GoldMarket2026Page() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const t = {
    ar: {
      back: "← الرجوع إلى المدونة",
      title: "العوامل التي تؤثر على أسعار الذهب عالميًا وتوقعات 2026",
      intro:
        "يُعد الذهب من أهم الأصول التي يتابعها المستثمرون والأفراد حول العالم، لأنه يرتبط بالأمان المالي والتحوط ضد الأزمات. ويتأثر سعر الذهب بعدة عوامل اقتصادية وسياسية ونقدية، لذلك من المهم فهم الصورة الكاملة بدل التركيز على السعر اللحظي فقط.",
      h1: "1. أسعار الفائدة الأمريكية",
      p1:
        "عندما ترتفع أسعار الفائدة، تصبح الأصول ذات العائد مثل السندات والدولار أكثر جاذبية من الذهب، لأن الذهب لا يوزع عائدًا ثابتًا. لذلك غالبًا ما يؤدي ارتفاع الفائدة إلى ضغط على أسعار الذهب، بينما يساعد خفض الفائدة على دعم الذهب.",
      h2: "2. التضخم العالمي",
      p2:
        "يرى كثير من المستثمرين أن الذهب وسيلة لحفظ القيمة في أوقات التضخم. عندما ترتفع الأسعار عالميًا وتنخفض القوة الشرائية للعملات، يتجه البعض إلى الذهب كأصل دفاعي، مما يرفع الطلب عليه.",
      h3: "3. قوة الدولار الأمريكي",
      p3:
        "عادة ما توجد علاقة عكسية بين الدولار والذهب. عندما يقوى الدولار، يصبح الذهب أغلى على حائزي العملات الأخرى، مما قد يضعف الطلب. أما عندما يضعف الدولار، فقد ترتفع جاذبية الذهب عالميًا.",
      h4: "4. الأزمات الجيوسياسية",
      p4:
        "الحروب والتوترات السياسية والأزمات الإقليمية تدفع الأسواق إلى البحث عن الأمان. وفي هذه الحالات غالبًا ما يرتفع الطلب على الذهب لأنه يُعتبر ملاذًا آمنًا مقارنة بالأصول عالية المخاطر.",
      h5: "5. مشتريات البنوك المركزية",
      p5:
        "في السنوات الأخيرة، زادت بعض البنوك المركزية من مشترياتها للذهب ضمن استراتيجيات تنويع الاحتياطات. وهذا العامل قد يشكل دعمًا طويل الأجل للسوق، خاصة إذا استمرت تلك المشتريات بوتيرة مرتفعة.",
      h6: "6. توقعات الذهب في 2026",
      p6:
        "لا يمكن الجزم بمسار الذهب في 2026، لكن يمكن تصور ثلاثة سيناريوهات رئيسية. السيناريو الإيجابي يتمثل في خفض الفائدة مع استمرار التضخم أو التوترات، ما قد يدعم صعود الذهب. السيناريو المحايد يتمثل في استقرار اقتصادي عالمي نسبي يحافظ على الذهب ضمن نطاق سعري متوازن. أما السيناريو السلبي فيتمثل في ارتفاع الفائدة وقوة الدولار واستقرار الأسواق، مما قد يضغط على الأسعار.",
      h7: "الخلاصة",
      p7:
        "يتحرك الذهب نتيجة مزيج من العوامل وليس بسبب سبب واحد فقط. لذلك فإن متابعة الفائدة، التضخم، الدولار، الأوضاع السياسية، ومشتريات البنوك المركزية تمنح المستثمر أو القارئ صورة أوضح عن السوق العالمي للذهب.",
      note:
        "تنويه: هذا المقال لأغراض معلوماتية فقط ولا يُعد نصيحة استثمارية أو مالية.",
      switch: "English",
    },
    en: {
      back: "← Back to Blog",
      title: "Key Factors Affecting Global Gold Prices & 2026 Outlook",
      intro:
        "Gold remains one of the most closely watched assets in the world because it is linked to financial safety and crisis hedging. Its price is influenced by economic, political, and monetary factors, which makes it important to understand the broader picture rather than focusing only on short-term price moves.",
      h1: "1. US Interest Rates",
      p1:
        "When interest rates rise, yield-generating assets such as bonds and the US dollar often become more attractive than gold, since gold does not provide a fixed return. For this reason, higher rates often pressure gold prices, while lower rates can support them.",
      h2: "2. Global Inflation",
      p2:
        "Many investors view gold as a store of value during periods of inflation. When prices rise globally and purchasing power weakens, demand for gold can increase as a defensive asset.",
      h3: "3. US Dollar Strength",
      p3:
        "Gold often has an inverse relationship with the US dollar. When the dollar strengthens, gold becomes more expensive for holders of other currencies, which may reduce demand. A weaker dollar can make gold more attractive globally.",
      h4: "4. Geopolitical Tensions",
      p4:
        "Wars, political tensions, and regional crises often push markets toward safer assets. In such periods, gold tends to benefit because it is widely viewed as a safe-haven asset compared with higher-risk investments.",
      h5: "5. Central Bank Buying",
      p5:
        "In recent years, some central banks have increased their gold purchases as part of reserve diversification strategies. This can create long-term support for the market, especially if buying remains strong.",
      h6: "6. Gold Outlook for 2026",
      p6:
        "No one can predict gold prices with certainty in 2026, but three broad scenarios are possible. A bullish scenario could emerge if interest rates fall while inflation or geopolitical tensions remain elevated. A neutral scenario could occur if the global economy stabilizes and gold trades within a balanced range. A bearish scenario could appear if rates remain high, the dollar stays strong, and financial markets remain calm.",
      h7: "Conclusion",
      p7:
        "Gold is driven by a mix of forces rather than one single factor. Tracking interest rates, inflation, the US dollar, geopolitical conditions, and central bank activity can provide a clearer picture of the global gold market.",
      note:
        "Disclaimer: This article is for informational purposes only and does not constitute financial or investment advice.",
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
