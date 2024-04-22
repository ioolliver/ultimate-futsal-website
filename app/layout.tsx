import type { Metadata } from "next";
import Head from "next/head";
import { Outfit } from "next/font/google";
import "./globals.css";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ultimate Futsal",
  description: "The ultimate multiplayer 2D soccer game playable directly in your browser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
