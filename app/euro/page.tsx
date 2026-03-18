import Home from "../page";

export const metadata = {
  title: "سعر الذهب اليوم باليورو",
  description:
    "تابع سعر الذهب اليوم باليورو لجميع العيارات 24 و22 و21 و18 مع تحديث مباشر ورسوم بيانية.",
  alternates: {
    canonical: "https://goldliveprices.net/euro",
  },
};

export default function EuroPage() {
  return <Home country="اليورو" defaultCurrency="EUR" />;
}
