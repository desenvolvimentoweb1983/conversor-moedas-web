import type { Metadata } from "next";

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
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-10">
      
      <section>
        <h1 className="text-3xl font-bold mb-3">
          Sobre o Projeto
        </h1>
        <p className="text-gray-600 leading-relaxed">
          O Conversor de Moedas Web é uma aplicação moderna desenvolvida para
          realizar conversões cambiais em tempo real de forma simples, rápida e
          acessível diretamente pelo navegador.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Origem do Sistema
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Este projeto nasceu inicialmente como uma aplicação desktop desenvolvida
          em Python com interface gráfica. A versão atual representa a evolução
          dessa ideia para o ambiente web, proporcionando maior acessibilidade,
          melhor experiência do usuário e compatibilidade com qualquer dispositivo.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Tecnologias Utilizadas
        </h2>

        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>Next.js — estrutura moderna para aplicações web</li>
          <li>React — construção de interfaces dinâmicas</li>
          <li>TypeScript — tipagem e segurança no código</li>
          <li>Tailwind CSS — estilização rápida e responsiva</li>
          <li>API de câmbio em tempo real — dados atualizados</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Objetivo
        </h2>
        <p className="text-gray-600 leading-relaxed">
          O objetivo deste projeto é demonstrar a construção de uma aplicação web
          moderna e funcional, aplicando boas práticas de desenvolvimento,
          responsividade, SEO e integração com serviços externos.
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-2xl">
        <h2 className="text-xl font-semibold mb-2">
          Sobre o Desenvolvedor
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Projeto desenvolvido como parte da evolução contínua de aprendizado em
          desenvolvimento web, com foco em aplicações modernas, performáticas e
          bem estruturadas.
        </p>
      </section>

    </main>
  );
}