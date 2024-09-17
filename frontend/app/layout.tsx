import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import HeaderLayout from "@/components/layout/HeaderLayout";

const comfortaa = Comfortaa({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Relate",
  description: "Relate website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="general" lang="en" className={comfortaa.className}>
      <body className={`antialiased flex flex-col items-center`}>
        <HeaderLayout />
        {children}
      </body>
    </html>
  );
}
