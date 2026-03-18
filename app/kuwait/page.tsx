import Home from "../page";

export const metadata = {
  title: "سعر الذهب اليوم في الكويت",
  description:
    "تابع سعر الذهب اليوم في الكويت لجميع العيارات 24 و22 و21 و18 مع تحديث مباشر ورسوم بيانية.",
  alternates: {
    canonical: "https://goldliveprices.net/kuwait",
  },
};

export default function KuwaitPage() {
  return <Home country="الكويت" defaultCurrency="KWD" />;
}
