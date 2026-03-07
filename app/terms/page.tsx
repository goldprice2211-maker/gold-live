export const metadata = {
  title: "الشروط والأحكام | Terms & Conditions - Gold Live Prices",
  description: "اطلع على الشروط والأحكام الخاصة باستخدام الموقع.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-3xl space-y-8">

        <h1 className="text-3xl font-bold">الشروط والأحكام</h1>
        <div className="space-y-4 text-zinc-300 leading-8">
          <p>
            باستخدامك لهذا الموقع فإنك توافق على أن المعلومات المعروضة
            لأغراض معلوماتية فقط.
          </p>
          <p>
            أسعار الذهب قد تتغير بدون إشعار مسبق.
          </p>
          <p>
            لسنا مسؤولين عن أي قرارات مالية يتم اتخاذها بناءً على المعلومات المعروضة.
          </p>
        </div>

        <hr className="border-zinc-700" />

        <h2 className="text-2xl font-bold">Terms & Conditions</h2>
        <div className="space-y-4 text-zinc-400 leading-8">
          <p>
            By using this website, you agree that all information provided is for
            informational purposes only.
          </p>
          <p>
            Gold prices may change without notice.
          </p>
          <p>
            We are not responsible for financial decisions made based on this website.
          </p>
        </div>

      </div>
    </main>
  );
}
