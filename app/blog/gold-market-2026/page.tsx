import type { Metadata } from "next";
import GoldMarket2026Client from "./GoldMarket2026Client";

export const metadata: Metadata = {
  title: "توقعات أسعار الذهب 2026",
  description:
    "تعرف على أهم العوامل التي تؤثر على أسعار الذهب عالميًا وتوقعات السوق في 2026 بناءً على الفائدة والتضخم والدولار.",
  alternates: {
    canonical: "https://goldliveprices.net/blog/gold-market-2026",
  },
};

export default function Page() {
  return <GoldMarket2026Client />;
}
