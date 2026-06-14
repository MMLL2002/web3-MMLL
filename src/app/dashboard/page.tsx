export default function Page() {
  return <main className="min-h-screen bg-[#05050f] text-white">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent tracking-tight">控制台</h1>
      <p className="mt-2 text-white/50">管理你的 Web3 智能助手</p>
      
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[["BTC","62,415","+2.34"],["ETH","1,672","+1.12"],["SOL","142.5","-0.87"],["BNB","589.2","+0.45"]].map(([n,p,c]) =>
          <div key={n} className="rounded-xl border border-violet-500/10 bg-[#0d1128]/80 p-5 backdrop-blur-xl">
            <p className="text-xs text-white/40">{n}/USDT</p>
            <p className="mt-1 text-xl font-bold tracking-tight">${p}</p>
            <p className={"text-xs font-medium " + (c.startsWith("+") ? "text-emerald-400" : "text-rose-400")}>{c}%</p>
          </div>
        )}
      </div>
      
      <div className="mt-8 rounded-xl border border-violet-500/10 bg-[#0d1128]/80 p-5 backdrop-blur-xl">
        <h2 className="text-lg font-semibold">AI 代理状态</h2>
        <p className="mt-2 flex items-center gap-2 text-sm text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />运行中
        </p>
      </div>
      
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {["AI Agents + RWA 融合爆发，2026 Davos 重点议题","机构加速 tokenized 资产，RWA 市场 cap 超 220 亿美元","ETH 稳定币与 RWA 成 DeFi 新支柱，2026 或迎超级周期","香港 Web3 政策持续利好，跨境区块链项目推进"].map((t,i) =>
          <div key={i} className="rounded-xl border border-violet-500/10 bg-[#0d1128]/80 p-4 backdrop-blur-xl">
            <p className="text-sm leading-6 text-white/80">{t}</p>
          </div>
        )}
      </div>
      
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {["抓取新闻","启动代理","AI 分析"].map(b =>
          <button key={b} className="rounded-xl border border-violet-500/10 bg-[#0d1128]/80 px-6 py-4 text-sm font-medium transition hover:border-violet-500/25 hover:bg-violet-500/10 backdrop-blur-xl">{b}</button>
        )}
      </div>
    </div>
  </main>;
}
