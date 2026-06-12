"use client";

import { useState, useEffect } from "react";
import { Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth-context";
import { createClient } from "@/lib/supabase/client";

interface LoginFormProps {
  onSuccess?: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
    const { verifyOtp } = useAuth();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"info" | "error" | "success">("info");

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setTimeout(() => setSeconds((v) => v - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const sendCode = () => {
    if (!validateEmail(email)) {
      setMessage("请输入有效的邮箱地址");
      setMessageType("error");
      return;
    }
    setSeconds(60);
    setMessage("验证码已发送（演示环境可直接输入 123456）");
    setMessageType("info");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setMessage("邮箱格式不正确");
      setMessageType("error");
      return;
    }
    if (code.length < 4) {
      setMessage("验证码为 6 位数字（演示码：123456）");
      setMessageType("error");
      return;
    }

    setSubmitting(true);
    setMessage("正在验证...");
    setMessageType("info");

        verifyOtp(email, code).then((ok) => {
      setSubmitting(false);
      if (ok) {
        setMessage("登录成功！");
        setMessageType("success");
        if (onSuccess) setTimeout(onSuccess, 600);
      } else {
        setMessage("验证码错误或已过期");
        setMessageType("error");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="mb-2 block text-sm text-white/68">邮箱</span>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
          <Input
            className="pl-10"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
          />
        </div>
      </label>

      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="block">
          <span className="mb-2 block text-sm text-white/68">验证码</span>
          <Input
            inputMode="numeric"
            maxLength={6}
            placeholder="123456"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
            disabled={submitting}
          />
        </label>
        <Button
          className="self-end"
          variant="outline"
          onClick={sendCode}
          disabled={seconds > 0 || submitting}
          type="button"
        >
          {seconds > 0 ? `${seconds}s 后重试` : "获取验证码"}
        </Button>
      </div>

      {message && (
        <p
          className={`min-h-6 text-sm ${
            messageType === "error"
              ? "text-red-300"
              : messageType === "success"
              ? "text-emerald-300"
              : "text-white/48"
          }`}
        >
          {message}
        </p>
      )}

      <Button className="w-full" size="lg" type="submit" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            正在登录...
          </>
        ) : (
          "登录"
        )}
      </Button>
    </form>
  );
}
