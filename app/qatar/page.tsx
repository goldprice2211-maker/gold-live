import Home from "../page";

export const metadata = {
  title: "سعر الذهب اليوم في قطر",
  description:
    "تابع سعر الذهب اليوم في قطر لجميع العيارات 24 و22 و21 و18 مع تحديث مباشر ورسوم بيانية.",
  alternates: {
    canonical: "https://goldliveprices.net/qatar",
  },
};

export default function QatarPage() {
  return <Home country="قطر" defaultCurrency="QAR" />;
}
