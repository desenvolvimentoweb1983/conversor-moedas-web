import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://conversor-moedas-web.vercel.app"),

  title: {
    default: "Conversor de Moedas Web",
    template: "%s | Conversor de Moedas Web",
  },

  description:
    "Conversor de moedas online em tempo real desenvolvido com Next.js e React. Projeto evoluído de uma aplicação desktop em Python com Tkinter.",

  keywords: [
    "conversor de moedas",
    "currency converter",
    "taxa de câmbio",
    "nextjs",
    "react",
    "python tkinter",
    "projeto web",
    "cotação moedas",
  ],

  authors: [{ name: "Luis Oliveira" }],
  creator: "Luis Oliveira",

  openGraph: {
    title: "Conversor de Moedas Web",
    description:
      "Aplicação web de conversão de moedas em tempo real criada com Next.js e React, baseada em projeto Python.",
    url: "https://conversor-moedas-web.vercel.app",
    siteName: "Conversor de Moedas Web",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Conversor de Moedas Web",
    description:
      "Conversão de moedas em tempo real com React e Next.js. Projeto evoluído do Python.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased`}
>
  <Navbar />
  {children}
  <Footer />
</body>
    </html>
  );
}