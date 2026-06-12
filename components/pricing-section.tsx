"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, Loader2, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type PaymentState = "idle" | "checking" | "success";

export function PricingSection() {
  const [paymentState, setPaymentState] = useState<PaymentState>("idle");

  const confirmPayment = () => {
    setPaymentState("checking");
    window.setTimeout(() => setPaymentState("success"), 1800);
  };

  return (
    <section id="定价" className="relative py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-medium text-violet-200">定价</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
            超值永久会员
          </h2>
          <p className="mt-4 text-base leading-8 text-white/60">
            只需 1 USDT，一次付费，永久解锁全部功能。先手动确认，后续可接 Binance API webhook 自动激活。
          </p>
        </div>

        <Card className="border-violet-300/30 bg-violet-500/[0.08] shadow-glow">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>1 USDT 永久版</span>
              <span className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-[#070918]">
                限时 mock
              </span>
            </CardTitle>
            <CardDescription>
              使用币安 App 扫码支付 1 USDT，支付后自动跳转或点击下方按钮确认。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-5 md:grid-cols-[220px_1fr]">
              <div className="rounded-lg border border-white/10 bg-white p-3">
                <Image
                  src="/qr-binance.png"
                  width={420}
                  height={420}
                  alt="Binance USDT 收款二维码"
                  className="h-auto w-full rounded-md"
                  priority
                />
              </div>
              <div className="space-y-4">
                {["永久解锁全部功能", "币安合约 + 主流币分析", "Telegram 群激活支持"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/68">
                    <Check className="h-4 w-4 text-emerald-300" />
                    {item}
                  </div>
                ))}
                <Button
                  className="w-full"
                  size="lg"
                  onClick={confirmPayment}
                  disabled={paymentState === "checking" || paymentState === "success"}
                >
                  {paymentState === "checking" ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      正在检测...
                    </>
                  ) : paymentState === "success" ? (
                    "付款成功！正在激活会员..."
                  ) : (
                    "我已支付，确认激活"
                  )}
                </Button>
                <Button asChild variant="outline" className="w-full" size="lg">
                  <a href="https://t.me/+-hTIvB6moWo4YWY1" target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    支付后进群通知
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
