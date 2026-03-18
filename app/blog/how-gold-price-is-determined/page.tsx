import type { Metadata } from "next";
import HowGoldPriceIsDeterminedClient from "./HowGoldPriceIsDeterminedClient";

export const metadata: Metadata = {
  title: "كيف يتم تحديد سعر الذهب عالميًا؟",
  description:
    "تعرف على كيفية تحديد سعر الذهب عالميًا، ودور الأونصة والدولار والعرض والطلب والفائدة والتضخم في حركة الأسعار.",
  alternates: {
    canonical: "https://goldliveprices.net/blog/how-gold-price-is-determined",
  },
};

export default function Page() {
  return <HowGoldPriceIsDeterminedClient />;
}
