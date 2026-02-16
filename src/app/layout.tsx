import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Focus — 极简专注计时器 | iPhone & Apple Watch",
  description: "Focus 是一款为 iPhone 和 Apple Watch 设计的专注计时应用。支持正/倒计时、智能统计、收入追踪，助你高效工作学习。",
  openGraph: {
    title: "Focus — 极简专注计时器",
    description: "iPhone + Apple Watch 专注计时，统计分析，收入追踪",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
