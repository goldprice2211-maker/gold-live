import type { Metadata } from "next";
import GoldMarket2026Client from "./GoldMarket2026Client";

export const metadata: Metadata = {
  title:
    "توقعات أسعار الذهب 2026 | العوامل المؤثرة على الذهب عالميًا - Gold Live Prices",
  description:
    "تعرف على توقعات أسعار الذهب في 2026 وأهم العوامل التي تؤثر على الذهب عالميًا، مثل أسعار الفائدة الأمريكية، التضخم، قوة الدولار، الأزمات الجيوسياسية، ومشتريات البنوك المركزية.",
  keywords: [
    "توقعات أسعار الذهب 2026",
    "توقعات الذهب 2026",
    "سعر الذهب 2026",
    "هل سيرتفع الذهب في 2026",
    "تحليل الذهب 2026",
    "العوامل المؤثرة على الذهب",
    "أسعار الذهب عالميًا",
    "تأثير الفائدة على الذهب",
    "تأثير التضخم على الذهب",
    "تأثير الدولار على الذهب",
    "مشتريات البنوك المركزية للذهب",
    "توقعات سوق الذهب",
    "gold price forecast 2026",
    "gold market outlook 2026",
    "gold price prediction",
    "global gold prices",
  ],
  alternates: {
    canonical: "https://goldliveprices.net/blog/gold-market-2026",
  },
  openGraph: {
    title:
      "توقعات أسعار الذهب 2026 | العوامل المؤثرة على الذهب عالميًا",
    description:
      "شرح أهم العوامل المؤثرة على أسعار الذهب عالميًا مع نظرة تحليلية مبسطة لتوقعات الذهب في 2026.",
    url: "https://goldliveprices.net/blog/gold-market-2026",
    siteName: "Gold Live Prices",
    locale: "ar_AE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "توقعات أسعار الذهب 2026 | العوامل المؤثرة على الذهب عالميًا",
    description:
      "تعرف على توقعات الذهب 2026 والعوامل التي قد تدفع الأسعار للصعود أو الضغط عليها.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <GoldMarket2026Client />;
}
