import type { Metadata } from "next";
import BestTimeToBuyGoldClient from "./BestTimeToBuyGoldClient";

export const metadata: Metadata = {
  title:
    "5 إشارات تساعدك تعرف هل الوقت مناسب لشراء الذهب الآن | أفضل وقت لشراء الذهب - Gold Live Prices",
  description:
    "تعرف على 5 إشارات عملية تساعدك على معرفة هل الوقت مناسب لشراء الذهب الآن، مثل حركة السعر، الدولار الأمريكي، أسعار الفائدة، التضخم، والأخبار العالمية، مع نصائح لاتخاذ قرار شراء أذكى.",
  keywords: [
    "هل الوقت مناسب لشراء الذهب الآن",
    "أفضل وقت لشراء الذهب",
    "هل أشتري الذهب الآن",
    "متى أشتري الذهب",
    "شراء الذهب الآن",
    "إشارات شراء الذهب",
    "نصائح شراء الذهب",
    "هل الذهب مناسب للشراء الآن",
    "قرار شراء الذهب",
    "أفضل وقت لشراء الذهب 2026",
    "gold buying signals",
    "best time to buy gold",
    "should i buy gold now",
    "gold buying guide",
    "when to buy gold",
    "gold investment timing",
  ],
  alternates: {
    canonical: "https://goldliveprices.net/blog/best-time-to-buy-gold",
  },
  openGraph: {
    title:
      "5 إشارات تساعدك تعرف هل الوقت مناسب لشراء الذهب الآن",
    description:
      "دليل عملي يشرح أهم الإشارات التي تساعدك على اتخاذ قرار شراء الذهب بشكل أذكى، مثل السعر، الدولار، الفائدة، والتضخم.",
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
      "تعرف على أهم الإشارات العملية قبل اتخاذ قرار شراء الذهب، ومتى يكون الشراء أو الانتظار هو الخيار الأفضل.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function Page() {
  return <BestTimeToBuyGoldClient />;
}
