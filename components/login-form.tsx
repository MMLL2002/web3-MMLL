"use client";

import { useState, useEffect } from "react";
import { Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth-context";

interface LoginFormProps { onSuccess?: () => void }

export function LoginForm({ onSuccess }: LoginFormProps) {
  const { login, verifyOtp } = useAuth();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState<string>("info");

  return (
    <form className="space-y-4">
      <label className="block">
        <span className="mb-2 block text-sm text-white/68">Email</span>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
          <Input className="pl-10" type="email" placeholder="you@example.com" value={email}
            onChange={(e) => setEmail(e.target.value)} disabled={submitting} />
        </div>
      </label>
      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="block">
          <span className="mb-2 block text-sm text-white/68">Code</span>
          <Input inputMode="numeric" maxLength={6} placeholder="123456" value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))} disabled={submitting} />
        </label>
      </div>
      <Button className="w-full" size="lg" type="submit" disabled={submitting}>
        {submitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Login...</> : "Login"}
      </Button>
    </form>
  );
}
