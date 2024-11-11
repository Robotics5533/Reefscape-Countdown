import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const targetDate = new Date("2025-01-04T12:00:00");


const now = new Date();
const difference = targetDate.getTime() - now.getTime();

const days = ~~(difference / (1000 * 60 * 60 * 24));
const hours = ~~((difference / (1000 * 60 * 60)) % 24);
const minutes = ~~((difference / 1000 / 60) % 60);
const seconds = ~~((difference / 1000) % 60);

export const metadata: Metadata = {
  title: "Reefscape Countdown",
  description: `${days}d ${hours}h ${minutes}m ${seconds}s`,
  themeColor: "#F5E565",
  icons: {
    icon: "/reefscape.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
