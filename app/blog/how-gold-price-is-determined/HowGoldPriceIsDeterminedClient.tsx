"use client";

import { useState } from "react";

export default function HowGoldPriceIsDeterminedClient() {
  const [lang, setLang] = useState("ar");

  const t =
    lang === "ar"
      ? {
          back: "← الرجوع إلى المدونة",
          switch: "English",
          title: "كيف يتم تحديد سعر الذهب عالميًا؟",
          intro:
            "يتساءل كثير من الناس عن الطريقة التي يتم بها تحديد سعر الذهب يوميًا حول العالم. ورغم أن السعر يظهر كرقم واحد في الأسواق، إلا أنه في الحقيقة يتأثر بعدة عوامل مترابطة تشمل السوق العالمي، الدولار الأمريكي، العرض والطلب، والعوامل الاقتصادية والسياسية.",
          h1: "1. السعر العالمي للأونصة",
          p1:
            "الأساس الأول في تحديد سعر الذهب هو السعر العالمي للأونصة، والذي يتم تداوله في الأسواق العالمية. الأونصة هي الوحدة الأساسية التي يعتمد عليها المستثمرون والمؤسسات في تسعير الذهب.",
          h2: "2. الدولار الأمريكي",
          p2:
            "بما أن الذهب يتم تسعيره عالميًا بالدولار الأمريكي، فإن قوة الدولار أو ضعفه تؤثر مباشرة على سعر الذهب. عندما يرتفع الدولار، قد يتعرض الذهب للضغط، وعندما يضعف الدولار قد يصبح الذهب أكثر جاذبية.",
          h3: "3. العرض والطلب",
          p3:
            "مثل أي سلعة عالمية، يتأثر الذهب بحجم العرض والطلب. عندما يزيد الطلب على الذهب من المستثمرين أو البنوك المركزية أو الأسواق الاستهلاكية، قد يرتفع السعر. وعندما يضعف الطلب أو يزيد المعروض، قد ينخفض.",
          h4: "4. أسعار الفائدة والتضخم",
          p4:
            "أسعار الفائدة المرتفعة تقلل عادة من جاذبية الذهب مقارنة بالأصول ذات العائد. أما التضخم المرتفع، فيدفع كثيرًا من المستثمرين إلى الذهب كوسيلة للحفاظ على القيمة.",
          h5: "5. التوترات والأزمات العالمية",
          p5:
            "في أوقات الحروب أو الأزمات السياسية والاقتصادية، يميل المستثمرون إلى الاتجاه نحو الذهب باعتباره ملاذًا آمنًا. لذلك قد ترتفع أسعاره بسرعة خلال فترات عدم الاستقرار.",
          h6: "6. التحويل إلى السعر المحلي",
          p6:
            "بعد تحديد السعر العالمي، يتم تحويله إلى السعر المحلي في كل دولة بحسب سعر صرف العملة المحلية، ثم تُضاف أحيانًا رسوم التصنيع أو فروقات السوق المحلية حسب نوع المنتج والبلد.",
          h7: "الخلاصة",
          p7:
            "سعر الذهب لا يعتمد على عامل واحد فقط، بل هو نتيجة تفاعل السوق العالمي مع الدولار والفائدة والتضخم والعرض والطلب. فهم هذه العوامل يساعدك على قراءة السوق بشكل أوضح بدل متابعة الأرقام فقط.",
          note:
            "تنويه: هذا المقال لأغراض معلوماتية فقط ولا يُعد نصيحة استثمارية أو مالية.",
        }
      : {
          back: "← Back to Blog",
          switch: "العربية",
          title: "How Is the Global Gold Price Determined?",
          intro:
            "Many people wonder how gold prices are determined worldwide each day. Although the market shows a single number, that price is actually influenced by multiple connected factors including the global spot price, the US dollar, supply and demand, and wider economic and political conditions.",
          h1: "1. The Global Ounce Price",
          p1:
            "The first foundation of gold pricing is the global ounce price traded in international markets. The ounce is the key pricing unit used by investors, institutions, and financial markets.",
          h2: "2. The US Dollar",
          p2:
            "Because gold is globally priced in US dollars, the strength or weakness of the dollar directly affects gold prices. A stronger dollar often puts pressure on gold, while a weaker dollar can make gold more attractive.",
          h3: "3. Supply and Demand",
          p3:
            "Like any global commodity, gold is influenced by supply and demand. When investor demand, central bank purchases, or consumer demand increases, prices may rise. When demand weakens or supply expands, prices may fall.",
          h4: "4. Interest Rates and Inflation",
          p4:
            "Higher interest rates usually reduce gold’s appeal compared with yield-producing assets. On the other hand, higher inflation often increases interest in gold as a store of value.",
          h5: "5. Global Crises and Tensions",
          p5:
            "During wars, geopolitical tensions, or economic instability, investors often move toward gold as a safe-haven asset. This is why gold prices can rise quickly during uncertain periods.",
          h6: "6. Conversion to Local Prices",
          p6:
            "After the global price is set, it is converted into local prices in each country based on exchange rates. Local market differences, premiums, and manufacturing fees may also affect the final retail price.",
          h7: "Conclusion",
          p7:
            "Gold prices are not driven by a single factor. They result from the interaction of the global market, the US dollar, interest rates, inflation, and supply and demand. Understanding these factors gives you a clearer view of the market beyond just watching numbers.",
          note:
            "Disclaimer: This article is for informational purposes only and does not constitute financial or investment advice.",
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
          <h1 className="mb-6 text-3xl font-bold leading-tight text-amber-300 md:text-4xl">
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

            <div>
              <h2 className="mb-3 text-2xl font-semibold">{t.h7}</h2>
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
