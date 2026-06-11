import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "LexAI - 你的个人 Web3 AI 爪子",
  description:
    "实时监控币安合约、抓取 Web3 新闻、深度分析主流币，像真人一样帮你自动化交易和决策。",
};

export const viewport: Viewport = {
  themeColor: "#050710",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body>{children}</body>
    </html>
  );
}
