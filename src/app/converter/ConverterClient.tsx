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

  const moedas = ["USD","BRL","EUR","GBP","JPY","CAD","AUD","CHF"];

  async function converter() {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
      );

      if (!res.ok) throw new Error("Erro na conversão");

      const data = await res.json();
      setResult(data.rates[to]);
    } catch (err) {
      setError("Não foi possível converter. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.converterMain}>
      <h1 className={styles.heading}>Conversor de Moedas</h1>
      <p className={styles.subText}>
        Converta valores entre diferentes moedas com taxas atualizadas em tempo real.
      </p>

      <div className={styles.card}>
        {/* Valor */}
        <div>
          <label className="block text-sm font-medium mb-1">Valor</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className={styles.input}
          />
        </div>

        {/* Moedas */}
        <div className={styles.selectGrid}>
          <div>
            <label className="block text-sm font-medium mb-1">De</label>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className={styles.select}
            >
              {moedas.map((m) => <option key={m}>{m}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Para</label>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className={styles.select}
            >
              {moedas.map((m) => <option key={m}>{m}</option>)}
            </select>
          </div>
        </div>

        {/* Botão */}
        <button onClick={converter} className={styles.button}>
          Converter
        </button>

        {/* Loading */}
        {loading && <p className={`${styles.message}`}>Convertendo...</p>}

        {/* Erro */}
        {error && <p className={`${styles.message} ${styles.error}`}>{error}</p>}

        {/* Resultado */}
        {result !== null && (
          <div className={styles.resultCard}>
            <p className={styles.resultText}>Resultado</p>
            <p className={styles.resultValue}>{result.toFixed(2)} {to}</p>
          </div>
        )}
      </div>
    </main>
  );
}