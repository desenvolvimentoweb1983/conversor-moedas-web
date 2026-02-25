import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página Não Encontrada | Conversor de Moedas Web",
  description:
    "A página que você tentou acessar não existe. Volte para a Home do Conversor de Moedas Web.",
  keywords: [
    "404",
    "página não encontrada",
    "erro",
    "conversor de moedas",
    "nextjs",
    "react",
  ],
  openGraph: {
    title: "Página Não Encontrada | Conversor de Moedas Web",
    description:
      "A página que você tentou acessar não existe. Volte para a Home do Conversor de Moedas Web.",
    url: "https://conversor-moedas-web.vercel.app",
    siteName: "Conversor de Moedas Web",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Página Não Encontrada | Conversor de Moedas Web",
    description:
      "A página que você tentou acessar não existe. Volte para a Home do Conversor de Moedas Web.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 text-center">
      
      <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
        404
      </h1>
      
      <p className="text-xl text-gray-600 mb-8">
        Oops! A página que você está procurando não existe.
      </p>

      <Link
        href="/"
        className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Voltar para Home
      </Link>

      <footer className="mt-12 text-gray-400 text-sm">
        Conversor de Moedas Web © {new Date().getFullYear()} • Desenvolvido com Next.js e React
      </footer>
    </main>
  );
}