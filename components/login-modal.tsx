"use client";

import { useState } from "react";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function LoginModal() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-300/20 text-xs font-medium text-emerald-300">
            {user.email[0].toUpperCase()}
          </span>
          <span className="max-w-[120px] truncate text-sm text-white/80">
            {user.email}
          </span>
        </div>
        <Button variant="ghost" size="sm" onClick={logout}>
          <LogOut className="mr-1 h-3.5 w-3.5" />
          退出
        </Button>
      </div>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          登录
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>登录 web3爪子</DialogTitle>
          <DialogDescription>
            邮箱验证码登录，弹窗和独立页面共用同一套表单。
          </DialogDescription>
        </DialogHeader>
        <LoginForm onSuccess={() => setOpen(false)} />
        <Link
          href="/login"
          className="text-center text-sm text-cyan-200 hover:text-cyan-100"
        >
          打开独立登录页面
        </Link>
      </DialogContent>
    </Dialog>
  );
}
