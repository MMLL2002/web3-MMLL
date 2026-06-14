"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoginModal } from "@/components/login-modal";

const navItems = ["首页", "功能", "新闻", "分析", "定价", "控制台"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a1f]/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-lg font-bold bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
            web3爪子
          </span>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item === "首页" ? "home" : item}`}
              className="relative text-sm text-white/50 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-violet-400 after:to-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <LoginModal />
          <Button
            size="sm"
            className="hidden sm:inline-flex bg-gradient-to-r from-violet-600 to-indigo-500 hover:from-violet-500 hover:to-indigo-400 text-white shadow-lg shadow-violet-500/20"
          >
            启动
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden rounded-lg p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
            aria-label="菜单"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/[0.06] bg-[#0a0a1f]/98 backdrop-blur-2xl lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item === "首页" ? "home" : item}`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-white/60 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
