"use client"; // 👈 precisa ser a primeira linha

import { useState } from "react";

const WORD = "PORTFOLIO";
const MAX_ATTEMPTS = 6;

export default function Forca() {
  const [attempts, setAttempts] = useState([]);
  const [input, setInput] = useState("");
  const [wrongCount, setWrongCount] = useState(0);

  const displayWord = WORD.split("").map((letter, idx) =>
    attempts.includes(letter) ? (
      <span key={idx} style={{ margin: "0 8px", fontSize: "2rem" }}>
        {letter}
      </span>
    ) : (
      <span key={idx} style={{ margin: "0 8px", fontSize: "2rem" }}>
        _
      </span>
    )
  );

  function handleTry(e) {
    e.preventDefault();
    const guess = input.toUpperCase();
    if (!guess || attempts.includes(guess)) return;
    setAttempts([...attempts, guess]);
    if (!WORD.includes(guess)) setWrongCount(wrongCount + 1);
    setInput("");
  }

  return (
    <div
      style={{
        background: "#23272f",
        padding: "2rem",
        borderRadius: "1rem",
        color: "#ededed",
        maxWidth: "400px",
        margin: "2rem auto",
      }}
    >
      <h2>Jogo da Forca</h2>
      <div style={{ marginBottom: "1rem" }}>{displayWord}</div>
      <form onSubmit={handleTry}>
        <input
          type="text"
          maxLength={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "40px", textAlign: "center", fontSize: "1.5rem" }}
          disabled={wrongCount >= MAX_ATTEMPTS}
        />
        <button type="submit" disabled={wrongCount >= MAX_ATTEMPTS || !input}>
          Tentar
        </button>
      </form>
      <div style={{ marginTop: "1rem" }}>
        <strong>Tentativas anteriores:</strong> {attempts.join(", ")}
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <strong>Tentativas restantes:</strong> {MAX_ATTEMPTS - wrongCount}
      </div>
    </div>
  );
}
