import { TrendingUp } from "lucide-react";

const NEWS = [
  { t: "AI Agents + RWA 融合爆发，2026 Davos 重点议题" },
  { t: "机构加速 tokenized 资产，RWA 市场 cap 超 220 亿美元" },
  { t: "ETH 稳定币与 RWA 成 DeFi 新支柱" },
  { t: "香港 Web3 政策持续利好，跨境区块链项目推进" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#05050f] pt-20 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent sm:text-5xl">
            控制台
          </h1>
          <p className="mt-2 text-white/50">管理你的 Web3 智能助手</p>
        </div>

        {/* Prices */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-white/70">实时行情</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {["BTC", "ETH"].map((name) => (
              <div key={name} className="rounded-xl border border-violet-500/10 bg-[#0d1128]/80 p-5 backdrop-blur-xl shadow-lg shadow-violet-500/5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/40">{name}/USDT</span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400">
                    <TrendingUp className="h-3 w-3" />+2.34%
                  </span>
                </div>
                <p className="mt-2 text-2xl font-bold tracking-tight">{name === "BTC" ? "$62,415" : "$1,672"}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Status */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-white/70">AI 代理状态</h2>
          <div className="rounded-xl border border-violet-500/10 bg-[#0d1128]/80 p-5 backdrop-blur-xl shadow-lg shadow-violet-500/5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                <span className="h-6 w-6 text-emerald-400">●</span>
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
                <p className="text-sm leading-6 text-white/80">{item.t}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-white/70">快速操作</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <button className="flex items-center justify-center gap-3 rounded-xl border border-violet-500/10 bg-[#0d1128]/80 px-6 py-5 text-sm font-medium transition hover:border-violet-500/25 hover:bg-violet-500/10 backdrop-blur-xl shadow-lg shadow-violet-500/5">
              抓取新闻
            </button>
            <button className="flex items-center justify-center gap-3 rounded-xl border border-violet-500/10 bg-[#0d1128]/80 px-6 py-5 text-sm font-medium transition hover:border-violet-500/25 hover:bg-violet-500/10 backdrop-blur-xl shadow-lg shadow-violet-500/5">
              启动代理
            </button>
            <button className="flex items-center justify-center gap-3 rounded-xl border border-violet-500/10 bg-[#0d1128]/80 px-6 py-5 text-sm font-medium transition hover:border-violet-500/25 hover:bg-violet-500/10 backdrop-blur-xl shadow-lg shadow-violet-500/5">
              AI 分析
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
