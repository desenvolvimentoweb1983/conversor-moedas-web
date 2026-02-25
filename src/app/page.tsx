import type { Metadata } from "next";
import Link from "next/link";
import styles from "./Home.module.css";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Conversor de moedas online em tempo real desenvolvido com Next.js. Evolução de um projeto desktop em Python com Tkinter.",
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

export default function Home() {
  return (
    <main className={styles.homeMain}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Conversor de Moedas em Tempo Real</h1>
        <p>
          Aplicação web moderna desenvolvida com React e Next.js para conversão
          de moedas com taxas atualizadas. Este projeto é a evolução de uma
          aplicação desktop criada em Python com interface Tkinter.
        </p>
        <Link href="/converter" className={styles.heroLink}>
          Converter Moedas
        </Link>
      </section>

      {/* DIVISOR */}
      <div className={styles.divisor} />

      {/* SOBRE O PROJETO */}
      <section className={styles.aboutSection}>
        <h2>Evolução do Projeto</h2>
        <p>
          Este sistema começou como um aplicativo desktop desenvolvido em Python,
          utilizando interface gráfica e consumo de API de câmbio. Nesta versão,
          a aplicação foi migrada para a web utilizando tecnologias modernas,
          oferecendo melhor acessibilidade, responsividade e experiência do usuário.
        </p>
      </section>

    </main>
  );
}