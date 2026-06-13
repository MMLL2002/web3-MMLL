import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";

export const metadata: Metadata = {
  title: "web3\u722a\u5b50 - \u4f60\u7684\u4e2a\u4eba Web3 \u722a\u5b50",
  description: "\u5b9e\u65f6\u76d1\u63a7\u5e01\u5b89\u5408\u7ea6\u3001\u6293\u53d6 Web3 \u65b0\u95fb\u3001\u6df1\u5ea6\u5206\u6790\u4e3b\u6d41\u5e01\uff0c\u50cf\u771f\u4eba\u4e00\u6837\u5e2e\u4f60\u81ea\u52a8\u5316\u4ea4\u6613\u548c\u51b3\u7b56\u3002",
};

export const viewport: Viewport = {
  themeColor: "#050710",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="dark">
      <body><AuthProvider>{children}</AuthProvider></body>
    </html>
  );
}
