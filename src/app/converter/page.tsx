import type { Metadata } from "next";
import ConverterClient from "./ConverterClient";

export const metadata: Metadata = {
  title: "Converter Moedas",
  description:
    "Converta moedas em tempo real com taxas atualizadas. Conversor rápido, moderno e preciso.",
  keywords: [
    "converter moedas",
    "cotação em tempo real",
    "taxa de câmbio",
    "currency converter",
  ],
};

export default function ConverterPage() {
  return <ConverterClient />;
}