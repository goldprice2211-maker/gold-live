import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | Privacy Policy - Gold Live Prices",
  description:
    "تعرف على سياسة الخصوصية الخاصة بموقع Gold Live Prices وكيف يتم التعامل مع البيانات والمعلومات.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl space-y-8">

        {/* زر الرجوع */}
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-sm text-amber-400 hover:underline"
          >
            ← الصفحة الرئيسية
          </Link>
        </div>

        <h1 className="text-3xl font-bold">سياسة الخصوصية</h1>

        <section className="space-y-4 text-zinc-300 leading-8">
          <p>
            نحن في موقع Gold Live Prices نولي أهمية كبيرة لخصوصية المستخدمين،
            ونسعى لحماية أي معلومات يتم جمعها أثناء استخدام الموقع.
          </p>
        </section>

        <section className="space-y-4 text-zinc-300 leading-8">
          <h2 className="text-xl font-semibold text-white">المعلومات التي نجمعها</h2>
          <p>
            قد نقوم بجمع بيانات غير شخصية مثل نوع الجهاز، المتصفح، الصفحات التي
            تمت زيارتها، ومدة التصفح، وذلك بهدف تحسين تجربة المستخدم وتحليل أداء الموقع.
          </p>
        </section>

        <section className="space-y-4 text-zinc-300 leading-8">
          <h2 className="text-xl font-semibold text-white">ملفات تعريف الارتباط (Cookies)</h2>
          <p>
            يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربة المستخدم، مثل حفظ
            التفضيلات وتقديم محتوى مناسب.
          </p>
        </section>

        <section className="space-y-4 text-zinc-300 leading-8">
          <h2 className="text-xl font-semibold text-white">استخدام المعلومات</h2>
          <p>
            يتم استخدام البيانات لتحسين الموقع، تحليل الأداء، وتقديم محتوى أفضل
            للمستخدمين.
          </p>
        </section>

        <section className="space-y-4 text-zinc-300 leading-8">
          <h2 className="text-xl font-semibold text-white">مشاركة المعلومات</h2>
          <p>
            نحن لا نقوم ببيع أو مشاركة أي معلومات شخصية مع أطراف خارجية، باستثناء
            الحالات التي يفرضها القانون.
          </p>
        </section>

        <section className="space-y-4 text-zinc-300 leading-8">
          <h2 className="text-xl font-semibold text-white">إخلاء المسؤولية</h2>
          <p>
            المعلومات المقدمة في الموقع هي لأغراض تعليمية ومعلوماتية فقط ولا تُعد
            نصيحة مالية أو استثمارية.
          </p>
        </section>

        <hr className="border-zinc-700" />

        <h2 className="text-2xl font-bold">Privacy Policy</h2>

        <section className="space-y-4 text-zinc-400 leading-8">
          <p>
            At Gold Live Prices, we respect your privacy and are committed to
            protecting your information while using our website.
          </p>

          <p>
            We may collect non-personal data such as browser type, device type,
            and pages visited to improve user experience and analyze website performance.
          </p>

          <p>
            Cookies may be used to enhance user experience and provide better
            content based on user preferences.
          </p>

          <p>
            We do not sell or share personal data with third parties except where required by law.
          </p>

          <p>
            All information provided on this website is for informational purposes
            only and does not constitute financial or investment advice.
          </p>
        </section>

      </div>
    </main>
  );
}
