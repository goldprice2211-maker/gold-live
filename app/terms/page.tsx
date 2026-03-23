import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الشروط والأحكام | Terms - Gold Live Prices",
  description: "الشروط والأحكام الخاصة باستخدام الموقع.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-6">
        <h1 className="text-4xl font-bold md:text-5xl">الشروط والأحكام</h1>

        <div className="space-y-4 text-zinc-300 leading-8">
          <p>
            باستخدامك لهذا الموقع فإنك توافق على أن جميع المعلومات المعروضة
            لأغراض معلوماتية فقط.
          </p>

          <p>
            أسعار الذهب قد تتغير في أي وقت دون إشعار مسبق.
          </p>

          <p>
            لا نتحمل أي مسؤولية عن القرارات المالية التي يتم اتخاذها بناءً على
            المعلومات في الموقع.
          </p>
        </div>

        <hr className="border-white/10" />

        <div className="space-y-4 text-zinc-400 leading-8">
          <h2 className="text-2xl font-bold">Terms & Conditions</h2>

          <p>
            All information provided is for informational purposes only and does
            not constitute financial advice.
          </p>

          <p>Gold prices may change without notice.</p>

          <p>
            We are not responsible for any financial decisions made based on this
            website.
          </p>
        </div>
      </section>
    </main>
  );
}
