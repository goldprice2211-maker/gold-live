import type { Metadata } from "next";
import ZakatGoldRulingClient from "./ZakatGoldRulingClient";

export const metadata: Metadata = {
  title: "حكم زكاة الذهب في الإسلام",
  description:
    "تعرف على حكم زكاة الذهب، وما هو النصاب، ومقدار الزكاة، وهل الذهب المعد للزينة فيه زكاة، مع رابط مباشر إلى حاسبة زكاة الذهب.",
  keywords: [
    "زكاة الذهب",
    "حكم زكاة الذهب",
    "نصاب الذهب",
    "كم زكاة الذهب",
    "gold zakat ruling",
  ],
  alternates: {
    canonical: "https://goldliveprices.net/blog/zakat-gold-ruling",
  },
  openGraph: {
    title: "حكم زكاة الذهب في الإسلام",
    description:
      "شرح مبسط لحكم زكاة الذهب، النصاب، مقدار الزكاة، والذهب المعد للزينة.",
    url: "https://goldliveprices.net/blog/zakat-gold-ruling",
    siteName: "Gold Live Prices",
    locale: "ar_AE",
    type: "article",
  },
};

export default function Page() {
  return <ZakatGoldRulingClient />;
}
