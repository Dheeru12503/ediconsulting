import type { Metadata } from "next";
import { Geist, Geist_Mono, Jacques_Francois } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jacquesFrancois = Jacques_Francois({
  variable: "--font-jacques",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "AdiConsulting - EDI Integration",
  description: "EDI Integration - Precision Meets Reliability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jacquesFrancois.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
