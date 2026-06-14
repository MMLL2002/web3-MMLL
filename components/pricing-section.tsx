"use client";

import { useState, useEffect } from "react";
import { Check, Copy, Loader2, MessageCircle, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth-context";

const STORAGE_KEY = "web3_member_status";
const WALLET = "0xdf8fDc664D5986e024510eAfD6409Bf22CfB30a0";

export function PricingSection() {
  const [copied, setCopied] = useState(false);
  const [txid, setTxid] = useState("");
  const [busy, setBusy] = useState(false);
  const [active, setActive] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState<"ok" | "err" | "">("");
  const { user } = useAuth();

  useEffect(() => {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === "activated") setActive(true);
  }, []);

  const copy = async () => {
    try { await navigator.clipboard.writeText(WALLET); setCopied(true); setTimeout(() => setCopied(false), 2000); }
    catch {
      const el = document.createElement("textarea");
      el.value = WALLET; document.body.appendChild(el); el.select();
      document.execCommand("copy"); document.body.removeChild(el);
      setCopied(true); setTimeout(() => setCopied(false), 2000);
    }
  };

  const activate = async () => {
    if (!user) { setMsg("请先登录"); setMsgType("err"); return; }
    if (!txid || txid.length < 10) { setMsg("请输入有效的交易ID（至少10位）"); setMsgType("err"); return; }
    setBusy(true); setMsg("");
    try {
      const r = await fetch("/api/confirm-payment", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, txid }),
      });
      const d = await r.json();
      if (d.success) {
        localStorage.setItem(STORAGE_KEY, "activated");
        setActive(true);
        setMsg("激活成功！"); setMsgType("ok");
      } else { setMsg(d.error || "失败"); setMsgType("err"); }
    } catch { setMsg("网络错误"); setMsgType("err"); }
    setBusy(false);
  };

  return (
    <section id="定价" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-violet-300/80 uppercase">定价</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">1 USDT 永久会员</h2>
          {active && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-5 py-2 text-sm font-medium text-emerald-300 ring-1 ring-emerald-500/20">
              <Check className="h-4 w-4" />已激活
            </div>
          )}
          <p className="mt-4 text-base leading-7 text-white/50">请转账 1 USDT (BNB Smart Chain) 到以下地址。转账后截图发 Telegram 群，我将手动激活永久会员，通常几分钟内完成。</p>
        </div>

        <div className="mx-auto w-full max-w-md">
          <Card className="border-violet-500/15 bg-[#0a0a1f]/90 shadow-lg shadow-violet-500/5 backdrop-blur-xl sm:rounded-xl">
            <CardContent className="p-5 sm:p-7">
              <div className="flex flex-col items-center gap-5">

                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/15 bg-amber-500/8 px-3 py-1 text-xs font-medium text-amber-300/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  BNB Smart Chain (BEP-20)
                </div>

                <div className="w-full space-y-2">
                  <p className="text-center text-xs text-white/40">支付地址</p>
                  <div className="rounded-xl border border-white/5 bg-black/30 p-3.5 sm:p-4">
                    <code className="block break-all text-center text-sm font-mono text-cyan-200/80">{WALLET}</code>
                  </div>
                  <Button variant="outline" size="sm" className="w-full border-white/10 hover:bg-white/5" onClick={copy}>
                    {copied ? <><Check className="mr-2 h-3.5 w-3.5 text-emerald-400" />已复制</> : <><Copy className="mr-2 h-3.5 w-3.5" />复制地址</>}
                  </Button>
                </div>

                <div className="flex w-full items-center gap-3">
                  <div className="h-px flex-1 bg-white/5" />
                  <span className="text-xs text-white/25">或</span>
                  <div className="h-px flex-1 bg-white/5" />
                </div>

                {!active && (
                  <div className="w-full space-y-3">
                    <p className="text-xs text-white/40">手动确认支付（备用）</p>
                    <Input placeholder="输入你的交易 TxID" value={txid}
                      onChange={(e) => setTxid(e.target.value)} disabled={busy}
                      className="border-white/10 bg-black/20 text-sm placeholder:text-white/25" />
                    <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-lg shadow-violet-500/20 hover:from-violet-500 hover:to-indigo-400"
                      size="lg" onClick={activate} disabled={busy}>
                      {busy ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />正在提交...</> : "我已支付 1 USDT，请求激活"}
                    </Button>
                  </div>
                )}

                {active && (
                  <Button asChild size="sm" className="w-full border-violet-500/20 text-violet-300 hover:bg-violet-500/10" variant="outline">
                    <a href="/login"><ExternalLink className="mr-2 h-3.5 w-3.5" />前往控制台</a>
                  </Button>
                )}

                {msg && <p className={"text-sm " + (msgType === "ok" ? "text-emerald-400" : "text-red-400")}>{msg}</p>}

                <div className="w-full space-y-1 text-xs leading-5 text-white/30">
                  <p>• 请使用 BNB Smart Chain (BEP-20) 网络转账，其他网络可能导致资产丢失</p>
                  <p>• 转账后截图（需清晰显示金额和 TxID），点击下方按钮前往群聊发送截图</p>
                  <p>• 激活后永久有效，无后续费用</p>
                </div>

                <Button asChild size="lg" className="w-full bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-lg shadow-violet-500/20 hover:from-violet-500 hover:to-indigo-400">
                  <a href="https://t.me/+-hTIvB6moWo4YWY1" target="_blank" rel="noreferrer">
                    我已支付 → <MessageCircle className="ml-1 h-4 w-4" />前往群聊确认激活
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
