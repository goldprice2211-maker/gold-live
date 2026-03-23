import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "الشروط والأحكام | Terms & Conditions - Gold Live Prices",
  description:
    "اطلع على الشروط والأحكام الخاصة باستخدام موقع Gold Live Prices والمحتوى المعروض فيه.",
};

export default function TermsPage() {
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

        <header className="space-y-3">
          <h1 className="text-3xl font-bold md:text-4xl">الشروط والأحكام</h1>
          <p className="text-zinc-300 leading-8">
            باستخدامك لهذا الموقع، فإنك توافق على الالتزام بالشروط والأحكام التالية.
            يرجى قراءة هذه الصفحة بعناية قبل استخدام الموقع.
          </p>
        </header>

        <section className="space-y-4 text-zinc-300 leading-8">
          <h2 className="text-2xl font-bold text-white">استخدام الموقع</h2>
          <p>
            يتم توفير هذا الموقع لأغراض معلوماتية فقط، ويهدف إلى عرض أسعار الذهب
            ومحتوى تعليمي متعلق بالسوق. لا يُسمح باستخدام الموقع لأي أغراض غير
            قانونية أو مسيئة.
          </p>
        </section>

        <section className="space-y-4 text-zinc-300 leading-8">
          <h2 className="text-2xl font-bold text-white">دقة المعلومات</h2>
          <p>
            نحن نسعى لتقديم معلومات دقيقة ومحدثة، لكن لا نضمن خلو المعلومات من
            الأخطاء أو التأخير. أسعار الذهب قد تختلف حسب السوق والمصدر وقد تتغير
            في أي وقت دون إشعار مسبق.
          </p>
        </section>

        <section className="space-y-4 text-zinc-300 leading-8">
          <h2 className="text-2xl font-bold text-white">إخلاء المسؤولية</h2>
          <p>
            جميع المعلومات المقدمة في الموقع هي لأغراض تعليمية ومعلوماتية فقط،
            ولا تُعتبر نصيحة استثمارية أو مالية أو قانونية. استخدامك للمعلومات
            يكون على مسؤوليتك الخاصة.
          </p>
          <p>
            نحن غير مسؤولين عن أي خسائر أو أضرار ناتجة عن الاعتماد على المعلومات
            المعروضة في الموقع.
          </p>
        </section>

        <section className="space-y-4 text-zinc-300 leading-8">
          <h2 className="text-2xl font-bold text-white">روابط خارجية</h2>
          <p>
            قد يحتوي الموقع على روابط لمواقع خارجية. نحن غير مسؤولين عن محتوى أو
            سياسات تلك المواقع.
          </p>
        </section>

        <section className="space-y-4 text-zinc-300 leading-8">
          <h2 className="text-2xl font-bold text-white">التعديلات</h2>
          <p>
            نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت دون إشعار مسبق.
            استمرارك في استخدام الموقع يعني موافقتك على أي تحديثات.
          </p>
        </section>

        <hr className="border-zinc-700" />

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Terms & Conditions</h2>
          <div className="space-y-4 text-zinc-400 leading-8">
            <p>
              By using this website, you agree to comply with the following terms
              and conditions. Please read them carefully before using the site.
            </p>

            <p>
              This website provides gold price information and educational content
              for informational purposes only. We do not guarantee accuracy or
              completeness, and prices may change at any time without notice.
            </p>

            <p>
              The content on this website does not constitute financial,
              investment, legal, or professional advice. Any decisions made based
              on the information provided are at your own risk.
            </p>

            <p>
              We are not responsible for any losses or damages resulting from the
              use of this website or reliance on its content.
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
        </section>

      </div>
    </main>
  );
}
