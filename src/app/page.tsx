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
            <ClawIcon /><span className="logo-text">web3\u722a\u5b50</span>
          </a>
          <div className="nav-desktop">
            {navItems.map((item) => (
              <a key={item} href={'#' + (item === "\u9996\u9875" ? "home" : item)}>{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <LoginModal />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href="#\u63a7\u5236\u53f0"><Zap className="mr-2 h-4 w-4" />\u542f\u52a8</a>
            </Button>
          </div>
        </div>
        <div className="nav-mobile">
          {navItems.map((item) => (
            <a key={item} href={'#' + (item === "\u9996\u9875" ? "home" : item)}>{item}</a>
          ))}
        </div>
      </header>

      <section id="home" className="relative mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-500/[0.08] px-4 py-1.5 text-sm text-violet-200/90">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              \u5b9e\u65f6\u76ef\u76d8 x AI \u5206\u6790 x \u81ea\u52a8\u5316\u63d0\u9192
            </div>
            <h1 className="text-balance max-w-4xl text-[1.85rem] font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              \u4f60\u7684\u4e2a\u4eba
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent mt-2">
                Web3 \u667a\u80fd\u52a9\u624b
              </span>
            </h1>
            <p className="text-balance mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              \u5b9e\u65f6\u76d1\u63a7\u5e01\u5b89\u5408\u7ea6\u884c\u60c5\u3001\u81ea\u52a8\u6293\u53d6 Web3 \u65b0\u95fb\u3001\u6df1\u5ea6\u5206\u6790\u4e3b\u6d41\u5e01\u8d70\u52bf\u3002
              \u50cf\u8d34\u8eab\u4ea4\u6613\u52a9\u624b\u4e00\u6837\uff0c7x24 \u5c0f\u65f6\u5e2e\u4f60\u76ef\u76d8\u3001\u6267\u884c\u7b56\u7565\u3002
            </p>
            <div className="mt-8 flex w-full max-w-full flex-col items-stretch gap-4 sm:mt-10 sm:w-auto sm:flex-row">
              <Button size="lg" className="px-8 py-3 text-base sm:px-10">
                <Zap className="mr-2 h-5 w-5" />\u7acb\u5373\u514d\u8d39\u4f7f\u7528
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-3 text-base sm:px-10">
                <a href="#\u63a7\u5236\u53f0"><Bot className="mr-2 h-5 w-5" />\u6253\u5f00\u63a7\u5236\u53f0</a>
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/40">
              <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400/70" />Binance \u5b9e\u65f6\u884c\u60c5</span>
              <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400/70" />CoinGecko API</span>
              <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400/70" />Telegram \u63a8\u9001</span>
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
                    <p className="mb-4 text-sm font-medium text-white/80">AI \u6b63\u5728\u76ef\u76d8</p>
                    {["BTC 4H \u63a5\u8fd1\u963b\u529b", "ETH \u8d44\u91d1\u8d39\u7387\u56de\u843d", "RWA \u65b0\u95fb\u70ed\u5ea6\u4e0a\u5347"].map((item) => (
                      <div key={item} className="mb-3 flex items-center gap-3 rounded-md bg-white/[0.045] p-3 text-sm text-white/66">
                        <Check className="h-4 w-4 text-emerald-300" />{item}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg border border-white/10 bg-[#0d1225] p-4">
                    <p className="mb-4 text-sm font-medium text-white/80">\u81ea\u52a8\u5316\u52a8\u4f5c</p>
                    {["\u6293\u53d6\u65b0\u95fb", "\u751f\u6210\u7b56\u7565", "\u53d1\u9001\u63d0\u9192"].map((item) => (
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
                  <p className="font-medium text-white/80">\u4eca\u65e5\u4ee3\u7406\u7ed3\u8bba</p>
                  <p className="mt-1 text-sm leading-6 text-white/55">
                    BTC \u77ed\u7ebf\u4ecd\u5728 60,700 - 62,400 \u533a\u95f4\u9707\u8361\uff0c\u7b49\u5f85\u653e\u91cf\u7a81\u7834\uff1bETH \u53d7 RWA \u548c\u7a33\u5b9a\u5e01\u53d9\u4e8b\u652f\u6491\uff0c\u9002\u5408\u7ee7\u7eed\u89c2\u5bdf\u3002
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="\u529f\u80fd" className="relative border-y border-white/10 bg-gradient-to-b from-violet-500/[0.03] to-transparent py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-cyan-200">\u529f\u80fd</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">\u4e3a Web3 \u73a9\u5bb6\u51c6\u5907\u7684\u5168\u80fd\u722a\u7259</h2>
            <p className="mt-4 text-white/58">\u4e0d\u53ea AI \u80fd\u804a\u5929\uff0c\u8fd8\u4f1a\u4e3b\u52a8\u770b\u76d8\u3001\u8ffd\u65b0\u95fb\u3001\u53d1\u63d0\u9192\uff0c\u628a\u91cd\u590d\u4efb\u52a1\u8dd1\u5b8c</p>
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

      <section id="\u65b0\u95fb" className="relative py-20">
        <div className="pointer-events-none absolute right-[-40px] top-[-40px] h-[100px] w-[100px] rounded-full bg-violet-500/10 blur-3xl sm:right-[-80px] sm:top-[-80px] sm:h-[200px] sm:w-[200px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-violet-200">Web3 \u60c5\u62a5</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">\u6700\u65b0 Web3 \u52a8\u6001</h2>
            </div>
            <Button variant="outline">\u5237\u65b0\u60c5\u62a5<ChevronRight className="ml-2 h-4 w-4" /></Button>
          </div>
          <div className="mt-8 grid gap-5 sm:mt-12 md:grid-cols-2 xl:grid-cols-3">
            {news.map((item, index) => (
              <Card key={item} className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:shadow-glow">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between text-xs text-white/42">
                    <span>\u60c5\u62a5\u901f\u9012</span>
                    <span>{index + 1} \u5c0f\u65f6\u524d</span>
                  </div>
                  <CardTitle className="leading-7">{item}</CardTitle>
                  <CardDescription className="leading-6">AI \u5df2\u63d0\u53d6\u91cd\u70b9\u3001\u98ce\u9669\u70b9\u548c\u53ef\u80fd\u5f71\u54cd\u7684\u677f\u5757\uff0c\u540e\u7eed\u53ef\u4ee5\u63a5\u5165\u771f\u5b9e\u65b0\u95fb\u6e90\u3002</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="\u5206\u6790" className="relative border-y border-white/10 bg-gradient-to-b from-transparent to-violet-500/[0.03] py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-medium text-cyan-200">\u5b9e\u65f6\u5206\u6790</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">\u4e3b\u6d41\u5e01\u5b9e\u65f6\u5206\u6790</h2>
            <p className="mt-4 leading-8 text-white/60">
              BTC\uff1a\u5f53\u524d\u7ea6 62,000 \u7f8e\u5143\u533a\u95f4\u9707\u8361\uff0c\u673a\u6784\u957f\u671f\u770b\u597d\u3002ETH\uff1a\u7ea6 1,670 \u7f8e\u5143\u9644\u8fd1\uff0cRWA + \u7a33\u5b9a\u5e01\u9a71\u52a8\uff0c2026 \u5e74\u6709\u671b\u5f3a\u52bf\u8868\u73b0\u3002
            </p>
            <Button className="mt-7">AI \u6df1\u5ea6\u5206\u6790<ArrowRight className="ml-2 h-4 w-4" /></Button>
          </div>
          <div className="rounded-lg border border-white/10 bg-[#090d1c]/86 p-4 shadow-panel transition-all duration-300 hover:border-violet-300/20 hover:shadow-glow">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-medium">BTC / ETH \u8d8b\u52bf mock</p>
              <ShieldAlert className="h-4 w-4 text-amber-300" />
            </div>
            <div className="grid h-44 items-end gap-2 rounded-md bg-black/20 p-4 sm:h-72 sm:grid-cols-12">
              {[42, 48, 45, 52, 58, 55, 64, 61, 68, 74, 70, 78].map((height, index) => (
                <div key={index} className="flex h-full items-end">
                  <div className="w-full rounded-t bg-gradient-to-t from-violet-500 to-cyan-300 shadow-glow" style={{ height: height + "%" }} />
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-white/42">\u56fe\u8868\u4e3a\u5360\u4f4d\u6f14\u793a\uff0c\u540e\u7eed\u53ef\u66ff\u6362\u4e3a Binance K \u7ebf\u3001TradingView \u6216\u81ea\u7814\u7b56\u7565\u56fe\u8868\u3002</p>
          </div>
        </div>
      </section>

      <PricingSection />

      <section id="\u63a7\u5236\u53f0" className="relative border-y border-white/10 bg-gradient-to-r from-violet-500/12 via-cyan-500/10 to-violet-500/12 py-14 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 lg:gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">\u6253\u5f00 web3\u722a\u5b50 \u63a7\u5236\u53f0\uff0c\u8ba9\u5b83\u66ff\u4f60\u5168\u5929\u5019\u76ef\u76d8</h2>
            <p className="mt-4 text-white/62">\u5f53\u524d mock \u5165\u53e3\uff0c\u540e\u7eed\u53ef\u63a5\u771f\u5b9e\u8d26\u53f7\u7cfb\u7edf\u3001\u4f1a\u5458\u72b6\u6001\u548c\u81ea\u52a8\u6fc0\u6d3b</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button size="lg"><Zap className="mr-2 h-5 w-5" />\u542f\u52a8 AI \u4ee3\u7406</Button>
            <Button asChild variant="outline" size="lg"><a href="/login">\u767b\u5f55\u63a7\u5236\u53f0</a></Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>\u00a9 2026 web3\u722a\u5b50. \u884c\u60c5\u591a\uff0c\u522b\u4e00\u4e2a\u4eba\u625b\u3002</p>
          <div className="flex gap-5">
            <a href="#\u529f\u80fd" className="hover:text-white">\u529f\u80fd</a>
            <a href="#\u5b9a\u4ef7" className="hover:text-white">\u5b9a\u4ef7</a>
            <a href="https://t.me/+-hTIvB6moWo4YWY1" className="hover:text-white">Telegram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
