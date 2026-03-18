import Home from "../page";

export const metadata = {
  title: "سعر الذهب اليوم في عمان",
  description:
    "تابع سعر الذهب اليوم في عمان لجميع العيارات 24 و22 و21 و18 مع تحديث مباشر.",
  alternates: {
    canonical: "https://goldliveprices.net/oman",
  },
};

export default function OmanPage() {
  return <Home country="عمان" defaultCurrency="OMR" />;
}
