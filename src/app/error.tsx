"use client";

import { useEffect } from "react";
import { useReset } from "next/navigation";
import Link from "next/link";

export default function GlobalError({ error }: { error: Error }) {
  const reset = useReset();

  // Log no console (útil para debug)
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 text-center">
      
      <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
        Oops!
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        Algo deu errado. Não se preocupe, você pode tentar novamente.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Tentar novamente
        </button>

        <Link
          href="/"
          className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
        >
          Voltar para Home
        </Link>
      </div>

      <footer className="mt-12 text-gray-400 text-sm">
        Conversor de Moedas Web © {new Date().getFullYear()} • Desenvolvido com Next.js e React
      </footer>

    </main>
  );
}