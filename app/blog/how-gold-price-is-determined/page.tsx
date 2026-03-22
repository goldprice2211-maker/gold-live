import type { Metadata } from "next";
import HowGoldPriceIsDeterminedClient from "./HowGoldPriceIsDeterminedClient";

export const metadata: Metadata = {
  title:
    "كيف يتم تحديد سعر الذهب عالميًا؟ | شرح كامل العوامل المؤثرة - Gold Live Prices",
  description:
    "تعرف على كيفية تحديد سعر الذهب عالميًا بالتفصيل، ودور الأونصة والدولار والعرض والطلب وأسعار الفائدة والتضخم في حركة الأسعار.",
  alternates: {
    canonical: "https://goldliveprices.net/blog/how-gold-price-is-determined",
  },
};

export default function Page() {
  return <HowGoldPriceIsDeterminedClient />;
}
