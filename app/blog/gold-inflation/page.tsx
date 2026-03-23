import type { Metadata } from "next";
import GoldInflationClient from "./GoldInflationClient";

export const metadata: Metadata = {
  title:
    "هل الذهب استثمار آمن في أوقات التضخم؟ | العلاقة بين الذهب والتضخم والفائدة - Gold Live Prices",
  description:
    "تعرف هل الذهب يحمي من التضخم، وما العلاقة بين الذهب والتضخم وأسعار الفائدة والدولار، ومتى يكون الذهب خيارًا مناسبًا في أوقات ارتفاع الأسعار.",
  keywords: [
    "الذهب والتضخم",
    "هل الذهب يحمي من التضخم",
    "هل الذهب استثمار آمن",
    "الذهب في وقت التضخم",
    "استثمار الذهب وقت التضخم",
    "العلاقة بين الذهب والتضخم",
    "تأثير التضخم على الذهب",
    "تأثير الفائدة على الذهب",
    "تأثير الدولار على الذهب",
    "الذهب ملاذ آمن",
    "هل الذهب يرتفع مع التضخم",
    "gold inflation",
    "gold and inflation",
    "is gold a safe investment",
    "gold safe haven",
    "gold during inflation",
    "does gold hedge inflation",
  ],
  alternates: {
    canonical: "https://goldliveprices.net/blog/gold-inflation",
  },
  openGraph: {
    title:
      "هل الذهب استثمار آمن في أوقات التضخم؟ | العلاقة بين الذهب والتضخم والفائدة",
    description:
      "شرح واضح للعلاقة بين الذهب والتضخم، ومتى يكون الذهب خيارًا مناسبًا، وكيف تؤثر الفائدة والدولار على حركة الذهب.",
    url: "https://goldliveprices.net/blog/gold-inflation",
    siteName: "Gold Live Prices",
    locale: "ar_AE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "هل الذهب استثمار آمن في أوقات التضخم؟ | العلاقة بين الذهب والتضخم",
    description:
      "تعرف على دور الذهب في أوقات التضخم وكيف تؤثر الفائدة والدولار على اتجاهه.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <GoldInflationClient />;
}
