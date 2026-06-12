import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  Globe2,
  MessageCircle,
  Newspaper,
  ShieldAlert,
  Sparkles,
  Zap,
} from "lucide-react";

import { LoginModal } from "@/components/login-modal";
import { MarketTicker } from "@/components/market-ticker";
import { PricingSection } from "@/components/pricing-section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const navItems = ["首页", "功能", "新闻", "分析", "定价", "控制台"];

const features = [
  {
    icon: BarChart3,
    title: "币安合约 AI 分析",
    text: "多周期 K 线 + 指标自动解读，给出高抛低吸策略。提醒一句：这不是投资建议。",
  },
  {
    icon: Newspaper,
    title: "Web3 实时新闻",
    text: "自动抓取并总结 RWA、AI Agent、监管动态，把重点翻成能看懂的中文。",
  },
  {
    icon: BrainCircuit,
    title: "主流币深度分析",
    text: "BTC、ETH 等价格预测，结合技术面、链上数据和机构观点一起看。",
  },
  {
    icon: MessageCircle,
    title: "个人 Agent 自动化",
    text: "Telegram / WhatsApp 监控、RWA 警报、任务循环执行，让代理自己跑起来。",
  },
];

const news = [
  "AI Agents + RWA 融合爆发，2026 Davos 重点议题",
  "机构加速 tokenized 资产，RWA 市场 cap 超 220 亿美元",
  "ETH 稳定币与 RWA 成 DeFi 新支柱，2026 或迎超级周期",
  "香港 Web3 政策持续利好，跨境区块链项目推进",
  "主流交易所加码 AI Agent 赛道，自动化研究工具升温",
  "稳定币结算场景扩展，链上支付继续靠近真实业务",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050710] text-white">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-75" />
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] top-[420px] h-[340px] w-[340px] rounded-full bg-cyan-500/16 blur-3xl" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050710]/72 backdrop-blur-xl">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#070918] shadow-glow">
                <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-[#070918]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="7" cy="9" r="2.5"/>
                    <circle cx="17" cy="9" r="2.5"/>
                    <circle cx="5" cy="17" r="2.5"/>
                    <circle cx="19" cy="17" r="2.5"/>
                    <path d="M7 12.5c0 2 2 3.5 5 3.5s5-1.5 5-3.5"/>
                  </svg>
              </span>
              <span className="text-lg font-semibold tracking-normal">web3爪子</span>
            </a>
            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item === "首页" ? "home" : item}`}
                  className="text-sm text-white/66 transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <LoginModal />
              <Button asChild size="sm" className="hidden sm:inline-flex">
                <a href="#控制台">
                  <Zap className="mr-2 h-4 w-4" />
                  启动
                </a>
              </Button>
            </div>
          </div>
          <div className="-mx-4 flex gap-1 overflow-x-auto border-t border-white/8 px-4 pb-3 pt-1 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item === "首页" ? "home" : item}`}
                className="shrink-0 rounded-md px-3 py-2 text-sm text-white/66 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="home" className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.06] px-3 py-2 text-sm text-white/78 backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Web3 行情、新闻、消息提醒，一只 AI 爪子全包
            </div>
            <h1 className="text-balance max-w-4xl text-5xl font-semibold leading-tight tracking-normal sm:text-6xl lg:text-7xl">
              你的个人
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">
                Web3 爪子
              </span>
            </h1>
            <p className="text-balance mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              实时监控币安合约、抓取 Web3 新闻、深度分析主流币，像真人一样帮你自动化交易和决策。
            </p>
            <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row">
              <Button size="lg">
                <Zap className="mr-2 h-5 w-5" />
                立即启动 AI 代理
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#控制台">
                  <Bot className="mr-2 h-5 w-5" />
                  打开网页控制台
                </a>
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/48">
              <span>Binance 行情示例</span>
              <span>CoinGecko API 可替换</span>
              <span>Telegram 群提醒</span>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-x-6 -bottom-8 h-24 rounded-full bg-violet-500/24 blur-3xl" />
            <div className="relative overflow-hidden rounded-lg border border-white/12 bg-[#090d1c]/94 shadow-panel">
              <div className="flex h-12 items-center justify-between border-b border-white/10 bg-white/[0.035] px-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="rounded-md border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/44">
                  Web3 Agent Console
                </div>
              </div>
              <div className="space-y-4 p-4 sm:p-6">
                <MarketTicker />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-[#0d1225] p-4">
                    <p className="mb-4 text-sm font-medium">AI 正在盯盘</p>
                    {["BTC 4H 接近阻力", "ETH 资金费率回落", "RWA 新闻热度上升"].map((item) => (
                      <div key={item} className="mb-3 flex items-center gap-3 rounded-md bg-white/[0.045] p-3 text-sm text-white/66">
                        <Check className="h-4 w-4 text-emerald-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg border border-white/10 bg-[#0d1225] p-4">
                    <p className="mb-4 text-sm font-medium">自动动作</p>
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
                  <p className="font-medium">今日代理结论</p>
                  <p className="mt-1 text-sm leading-6 text-white/55">
                    BTC 短线仍在 60,700 - 62,400 区间震荡，等待放量突破；ETH 受 RWA 和稳定币叙事支撑，适合继续观察。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="功能" className="relative border-y border-white/10 bg-white/[0.025] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-cyan-200">功能</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              给 Web3 玩家准备的 AI 网页代理
            </h2>
            <p className="mt-4 text-white/58">
              它不只是聊天，会主动看盘、追新闻、发提醒，还能把重复任务一轮轮跑完。
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="group overflow-hidden">
                  <CardHeader>
                    <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-md bg-white/[0.07] text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-[#07101c]">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-violet-200">Web3 新闻</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
                最新 Web3 动态
              </h2>
            </div>
            <Button variant="outline">
              自动刷新新闻
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {news.map((item, index) => (
              <Card key={item} className="overflow-hidden">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between text-xs text-white/42">
                    <span>Mock News</span>
                    <span>{index + 1} 小时前</span>
                  </div>
                  <CardTitle className="leading-7">{item}</CardTitle>
                  <CardDescription className="leading-6">
                    AI 已提取重点、风险点和可能影响的板块，后续可以接入真实新闻源。
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="分析" className="relative border-y border-white/10 bg-white/[0.025] py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-medium text-cyan-200">主流币分析</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              主流币实时分析
            </h2>
            <p className="mt-4 leading-8 text-white/60">
              BTC：当前约 62,000 美元区间震荡，机构长期看好。ETH：约 1,670 美元附近，RWA + 稳定币驱动，2026 年有望强势表现。
            </p>
            <Button className="mt-7">
              启动 AI 深度分析
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="rounded-lg border border-white/10 bg-[#090d1c]/86 p-4 shadow-panel">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-medium">BTC / ETH 趋势 mock</p>
              <ShieldAlert className="h-4 w-4 text-amber-300" />
            </div>
            <div className="grid h-72 items-end gap-2 rounded-md bg-black/20 p-4 sm:grid-cols-12">
              {[42, 48, 45, 52, 58, 55, 64, 61, 68, 74, 70, 78].map((height, index) => (
                <div key={index} className="flex h-full items-end">
                  <div
                    className="w-full rounded-t bg-gradient-to-t from-violet-500 to-cyan-300 shadow-glow"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-white/42">
              图表为占位演示，后续可替换为 Binance K 线、TradingView 或自研策略图表。
            </p>
          </div>
        </div>
      </section>

      <PricingSection />

      <section id="控制台" className="relative border-y border-white/10 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
              打开 web3爪子 网页控制台，让它替你盯盘和跑消息
            </h2>
            <p className="mt-4 text-white/62">
              当前是 mock 启动入口，后面可以接真实账号系统、会员状态和自动激活流程。
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button size="lg">
              <Zap className="mr-2 h-5 w-5" />
              启动网页代理
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/login">登录控制台</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 web3爪子. Web3 信息很多，别一个人硬盯。</p>
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
