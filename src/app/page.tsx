import {
  ArrowRight, BarChart3, Bot, BrainCircuit, Check,
  ChevronRight, Globe2, MessageCircle, Newspaper,
  ShieldAlert, Sparkles, Zap,
} from "lucide-react";

import { LoginModal } from "@/components/login-modal";
import { MarketTicker } from "@/components/market-ticker";
import { PricingSection } from "@/components/pricing-section";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function ClawIcon() {
  return (
    <svg className="logo-icon" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a78bfa" /><stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <ellipse cx="12" cy="14.5" rx="3.8" ry="3.2" fill="url(#cg)" opacity="0.9" />
      <ellipse cx="12" cy="5.5" rx="2.4" ry="2.1" fill="url(#cg)" opacity="0.85" />
      <ellipse cx="5" cy="9.5" rx="2.4" ry="2.1" fill="url(#cg)" opacity="0.85" />
      <ellipse cx="19" cy="9.5" rx="2.4" ry="2.1" fill="url(#cg)" opacity="0.85" />
      <ellipse cx="6.5" cy="19" rx="2.2" ry="2" fill="url(#cg)" opacity="0.75" />
      <ellipse cx="17.5" cy="19" rx="2.2" ry="2" fill="url(#cg)" opacity="0.75" />
    </svg>
  );
}

const navItems = ["??", "??", "??", "??", "??", "???"];

const features = [
  { icon: BarChart3, title: "??????", text: "AI ???? K ?????????????????" },
  { icon: Newspaper, title: "Web3 ????", text: "???? RWA?AI Agent???????????????????" },
  { icon: BrainCircuit, title: "???????", text: "BTC?ETH ???? + ??? + ???? + ???????????" },
  { icon: MessageCircle, title: "???????", text: "Telegram/WhatsApp ???RWA ????????????? 7x24 ???" },
];

const news = [
  "AI Agents + RWA ?????2026 Davos ????",
  "???? tokenized ???RWA ?? cap ? 220 ???",
  "ETH ???? RWA ? DeFi ????2026 ??????",
  "?? Web3 ????????????????",
  "??????? AI Agent ????????????",
  "??????????????????????",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050710] text-white">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-75" />
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-3xl sm:h-[440px] sm:w-[440px]" />
      <div className="pointer-events-none absolute right-[-60px] top-[420px] h-[180px] w-[180px] rounded-full bg-cyan-500/16 blur-3xl sm:right-[-120px] sm:h-[340px] sm:w-[340px]" />

      <header className="site-header">
        <div className="header-inner">
          <a href="#home" className="logo-link">
            <ClawIcon /><span className="logo-text">web3爪子</span>
          </a>
          <div className="nav-desktop">
            {navItems.map((item) => (
              <a key={item} href={'#' + (item === "首页" ? "home" : item)}>{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <LoginModal />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href="#控制台"><Zap className="mr-2 h-4 w-4" />启动</a>
            </Button>
          </div>
        </div>
        <div className="nav-mobile">
          {navItems.map((item) => (
            <a key={item} href={'#' + (item === "首页" ? "home" : item)}>{item}</a>
          ))}
        </div>
      </header>

      <section id="home" className="relative mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-500/[0.08] px-4 py-1.5 text-sm text-violet-200/90">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              实时盯盘 x AI 分析 x 自动化提醒
            </div>
            <h1 className="text-balance max-w-4xl text-[1.85rem] font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              你的个人
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent mt-2">
                Web3 智能助手
              </span>
            </h1>
            <p className="text-balance mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              实时监控币安合约行情、自动抓取 Web3 新闻、深度分析主流币走势。
              像贴身交易助手一样，7x24 小时帮你盯盘、执行策略。
            </p>
            <div className="mt-8 flex w-full max-w-full flex-col items-stretch gap-4 sm:mt-10 sm:w-auto sm:flex-row">
              <Button size="lg" className="px-8 py-3 text-base sm:px-10">
                <Zap className="mr-2 h-5 w-5" />立即免费使用
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-3 text-base sm:px-10">
                <a href="#控制台"><Bot className="mr-2 h-5 w-5" />打开控制台</a>
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/40">
              <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400/70" />Binance 实时行情</span>
              <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400/70" />CoinGecko API</span>
              <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400/70" />Telegram 推送</span>
            </div>
          </div>

          <div className="relative animate-float will-change-transform">
            <div className="absolute inset-x-6 -bottom-8 h-20 rounded-full bg-violet-500/20 blur-3xl sm:h-24 sm:bg-violet-500/24" />
            <div className="relative overflow-hidden rounded-xl border border-violet-400/20 bg-[#090d1c]/94 shadow-panel shadow-violet-500/10">
              <div className="flex h-12 items-center justify-between border-b border-white/10 bg-white/[0.035] px-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="rounded-md border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/44">Web3 Agent Console</div>
              </div>
              <div className="space-y-4 p-4 sm:p-6">
                <MarketTicker />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-[#0d1225] p-4">
                    <p className="mb-4 text-sm font-medium text-white/80">AI 正在盯盘</p>
                    {["BTC 4H 接近阻力", "ETH 资金费率回落", "RWA 新闻热度上升"].map((item) => (
                      <div key={item} className="mb-3 flex items-center gap-3 rounded-md bg-white/[0.045] p-3 text-sm text-white/66">
                        <Check className="h-4 w-4 text-emerald-300" />{item}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg border border-white/10 bg-[#0d1225] p-4">
                    <p className="mb-4 text-sm font-medium text-white/80">自动化动作</p>
                    {["抓取新闻", "生成策略", "发送提醒"].map((item) => (
                      <div key={item} className="mb-4 flex items-center gap-3">
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                          <div className="glass-line relative h-full w-[78%] overflow-hidden rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                        </div>
                        <span className="w-16 text-xs text-white/48">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-4">
                  <p className="font-medium text-white/80">今日代理结论</p>
                  <p className="mt-1 text-sm leading-6 text-white/55">
                    BTC 短线仍在 60,700 - 62,400 区间震荡，等待放量突破；ETH 受 RWA 和稳定币叙事支撑，适合继续观察。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="功能" className="relative border-y border-white/10 bg-gradient-to-b from-violet-500/[0.03] to-transparent py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-cyan-200">功能</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">为 Web3 玩家准备的全能爪牙</h2>
            <p className="mt-4 text-white/58">不只 AI 能聊天，还会主动看盘、追新闻、发提醒，把重复任务跑完</p>
          </div>
          <div className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="group overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-300/30 hover:shadow-glow">
                  <CardHeader>
                    <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.07] text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-[#07101c]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="leading-6">{feature.text}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="新闻" className="relative py-20">
        <div className="pointer-events-none absolute right-[-40px] top-[-40px] h-[100px] w-[100px] rounded-full bg-violet-500/10 blur-3xl sm:right-[-80px] sm:top-[-80px] sm:h-[200px] sm:w-[200px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-violet-200">Web3 情报</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">最新 Web3 动态</h2>
            </div>
            <Button variant="outline">刷新情报<ChevronRight className="ml-2 h-4 w-4" /></Button>
          </div>
          <div className="mt-8 grid gap-5 sm:mt-12 md:grid-cols-2 xl:grid-cols-3">
            {news.map((item, index) => (
              <Card key={item} className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:shadow-glow">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between text-xs text-white/42">
                    <span>情报速递</span>
                    <span>{index + 1} 小时前</span>
                  </div>
                  <CardTitle className="leading-7">{item}</CardTitle>
                  <CardDescription className="leading-6">AI 已提取重点、风险点和可能影响的板块，后续可以接入真实新闻源。</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="分析" className="relative border-y border-white/10 bg-gradient-to-b from-transparent to-violet-500/[0.03] py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-medium text-cyan-200">实时分析</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">主流币实时分析</h2>
            <p className="mt-4 leading-8 text-white/60">
              BTC：当前约 62,000 美元区间震荡，机构长期看好。ETH：约 1,670 美元附近，RWA + 稳定币驱动，2026 年有望强势表现。
            </p>
            <Button className="mt-7">AI 深度分析<ArrowRight className="ml-2 h-4 w-4" /></Button>
          </div>
          <div className="rounded-lg border border-white/10 bg-[#090d1c]/86 p-4 shadow-panel transition-all duration-300 hover:border-violet-300/20 hover:shadow-glow">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-medium">BTC / ETH 趋势 mock</p>
              <ShieldAlert className="h-4 w-4 text-amber-300" />
            </div>
            <div className="grid h-44 items-end gap-2 rounded-md bg-black/20 p-4 sm:h-72 sm:grid-cols-12">
              {[42, 48, 45, 52, 58, 55, 64, 61, 68, 74, 70, 78].map((height, index) => (
                <div key={index} className="flex h-full items-end">
                  <div className="w-full rounded-t bg-gradient-to-t from-violet-500 to-cyan-300 shadow-glow" style={{ height: height + "%" }} />
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-white/42">图表为占位演示，后续可替换为 Binance K 线、TradingView 或自研策略图表。</p>
          </div>
        </div>
      </section>

      <PricingSection />

      <section id="控制台" className="relative border-y border-white/10 bg-gradient-to-r from-violet-500/12 via-cyan-500/10 to-violet-500/12 py-14 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 lg:gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">打开 web3爪子 控制台，让它替你全天候盯盘</h2>
            <p className="mt-4 text-white/62">当前 mock 入口，后续可接真实账号系统、会员状态和自动激活</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button size="lg"><Zap className="mr-2 h-5 w-5" />启动 AI 代理</Button>
            <Button asChild variant="outline" size="lg"><a href="/login">登录控制台</a></Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 web3爪子. 行情多，别一个人扛。</p>
          <div className="flex gap-5">
            <a href="#功能" className="hover:text-white">功能</a>
            <a href="#定价" className="hover:text-white">定价</a>
            <a href="https://t.me/+-hTIvB6moWo4YWY1" className="hover:text-white">Telegram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
