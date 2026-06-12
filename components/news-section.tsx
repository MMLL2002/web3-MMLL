"use client";

import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DEFAULT_NEWS = [
  { title: "AI Agents + RWA 融合爆发，2026 Davos 重点议题", desc: "AI Agent 与 RWA 资产正在深度融合，2026 年达沃斯论坛将焦点对准了这一新兴趋势。" },
  { title: "机构加速 tokenized 资产，RWA 市场 cap 超 220 亿美元", desc: "传统金融机构加速入场，RWA 代币化资产总市值已突破 220 亿美元。" },
  { title: "ETH 稳定币与 RWA 成 DeFi 新支柱，2026 或迎超级周期", desc: "以太坊上稳定币与 RWA 资产正在成为 DeFi 生态新的核心支柱。" },
  { title: "香港 Web3 政策持续利好，跨境区块链项目推进", desc: "香港特区政府持续推出 Web3 支持政策，跨境区块链项目加速落地。" },
  { title: "主流交易所加码 AI Agent 赛道，自动化研究工具升温", desc: "多家主流交易所宣布布局 AI Agent 赛道，推出自动化研究和交易工具。" },
  { title: "稳定币结算场景扩展，链上支付继续靠近真实业务", desc: "稳定币在跨境支付、供应链金融等场景的应用正在快速扩展。" },
];

export function NewsSection() {
  const [news, setNews] = useState(DEFAULT_NEWS);
  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);
    fetch("/api/news")
      .then((r) => r.json())
      .then((d) => { if (Array.isArray(d) && d.length > 0) setNews(d.slice(0, 6)); })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  return (
    <section id="news" className="relative py-20">
      <div className="pointer-events-none absolute right-[-40px] top-[-40px] h-[100px] w-[100px] rounded-full bg-violet-500/10 blur-3xl sm:right-[-80px] sm:top-[-80px] sm:h-[200px] sm:w-[200px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium text-violet-200">情报</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">最新 Web3 动态</h2>
          </div>
          <Button variant="outline" onClick={load} disabled={loading}>
            <RefreshCw className={"mr-2 h-4 w-4 " + (loading ? "animate-spin" : "")} />
            刷新
          </Button>
        </div>
        <div className="mt-8 grid gap-5 sm:mt-12 md:grid-cols-2 xl:grid-cols-3">
          {news.map((item, i) => (
            <Card key={i} className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:shadow-glow h-full">
              <CardHeader>
                <div className="mb-4 flex items-center justify-between text-xs text-white/42">
                  <span>快讯</span>
                </div>
                <CardTitle className="leading-7 text-sm">{item.title}</CardTitle>
                <CardDescription className="leading-6 mt-2">{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
