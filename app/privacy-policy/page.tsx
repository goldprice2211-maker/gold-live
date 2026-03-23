import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | Privacy Policy - Gold Live Prices",
  description: "تعرف على سياسة الخصوصية الخاصة بالموقع.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-6">
        <h1 className="text-4xl font-bold md:text-5xl">سياسة الخصوصية</h1>

        <div className="space-y-4 text-zinc-300 leading-8">
          <p>
            نحن نحترم خصوصيتك وقد نقوم بجمع بيانات غير شخصية مثل نوع الجهاز
            والمتصفح لتحسين تجربة المستخدم.
          </p>

          <p>
            قد نستخدم ملفات تعريف الارتباط (Cookies) لتحسين الأداء.
          </p>

          <p>
            لا نقوم ببيع أو مشاركة المعلومات الشخصية مع أطراف خارجية.
          </p>
        </div>

        <hr className="border-white/10" />

        <div className="space-y-4 text-zinc-400 leading-8">
          <h2 className="text-2xl font-bold">Privacy Policy</h2>

          <p>
            We respect your privacy and may collect non-personal data to improve
            user experience.
          </p>

          <p>This website may use cookies.</p>

          <p>We do not sell or share personal information.</p>
        </div>
      </section>
    </main>
  );
}
