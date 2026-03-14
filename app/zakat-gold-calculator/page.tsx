import type { Metadata } from "next";
import ZakatGoldCalculatorClient from "./ZakatGoldCalculatorClient";

export const metadata: Metadata = {
  title: "حاسبة زكاة الذهب",
  description:
    "احسب زكاة الذهب بسهولة حسب الوزن والعيار وسعر الذهب اليوم في الإمارات والخليج.",
  alternates: {
    canonical: "https://goldliveprices.net/zakat-gold-calculator",
  },
};

export default function Page() {
  return <ZakatGoldCalculatorClient />;
}
