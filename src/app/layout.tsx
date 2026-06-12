import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "web3爪子 - 浣犵殑涓汉 Web3 AI 鐖瓙",
  description:
    "瀹炴椂鐩戞帶甯佸畨鍚堢害銆佹姄鍙?Web3 鏂伴椈銆佹繁搴﹀垎鏋愪富娴佸竵锛屽儚鐪熶汉涓€鏍峰府浣犺嚜鍔ㄥ寲浜ゆ槗鍜屽喅绛栥€?,
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
