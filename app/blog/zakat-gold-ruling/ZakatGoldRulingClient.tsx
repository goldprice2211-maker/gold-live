"use client";

import { useState } from "react";

export default function ZakatGoldRulingClient() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const content = {
    ar: {
      back: "الرجوع إلى المدونة",
      switch: "English",
      title: "حكم زكاة الذهب في الإسلام",
      dateLabel: "تاريخ النشر",
      dateValue: "23/03/2026",

      intro1:
        "زكاة الذهب من الأحكام المهمة التي يبحث عنها كثير من الناس، خاصة مع اختلاف أسعار الذهب ووجود الذهب للادخار أو الزينة. ومع انتشار شراء الذهب لأغراض متعددة، يزداد السؤال حول متى تجب الزكاة، وما هو النصاب، وكيف يتم حسابها بطريقة صحيحة ومبسطة.",
      intro2:
        "في هذا المقال نوضح أهم الأحكام العامة المتعلقة بزكاة الذهب، مع شرح مبسط للنصاب، ومقدار الزكاة، وحكم الذهب المعد للزينة، وطريقة الحساب، حتى تكون الصورة أوضح للقارئ قبل الرجوع إلى الفتوى المناسبة لحالته الخاصة.",

      h1: "ما حكم زكاة الذهب؟",
      p1a:
        "زكاة الذهب واجبة إذا بلغ الذهب النصاب الشرعي، وحال عليه الحول، وكان من الأموال التي تجب فيها الزكاة. والأصل في ذلك أن الذهب من الأموال الزكوية إذا كان محفوظًا للادخار أو الاستثمار أو تنمية المال.",
      p1b:
        "أما إذا كان الذهب مملوكًا لغرض الزينة والاستعمال الشخصي، فالمسألة فيها تفصيل معروف بين أهل العلم. لذلك من المهم التفريق بين الذهب المحتفظ به كمال مدخر، وبين الذهب المقتنى للاستعمال المعتاد.",

      h2: "ما هو نصاب الذهب؟",
      p2a:
        "نصاب الذهب المشهور عند كثير من أهل العلم هو 85 جرامًا من الذهب الخالص عيار 24. فإذا بلغ ما يملكه الشخص هذا المقدار أو أكثر، ومر عليه عام هجري كامل، فقد تجب فيه الزكاة عند تحقق الشروط الأخرى.",
      p2b:
        "ويُقصد بالنصاب الحد الأدنى الذي إذا بلغه المال بدأت أحكام الزكاة تتعلق به. ولهذا فإن أول خطوة قبل الحساب هي التأكد من أن كمية الذهب أو قيمته بلغت النصاب الشرعي.",

      h3: "كم مقدار زكاة الذهب؟",
      p3a:
        "مقدار زكاة الذهب هو 2.5% من القيمة الإجمالية للذهب عند تمام الحول، أي ربع العشر. ويمكن إخراجها نقدًا بناءً على سعر الذهب وقت وجوب الزكاة، أو إخراجها من الذهب نفسه عند الحاجة.",
      p3b:
        "والطريقة الأكثر شيوعًا هي حساب القيمة الحالية للذهب وقت وجوب الزكاة، ثم إخراج 2.5% من هذه القيمة. وهذا يجعل الحساب أوضح وأسهل، خصوصًا لمن يحتفظ بالذهب بأوزان أو عيارات مختلفة.",

      h4: "مثال مبسط على حساب زكاة الذهب",
      p4a:
        "إذا كان عند شخص 100 جرام من الذهب، وسعر الجرام 240 درهمًا، فإن القيمة الإجمالية تساوي 24,000 درهم. وتكون الزكاة الواجبة 2.5% من هذا المبلغ، أي 600 درهم.",
      p4b:
        "هذا المثال يوضح أن الزكاة لا تُحسب فقط على الوزن المجرد، بل على القيمة الإجمالية وقت إخراج الزكاة. لذلك قد يختلف مقدار الزكاة من سنة إلى أخرى بحسب تغير سعر الذهب في السوق.",

      h5: "هل الذهب المعد للزينة فيه زكاة؟",
      p5a:
        "هذه المسألة فيها خلاف معروف بين أهل العلم. بعضهم يرى وجوب الزكاة في الذهب مطلقًا إذا بلغ النصاب، سواء كان للادخار أو الزينة، وبعضهم يرى أن الذهب المعد للاستعمال والزينة لا زكاة فيه إذا كان في حدود المعتاد.",
      p5b:
        "ولهذا يُرجع في هذه المسألة إلى فتوى موثوقة تناسب حال الشخص وبلده ومذهبه الفقهي المعتمد. فالمقال هنا يشرح الحكم العام، لكن الفتوى الخاصة قد تختلف باختلاف تفاصيل الاستعمال والنية والعرف.",

      h6: "متى تجب زكاة الذهب؟",
      p6a:
        "تجب زكاة الذهب عند تحقق شرطين أساسيين: بلوغ النصاب، ومرور حول هجري كامل على امتلاك الذهب. فإذا تحقق النصاب ولم يمر الحول، فلا تجب الزكاة بعد. وإذا مر الحول لكن الذهب لم يبلغ النصاب، فلا تجب كذلك.",
      p6b:
        "ولهذا يفضل كثير من الناس تحديد يوم معين من السنة الهجرية لمراجعة ما يملكونه من الذهب وحساب الزكاة المستحقة، لأن ذلك يسهل المتابعة ويمنع نسيان الموعد.",

      h7: "كيف أحسب زكاة الذهب بسهولة؟",
      p7a:
        "لحساب زكاة الذهب بطريقة مبسطة، احسب أولًا الوزن الإجمالي للذهب، ثم تأكد من بلوغه النصاب، وبعد ذلك احسب قيمته حسب سعر السوق وقت وجوب الزكاة، ثم استخرج 2.5% من القيمة الإجمالية.",
      p7b:
        "ولتسهيل الأمر، وفرنا في الموقع حاسبة زكاة الذهب التي تساعدك على إدخال الوزن والعيار، ثم حساب القيمة التقديرية والزكاة الواجبة بشكل مباشر. هذه الأداة مفيدة للتقدير السريع، خاصة لمن يريد نتيجة واضحة دون حساب يدوي.",

      faqTitle: "أسئلة شائعة",
      faq1Q: "ما هو نصاب الذهب؟",
      faq1A:
        "النصاب المشهور عند كثير من أهل العلم هو 85 جرامًا من الذهب الخالص عيار 24.",
      faq2Q: "كم مقدار زكاة الذهب؟",
      faq2A:
        "زكاة الذهب هي 2.5% من القيمة الإجمالية للذهب إذا بلغ النصاب وحال عليه الحول.",
      faq3Q: "هل الذهب المستعمل للزينة فيه زكاة؟",
      faq3A:
        "هذه المسألة فيها خلاف بين أهل العلم، لذلك الأفضل الرجوع إلى فتوى موثوقة تناسب حال الشخص وبلده.",

      cta: "احسب زكاة الذهب الآن",
      noteTitle: "تنبيه مهم",
      noteBody:
        "هذا المقال للتوعية العامة فقط، وليس فتوى شرعية خاصة. عند وجود تفاصيل خاصة بحالتك، أو اختلاف في نية اقتناء الذهب، أو وجود ذهب للزينة والاستعمال، فالأفضل سؤال جهة إفتاء موثوقة.",
    },

    en: {
      back: "Back to blog",
      switch: "العربية",
      title: "The Ruling on Gold Zakat in Islam",
      dateLabel: "Published on",
      dateValue: "03/23/2026",

      intro1:
        "Gold zakat is an important topic that many people search for, especially with changing gold prices and the difference between gold kept for savings and gold used for jewelry. As people buy gold for different purposes, questions often arise about when zakat becomes due, what the nisab is, and how it should be calculated correctly.",
      intro2:
        "In this article, we explain the main general rulings related to gold zakat in a simple way, including the nisab, the zakat rate, the ruling on jewelry gold, and an easy method of calculation. This helps readers understand the topic more clearly before referring to a trusted religious opinion for their specific case.",

      h1: "What Is the Ruling on Gold Zakat?",
      p1a:
        "Gold zakat becomes obligatory when the owned gold reaches the nisab, a lunar year passes, and the gold is among the assets on which zakat is due. In principle, gold kept for savings, investment, or wealth preservation is subject to zakat.",
      p1b:
        "If the gold is owned for personal use or adornment, the matter involves a known scholarly difference. For this reason, it is important to distinguish between gold kept as stored wealth and gold acquired for ordinary personal use.",

      h2: "What Is the Nisab of Gold?",
      p2a:
        "The commonly cited nisab for gold among many scholars is 85 grams of pure 24K gold. If a person owns this amount or more, and a lunar year has passed, zakat may become due when the other conditions are met.",
      p2b:
        "Nisab means the minimum threshold that wealth must reach before zakat becomes applicable. That is why the first step in calculation is always to make sure the amount or value of the gold has reached the required threshold.",

      h3: "How Much Is Gold Zakat?",
      p3a:
        "Gold zakat is 2.5% of the total value of the gold once one lunar year has passed. It may be paid in cash based on the gold price at the time zakat becomes due, or from the gold itself when appropriate.",
      p3b:
        "The most common method is to calculate the current value of the gold and then pay 2.5% of that value. This makes the calculation easier and clearer, especially when a person owns different weights or karats of gold.",

      h4: "A Simple Example of Gold Zakat Calculation",
      p4a:
        "If someone owns 100 grams of gold and the gram price is 240 dirhams, the total value is 24,000 dirhams. The due zakat is 2.5% of that amount, which equals 600 dirhams.",
      p4b:
        "This example shows that zakat is not based only on weight, but on the full market value at the time zakat becomes due. That is why the zakat amount can vary from one year to another as gold prices change.",

      h5: "Is Jewelry Gold Subject to Zakat?",
      p5a:
        "This issue is subject to a well-known scholarly difference. Some scholars consider all gold zakatable if it reaches the nisab, whether kept for savings or worn as jewelry. Others consider personal jewelry exempt if it is within ordinary personal use.",
      p5b:
        "For this reason, it is best to consult a trusted religious authority relevant to your situation, country, and legal school. This article explains the general rule, but a personal fatwa may differ depending on intention, usage, and local practice.",

      h6: "When Does Gold Zakat Become Due?",
      p6a:
        "Gold zakat becomes due when two main conditions are met: the gold reaches the nisab and one full lunar year has passed while owning it. If the nisab is reached but the year has not passed yet, zakat is not due. If the year has passed but the nisab is not reached, zakat is also not due.",
      p6b:
        "That is why many people choose a fixed date each lunar year to review their gold holdings and calculate zakat, making the process easier and reducing the risk of forgetting it.",

      h7: "How Can I Calculate Gold Zakat Easily?",
      p7a:
        "To calculate gold zakat in a simple way, first determine the total weight of the gold, then check whether it has reached the nisab. After that, calculate its value based on the market price at the time zakat becomes due, then take 2.5% of the total value.",
      p7b:
        "To make this easier, we provide a Gold Zakat Calculator on the site where you can enter the weight and karat and get an estimated value and zakat amount directly. This tool is especially useful for quick estimation without manual calculations.",

      faqTitle: "Frequently Asked Questions",
      faq1Q: "What is the nisab of gold?",
      faq1A:
        "The commonly used nisab among many scholars is 85 grams of pure 24K gold.",
      faq2Q: "How much is gold zakat?",
      faq2A:
        "Gold zakat is 2.5% of the total gold value if it reaches the nisab and one lunar year has passed.",
      faq3Q: "Is personal jewelry subject to zakat?",
      faq3A:
        "This issue differs among scholars, so it is best to consult a trusted fatwa authority relevant to your situation and country.",

      cta: "Calculate Gold Zakat Now",
      noteTitle: "Important note",
      noteBody:
        "This article is for general educational purposes only and is not a personalized religious ruling. If your case includes special details, jewelry use, or a different intention in owning gold, it is best to ask a trusted fatwa authority.",
    },
  };

  const t = content[lang];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: t.faq1Q,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.faq1A,
        },
      },
      {
        "@type": "Question",
        name: t.faq2Q,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.faq2A,
        },
      },
      {
        "@type": "Question",
        name: t.faq3Q,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.faq3A,
        },
      },
    ],
  };

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-black px-6 py-12 text-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between gap-3">
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
          <header className="space-y-3">
            <h1 className="text-3xl font-bold text-amber-300 md:text-4xl">
              {t.title}
            </h1>
            <p className="text-sm text-zinc-400">
              {t.dateLabel}: {t.dateValue}
            </p>
          </header>

          <div className="mt-6 space-y-6 leading-8 text-zinc-300">
            <p>{t.intro1}</p>
            <p>{t.intro2}</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-amber-200">{t.h1}</h2>
              <p>{t.p1a}</p>
              <p>{t.p1b}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-amber-200">{t.h2}</h2>
              <p>{t.p2a}</p>
              <p>{t.p2b}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-amber-200">{t.h3}</h2>
              <p>{t.p3a}</p>
              <p>{t.p3b}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-amber-200">{t.h4}</h2>
              <p>{t.p4a}</p>
              <p>{t.p4b}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-amber-200">{t.h5}</h2>
              <p>{t.p5a}</p>
              <p>{t.p5b}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-amber-200">{t.h6}</h2>
              <p>{t.p6a}</p>
              <p>{t.p6b}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-amber-200">{t.h7}</h2>
              <p>{t.p7a}</p>
              <p>{t.p7b}</p>
            </section>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <h2 className="text-2xl font-semibold text-amber-200">
              {t.faqTitle}
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white">{t.faq1Q}</h3>
                <p className="mt-2 text-zinc-300">{t.faq1A}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">{t.faq2Q}</h3>
                <p className="mt-2 text-zinc-300">{t.faq2A}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">{t.faq3Q}</h3>
                <p className="mt-2 text-zinc-300">{t.faq3A}</p>
              </div>
            </div>
          </div>

          <a
            href="/zakat-gold-calculator"
            className="mt-8 inline-flex rounded-2xl border border-amber-300/30 bg-amber-300/10 px-5 py-3 text-amber-200 hover:bg-amber-300/20"
          >
            {t.cta}
          </a>

          <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5">
            <h3 className="text-lg font-semibold text-amber-200">
              {t.noteTitle}
            </h3>
            <p className="mt-2 text-sm leading-7 text-amber-100/90">
              {t.noteBody}
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
