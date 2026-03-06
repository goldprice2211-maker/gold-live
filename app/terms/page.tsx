export const metadata = {
  title: "Terms & Conditions | Gold Live Prices",
  description: "Read the terms and conditions of Gold Live Prices.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <div className="space-y-4 text-zinc-300 leading-8">
          <p>By using Gold Live Prices, you agree to the following terms:</p>
          <p>1. The information provided on this website is for informational purposes only.</p>
          <p>2. We do not guarantee the accuracy or completeness of gold price data.</p>
          <p>3. Gold prices may change without notice.</p>
          <p>4. We are not responsible for any financial decisions made based on the information provided on this website.</p>
          <p>Use of this website is at your own risk.</p>
        </div>
      </div>
    </main>
  );
}
