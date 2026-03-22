"use client";

import { useState } from "react";

export default function DollarImpactGoldClient() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const content = {
    ar: {
      title: "كيف يؤثر الدولار الأمريكي على سعر الذهب؟",
      dateLabel: "تاريخ النشر",
      dateValue: "23/03/2026",
      back: "الرجوع إلى المقالات",
      switch: "English",

      intro1:
        "يُعتبر الذهب والدولار الأمريكي من أهم الأصول في الاقتصاد العالمي، وغالبًا ما توجد علاقة عكسية بينهما. هذه العلاقة ليست مجرد ملاحظة متكررة في الأسواق، بل ترتبط بطريقة تسعير الذهب عالميًا، وحركة الفائدة الأمريكية، ومدى إقبال المستثمرين على الأصول الآمنة في أوقات التقلبات.",
      intro2:
        "عندما يرتفع الدولار، يميل الذهب في كثير من الحالات إلى التراجع، وعندما يضعف الدولار، يزداد الطلب على الذهب ويميل سعره إلى الارتفاع. لكن هذه العلاقة لا تعمل وحدها، بل تتأثر أيضًا بعوامل اقتصادية أخرى مثل التضخم، وسياسات البنوك المركزية، والتوترات الجيوسياسية، وثقة المستثمرين في الأسواق.",

      h1: "لماذا يتم تسعير الذهب بالدولار؟",
      p1a:
        "يتم تداول الذهب عالميًا بالدولار الأمريكي في الأسواق الدولية مثل بورصة نيويورك وسوق لندن. وبما أن الدولار هو العملة الرئيسية في التجارة العالمية والاحتياطيات الدولية، فقد أصبح المقياس الأساسي لتسعير الذهب والمعادن والسلع الأخرى.",
      p1b:
        "لهذا السبب، أي تغيير في قيمة الدولار ينعكس بشكل مباشر على الذهب. فإذا ارتفعت قيمة الدولار، يصبح الذهب أعلى تكلفة على المشترين من خارج الولايات المتحدة الذين يستخدمون عملات أخرى، وقد يؤدي ذلك إلى تراجع الطلب. أما إذا ضعف الدولار، يصبح شراء الذهب أسهل نسبيًا للمستثمرين عالميًا، مما قد يدعم ارتفاع السعر.",

      h2: "ما طبيعة العلاقة بين الذهب والدولار؟",
      p2a:
        "العلاقة الأكثر شيوعًا بين الذهب والدولار هي العلاقة العكسية. بمعنى أنه عندما يقوى الدولار، يتعرض الذهب غالبًا لضغط هبوطي، وعندما يتراجع الدولار، يستفيد الذهب من زيادة الإقبال عليه. ويرجع ذلك إلى أن المستثمرين ينظرون إلى كل من الذهب والدولار أحيانًا كأداتين مختلفتين لحفظ القيمة، فيتنقل جزء من السيولة بينهما بحسب ظروف السوق.",
      p2b:
        "مع ذلك، لا بد من الانتباه إلى أن هذه العلاقة ليست ثابتة دائمًا. ففي بعض الفترات قد يرتفع الدولار والذهب معًا، خاصة عندما تكون هناك مخاوف اقتصادية عالمية كبيرة تدفع المستثمرين إلى البحث عن الأمان في أكثر من أصل في الوقت نفسه. لذلك من الأفضل فهم العلاقة باعتبارها اتجاهًا شائعًا، لا قاعدة مطلقة في كل يوم وكل ظرف.",

      h3: "كيف تؤثر أسعار الفائدة الأمريكية؟",
      p3a:
        "أسعار الفائدة من أهم العوامل التي تربط الدولار بالذهب. عندما يرفع الاحتياطي الفيدرالي الأمريكي أسعار الفائدة، يصبح الاحتفاظ بالدولار أو بالأدوات المرتبطة به أكثر جاذبية للمستثمرين، لأن العائد يصبح أعلى. هذا الأمر قد يدعم قوة الدولار ويقلل في المقابل من جاذبية الذهب، لأن الذهب أصل لا يدر عائدًا مباشرًا مثل الودائع أو السندات.",
      p3b:
        "أما عندما تبدأ الفائدة في الانخفاض، أو عندما تتوقع الأسواق أن الفيدرالي سيتجه إلى التيسير، فإن الدولار قد يضعف نسبيًا، ويعود الذهب إلى الواجهة كخيار مفضل لحفظ القيمة والتحوط من التقلبات والتضخم. ولهذا يراقب المستثمرون دائمًا قرارات الفائدة الأمريكية ومحاضر الاجتماعات والتصريحات الرسمية لأنها قد تؤثر على السوق بسرعة.",

      h4: "هل التضخم يدعم الذهب؟",
      p4a:
        "نعم، غالبًا ما يُنظر إلى الذهب على أنه وسيلة للتحوط من التضخم. عندما ترتفع الأسعار وتضعف القوة الشرائية للعملات، يتجه بعض المستثمرين إلى الذهب باعتباره مخزنًا للقيمة على المدى الطويل. وفي هذه الحالة، قد يرتفع الذهب حتى لو كانت هناك عوامل أخرى تضغط عليه، لأن المخاوف من التضخم ترفع الطلب عليه.",
      p4b:
        "لكن تأثير التضخم لا يُقرأ وحده، بل يجب ربطه أيضًا برد فعل البنوك المركزية. فإذا ارتفع التضخم لكن الفائدة ارتفعت بقوة أيضًا، فقد يستفيد الدولار مؤقتًا ويضغط على الذهب. لذلك فإن قراءة السوق تحتاج إلى النظر للصورة كاملة بدل الاعتماد على عامل منفرد.",

      h5: "الذهب كملاذ آمن في أوقات الأزمات",
      p5a:
        "من أهم أسباب متابعة العلاقة بين الذهب والدولار أن الذهب يُعتبر ملاذًا آمنًا في أوقات عدم اليقين. عند وقوع أزمات مالية، أو توترات سياسية، أو مخاوف من ركود اقتصادي، يميل المستثمرون إلى تقليل المخاطرة والبحث عن أصول أكثر استقرارًا، ويكون الذهب من أبرز هذه الخيارات.",
      p5b:
        "في مثل هذه الفترات قد نرى الذهب يرتفع حتى لو لم يكن الدولار ضعيفًا بشكل واضح، لأن عامل الأمان يصبح أقوى من العوامل التقليدية الأخرى. لذلك فإن الأحداث العالمية مثل الحروب، والأزمات البنكية، والتباطؤ الاقتصادي، قد تؤثر بقوة على اتجاه الذهب خلال فترات قصيرة.",

      h6: "هل يمكن الاعتماد على حركة الدولار لتوقع الذهب؟",
      p6a:
        "نعم، مراقبة الدولار تساعد كثيرًا في فهم الاتجاه العام للذهب، لكنها ليست كافية وحدها لاتخاذ قرار استثماري كامل. المستثمر الذكي يتابع أيضًا أسعار الفائدة، والتضخم، وبيانات الوظائف الأمريكية، وقرارات البنوك المركزية، وحجم الطلب العالمي على الذهب، إضافة إلى حالة الأسواق المالية بشكل عام.",
      p6b:
        "لهذا السبب، فإن أفضل طريقة لفهم حركة الذهب هي تحليل مجموعة عوامل معًا، وليس الاكتفاء بقراءة مؤشر واحد فقط. الدولار عنصر مهم جدًا، لكنه جزء من صورة أوسع وأشمل.",

      h7: "الخلاصة",
      p7a:
        "العلاقة بين الدولار الأمريكي وسعر الذهب من أهم العلاقات في الأسواق العالمية. في الظروف العادية، يؤدي ارتفاع الدولار إلى الضغط على الذهب، بينما يساعد ضعف الدولار على دعمه ورفع الطلب عليه. كما تلعب أسعار الفائدة والتضخم والأزمات العالمية دورًا مهمًا في تحديد قوة هذه العلاقة من وقت لآخر.",
      p7b:
        "فهم هذه العوامل يساعد القارئ والمستثمر على قراءة السوق بصورة أفضل، ويجعل متابعة أسعار الذهب أكثر وضوحًا وعمقًا بدل الاكتفاء بمراقبة السعر اليومي فقط.",
    },

    en: {
      title: "How Does the US Dollar Affect Gold Prices?",
      dateLabel: "Published on",
      dateValue: "03/23/2026",
      back: "Back to Articles",
      switch: "العربية",

      intro1:
        "Gold and the US dollar are among the most important assets in the global economy, and they often have an inverse relationship. This is not just a repeated market observation, but a result of how gold is priced globally, how US interest rates move, and how investors react during periods of uncertainty.",
      intro2:
        "When the dollar rises, gold often comes under pressure. When the dollar weakens, demand for gold tends to improve and prices may rise. However, this relationship does not work alone. It is also influenced by inflation, central bank policy, geopolitical tensions, and overall investor confidence.",

      h1: "Why Is Gold Priced in US Dollars?",
      p1a:
        "Gold is traded globally in US dollars in major international markets such as New York and London. Since the dollar is the main currency used in global trade and reserves, it has become the standard pricing unit for gold and many other commodities.",
      p1b:
        "For that reason, any change in the value of the dollar can directly affect gold prices. If the dollar becomes stronger, gold becomes more expensive for buyers using other currencies, which may reduce demand. If the dollar weakens, gold becomes relatively cheaper for global investors, which can support higher prices.",

      h2: "What Is the Relationship Between Gold and the Dollar?",
      p2a:
        "The most common relationship between gold and the US dollar is an inverse one. When the dollar strengthens, gold often faces downward pressure. When the dollar weakens, gold may benefit from stronger demand. This happens because investors sometimes view both gold and the dollar as different ways to preserve value, and capital can move between them depending on market conditions.",
      p2b:
        "Still, this relationship is not always fixed. There are periods when both gold and the dollar rise together, especially during major global uncertainty when investors seek safety in more than one asset at the same time. So it is better to treat this as a common pattern, not a strict rule in every situation.",

      h3: "How Do US Interest Rates Affect Gold?",
      p3a:
        "Interest rates are one of the most important links between the dollar and gold. When the US Federal Reserve raises interest rates, holding dollars or dollar-based assets becomes more attractive because returns improve. This can support the dollar and reduce the appeal of gold, since gold does not generate direct income like deposits or bonds.",
      p3b:
        "When rates begin to fall, or when markets expect the Fed to move toward easing, the dollar may weaken and gold can become more attractive again as a store of value and a hedge against uncertainty and inflation. That is why investors watch Federal Reserve decisions, meeting minutes, and official statements very closely.",

      h4: "Does Inflation Support Gold?",
      p4a:
        "Yes, gold is often seen as a hedge against inflation. When prices rise and the purchasing power of currencies weakens, some investors move into gold as a long-term store of value. In that environment, gold may rise even when other factors create pressure, because inflation concerns increase demand for safe assets.",
      p4b:
        "However, inflation should not be viewed in isolation. It must also be considered alongside central bank reactions. If inflation rises but interest rates rise sharply as well, the dollar may benefit in the short term and put pressure on gold. That is why reading the whole picture is more useful than relying on a single factor.",

      h5: "Gold as a Safe-Haven Asset in Times of Crisis",
      p5a:
        "One important reason investors watch the gold-dollar relationship is that gold is widely considered a safe-haven asset during uncertain times. In financial crises, political tension, or fears of recession, investors often reduce risk and move toward more stable assets, with gold being one of the most important choices.",
      p5b:
        "During such periods, gold may rise even if the dollar is not clearly weak, because the search for safety becomes a stronger driver than traditional market relationships. Global events such as wars, banking stress, and economic slowdowns can therefore have a major short-term impact on gold.",

      h6: "Can Dollar Movements Be Used to Predict Gold?",
      p6a:
        "Yes, watching the dollar can help explain the broader direction of gold, but it is not enough on its own for a complete investment decision. Smart investors also follow interest rates, inflation, US labor data, central bank policy, global gold demand, and overall market sentiment.",
      p6b:
        "For that reason, the best way to understand gold is to analyze several factors together rather than depending on one indicator alone. The dollar is very important, but it is still only one part of a much bigger picture.",

      h7: "Conclusion",
      p7a:
        "The relationship between the US dollar and gold prices is one of the most important dynamics in global markets. Under normal conditions, a stronger dollar tends to pressure gold, while a weaker dollar can support gold and increase demand. Interest rates, inflation, and global crises also play a major role in shaping how strong this relationship becomes over time.",
      p7b:
        "Understanding these factors helps readers and investors interpret the market more clearly and makes following gold prices more meaningful than simply watching the daily price alone.",
    },
  };

  const t = content[lang];

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-black px-6 py-10 text-white"
    >
      <article className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between gap-3">
          <a
            href="/blog"
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:bg-white/10"
          >
            {lang === "ar" ? "→" : "←"} {t.back}
          </a>

          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="rounded-xl border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm text-amber-200 hover:bg-amber-300/20"
          >
            {t.switch}
          </button>
        </div>

        <header className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold leading-tight text-amber-300 md:text-4xl">
            {t.title}
          </h1>

          <p className="text-sm text-zinc-400">
            {t.dateLabel}: {t.dateValue}
          </p>
        </header>

        <div className="space-y-6 leading-8 text-zinc-200">
          <p>{t.intro1}</p>
          <p>{t.intro2}</p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-300 md:text-2xl">
              {t.h1}
            </h2>
            <p>{t.p1a}</p>
            <p>{t.p1b}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-300 md:text-2xl">
              {t.h2}
            </h2>
            <p>{t.p2a}</p>
            <p>{t.p2b}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-300 md:text-2xl">
              {t.h3}
            </h2>
            <p>{t.p3a}</p>
            <p>{t.p3b}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-300 md:text-2xl">
              {t.h4}
            </h2>
            <p>{t.p4a}</p>
            <p>{t.p4b}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-300 md:text-2xl">
              {t.h5}
            </h2>
            <p>{t.p5a}</p>
            <p>{t.p5b}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-300 md:text-2xl">
              {t.h6}
            </h2>
            <p>{t.p6a}</p>
            <p>{t.p6b}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-300 md:text-2xl">
              {t.h7}
            </h2>
            <p>{t.p7a}</p>
            <p>{t.p7b}</p>
          </section>
        </div>
      </article>
    </main>
  );
}
