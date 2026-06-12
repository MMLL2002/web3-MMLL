"use client";

import { useState, useEffect } from "react";
import { ChevronRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface NewsItem { title: string; link: string; desc: string; }

export function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    fetch("/api/news")
      .then(r => r.json())
      .then((d: NewsItem[]) => { if (Array.isArray(d)) setNews(d.slice(0, 6)); setLoading(false); })
      .catch(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  return (
    <section id="\u65b0\u95fb" className="relative py-20">
      <div className="pointer-events-none absolute right-[-40px] top-[-40px] h-[100px] w-[100px] rounded-full bg-violet-500/10 blur-3xl sm:right-[-80px] sm:top-[-80px] sm:h-[200px] sm:w-[200px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium text-violet-200">\u60c5\u62a5</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">\u6700\u65b0 Web3 \u52a8\u6001</h2>
          </div>
          <Button variant="outline" onClick={load} disabled={loading}>
            <RefreshCw className={"mr-2 h-4 w-4 " + (loading ? "animate-spin" : "")} />\u5237\u65b0
          </Button>
        </div>
        <div className="mt-8 grid gap-5 sm:mt-12 md:grid-cols-2 xl:grid-cols-3">
          {loading ? (
            <p className="col-span-full text-center text-white/40">\u52a0\u8f7d\u4e2d...</p>
          ) : news.length === 0 ? (
            <p className="col-span-full text-center text-white/40">\u6682\u65e0\u65b0\u95fb</p>
          ) : (
            news.map((item, i) => (
              <a key={i} href={item.link} target="_blank" rel="noreferrer">
                <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:shadow-glow h-full">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between text-xs text-white/42">
                      <span>\u52a0\u901f\u62a5\u9053</span>
                    </div>
                    <CardTitle className="leading-7 text-sm">{item.title}</CardTitle>
                    <CardDescription className="leading-6 mt-2">{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
