"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { Loader2, TrendingUp, TrendingDown, Newspaper, BrainCircuit, Zap, Cpu, Sparkles } from "lucide-react";

const NEWS = [
  { t: "AI Agents + RWA 融合爆发，2026 Davos 重点议题", d: "AI Agent 与 RWA 正在深度融合，2026 年达沃斯论坛将焦点对准这一新兴趋势" },
  { t: "机构加速 tokenized 资产，RWA 市场 cap 超 220 亿美元", d: "传统金融机构加速入场，RWA 代币化资产总市值已突破 220 亿美元" },
  { t: "ETH 稳定币与 RWA 成 DeFi 新支柱", d: "以太坊上稳定币与 RWA 资产正在成为 DeFi 生态新的核心支柱" },
  { t: "香港 Web3 政策持续利好，跨境区块链项目推进", d: "香港特区政府持续推出 Web3 支持政策，跨境区块链项目加速落地" },
];

const ACTIONS = [
  { id: "news", label: "抓取新闻", icon: Newspaper, color: "from-violet-500 to-purple-600" },
  { id: "agent", label: "启动代理", icon: BrainCircuit, color: "from-cyan-500 to-teal-600" },
  { id: "analyze", label: "AI 分析", icon: Zap, color: "from-amber-500 to-orange-600" },
];

const COIN_MAP: Record<string, string> = { bitcoin: "BTC", ethereum: "ETH" };

export default function DashboardPage() {
  const { user } = useAuth();
  const [prices, setPrices] = useState<Record<string, { usd: number; chg: number }>>({});

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true")
      .then(r => r.json())
      .then((d: any) => {
        const m: Record<string, { usd: number; chg: number }> = {};
        for (const [id, v] of Object.entries(d)) {
          const x = v as any;
          if (x?.usd) m[id] = { usd: x.usd, chg: x.usd_24h_change ?? 0 };
        }
        if (Object.keys(m).length > 0) setPrices(m);
      })
      .catch(() => {});
  }, []);

  return (
    <main className="min-h-screen bg-[#05050f] pt-20 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent sm:text-5xl">
            控制台
          </h1>
          <p className="mt-2 text-white/50">管理你的 Web3 智能助手</p>
          {user && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-1.5 text-sm text-emerald-300 ring-1 ring-emerald-500/20">
              <Sparkles className="h-3.5 w-3.5" />{user.email}
            </div>
          )}
        </div>

        {/* Prices */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-white/70">实时行情</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {["bitcoin", "ethereum"].map((id) => {
              const p = prices[id];
              const meta = COIN_MAP[id] || id;
              return (
                <div key={id} className="rounded-xl border border-violet-500/10 bg-[#0d1128]/80 p-5 backdrop-blur-xl shadow-lg shadow-violet-500/5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/40">{meta}/USDT</span>
                    {p && (
                      <span className={"inline-flex items-center gap-1 text-xs font-medium " + (p.chg >= 0 ? "text-emerald-400" : "text-rose-400")}>
                        {p.chg >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {p.chg >= 0 ? "+" : ""}{p.chg.toFixed(2)}%
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-2xl font-bold tracking-tight">${p ? p.usd.toLocaleString() : "加载中..."}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* AI Status */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-white/70">AI 代理状态</h2>
          <div className="rounded-xl border border-violet-500/10 bg-[#0d1128]/80 p-5 backdrop-blur-xl shadow-lg shadow-violet-500/5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                <Cpu className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <p className="font-medium">Web3 AI 代理</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />运行中
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* News */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-white/70">最新动态</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {NEWS.slice(0, 4).map((item, i) => (
              <div key={i} className="rounded-xl border border-violet-500/10 bg-[#0d1128]/80 p-4 backdrop-blur-xl shadow-lg shadow-violet-500/5">
                <p className="text-sm font-medium leading-6 text-white/85">{item.t}</p>
                <p className="mt-1 text-xs leading-5 text-white/40">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-white/70">快速操作</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {ACTIONS.map((act) => (
              <button
                key={act.id}
                onClick={() => {}}
                className="flex items-center justify-center gap-3 rounded-xl border border-violet-500/10 bg-[#0d1128]/80 px-6 py-5 text-sm font-medium transition hover:border-violet-500/25 hover:bg-violet-500/10 backdrop-blur-xl shadow-lg shadow-violet-500/5"
              >
                <act.icon className="h-5 w-5 text-violet-400" />
                {act.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
