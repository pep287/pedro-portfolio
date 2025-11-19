import { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const WORDS = [
  "COMPUTADOR",
  "ELEFANTE",
  "JAVASCRIPT",
  "PIRAMIDE",
  "REACT",
  "ABACAXI",
  "PYTHON",
  "ALGORITMO",
  "TECLADO",
  "MONITOR",
  "INTERNET",
  "SOFTWARE",
  "HARDWARE",
  "PROGRAMA",
  "VARIAVEL",
  "FUNCAO",
  "OBJETO",
  "BANCO",
  "DADOS",
  "REDE",
  "USUARIO",
  "SENHA",
  "TABELA",
  "CODIGO",
  "LOOP",
  "CONDICAO",
  "EVENTO",
  "MODULO",
  "PACOTE",
  "FRAMEWORK",
  "ABACATE",
  "MONTANHA",
  "CACHORRO",
  "JARDIM",
  "ESCOLA",
  "VIOLINO",
  "PIRATA",
  "CIRCO",
  "SORVETE",
  "PRINCESA",
  "AVIAO",
  "FANTASMA",
  "LAGARTO",
  "BORBOLETA",
  "TAPETE",
  "BICICLETA",
  "CAMALEAO",
  "DESERTO",
  "ESTRELA",
];
const MAX_ATTEMPTS = 6;

function getRandomWord() {
  const idx = Math.floor(Math.random() * WORDS.length);
  return WORDS[idx];
}

export default function Forca() {
  const [word, setWord] = useState(getRandomWord());
  const [attempts, setAttempts] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState(0);
  const [message, setMessage] = useState("");

  const isWinner = word.split("").every((letter) => attempts.includes(letter));
  const isLoser = errors >= MAX_ATTEMPTS;

  function handleTry() {
    const attempt = input.toUpperCase();

    if (!attempt.match(/^[A-Z]$/)) {
      setMessage("Digite apenas letras de A a Z.");
      return;
    }
    if (attempts.includes(attempt)) {
      setMessage("Você já tentou essa letra. Escolha outra.");
      return;
    }
    setMessage("");
    setAttempts([...attempts, attempt]);
    if (!word.includes(attempt)) setErrors(errors + 1);
    setInput("");
  }

  function handleRestart() {
    setWord(getRandomWord());
    setAttempts([]);
    setInput("");
    setErrors(0);
    setMessage("");
  }

  const displayWord = word.split("").map((letter, idx) =>
    attempts.includes(letter) ? (
      <ThemedText key={idx} style={styles.letra}>
        {letter}
      </ThemedText>
    ) : (
      <ThemedText key={idx} style={styles.letra}>
        _
      </ThemedText>
    )
  );

  // Desenho do boneco da forca
  const hangmanParts = [
    errors > 0, // cabeça
    errors > 1, // corpo
    errors > 2, // braço esquerdo
    errors > 3, // braço direito
    errors > 4, // perna esquerda
    errors > 5, // perna direita
  ];

  return (
    <ThemedView style={styles.forcaContainer}>
      <ThemedText type="title" style={styles.forcaTitle}>
        Jogo da Forca
      </ThemedText>

      {/* Desenho simplificado do boneco */}
      <View style={styles.hangmanContainer}>
        <ThemedText style={styles.hangmanText}>
          {hangmanParts[0] ? "😵" : ""}
          {"\n"}
          {hangmanParts[1] ? "|" : ""}
          {hangmanParts[2] ? "—" : " "}
          {hangmanParts[1] ? "|" : ""}
          {hangmanParts[3] ? "—" : " "}
          {"\n"}
          {hangmanParts[4] ? "/ " : "  "}
          {hangmanParts[5] ? "\\" : " "}
        </ThemedText>
      </View>

      <View style={styles.wordDisplay}>{displayWord}</View>

      {isWinner && (
        <ThemedText style={styles.victoryMessage}>
          Parabéns! Você venceu!
        </ThemedText>
      )}
      {isLoser && (
        <View>
          <ThemedText style={styles.defeatMessage}>Você perdeu!</ThemedText>
          <ThemedText style={styles.defeatMessage}>
            A palavra era:{" "}
            <ThemedText style={styles.wordReveal}>{word}</ThemedText>
          </ThemedText>
        </View>
      )}

      <View style={styles.formForca}>
        <TextInput
          style={styles.inputForca}
          maxLength={1}
          value={input}
          onChangeText={setInput}
          editable={!isWinner && !isLoser}
          autoCapitalize="characters"
          placeholder="?"
          placeholderTextColor="#888"
        />
        <TouchableOpacity
          style={[
            styles.buttonForca,
            (isWinner || isLoser || !input) && styles.buttonDisabled,
          ]}
          onPress={handleTry}
          disabled={isWinner || isLoser || !input}
        >
          <ThemedText style={styles.buttonText}>Tentar</ThemedText>
        </TouchableOpacity>
      </View>

      {message ? (
        <ThemedText style={styles.errorMessage}>{message}</ThemedText>
      ) : null}

      <View style={styles.attemptsList}>
        <ThemedText style={styles.attemptsLabel}>
          Tentativas anteriores:{" "}
        </ThemedText>
        <View style={styles.attemptsGrid}>
          {attempts.map((letter, idx) => (
            <ThemedText
              key={idx}
              style={
                word.includes(letter)
                  ? styles.correctAttempt
                  : styles.wrongAttempt
              }
            >
              {letter}
            </ThemedText>
          ))}
        </View>
      </View>

      <ThemedText style={styles.remainingAttempts}>
        Tentativas restantes: {MAX_ATTEMPTS - errors}
      </ThemedText>

      {(isWinner || isLoser) && (
        <TouchableOpacity style={styles.buttonForca} onPress={handleRestart}>
          <ThemedText style={styles.buttonText}>Reiniciar Jogo</ThemedText>
        </TouchableOpacity>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  forcaContainer: {
    backgroundColor: "#23272f",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },
  forcaTitle: {
    fontSize: 24,
    color: "#63b3ed",
    fontWeight: "bold",
    marginBottom: 20,
  },
  hangmanContainer: {
    marginBottom: 20,
    backgroundColor: "#1a202c",
    padding: 15,
    borderRadius: 10,
    minHeight: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  hangmanText: {
    fontSize: 24,
    fontFamily: "monospace",
    textAlign: "center",
    lineHeight: 30,
    color: "#ededed",
  },
  wordDisplay: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  letra: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#63b3ed",
    minWidth: 20,
    textAlign: "center",
  },
  victoryMessage: {
    color: "#63b3ed",
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 18,
  },
  defeatMessage: {
    color: "#e53e3e",
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 16,
    textAlign: "center",
  },
  wordReveal: {
    color: "#f6e05e",
  },
  formForca: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  inputForca: {
    width: 50,
    height: 50,
    textAlign: "center",
    fontSize: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#63b3ed",
    backgroundColor: "#1a202c",
    color: "#ededed",
  },
  buttonForca: {
    backgroundColor: "#63b3ed",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
  },
  buttonDisabled: {
    backgroundColor: "#555",
    opacity: 0.5,
  },
  buttonText: {
    color: "#23272f",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorMessage: {
    color: "#e53e3e",
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  attemptsList: {
    marginTop: 15,
    width: "100%",
  },
  attemptsLabel: {
    fontWeight: "bold",
    color: "#f6e05e",
    marginBottom: 8,
  },
  attemptsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  correctAttempt: {
    color: "#63b3ed",
    fontWeight: "bold",
    fontSize: 16,
  },
  wrongAttempt: {
    color: "#e53e3e",
    fontWeight: "bold",
    fontSize: 16,
  },
  remainingAttempts: {
    marginTop: 15,
    fontWeight: "bold",
    color: "#f6e05e",
  },
});
