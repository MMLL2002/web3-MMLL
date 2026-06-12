"use client";

import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function PricingSection() {
  return (
    <section id="定价" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium text-violet-200">定价</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
            1 USDT 永久会员
          </h2>
          <p className="mt-4 text-base leading-8 text-white/60">
            只需转账 <span className="font-semibold text-white">1 USDT</span>（Tron 网络）即可永久解锁全部功能。
            <br />
            支付后截图发 Telegram 群，我将手动激活，通常几分钟内完成。
          </p>
        </div>

        <div className="mx-auto max-w-md">
          <Card className="border-violet-300/30 bg-violet-500/[0.08] shadow-glow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-6">
                {/* QR Code */}
                <div className="rounded-lg border border-white/10 bg-white p-4">
                  <Image
                    src="/qr-binance.png"
                    width={360}
                    height={360}
                    alt="Binance USDT 收款二维码"
                    className="h-auto w-full rounded-md"
                    priority
                  />
                </div>

                {/* Instructions */}
                <div className="w-full space-y-2 text-center">
                  <p className="text-sm text-white/68">
                    打开币安 App，选择 <span className="font-medium text-white">Tron (TRC-20)</span> 网络
                  </p>
                  <p className="text-sm text-white/68">
                    转账 <span className="font-medium text-emerald-300">1 USDT</span> 到上方地址
                  </p>
                  <p className="text-xs text-white/42">
                    支付成功后截图，点击下方按钮前往群聊发送截图即可激活
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  size="lg"
                  className="w-full gap-2 bg-gradient-to-r from-violet-500 to-cyan-500 text-base shadow-lg hover:from-violet-400 hover:to-cyan-400"
                >
                  <a href="https://t.me/+-hTIvB6moWo4YWY1" target="_blank" rel="noreferrer">
                    我已支付 →
                    <MessageCircle className="h-5 w-5" />
                    前往群聊确认激活
                  </a>
                </Button>

                {/* Divider */}
                <div className="flex w-full items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs text-white/35">手动激活 · 分钟级响应</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* Payment proof tips */}
                <div className="w-full space-y-1.5 text-xs text-white/35">
                  <p>• 请确保使用 Tron (TRC-20) 网络转账，其他网络可能丢失</p>
                  <p>• 截图需清晰显示转账金额和 TxID</p>
                  <p>• 激活后永久有效，无后续费用</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}