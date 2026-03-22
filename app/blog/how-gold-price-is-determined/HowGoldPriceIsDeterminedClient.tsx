"use client";

import { useState } from "react";

export default function HowGoldPriceIsDeterminedClient() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const t =
    lang === "ar"
      ? {
          back: "الرجوع إلى المدونة",
          switch: "English",
          title: "كيف يتم تحديد سعر الذهب عالميًا؟",
          dateLabel: "تاريخ النشر",
          dateValue: "23/03/2026",

          intro1:
            "يتساءل كثير من الناس عن الطريقة التي يتم بها تحديد سعر الذهب يوميًا حول العالم. ورغم أن السعر يظهر كرقم واحد في الأسواق، إلا أنه في الحقيقة نتيجة تفاعل عدة عوامل اقتصادية ومالية مترابطة، تشمل السوق العالمي، وقوة الدولار الأمريكي، وحجم العرض والطلب، إضافة إلى الأوضاع السياسية والاقتصادية الدولية.",
          intro2:
            "فهم هذه العوامل يساعد القارئ على قراءة السوق بشكل أعمق، بدل الاكتفاء بمتابعة الرقم اليومي فقط. فالسعر الذي نراه في المتاجر أو المواقع لا يأتي من عامل واحد، بل من سلسلة من المؤثرات التي تبدأ من السوق العالمي ثم تنعكس محليًا بحسب العملة والرسوم وطبيعة السوق في كل بلد.",

          h1: "ما هو السعر العالمي للأونصة؟",
          p1a:
            "الأساس الأول في تحديد سعر الذهب هو السعر العالمي للأونصة، والذي يتم تداوله في الأسواق المالية العالمية مثل بورصة نيويورك وسوق لندن. والأونصة هي وحدة قياس أساسية تعادل نحو 31.1 جرامًا من الذهب، وتُستخدم كمرجع دولي لتسعير المعدن النفيس.",
          p1b:
            "هذا السعر يتغير بشكل مستمر خلال اليوم تبعًا لحركة البيع والشراء، وتوقعات المستثمرين، والأخبار الاقتصادية. لذلك عندما نسمع أن الذهب ارتفع أو انخفض عالميًا، فالمقصود غالبًا هو تغير سعر الأونصة في الأسواق الدولية.",

          h2: "لماذا يلعب الدولار الأمريكي دورًا مهمًا؟",
          p2a:
            "بما أن الذهب يتم تسعيره عالميًا بالدولار الأمريكي، فإن قوة الدولار أو ضعفه تؤثر بشكل مباشر على سعر الذهب. عندما يرتفع الدولار، يصبح شراء الذهب أكثر تكلفة على المستثمرين الذين يستخدمون عملات أخرى، مما قد يضعف الطلب ويضغط على السعر.",
          p2b:
            "أما عندما يضعف الدولار، يصبح الذهب أرخص نسبيًا للمشترين خارج الولايات المتحدة، مما قد يزيد الإقبال عليه ويدعم ارتفاعه. ولهذا السبب يراقب المستثمرون حركة الدولار بشكل دائم عند تحليل اتجاه الذهب.",

          h3: "كيف يؤثر العرض والطلب على الذهب؟",
          p3a:
            "مثل أي سلعة عالمية، يتأثر الذهب أيضًا بحجم العرض والطلب. عندما يرتفع الطلب على الذهب من المستثمرين أو البنوك المركزية أو الأسواق الاستهلاكية مثل المجوهرات، قد يرتفع السعر. وعندما يضعف الطلب أو يزيد المعروض، قد ينخفض السعر.",
          p3b:
            "ولا يقتصر الطلب على المستثمرين فقط، بل يشمل أيضًا الصناعات، واحتياطيات البنوك المركزية، والأسواق التي يزداد فيها استهلاك الذهب في المواسم والمناسبات. لذلك فإن التغير في شهية الشراء العالمية ينعكس بشكل واضح على الأسعار.",

          h4: "تأثير أسعار الفائدة",
          p4a:
            "تلعب أسعار الفائدة دورًا مهمًا في تحديد جاذبية الذهب. عندما ترتفع الفائدة، يفضّل بعض المستثمرين التوجه إلى الأصول التي تعطي عائدًا مثل الودائع والسندات، مما يقلل جاذبية الذهب لأنه لا يدر عائدًا مباشرًا.",
          p4b:
            "أما عندما تنخفض الفائدة، أو تتوقع الأسواق اتجاهًا نحو التيسير النقدي، فقد يعود الذهب ليصبح خيارًا مفضلًا لحفظ القيمة، خاصة إذا كانت هناك مخاوف من تباطؤ اقتصادي أو ضعف في العملات.",

          h5: "دور التضخم في تحريك سعر الذهب",
          p5a:
            "يُعتبر التضخم من أهم العوامل التي تدعم الذهب على المدى المتوسط والطويل. عندما ترتفع الأسعار وتضعف القوة الشرائية للعملات، يتجه بعض المستثمرين إلى الذهب باعتباره وسيلة للحفاظ على القيمة.",
          p5b:
            "لكن التضخم لا يعمل وحده، لأن تأثيره يعتمد أيضًا على رد فعل البنوك المركزية. فإذا ارتفع التضخم وارتفعت معه الفائدة بشكل قوي، فقد يستفيد الدولار مؤقتًا ويضغط على الذهب. لذلك يجب فهم العلاقة بين التضخم والفائدة معًا.",

          h6: "التوترات والأزمات العالمية",
          p6a:
            "في أوقات الحروب أو الأزمات السياسية والاقتصادية، يزداد توجه المستثمرين نحو الذهب لأنه يُعتبر ملاذًا آمنًا. وعندما ترتفع حالة عدم اليقين، يزداد الطلب عليه بسرعة، وقد ترتفع أسعاره خلال فترات قصيرة.",
          p6b:
            "لذلك نلاحظ أن الذهب يتحرك أحيانًا بقوة عند صدور أخبار تتعلق بالتوترات الجيوسياسية أو الاضطرابات المالية أو المخاوف من الركود العالمي، لأن المستثمرين يبحثون عن أصول أكثر استقرارًا.",

          h7: "كيف يتم تحويل السعر العالمي إلى السعر المحلي؟",
          p7a:
            "بعد تحديد السعر العالمي للأونصة، يتم تحويله إلى السعر المحلي في كل دولة بناءً على سعر صرف العملة المحلية مقابل الدولار. ثم قد تُضاف بعض التكاليف الأخرى مثل رسوم التصنيع، والضرائب، وفروقات السوق المحلية.",
          p7b:
            "ولهذا قد يختلف سعر الذهب من بلد إلى آخر، أو حتى من متجر إلى آخر داخل الدولة نفسها، رغم أن المرجع الأساسي يبقى هو السعر العالمي. كما يختلف السعر أيضًا بحسب العيار ونوع المنتج، سواء كان سبائك أو عملات أو مجوهرات.",

          h8: "الخلاصة",
          p8a:
            "سعر الذهب لا يعتمد على عامل واحد فقط، بل هو نتيجة تفاعل عدة عناصر مثل السعر العالمي للأونصة، وقوة الدولار، والعرض والطلب، وأسعار الفائدة، والتضخم، والأحداث العالمية. ولهذا فإن تغير السعر اليومي يعكس صورة أوسع من مجرد حركة بسيطة في السوق.",
          p8b:
            "فهم هذه العوامل يساعدك على تحليل السوق بشكل أفضل واتخاذ قرارات أكثر وعيًا، سواء كنت تتابع الذهب بهدف الشراء، أو الادخار، أو الاستثمار، بدل الاعتماد على مراقبة الأرقام اليومية فقط.",

          note:
            "تنويه: هذا المقال لأغراض معلوماتية فقط ولا يُعد نصيحة استثمارية أو مالية.",
        }
      : {
          back: "Back to Blog",
          switch: "العربية",
          title: "How Is the Global Gold Price Determined?",
          dateLabel: "Published on",
          dateValue: "03/23/2026",

          intro1:
            "Many people wonder how gold prices are determined around the world each day. Although the market often shows a single number, that figure is actually the result of several connected economic and financial factors, including the global market, the strength of the US dollar, supply and demand, and broader political and economic conditions.",
          intro2:
            "Understanding these factors helps readers interpret the gold market more clearly instead of only watching the daily number. The price seen in stores or websites does not come from one source alone. It is shaped by global benchmarks first, then adjusted locally based on currency values, fees, and market conditions in each country.",

          h1: "What Is the Global Ounce Price?",
          p1a:
            "The first foundation of gold pricing is the global ounce price traded in international financial markets such as New York and London. An ounce is the main pricing unit for gold and equals about 31.1 grams, making it the global benchmark used by institutions, investors, and central banks.",
          p1b:
            "This price changes continuously throughout the day depending on trading activity, investor expectations, and economic news. So when people say that gold has risen or fallen globally, they are usually referring to changes in the international ounce price.",

          h2: "Why Does the US Dollar Matter?",
          p2a:
            "Because gold is priced globally in US dollars, the strength or weakness of the dollar directly affects gold prices. When the dollar rises, gold becomes more expensive for buyers using other currencies, which can reduce demand and put pressure on prices.",
          p2b:
            "When the dollar weakens, gold becomes relatively cheaper for buyers outside the United States, which can improve demand and support higher prices. That is why investors constantly monitor the dollar when analyzing gold.",

          h3: "How Do Supply and Demand Affect Gold?",
          p3a:
            "Like any global commodity, gold is also influenced by supply and demand. When demand from investors, central banks, or consumer markets such as jewelry rises, gold prices may increase. When demand weakens or supply expands, prices may fall.",
          p3b:
            "Demand does not come only from investors. It also comes from industry, central bank reserves, and consumer buying in key markets during peak seasons and special occasions. Changes in global buying interest can therefore have a clear impact on price.",

          h4: "The Effect of Interest Rates",
          p4a:
            "Interest rates play an important role in determining gold’s appeal. When interest rates rise, some investors prefer assets that generate returns, such as deposits and bonds, which can reduce the attractiveness of gold because gold itself does not provide direct yield.",
          p4b:
            "When rates fall, or when markets expect easier monetary policy, gold may become more attractive again as a store of value, especially during concerns about slower growth or weaker currencies.",

          h5: "The Role of Inflation in Gold Prices",
          p5a:
            "Inflation is one of the most important long-term supports for gold. When prices rise and currencies lose purchasing power, some investors turn to gold as a way to preserve value.",
          p5b:
            "However, inflation does not work alone. Its effect also depends on how central banks respond. If inflation rises and interest rates rise sharply as well, the dollar may benefit in the short term and pressure gold. That is why inflation and rates should be understood together.",

          h6: "Global Crises and Political Tensions",
          p6a:
            "During wars, political tensions, and economic crises, investors often move toward gold because it is considered a safe-haven asset. When uncertainty rises, demand for gold can increase quickly and prices may move sharply higher.",
          p6b:
            "This is why gold often reacts strongly to geopolitical headlines, financial instability, or recession fears, as investors look for assets that are seen as more stable during uncertain times.",

          h7: "How Is the Global Price Converted into Local Prices?",
          p7a:
            "After the global ounce price is set, it is converted into local prices in each country based on the exchange rate of the local currency against the US dollar. Additional costs may then be added, such as manufacturing charges, taxes, and local market premiums.",
          p7b:
            "That is why gold prices can vary from one country to another, or even from one store to another in the same country, even though the global benchmark is the same. The final price also differs depending on karat and product type, whether it is bullion, coins, or jewelry.",

          h8: "Conclusion",
          p8a:
            "Gold prices are not determined by a single factor. They are the result of several interacting elements, including the global ounce price, the strength of the US dollar, supply and demand, interest rates, inflation, and major global events. Daily price changes therefore reflect a much broader market picture.",
          p8b:
            "Understanding these factors helps readers analyze the market more clearly and make better-informed decisions, whether they are following gold for buying, saving, or investing, rather than relying only on daily numbers.",

          note:
            "Disclaimer: This article is for informational purposes only and does not constitute financial or investment advice.",
        };

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
            <h1 className="text-3xl font-bold leading-tight text-amber-300 md:text-4xl">
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
