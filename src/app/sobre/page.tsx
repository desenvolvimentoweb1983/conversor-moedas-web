import type { Metadata } from "next";
import styles from "./Sobre.module.css";

export const metadata: Metadata = {
  title: "Sobre o Projeto",
  description:
    "Conheça o projeto Conversor de Moedas Web, sua evolução, tecnologias utilizadas e objetivos.",
  keywords: [
    "sobre conversor de moedas",
    "projeto nextjs",
    "react aplicação web",
    "conversor de moedas online",
  ],
};

export default function SobrePage() {
  return (
    <main className={styles.sobreMain}>
      
      <section>
        <h1>Sobre o Projeto</h1>
        <p>
          O Conversor de Moedas Web é uma aplicação moderna desenvolvida para
          realizar conversões cambiais em tempo real de forma simples, rápida e
          acessível diretamente pelo navegador.
        </p>
      </section>

      <section>
        <h2>Origem do Sistema</h2>
        <p>
          Este projeto nasceu inicialmente como uma aplicação desktop desenvolvida
          em Python com interface gráfica. A versão atual representa a evolução
          dessa ideia para o ambiente web, proporcionando maior acessibilidade,
          melhor experiência do usuário e compatibilidade com qualquer dispositivo.
          Confira o projeto original no{" "}
          <a
            href="https://github.com/desenvolvimentoweb1983/Conversor-de-Moedas-em-Python-Tkinter-API-"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>.
        </p>
      </section>

      <section>
        <h2>Tecnologias Utilizadas</h2>
        <ul>
          <li>Next.js — estrutura moderna para aplicações web</li>
          <li>React — construção de interfaces dinâmicas</li>
          <li>TypeScript — tipagem e segurança no código</li>
          <li>Tailwind CSS — estilização rápida e responsiva</li>
          <li>API de câmbio em tempo real — dados atualizados</li>
        </ul>
      </section>

      <section>
        <h2>Objetivo</h2>
        <p>
          O objetivo deste projeto é demonstrar a construção de uma aplicação web
          moderna e funcional, aplicando boas práticas de desenvolvimento,
          responsividade, SEO e integração com serviços externos.
        </p>
      </section>

      <section className={styles.sectionHighlight}>
        <h2 className="sobreSectionTitle">Sobre o Desenvolvedor</h2>
        <p>
          Projeto desenvolvido como parte da evolução contínua de aprendizado em
          desenvolvimento web, com foco em aplicações modernas, performáticas e
          bem estruturadas.
        </p>
      </section>

    </main>
  );
}