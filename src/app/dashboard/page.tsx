"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Loader2, Activity, BrainCircuit, Cpu, Newspaper, TrendingUp, TrendingDown, Zap } from "lucide-react";

const NEWS = [
  { t: "AI Agents + RWA 融合爆发，2026 Davos 重点议题" },
  { t: "机构加速 tokenized 资产，RWA 市场 cap 超 220 亿美元" },
  { t: "ETH 稳定币与 RWA 成 DeFi 新支柱" },
];

const ACTIONS = [
  { id: "news", label: "抓取新闻", icon: Newspaper, msg: "新闻已更新" },
  { id: "analyze", label: "AI 分析", icon: BrainCircuit, msg: "分析已完成" },
  { id: "auto", label: "自动操作", icon: Zap, msg: "操作已执行" },
];

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [prices, setPrices] = useState<Record<string, { usd: number; chg: number }>>({});
  const [actionMsg, setActionMsg] = useState("");
  const [busy, setBusy] = useState("");

  useEffect(() => {
    if (!user) { router.push("/login"); return; }
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
  }, [user, router]);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#05050f]">
        <Loader2 className="h-8 w-8 animate-spin text-violet-400" />
      </div>
    );
  }

  const doAction = (name: string, msg: string) => {
    setBusy(name); setActionMsg("");
    setTimeout(() => { setBusy(""); setActionMsg(msg); }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#05050f] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent sm:text-5xl">
            控制台
          </h1>
          <p className="mt-3 text-white/50">管理你的 Web3 智能助手，查看行情、新闻和任务状态</p>
          <div className="mt-3 flex items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-300 ring-1 ring-emerald-500/20">{user.email}</span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-white/70">实时行情</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {["bitcoin", "ethereum"].map((id) => {
              const p = prices[id];
              const meta = id === "bitcoin" ? "BTC" : "ETH";
              return (
                <div key={id} className="rounded-xl border border-violet-500/10 bg-[#0a0a1f]/80 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/40">{meta}/USDT</span>
                    <span className={"inline-flex items-center gap-1 text-xs font-medium " + (p && p.chg >= 0 ? "text-emerald-400" : "text-rose-400")}>
                      {p ? (p.chg >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />) : null}
                      {p ? (p.chg >= 0 ? "+" : "") + p.chg.toFixed(2) + "%" : "---"}
                    </span>
                  </div>
                  <p className="mt-2 text-2xl font-bold tracking-tight">${p ? p.usd.toLocaleString() : "---"}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-white/70">AI 代理状态</h2>
          <div className="rounded-xl border border-violet-500/10 bg-[#0a0a1f]/80 p-5 backdrop-blur-xl">
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

        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-white/70">最新动态</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {NEWS.map((item, i) => (
              <div key={i} className="rounded-xl border border-violet-500/10 bg-[#0a0a1f]/80 p-4 backdrop-blur-xl">
                <p className="text-sm leading-6 text-white/80">{item.t}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-white/70">快速操作</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {ACTIONS.map((act) => (
              <button
                key={act.id}
                onClick={() => doAction(act.id, act.msg)}
                disabled={busy === act.id}
                className="flex items-center justify-center gap-3 rounded-xl border border-violet-500/10 bg-[#0a0a1f]/80 px-6 py-5 text-sm font-medium transition hover:border-violet-500/25 hover:bg-violet-500/5 disabled:opacity-50 backdrop-blur-xl"
              >
                {busy === act.id ? (
                  <Loader2 className="h-5 w-5 animate-spin text-violet-400" />
                ) : (
                  <act.icon className="h-5 w-5 text-violet-400" />
                )}
                {act.label}
              </button>
            ))}
          </div>
          {actionMsg && (
            <p className="mt-4 text-center text-sm text-emerald-400">{actionMsg}</p>
          )}
        </div>
      </div>
    </main>
  );
}
