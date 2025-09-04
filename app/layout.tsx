import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@splidejs/splide/dist/css/splide.min.css";

import "./globals.css";
import "../public/css/style.css";
import "../public/css/media.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to Genesis Skin Care",
  description:
    "Welcome to Genesis Skin Care, offering premium skin care services and treatments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/favicon.png"
        ></link>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
