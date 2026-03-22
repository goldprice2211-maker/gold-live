import type { Metadata } from "next";
import GoldOilDollarRelationClient from "./GoldOilDollarRelationClient";

export const metadata: Metadata = {
  title:
    "كيف تعرف أن الذهب سيرتفع؟ العلاقة بين الذهب والنفط والدولار | Gold Live Prices",
  description:
    "تعرف على العلاقة بين الذهب والنفط والدولار، وكيف تساعد هذه العوامل في توقع اتجاه الذهب، وتأثير التضخم والفائدة على حركة الأسعار.",
  alternates: {
    canonical: "https://goldliveprices.net/blog/gold-oil-dollar-relation",
  },
};

export default function Page() {
  return <GoldOilDollarRelationClient />;
}
