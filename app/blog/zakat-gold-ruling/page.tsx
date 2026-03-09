"use client";

import { useState } from "react";

export default function ZakatGoldRulingPage() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const content = {
    ar: {
      back: "← الرجوع إلى المدونة",
      switch: "English",
      title: "حكم زكاة الذهب في الإسلام",
      intro:
        "زكاة الذهب من الأحكام المهمة التي يبحث عنها كثير من الناس، خاصة مع اختلاف أسعار الذهب ووجود الذهب للادخار أو الزينة. في هذا المقال نوضح متى تجب زكاة الذهب، وما هو النصاب، وكيف يتم حسابها بطريقة مبسطة.",
      h1: "1. ما حكم زكاة الذهب؟",
      p1: "زكاة الذهب واجبة إذا بلغ الذهب النصاب الشرعي، وحال عليه الحول، وكان من الأموال التي تجب فيها الزكاة. والأصل في ذلك أن الذهب من الأموال الزكوية إذا كان محفوظًا للادخار أو الاستثمار.",
      h2: "2. ما هو نصاب الذهب؟",
      p2: "نصاب الذهب المشهور عند كثير من أهل العلم هو 85 جرامًا من الذهب الخالص عيار 24. فإذا بلغ ما يملكه الشخص هذا المقدار أو أكثر، ومر عليه عام هجري كامل، فقد تجب فيه الزكاة.",
      h3: "3. كم مقدار زكاة الذهب؟",
      p3: "مقدار زكاة الذهب هو 2.5% من القيمة الإجمالية للذهب عند تمام الحول. ويمكن إخراجها نقدًا بناءً على سعر الذهب وقت وجوب الزكاة، أو إخراجها من الذهب نفسه عند الحاجة.",
      h4: "4. مثال مبسط",
      p4: "إذا كان عند شخص 100 جرام من الذهب، وسعر الجرام 240 درهمًا، فإن القيمة الإجمالية تساوي 24,000 درهم. وتكون الزكاة الواجبة 2.5% من هذا المبلغ، أي 600 درهم.",
      h5: "5. هل الذهب المعد للزينة فيه زكاة؟",
      p5: "هذه المسألة فيها خلاف معروف بين أهل العلم. بعضهم يرى وجوب الزكاة في الذهب مطلقًا إذا بلغ النصاب، وبعضهم يرى أن الذهب المعد للاستعمال والزينة لا زكاة فيه. لذلك يُرجع في هذه المسألة إلى فتوى موثوقة تناسب حال الشخص وبلده.",
      h6: "6. كيف أحسب زكاة الذهب بسهولة؟",
      p6: "لتسهيل الأمر، وفرنا في الموقع حاسبة زكاة الذهب التي تساعدك على إدخال الوزن والعيار، ثم حساب القيمة التقديرية والزكاة الواجبة بشكل مباشر.",
      cta: "احسب زكاة الذهب الآن",
      noteTitle: "تنبيه مهم",
      noteBody:
        "هذا المقال للتوعية العامة فقط، وليس فتوى شرعية خاصة. عند وجود تفاصيل خاصة بحالتك أو اختلاف في نية اقتناء الذهب، الأفضل سؤال جهة إفتاء موثوقة.",
    },
    en: {
      back: "← Back to blog",
      switch: "العربية",
      title: "The Ruling on Gold Zakat in Islam",
      intro:
        "Gold zakat is an important topic many people search for, especially with changing gold prices and the difference between savings gold and jewelry. In this article, we explain when gold zakat becomes due, what the nisab is, and how it is calculated in a simple way.",
      h1: "1. What is the ruling on gold zakat?",
      p1: "Gold zakat becomes obligatory when the owned gold reaches the nisab, a lunar year passes, and the gold is among the zakatable assets. In principle, gold kept for savings or investment is subject to zakat.",
      h2: "2. What is the nisab of gold?",
      p2: "The commonly used nisab for gold among many scholars is 85 grams of pure 24K gold. If a person owns this amount or more, and a lunar year has passed, zakat may become due.",
      h3: "3. How much is gold zakat?",
      p3: "Gold zakat is 2.5% of the total value of the gold once one lunar year has passed. It may be paid in cash based on the current gold price, or from the gold itself when appropriate.",
      h4: "4. A simple example",
      p4: "If someone owns 100 grams of gold and the gram price is 240 dirhams, the total value is 24,000 dirhams. The due zakat is 2.5% of that amount, which equals 600 dirhams.",
      h5: "5. Is jewelry gold subject to zakat?",
      p5: "This issue is subject to a known scholarly difference. Some scholars consider all gold zakatable if it reaches nisab, while others consider personal jewelry exempt. For this reason, it is best to consult a trusted religious authority relevant to your situation and country.",
      h6: "6. How can I calculate gold zakat easily?",
      p6: "To make things easier, we provide a Gold Zakat Calculator on the site where you can enter the weight and karat to estimate the value and due zakat directly.",
      cta: "Calculate Gold Zakat Now",
      noteTitle: "Important note",
      noteBody:
        "This article is for general educational purposes only and is not a personalized religious ruling. If your case has special details, it is best to ask a trusted fatwa authority.",
    },
  };

  const t = content[lang];

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-black text-white px-6 py-12"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
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

        <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h1 className="text-3xl font-bold text-amber-300 md:text-4xl">
            {t.title}
          </h1>

          <p className="mt-6 text-zinc-300 leading-8">{t.intro}</p>

          <h2 className="mt-8 text-2xl font-semibold text-amber-200">{t.h1}</h2>
          <p className="mt-3 text-zinc-300 leading-8">{t.p1}</p>

          <h2 className="mt-8 text-2xl font-semibold text-amber-200">{t.h2}</h2>
          <p className="mt-3 text-zinc-300 leading-8">{t.p2}</p>

          <h2 className="mt-8 text-2xl font-semibold text-amber-200">{t.h3}</h2>
          <p className="mt-3 text-zinc-300 leading-8">{t.p3}</p>

          <h2 className="mt-8 text-2xl font-semibold text-amber-200">{t.h4}</h2>
          <p className="mt-3 text-zinc-300 leading-8">{t.p4}</p>

          <h2 className="mt-8 text-2xl font-semibold text-amber-200">{t.h5}</h2>
          <p className="mt-3 text-zinc-300 leading-8">{t.p5}</p>

          <h2 className="mt-8 text-2xl font-semibold text-amber-200">{t.h6}</h2>
          <p className="mt-3 text-zinc-300 leading-8">{t.p6}</p>

          <a
            href="/zakat-gold-calculator"
            className="mt-8 inline-flex rounded-2xl border border-amber-300/30 bg-amber-300/10 px-5 py-3 text-amber-200 hover:bg-amber-300/20"
          >
            {t.cta}
          </a>

          <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5">
            <h3 className="text-lg font-semibold text-amber-200">{t.noteTitle}</h3>
            <p className="mt-2 text-sm leading-7 text-amber-100/90">{t.noteBody}</p>
          </div>
        </article>
      </div>
    </main>
  );
}
