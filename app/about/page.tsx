export const metadata = {
  title: "About Us | Gold Live Prices",
  description: "Learn more about Gold Live Prices and our mission.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <div className="space-y-4 text-zinc-300 leading-8">
          <p>
            Welcome to <strong>Gold Live Prices</strong>.
          </p>
          <p>
            Gold Live Prices is an independent online platform providing real-time
            gold price updates in the United Arab Emirates and the Gulf region.
          </p>
          <p>
            Our mission is to deliver accurate, fast, and reliable gold market
            information to help individuals, investors, and traders make informed decisions.
          </p>
          <p>
            We aim to provide up-to-date gold prices, market insights, and a simple
            user-friendly experience.
          </p>
          <p>
            Gold Live Prices is not affiliated with any government authority or
            financial institution. The information provided is for informational
            purposes only and should not be considered financial advice.
          </p>
        </div>
      </div>
    </main>
  );
}
