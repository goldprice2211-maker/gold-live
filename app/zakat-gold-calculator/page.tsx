"use client";

import { useState, useMemo } from "react";

type KaratKey = "24" | "22" | "21" | "18";

export default function ZakatGoldCalculator() {
  const [karat, setKarat] = useState<KaratKey>("24");
  const [grams, setGrams] = useState<number>(0);
  const [price24, setPrice24] = useState<number>(0);

  const nisabGrams24 = 85;

  const karatRatio = {
    "24": 1,
    "22": 22 / 24,
    "21": 21 / 24,
    "18": 18 / 24,
  };

  const adjustedGrams = grams * karatRatio[karat];

  const isAboveNisab = adjustedGrams >= nisabGrams24;

  const zakatAmount = useMemo(() => {
    if (!isAboveNisab) return 0;
    return grams * price24 * 0.025;
  }, [grams, price24, isAboveNisab]);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-8 text-amber-400">
          حاسبة زكاة الذهب
        </h1>

        <div className="grid gap-6 bg-white/5 border border-white/10 rounded-2xl p-6">

          {/* نوع العيار */}
          <div>
            <label className="block mb-2 text-sm text-zinc-300">
              اختر العيار
            </label>
            <select
              value={karat}
              onChange={(e) => setKarat(e.target.value as KaratKey)}
              className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3"
            >
              <option value="24">24K</option>
              <option value="22">22K</option>
              <option value="21">21K</option>
              <option value="18">18K</option>
            </select>
          </div>

          {/* عدد الجرامات */}
          <div>
            <label className="block mb-2 text-sm text-zinc-300">
              عدد الجرامات
            </label>
            <input
              type="number"
              value={grams}
              onChange={(e) => setGrams(Number(e.target.value))}
              className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3"
              placeholder="مثال: 120"
            />
          </div>

          {/* سعر جرام 24 */}
          <div>
            <label className="block mb-2 text-sm text-zinc-300">
              سعر جرام 24 اليوم
            </label>
            <input
              type="number"
              value={price24}
              onChange={(e) => setPrice24(Number(e.target.value))}
              className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3"
              placeholder="مثال: 230"
            />
          </div>

        </div>

        {/* النتيجة */}
        <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6">

          {!isAboveNisab ? (
            <p className="text-red-400 font-medium">
              لا تجب الزكاة (لم يبلغ النصاب 85 جرام ذهب خالص)
            </p>
          ) : (
            <div>
              <p className="text-green-400 text-lg font-semibold">
                مقدار الزكاة الواجبة:
              </p>
              <p className="text-3xl font-bold mt-2 text-amber-300">
                {zakatAmount.toFixed(2)}
              </p>
            </div>
          )}

          <p className="mt-4 text-xs text-zinc-400">
            ملاحظة: يتم احتساب الزكاة بنسبة 2.5% إذا بلغ الذهب النصاب.
          </p>

        </div>

      </div>
    </main>
  );
}
