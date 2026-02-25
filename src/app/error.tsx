"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GlobalError({ error }: { error: Error }) {
  const router = useRouter();

  const handleRetry = () => {
    router.refresh(); // recarrega a página atual
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center bg-gray-50 dark:bg-gray-900">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Ops! Algo deu errado
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-8">
        {error.message || "Houve um erro inesperado. Por favor, tente novamente."}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={handleRetry}
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Tentar novamente
        </button>

        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 hover:underline px-6 py-3 rounded-lg border border-blue-600 dark:border-blue-400 transition"
        >
          Voltar para Home
        </Link>
      </div>
    </main>
  );
}