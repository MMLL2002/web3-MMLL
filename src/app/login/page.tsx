"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/login-form";
import { useAuth } from "@/lib/auth-context";

export default function LoginPage() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) router.push("/");
  }, [user, router]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050710] px-4 py-10 text-white">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-75" />
      <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-3xl" />
      <section className="relative w-full max-w-md rounded-lg border border-white/10 bg-[#090d1c]/92 p-6 shadow-panel backdrop-blur-xl">
        <Link href="/" className="mb-8 block">
          <Image src="/logo.png" alt="web3爪子" width={140} height={48} className="h-10 w-auto" priority />
        </Link>
        <div className="mb-7">
          <h1 className="text-3xl font-semibold tracking-normal">登录你的 web3爪子</h1>
          <p className="mt-3 text-sm leading-6 text-white/58">
            邮箱验证码登录，当前为 mock 流程，后续可直接接真实后端。
          </p>
        </div>
        <LoginForm onSuccess={() => router.push("/")} />
      </section>
    </main>
  );
}
