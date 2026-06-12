"use client";

import { useState, useEffect } from "react";
import { Check, Copy, Loader2, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth-context";

const STORAGE_KEY = "web3_member_status";
const WALLET_ADDRESS = "0xdf8fDc664D5986e024510eAfD6409Bf22CfB30a0";

export function PricingSection() {
  const [copied, setCopied] = useState(false);
  const [txid, setTxid] = useState("");
  const [activating, setActivating] = useState(false);
  const [activated, setActivated] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState<"ok" | "err" | "">("");
  const { user } = useAuth();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "activated") { setActivated(true); return; }
    // Check Supabase membership
    fetch("/api/membership").then(r => r.json()).then(d => {
      if (d.member) { setActivated(true); localStorage.setItem(STORAGE_KEY, "activated"); }
    }).catch(() => {});
  }, []);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(WALLET_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = WALLET_ADDRESS;
      document.body.appendChild(el); el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleActivate = async () => {
    if (!user) { setMsg("请先登录"); setMsgType("err"); return; }
    if (!txid || txid.length < 10) { setMsg("请输入有效的交易ID（至少10位）"); setMsgType("err"); return; }
    setActivating(true); setMsg("");
    try {
      const res = await fetch("/api/confirm-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, txid }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem(STORAGE_KEY, "activated");
        setActivated(true);
        setMsg("激活成功！"); setMsgType("ok");
      } else {
        setMsg(data.error || "失败"); setMsgType("err");
      }
    } catch { setMsg("网络错误"); setMsgType("err"); }
    setActivating(false);
  };

  return (
    <section id="定价" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium text-violet-200">定价</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">1 USDT 永久会员</h2>
          {activated && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-1.5 text-sm text-emerald-300">
              <Check className="h-4 w-4" />已激活
            </div>
          )}
          <p className="mt-4 text-base leading-8 text-white/60">请转账 1 USDT (BNB Smart Chain) 到以下地址。
            转账后截图发 Telegram 群，我将手动激活永久会员，通常几分钟内完成。</p>
        </div>

        <div className="mx-auto max-w-lg">
          <Card className="border-violet-300/30 bg-violet-500/[0.08] shadow-glow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-6">
                <div className="inline-flex items-center gap-2 rounded-md border border-amber-300/20 bg-amber-400/8 px-3 py-1.5 text-xs text-amber-200/80">
                  <span className="flex h-2 w-2 rounded-full bg-amber-300" />BNB Smart Chain (BEP-20)
                </div>
                <div className="w-full space-y-3">
                  <p className="text-center text-sm text-white/48">支付地址</p>
                  <div className="rounded-lg border border-white/10 bg-[#0d1225] p-4">
                    <code className="block break-all text-center text-sm text-cyan-200/90">{WALLET_ADDRESS}</code>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" onClick={copyAddress}>
                    {copied ? <><Check className="mr-2 h-4 w-4 text-emerald-300" />已复制</> : <><Copy className="mr-2 h-4 w-4" />复制地址</>}
                  </Button>
                </div>
                <div className="flex w-full items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs text-white/35">或</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                {!activated && (
                  <div className="w-full space-y-3">
                    <p className="text-sm text-white/48">手动确认支付（备用）</p>
                    <Input placeholder="输入你的交易 TxID" value={txid}
                      onChange={(e) => setTxid(e.target.value)} disabled={activating} />
                    <Button className="w-full gap-2 bg-gradient-to-r from-violet-500 to-cyan-500 text-base shadow-lg"
                      size="lg" onClick={handleActivate} disabled={activating}>
                      {activating ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" />正在提交...</> : "我已支付 1 USDT，请求激活"}
                    </Button>
                  </div>
                )}

                {msg && <p className={"text-sm " + (msgType === "ok" ? "text-emerald-300" : "text-red-300")}>{msg}</p>}

                <div className="w-full space-y-1.5 text-xs text-white/35">
                  <p>• 请使用 BNB Smart Chain (BEP-20) 网络转账，其他网络可能导致资产丢失</p>
                  <p>• 转账后截图（需清晰显示金额和 TxID），点击下方按钮前往群聊发送截图</p>
                  <p>• 激活后永久有效，无后续费用</p>
                </div>

                <Button asChild size="lg" className="w-full gap-2 bg-gradient-to-r from-violet-500 to-cyan-500 text-base shadow-lg">
                  <a href="https://t.me/+-hTIvB6moWo4YWY1" target="_blank" rel="noreferrer">
                    我已支付 → <MessageCircle className="h-5 w-5" />前往群聊确认激活
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
