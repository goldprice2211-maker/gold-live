"use client";

import { useEffect, useState } from "react";

type Prices = {
  gram24: number;
  gram22: number;
  gram21: number;
  gram18: number;
};

export default function Home() {
  const [usd, setUsd] = useState<Prices | null>(null);
  const [aed, setAed] = useState<Prices | null>(null);
  const [sar, setSar] = useState<Prices | null>(null);

  async function loadPrices() {
    try {
      const res = await fetch("https://api.gold-api.com/price/XAU");
      const data = await res.json();

      const ounceUSD = data.price;
      const gram24USD = ounceUSD / 31.1034768;

      const rates = {
        AED: 3.6725,
        SAR: 3.75,
      };

      const base = {
        gram24: gram24USD,
        gram22: gram24USD * (22 / 24),
        gram21: gram24USD * (21 / 24),
        gram18: gram24USD * (18 / 24),
      };

      setUsd(base);

      setAed({
        gram24: base.gram24 * rates.AED,
        gram22: base.gram22 * rates.AED,
        gram21: base.gram21 * rates.AED,
        gram18: base.gram18 * rates.AED,
      });

      setSar({
        gram24: base.gram24 * rates.SAR,
        gram22: base.gram22 * rates.SAR,
        gram21: base.gram21 * rates.SAR,
        gram18: base.gram18 * rates.SAR,
      });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    loadPrices();
    const interval = setInterval(loadPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  function renderTable(title: string, data: Prices | null, currency: string) {
    if (!data) return <p>Loading...</p>;

    return (
      <div className="border p-4 rounded-xl shadow-md mb-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p>عيار 24: {data.gram24.toFixed(2)} {currency}</p>
        <p>عيار 22: {data.gram22.toFixed(2)} {currency}</p>
        <p>عيار 21: {data.gram21.toFixed(2)} {currency}</p>
        <p>عيار 18: {data.gram18.toFixed(2)} {currency}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center">
        سعر الذهب اليوم
      </h1>

      {renderTable("USD - الدولار الأمريكي", usd, "$")}
      {renderTable("AED - الدرهم الإماراتي", aed, "د.إ")}
      {renderTable("SAR - الريال السعودي", sar, "ر.س")}
    </main>
  );
}
