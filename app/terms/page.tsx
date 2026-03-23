import type { Metadata } from "next";
import SiteNavbar from "../components/SiteNavbar";

export const metadata: Metadata = {
  title: "الشروط والأحكام | Terms & Conditions - Gold Live Prices",
  description:
    "اطلع على الشروط والأحكام الخاصة باستخدام موقع Gold Live Prices والمحتوى المعروض فيه.",
};

export default function TermsPage() {
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
              الشروط والأحكام
            </h1>
            <p className="mt-4 max-w-2xl leading-8 text-zinc-300">
              باستخدامك لهذا الموقع، فإنك توافق على الالتزام بالشروط والأحكام
              التالية. يرجى قراءة هذه الصفحة بعناية قبل استخدام الموقع.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-3 text-2xl font-bold text-white">استخدام الموقع</h2>
              <p className="leading-8 text-zinc-300">
                يتم توفير هذا الموقع لأغراض معلوماتية فقط، ويهدف إلى عرض أسعار
                الذهب ومحتوى تعليمي متعلق بالسوق. لا يُسمح باستخدام الموقع لأي
                أغراض غير قانونية أو مسيئة.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-3 text-2xl font-bold text-white">دقة المعلومات</h2>
              <p className="leading-8 text-zinc-300">
                نحن نسعى لتقديم معلومات دقيقة ومحدثة، لكن لا نضمن خلو المعلومات
                من الأخطاء أو التأخير. أسعار الذهب قد تختلف حسب السوق والمصدر وقد
                تتغير في أي وقت دون إشعار مسبق.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-3 text-2xl font-bold text-white">إخلاء المسؤولية</h2>
              <div className="space-y-4 leading-8 text-zinc-300">
                <p>
                  جميع المعلومات المقدمة في الموقع هي لأغراض تعليمية ومعلوماتية
                  فقط، ولا تُعتبر نصيحة استثمارية أو مالية أو قانونية.
                </p>
                <p>
                  استخدامك للمعلومات يكون على مسؤوليتك الخاصة، ونحن غير مسؤولين
                  عن أي خسائر أو أضرار ناتجة عن الاعتماد على المعلومات المعروضة
                  في الموقع.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-3 text-2xl font-bold text-white">روابط خارجية</h2>
              <p className="leading-8 text-zinc-300">
                قد يحتوي الموقع على روابط لمواقع خارجية. نحن غير مسؤولين عن
                محتوى أو سياسات تلك المواقع الخارجية.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-2">
              <h2 className="mb-3 text-2xl font-bold text-white">التعديلات</h2>
              <p className="leading-8 text-zinc-300">
                نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت دون إشعار
                مسبق. استمرارك في استخدام الموقع يعني موافقتك على أي تحديثات.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-2xl font-bold">Terms & Conditions</h2>
            <div className="space-y-4 leading-8 text-zinc-400">
              <p>
                By using this website, you agree to comply with the following
                terms and conditions. Please read them carefully before using the
                site.
              </p>
              <p>
                This website provides gold price information and educational
                content for informational purposes only. We do not guarantee
                accuracy or completeness, and prices may change at any time
                without notice.
              </p>
              <p>
                The content on this website does not constitute financial,
                investment, legal, or professional advice. Any decisions made
                based on the information provided are at your own risk.
              </p>
              <p>
                We are not responsible for any losses or damages resulting from
                the use of this website or reliance on its content.
              </p>
              <p>
                This website may contain links to external websites. We are not
                responsible for the content or policies of those websites.
              </p>
              <p>
                We reserve the right to update or modify these terms at any time
                without prior notice.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
