"use client";

import { useEffect, useState } from "react";

type CoinGeckoData = Record<string, { usd?: number; usd_24h_change?: number }>;

const COIN_META: Record<string, { name: string; pair: string }> = {
  bitcoin: { name: "BTC", pair: "BTC/USDT" },
  ethereum: { name: "ETH", pair: "ETH/USDT" },
  solana: { name: "SOL", pair: "SOL/USDT" },
  binancecoin: { name: "BNB", pair: "BNB/USDT" },
};

export function MarketTicker() {
  const [prices, setPrices] = useState<Record<string, { usd: number; chg: number }>>({});
  const [source, setSource] = useState("mock");

  useEffect(() => {
    fetch("/api/coins")
      .then((r) => r.json())
      .then((d: CoinGeckoData) => {
        const map: Record<string, { usd: number; chg: number }> = {};
        for (const [id, v] of Object.entries(d)) {
          if (v?.usd) map[id] = { usd: v.usd, chg: v.usd_24h_change ?? 0 };
        }
        if (Object.keys(map).length > 0) {
          setPrices(map);
          setSource("CoinGecko");
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {["bitcoin", "ethereum", "solana", "binancecoin"].map((id) => {
        const meta = COIN_META[id];
        const p = prices[id];
        return (
          <div key={id} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
            <p className="text-xs text-white/45">{meta.pair}</p>
            <p className="mt-0.5 text-sm font-semibold text-white">
              ${p ? p.usd.toLocaleString() : "---"}
            </p>
            {p && (
              <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${
                p.chg >= 0 ? "text-emerald-400" : "text-rose-400"
              }`}>
                {p.chg >= 0 ? "+" : ""}
                {p.chg.toFixed(2)}%
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
