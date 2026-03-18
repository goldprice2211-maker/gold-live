import type { Metadata } from "next";
import GoldOilDollarRelationClient from "./GoldOilDollarRelationClient";

export const metadata: Metadata = {
  title: "كيف تعرف أن الذهب سيرتفع؟ العلاقة بين الذهب والنفط والدولار",
  description:
    "تعرف على العلاقة بين الذهب والنفط والدولار، وكيف تساعدك هذه العوامل على فهم متى قد يرتفع الذهب أو ينخفض.",
  alternates: {
    canonical: "https://goldliveprices.net/blog/gold-oil-dollar-relation",
  },
};

export default function Page() {
  return <GoldOilDollarRelationClient />;
}
