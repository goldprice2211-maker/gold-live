import type { Metadata } from "next";
import BestTimeToBuyGoldClient from "./BestTimeToBuyGoldClient";

export const metadata: Metadata = {
  title:
    "5 إشارات تساعدك تعرف هل الوقت مناسب لشراء الذهب الآن | Gold Live Prices",
  description:
    "تعرف على 5 إشارات عملية تساعدك على معرفة هل الوقت مناسب لشراء الذهب الآن، مثل حركة السعر، الدولار، الفائدة، التضخم، والأخبار العالمية.",
  keywords: [
    "هل الوقت مناسب لشراء الذهب",
    "أفضل وقت لشراء الذهب",
    "شراء الذهب الآن",
    "متى أشتري الذهب",
    "هل أشتري الذهب الآن",
    "إشارات شراء الذهب",
    "best time to buy gold",
    "should i buy gold now",
    "gold buying signals",
  ],
  alternates: {
    canonical: "https://goldliveprices.net/blog/best-time-to-buy-gold",
  },
  openGraph: {
    title:
      "5 إشارات تساعدك تعرف هل الوقت مناسب لشراء الذهب الآن",
    description:
      "دليل عملي يشرح أهم الإشارات التي تساعدك على اتخاذ قرار شراء الذهب بشكل أذكى.",
    url: "https://goldliveprices.net/blog/best-time-to-buy-gold",
    siteName: "Gold Live Prices",
    locale: "ar_AE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "5 إشارات تساعدك تعرف هل الوقت مناسب لشراء الذهب الآن",
    description:
      "تعرف على أهم الإشارات العملية قبل اتخاذ قرار شراء الذهب.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <BestTimeToBuyGoldClient />;
}
