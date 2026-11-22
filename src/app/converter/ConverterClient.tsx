
"use client";

import { useState } from "react";
import styles from "./ConverterClient.module.css";

export default function ConverterClient() {
  const [amount, setAmount] = useState<number>(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("BRL");
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const moedas = ["USD", "BRL", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF"];

  async function converter() {
    setError("");
    setResult(null);

    if (!Number.isFinite(amount) || amount <= 0) {
      setError("Informe um valor maior que zero.");
      return;
    }

    if (from === to) {
      setResult(amount);
      return;
    }

    setLoading(true);

    try {
      const url = `https://api.frankfurter.dev/v1/latest?base=${encodeURIComponent(from)}&symbols=${encodeURIComponent(to)}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data: {
        rates?: Record<string, number>;
      } = await response.json();

      const taxa = data.rates?.[to];

      if (typeof taxa !== "number" || !Number.isFinite(taxa)) {
        throw new Error("Cotação não encontrada.");
      }

      setResult(amount * taxa);

    } catch (err) {
      console.error("Erro na conversão:", err);
      setError("Não foi possível obter a cotação. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.converterMain}>
      <h1 className={styles.heading}>Conversor de Moedas</h1>

      <p className={styles.subText}>
        Converta valores entre diferentes moedas com taxas atualizadas.
      </p>

      <div className={styles.card}>
        <div>
          <label className="block text-sm font-medium mb-1">
            Valor
          </label>

          <input
            type="number"
            min="0"
            step="any"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className={styles.input}
          />
        </div>

        <div className={styles.selectGrid}>
          <div>
            <label className="block text-sm font-medium mb-1">
              De
            </label>

            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className={styles.select}
            >
              {moedas.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Para
            </label>

            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className={styles.select}
            >
              {moedas.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={converter}
          className={styles.button}
          disabled={loading}
        >
          {loading ? "Convertendo..." : "Converter"}
        </button>

        {error && (
          <p className={`${styles.message} ${styles.error}`}>
            {error}
          </p>
        )}

        {result !== null && (
          <div className={styles.resultCard}>
            <p className={styles.resultText}>Resultado</p>
            <p className={styles.resultValue}>
              {result.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              {to}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
