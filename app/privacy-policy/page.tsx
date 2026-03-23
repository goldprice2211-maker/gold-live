import type { Metadata } from "next";
import SiteNavbar from "../components/SiteNavbar";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | Privacy Policy - Gold Live Prices",
  description:
    "تعرف على سياسة الخصوصية الخاصة بموقع Gold Live Prices وكيف يتم التعامل مع البيانات والمعلومات.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteNavbar />

      <main className="min-h-screen bg-black text-white">
        <section className="border-b border-white/10 bg-gradient-to-b from-amber-400/10 to-transparent">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <p className="mb-3 text-sm font-medium text-amber-300">
              Gold Live Prices
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              سياسة الخصوصية
            </h1>
            <p className="mt-4 max-w-2xl leading-8 text-zinc-300">
              نحن في موقع Gold Live Prices نولي أهمية كبيرة لخصوصية المستخدمين،
              ونسعى لحماية أي معلومات يتم جمعها أثناء استخدام الموقع.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-3 text-2xl font-bold text-white">المعلومات التي نجمعها</h2>
              <p className="leading-8 text-zinc-300">
                قد نقوم بجمع بيانات غير شخصية مثل نوع الجهاز، والمتصفح، والصفحات
                التي تمت زيارتها، ومدة التصفح، وذلك بهدف تحسين تجربة المستخدم
                وتحليل أداء الموقع.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-3 text-2xl font-bold text-white">
                ملفات تعريف الارتباط (Cookies)
              </h2>
              <p className="leading-8 text-zinc-300">
                يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربة المستخدم، مثل
                حفظ التفضيلات وتقديم محتوى مناسب وتحسين الأداء العام للموقع.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-3 text-2xl font-bold text-white">استخدام المعلومات</h2>
              <p className="leading-8 text-zinc-300">
                يتم استخدام البيانات غير الشخصية لتحسين الموقع، وتحليل الأداء،
                وفهم اهتمامات الزوار، وتقديم تجربة أفضل للمستخدمين.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-3 text-2xl font-bold text-white">مشاركة المعلومات</h2>
              <p className="leading-8 text-zinc-300">
                نحن لا نقوم ببيع أو مشاركة أي معلومات شخصية مع أطراف خارجية،
                باستثناء الحالات التي يفرضها القانون أو عند الضرورة التقنية
                لتشغيل بعض الخدمات المرتبطة بالموقع.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-2">
              <h2 className="mb-3 text-2xl font-bold text-white">إخلاء المسؤولية</h2>
              <p className="leading-8 text-zinc-300">
                المعلومات المقدمة في الموقع هي لأغراض تعليمية ومعلوماتية فقط ولا
                تُعد نصيحة مالية أو استثمارية. استخدامك للموقع يعني موافقتك على
                هذه السياسة وعلى استخدام المعلومات وفقًا لما ورد فيها.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-2xl font-bold">Privacy Policy</h2>
            <div className="space-y-4 leading-8 text-zinc-400">
              <p>
                At Gold Live Prices, we respect your privacy and are committed to
                protecting your information while using our website.
              </p>
              <p>
                We may collect non-personal data such as browser type, device
                type, pages visited, and general usage information in order to
                improve user experience and analyze website performance.
              </p>
              <p>
                Cookies may be used to enhance user experience, remember user
                preferences, and improve website performance.
              </p>
              <p>
                We do not sell or share personal data with third parties except
                where required by law or where technically necessary to operate
                certain services related to the website.
              </p>
              <p>
                All information provided on this website is for informational
                purposes only and does not constitute financial or investment
                advice.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
