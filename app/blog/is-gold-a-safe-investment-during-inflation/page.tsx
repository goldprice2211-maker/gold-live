import type { Metadata } from "next";
import GoldInflationClient from "./GoldInflationClient";

export const metadata: Metadata = {
  title: "هل الذهب استثمار آمن في أوقات التضخم؟",
  description:
    "تعرف هل الذهب يعتبر استثمار آمن أثناء التضخم، وما علاقة الذهب بالفائدة والدولار والتضخم العالمي.",
  keywords: [
    "الذهب والتضخم",
    "هل الذهب يحمي من التضخم",
    "استثمار الذهب",
    "gold inflation",
    "gold safe investment",
  ],
  alternates: {
    canonical: "https://goldliveprices.net/blog/gold-inflation",
  },
  openGraph: {
    title: "هل الذهب استثمار آمن في أوقات التضخم؟",
    description:
      "شرح العلاقة بين الذهب والتضخم ومتى يكون الذهب خيار استثماري مناسب.",
    url: "https://goldliveprices.net/blog/gold-inflation",
    siteName: "Gold Live Prices",
    locale: "ar_AE",
    type: "article",
  },
};

export default function Page() {
  return <GoldInflationClient />;
}
