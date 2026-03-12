"use client";

import { useState } from "react";

export default function DollarImpactGoldPage() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const content = {
    ar: {
      title: "كيف يؤثر الدولار الأمريكي على سعر الذهب؟",
      date: "تاريخ النشر",
      intro:
        "يعتبر الذهب والدولار الأمريكي من أهم الأصول في الاقتصاد العالمي، وغالبًا ما توجد علاقة عكسية بينهما. عندما يرتفع الدولار غالبًا ما ينخفض الذهب، وعندما يضعف الدولار يميل الذهب إلى الارتفاع.",
      h1: "لماذا يتم تسعير الذهب بالدولار؟",
      p1:
        "يتم تداول الذهب عالميًا بالدولار الأمريكي في الأسواق العالمية مثل بورصة نيويورك ولندن. لذلك أي تغير في قيمة الدولار يؤثر مباشرة على سعر الذهب في العالم.",
      h2: "العلاقة العكسية بين الذهب والدولار",
      p2:
        "عندما يرتفع الدولار يصبح شراء الذهب أغلى بالنسبة للمستثمرين الذين يستخدمون عملات أخرى، مما يقلل الطلب عليه. أما عندما يضعف الدولار يصبح الذهب أرخص نسبيًا فيزداد الطلب عليه ويرتفع السعر.",
      h3: "تأثير أسعار الفائدة",
      p3:
        "عندما يرفع الاحتياطي الفيدرالي الأمريكي أسعار الفائدة، يميل الدولار إلى الارتفاع ويقل الإقبال على الذهب. أما عند خفض الفائدة فيزداد الإقبال على الذهب باعتباره ملاذًا آمنًا.",
      h4: "الخلاصة",
      p4:
        "العلاقة بين الذهب والدولار من أهم العوامل التي تحدد اتجاه أسعار الذهب عالميًا. لذلك يراقب المستثمرون تحركات الدولار لفهم اتجاه سوق الذهب.",
      back: "الرجوع إلى المقالات",
      switch: "English",
    },
    en: {
      title: "How Does the US Dollar Affect Gold Prices?",
      date: "Published on",
      intro:
        "Gold and the US dollar are among the most important assets in the global economy, and they often have an inverse relationship. When the dollar rises, gold often falls, and when the dollar weakens, gold tends to rise.",
      h1: "Why Is Gold Priced in US Dollars?",
      p1:
        "Gold is traded globally in US dollars in major markets such as New York and London. That is why any change in the value of the dollar directly affects gold prices worldwide.",
      h2: "The Inverse Relationship Between Gold and the Dollar",
      p2:
        "When the dollar rises, gold becomes more expensive for investors using other currencies, which can reduce demand. When the dollar weakens, gold becomes relatively cheaper, which can increase demand and push prices higher.",
      h3: "The Effect of Interest Rates",
      p3:
        "When the US Federal Reserve raises interest rates, the dollar tends to rise and demand for gold often weakens. When rates are cut, demand for gold may rise as investors look for safe-haven assets.",
      h4: "Conclusion",
      p4:
        "The relationship between gold and the dollar is one of the most important factors affecting global gold prices. That is why investors watch dollar movements closely to understand the direction of the gold market.",
      back: "Back to Articles",
      switch: "العربية",
    },
  };

  const t = content[lang];

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-black px-6 py-10 text-white"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <a
            href="/blog"
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:bg-white/10"
          >
            ← {t.back}
          </a>

          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="rounded-xl border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm text-amber-200 hover:bg-amber-300/20"
          >
            {t.switch}
          </button>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-amber-300">{t.title}</h1>

        <p className="mb-6 text-sm text-zinc-400">
          {t.date}: {new Date().toLocaleDateString()}
        </p>

        <p className="mb-4 leading-8 text-zinc-200">{t.intro}</p>

        <h2 className="mb-3 mt-8 text-xl font-semibold text-amber-300">
          {t.h1}
        </h2>
        <p className="mb-4 leading-8 text-zinc-200">{t.p1}</p>

        <h2 className="mb-3 mt-8 text-xl font-semibold text-amber-300">
          {t.h2}
        </h2>
        <p className="mb-4 leading-8 text-zinc-200">{t.p2}</p>

        <h2 className="mb-3 mt-8 text-xl font-semibold text-amber-300">
          {t.h3}
        </h2>
        <p className="mb-4 leading-8 text-zinc-200">{t.p3}</p>

        <h2 className="mb-3 mt-8 text-xl font-semibold text-amber-300">
          {t.h4}
        </h2>
        <p className="leading-8 text-zinc-200">{t.p4}</p>
      </div>
    </main>
  );
}
