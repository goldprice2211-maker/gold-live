import type { Metadata } from "next";
import DollarImpactGoldClient from "./DollarImpactGoldClient";

export const metadata: Metadata = {
  title: "كيف يؤثر الدولار الأمريكي على سعر الذهب؟ | Gold Live Prices",
  description:
    "تعرف على العلاقة بين الدولار الأمريكي وأسعار الذهب عالميًا، وكيف تؤثر الفائدة والتضخم وقوة العملة الأمريكية على حركة الذهب.",
  alternates: {
    canonical: "https://goldliveprices.net/blog/dollar-impact-gold",
  },
};

export default function Page() {
  return <DollarImpactGoldClient />;
}
