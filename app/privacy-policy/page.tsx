import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | Privacy Policy - Gold Live Prices",
  description:
    "تعرف على سياسة الخصوصية الخاصة بموقع Gold Live Prices وكيف يتم التعامل مع البيانات والمعلومات.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-amber-400/10 to-transparent">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="mb-3 text-sm font-medium text-amber-300">
            Gold Live Prices
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            سياسة الخصوصية
          </h1>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            نحن في موقع Gold Live Prices نولي أهمية كبيرة لخصوصية المستخدمين،
            ونسعى لحماية أي معلومات يتم جمعها أثناء استخدام الموقع، مع توضيح
            طريقة استخدام البيانات العامة وغير الشخصية المرتبطة بتجربة التصفح.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">
              المعلومات التي نجمعها
            </h2>
            <div className="space-y-4 leading-8 text-zinc-300">
              <p>
                قد نقوم بجمع بيانات غير شخصية مثل نوع الجهاز، والمتصفح، والصفحات
                التي تمت زيارتها، ومدة التصفح، والمعلومات العامة المتعلقة
                باستخدام الموقع.
              </p>
              <p>
                الهدف من ذلك هو تحسين تجربة المستخدم، وتحليل أداء الموقع، وفهم
                الصفحات أو الأدوات التي يزداد الاهتمام بها من قبل الزوار.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">
              ملفات تعريف الارتباط (Cookies)
            </h2>
            <div className="space-y-4 leading-8 text-zinc-300">
              <p>
                قد يستخدم الموقع ملفات تعريف الارتباط (Cookies) لتحسين تجربة
                المستخدم، مثل تذكر بعض التفضيلات أو تحسين أداء بعض الصفحات.
              </p>
              <p>
                تساعد هذه الملفات أيضًا في فهم سلوك التصفح بشكل عام دون أن تكون
                وسيلة لبيع أو مشاركة معلومات شخصية مع أطراف خارجية.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">
              استخدام المعلومات
            </h2>
            <div className="space-y-4 leading-8 text-zinc-300">
              <p>
                يتم استخدام البيانات غير الشخصية لتحسين الموقع، وتحليل الأداء،
                وفهم اهتمامات الزوار، وتقديم تجربة تصفح أفضل.
              </p>
              <p>
                كما قد تُستخدم هذه البيانات بشكل عام لمعرفة الصفحات الأكثر
                زيارة، والمحتوى الذي يحظى باهتمام أكبر، بما يساعد على تطوير
                الموقع والخدمات المرتبطة به.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-2xl font-bold text-white">
              مشاركة المعلومات
            </h2>
            <div className="space-y-4 leading-8 text-zinc-300">
              <p>
                نحن لا نقوم ببيع أو مشاركة أي معلومات شخصية مع أطراف خارجية،
                باستثناء الحالات التي يفرضها القانون أو عند الضرورة التقنية
                لتشغيل بعض الخدمات المرتبطة بالموقع.
              </p>
              <p>
                وأي خدمات خارجية مستخدمة لتحليل الأداء أو تشغيل الموقع تخضع
                أيضًا لسياسات الخصوصية الخاصة بها.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-2">
            <h2 className="mb-3 text-2xl font-bold text-white">
              إخلاء المسؤولية
            </h2>
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
  );
}
