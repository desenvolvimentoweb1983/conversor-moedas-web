import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GlobalError({ error }: { error: Error }) {
  const router = useRouter();

  // Opcional: resetar página ao clicar em "Tentar novamente"
  const handleRetry = () => {
    router.refresh(); // força atualização da página
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Ops! Algo deu errado.</h1>
      <p className="text-gray-600 mb-8">{error.message}</p>
      <button
        onClick={handleRetry}
        className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Tentar novamente
      </button>
      <Link href="/" className="mt-4 text-blue-600 hover:underline">
        Voltar para Home
      </Link>
    </main>
  );
}