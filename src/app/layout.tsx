import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ELITE GRIDIRON | 职业美式橄榄球训练营",
  description: "开启您们的职业橄榄球梦想。加入精英美式橄榄球训练营，与职业教练面对面，磨炼技艺，挑战自我。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${inter.variable} antialiased bg-deep-blue text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
