"use client";

import { useEffect, useState } from "react";

type CoinGeckoPrice = {
  bitcoin?: {
    usd?: number;
    usd_24h_change?: number;
  };
};

export function MarketTicker() {
  const [price, setPrice] = useState(62000);
  const [change, setChange] = useState(0.68);
  const [source, setSource] = useState("mock");

  useEffect(() => {
    async function loadPrice() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true",
          { next: { revalidate: 30 } },
        );
        if (!response.ok) return;
        const data = (await response.json()) as CoinGeckoPrice;
        if (data.bitcoin?.usd) {
          setPrice(data.bitcoin.usd);
          setChange(data.bitcoin.usd_24h_change ?? 0.68);
          setSource("CoinGecko");
        }
      } catch {
        setSource("mock");
      }
    }

    loadPrice();
  }, []);

  return (
    <div className="rounded-lg border border-cyan-300/18 bg-cyan-300/[0.06] p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm text-white/52">当前行情 · {source}</p>
        <span className="rounded-md bg-emerald-400/12 px-2 py-1 text-xs text-emerald-200">
          {change >= 0 ? "+" : ""}
          {change.toFixed(2)}%
        </span>
      </div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-lg font-semibold">BTC/USDT</p>
          <p className="mt-1 text-3xl font-semibold">
            ≈ {Math.round(price).toLocaleString()} USDT
          </p>
        </div>
        <div className="text-right text-sm leading-6 text-white/55">
          <p>24H 高 62,445</p>
          <p>24H 低 60,691</p>
        </div>
      </div>
    </div>
  );
}
