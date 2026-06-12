"use client";

import { useState } from "react";
import { Check, Copy, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function PricingSection() {
  const [copied, setCopied] = useState(false);

  const WALLET_ADDRESS = "0xdf8fDc664D5986e024510eAfD6409Bf22CfB30a0";

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(WALLET_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      const el = document.createElement("textarea");
      el.value = WALLET_ADDRESS;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="定价" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium text-violet-200">定价</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
            1 USDT 永久会员
          </h2>
          <p className="mt-4 text-base leading-8 text-white/60">
            请转账 <span className="font-semibold text-white">1 USDT (BNB Smart Chain)</span> 到以下地址。
            <br />
            转账后截图发 Telegram 群，我将手动激活永久会员，通常几分钟内完成。
          </p>
        </div>

        <div className="mx-auto w-full max-w-lg">
          <Card className="border-violet-300/30 bg-violet-500/[0.08] shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col items-center gap-6">

                {/* Network Badge */}
                <div className="inline-flex items-center gap-2 rounded-md border border-amber-300/20 bg-amber-400/8 px-3 py-1.5 text-xs text-amber-200/80">
                  <span className="flex h-2 w-2 rounded-full bg-amber-300" />
                  BNB Smart Chain (BEP-20)
                </div>

                {/* Wallet Address */}
                <div className="w-full space-y-3">
                  <p className="text-center text-sm text-white/48">
                    收款地址
                  </p>
                  <div className="rounded-lg border border-white/10 bg-[#0d1225] p-4">
                    <code className="block break-all text-center text-sm text-cyan-200/90">
                      {WALLET_ADDRESS}
                    </code>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={copyAddress}
                  >
                    {copied ? (
                      <>
                        <Check className="mr-2 h-4 w-4 text-emerald-300" />
                        已复制
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        复制地址
                      </>
                    )}
                  </Button>
                </div>

                {/* Divider */}
                <div className="flex w-full items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs text-white/35">手动激活 · 分钟级响应</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* Payment Tips */}
                <div className="w-full space-y-1.5 text-xs text-white/35">
                  <p>• 请使用 BNB Smart Chain (BEP-20) 网络转账，其他网络可能导致资产丢失</p>
                  <p>• 转账后截图（需清晰显示金额和 TxID），点击下方按钮前往群聊发送截图</p>
                  <p>• 激活后永久有效，无后续费用</p>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  size="lg"
                  className="w-full gap-2 bg-gradient-to-r from-violet-500 to-cyan-500 text-sm sm:text-base shadow-lg hover:from-violet-400 hover:to-cyan-400"
                >
                  <a href="https://t.me/+-hTIvB6moWo4YWY1" target="_blank" rel="noreferrer">
                    我已支付 →
                    <MessageCircle className="h-5 w-5" />
                    前往群聊确认激活
                  </a>
                </Button>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}