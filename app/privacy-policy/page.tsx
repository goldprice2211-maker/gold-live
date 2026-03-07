export const metadata = {
  title: "سياسة الخصوصية | Privacy Policy - Gold Live Prices",
  description: "اطلع على سياسة الخصوصية الخاصة بموقع Gold Live Prices.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-3xl space-y-8">

        <h1 className="text-3xl font-bold">سياسة الخصوصية</h1>
        <div className="space-y-4 text-zinc-300 leading-8">
          <p>
            نحن نحترم خصوصيتك. قد نقوم بجمع بيانات غير شخصية مثل نوع الجهاز،
            المتصفح، والصفحات التي تمت زيارتها عبر أدوات التحليل مثل Google Analytics.
          </p>
          <p>
            قد يستخدم الموقع ملفات تعريف الارتباط (Cookies) لتحسين تجربة المستخدم.
          </p>
          <p>
            لا نقوم ببيع أو مشاركة أي معلومات شخصية مع أطراف خارجية.
          </p>
        </div>

        <hr className="border-zinc-700" />

        <h2 className="text-2xl font-bold">Privacy Policy</h2>
        <div className="space-y-4 text-zinc-400 leading-8">
          <p>
            We respect your privacy. We may collect non-personal data such as browser type,
            device type, and pages visited via analytics tools like Google Analytics.
          </p>
          <p>
            This website may use cookies to improve user experience.
          </p>
          <p>
            We do not sell or share personal information with third parties.
          </p>
        </div>

      </div>
    </main>
  );
}
