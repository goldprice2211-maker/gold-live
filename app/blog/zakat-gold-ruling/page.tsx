import type { Metadata } from "next";
import ZakatGoldRulingClient from "./ZakatGoldRulingClient";

export const metadata: Metadata = {
  title:
    "حكم زكاة الذهب في الإسلام | النصاب وطريقة الحساب والذهب المعد للزينة - Gold Live Prices",
  description:
    "تعرف على حكم زكاة الذهب في الإسلام، وما هو نصاب الذهب، وكيفية حساب زكاة الذهب بنسبة 2.5%، وحكم الذهب المعد للزينة، مع رابط مباشر إلى حاسبة زكاة الذهب.",
  keywords: [
    "زكاة الذهب",
    "حكم زكاة الذهب",
    "نصاب الذهب",
    "كم زكاة الذهب",
    "حساب زكاة الذهب",
    "زكاة الذهب عيار 24",
    "زكاة الذهب للزينة",
    "gold zakat ruling",
    "gold zakat calculation",
    "gold nisab",
  ],
  alternates: {
    canonical: "https://goldliveprices.net/blog/zakat-gold-ruling",
  },
  openGraph: {
    title:
      "حكم زكاة الذهب في الإسلام | النصاب وطريقة الحساب والذهب المعد للزينة",
    description:
      "شرح مبسط وواضح لحكم زكاة الذهب، نصاب الذهب، مقدار الزكاة، وحكم الذهب المعد للزينة، مع طريقة حساب سهلة.",
    url: "https://goldliveprices.net/blog/zakat-gold-ruling",
    siteName: "Gold Live Prices",
    locale: "ar_AE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "حكم زكاة الذهب في الإسلام | النصاب وطريقة الحساب والذهب المعد للزينة",
    description:
      "تعرف على حكم زكاة الذهب، النصاب، مقدار الزكاة، وطريقة الحساب بشكل مبسط وواضح.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ZakatGoldRulingClient />;
}
