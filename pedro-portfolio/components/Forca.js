"use client";

import { useState } from "react";
import styles from "./forca.module.css";

const WORD = "PORTFOLIO";
const MAX_ATTEMPTS = 6;

export default function Forca() {
  const [attempts, setAttempts] = useState([]);
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState(0);
  const [message, setMessage] = useState("");

  const isWinner = WORD.split("").every((letter) => attempts.includes(letter));
  const isLoser = errors >= MAX_ATTEMPTS;

  function handleTry(e) {
    e.preventDefault();
    const attempt = input.toUpperCase();

    if (!attempt.match(/^[A-Z]$/)) {
      setMessage("Digite apenas letras.");
      return;
    }
    if (attempts.includes(attempt)) {
      setMessage("Você já tentou essa letra. Escolha outra.");
      return;
    }
    setMessage("");
    setAttempts([...attempts, attempt]);
    if (!WORD.includes(attempt)) setErrors(errors + 1);
    setInput("");
  }

  function handleRestart() {
    setAttempts([]);
    setInput("");
    setErrors(0);
    setMessage("");
  }

  const displayWord = WORD.split("").map((letter, idx) =>
    attempts.includes(letter) ? (
      <span key={idx} className={styles.letra}>
        {letter}
      </span>
    ) : (
      <span key={idx} className={styles.letra}>
        _
      </span>
    )
  );

  return (
    <div className={styles.forcaContainer}>
      <h2 className={styles.forcaTitle}>Jogo da Forca</h2>
      <div className={styles.wordDisplay}>{displayWord}</div>
      {isWinner && (
        <div className={styles.victoryMessage}>Parabéns! Você venceu!</div>
      )}
      {isLoser && (
        <div className={styles.defeatMessage}>
          Você perdeu! A palavra era:{" "}
          <span className={styles.wordReveal}>{WORD}</span>
        </div>
      )}
      <form onSubmit={handleTry} className={styles.formForca}>
        <input
          type="text"
          maxLength={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.inputForca}
          disabled={isWinner || isLoser}
        />
        <button
          type="submit"
          className={styles.buttonForca}
          disabled={isWinner || isLoser || !input}
        >
          Tentar
        </button>
      </form>
      {message && <div className={styles.errorMessage}>{message}</div>}
      <div className={styles.attemptsList}>
        <strong>Tentativas anteriores:</strong>{" "}
        {attempts.map((letter, idx) => (
          <span
            key={idx}
            className={
              WORD.includes(letter)
                ? styles.correctAttempt
                : styles.wrongAttempt
            }
          >
            {letter}
            {idx < attempts.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
      <div className={styles.remainingAttempts}>
        <strong>Tentativas restantes:</strong> {MAX_ATTEMPTS - errors}
      </div>
      {(isWinner || isLoser) && (
        <button
          type="button"
          className={styles.buttonForca}
          onClick={handleRestart}
        >
          Reiniciar Jogo
        </button>
      )}
    </div>
  );
}
