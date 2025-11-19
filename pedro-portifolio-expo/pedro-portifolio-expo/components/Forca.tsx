import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const isSmallScreen = screenWidth < 380;

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

  return (
    <ThemedView style={styles.forcaContainer}>
      <ThemedText type="title" style={styles.forcaTitle}>
        Jogo da Forca
      </ThemedText>

      <View style={styles.hangmanContainer}>
        <View style={styles.gallows}>
          <View style={styles.base} />
          <View style={styles.pole} />
          <View style={styles.beam} />
          <View style={styles.rope} />

          <View style={styles.person}>
            {errors > 0 && <View style={styles.head} />}
            {errors > 1 && <View style={styles.body} />}
            {errors > 2 && <View style={styles.leftArm} />}
            {errors > 3 && <View style={styles.rightArm} />}
            {errors > 4 && <View style={styles.leftLeg} />}
            {errors > 5 && <View style={styles.rightLeg} />}
          </View>
        </View>
      </View>

      <View style={styles.wordDisplayWrapper}>
        <View style={styles.wordDisplayCenter}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.wordDisplay}
          >
            {displayWord}
          </ScrollView>
        </View>
      </View>

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
          Tentativas anteriores:
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
    padding: isSmallScreen ? 12 : 20,
    alignItems: "center",
    width: "100%",
    minHeight: screenHeight - 200,
  },
  forcaTitle: {
    fontSize: isSmallScreen ? 20 : 24,
    color: "#63b3ed",
    fontWeight: "bold",
    marginBottom: isSmallScreen ? 15 : 20,
  },
  hangmanContainer: {
    marginBottom: isSmallScreen ? 25 : 35,
    backgroundColor: "#1a202c",
    padding: isSmallScreen ? 15 : 20,
    borderRadius: 10,
    height: isSmallScreen ? 180 : 200,
    width: "100%",
    maxWidth: isSmallScreen ? 280 : 300,
    justifyContent: "center",
    alignItems: "center",
  },
  gallows: {
    position: "relative",
    width: isSmallScreen ? 130 : 150,
    height: isSmallScreen ? 160 : 180,
  },
  base: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: isSmallScreen ? 85 : 100,
    height: 4,
    backgroundColor: "#8B4513",
  },
  pole: {
    position: "absolute",
    bottom: 0,
    left: 20,
    width: 4,
    height: isSmallScreen ? 156 : 176,
    backgroundColor: "#8B4513",
  },
  beam: {
    position: "absolute",
    top: 0,
    left: 0,
    width: isSmallScreen ? 75 : 90,
    height: 4,
    backgroundColor: "#8B4513",
  },
  rope: {
    position: "absolute",
    top: 4,
    left: isSmallScreen ? 71 : 86,
    width: 2,
    height: 20,
    backgroundColor: "#D2691E",
  },
  person: {
    position: "absolute",
    top: 24,
    left: isSmallScreen ? 55 : 70,
  },
  head: {
    width: isSmallScreen ? 26 : 30,
    height: isSmallScreen ? 26 : 30,
    borderRadius: isSmallScreen ? 13 : 15,
    borderWidth: 3,
    borderColor: "#e53e3e",
    backgroundColor: "transparent",
  },
  body: {
    width: 3,
    height: isSmallScreen ? 45 : 50,
    backgroundColor: "#e53e3e",
    marginLeft: isSmallScreen ? 11.5 : 13.5,
  },
  leftArm: {
    position: "absolute",
    top: isSmallScreen ? 55 : 60,
    left: -8,
    width: isSmallScreen ? 26 : 30,
    height: 3,
    backgroundColor: "#e53e3e",
    transform: [{ rotate: "-45deg" }],
    transformOrigin: "left",
  },
  rightArm: {
    position: "absolute",
    top: isSmallScreen ? 55 : 60,
    right: -8,
    width: isSmallScreen ? 26 : 30,
    height: 3,
    backgroundColor: "#e53e3e",
    transform: [{ rotate: "45deg" }],
    transformOrigin: "right",
  },
  leftLeg: {
    position: "absolute",
    top: isSmallScreen ? 88 : 98,
    left: -8,
    width: isSmallScreen ? 26 : 30,
    height: 3,
    backgroundColor: "#e53e3e",
    transform: [{ rotate: "-45deg" }],
    transformOrigin: "left",
  },
  rightLeg: {
    position: "absolute",
    top: isSmallScreen ? 88 : 98,
    right: -8,
    width: isSmallScreen ? 26 : 30,
    height: 3,
    backgroundColor: "#e53e3e",
    transform: [{ rotate: "45deg" }],
    transformOrigin: "right",
  },
  wordDisplayWrapper: {
    width: "100%",
    marginBottom: isSmallScreen ? 20 : 25,
    height: isSmallScreen ? 45 : 55,
    justifyContent: "center",
    alignItems: "center",
  },
  wordDisplayCenter: {
    width: "100%",
    alignItems: "center",
  },
  wordDisplay: {
    flexDirection: "row",
    gap: isSmallScreen ? 6 : 8,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  letra: {
    fontSize: isSmallScreen ? 24 : 28,
    fontWeight: "bold",
    color: "#63b3ed",
    textAlign: "center",
    minWidth: isSmallScreen ? 18 : 20,
  },
  victoryMessage: {
    color: "#48bb78",
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: isSmallScreen ? 16 : 18,
    textAlign: "center",
  },
  defeatMessage: {
    color: "#e53e3e",
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: isSmallScreen ? 14 : 16,
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
    width: isSmallScreen ? 45 : 50,
    height: isSmallScreen ? 45 : 50,
    textAlign: "center",
    fontSize: isSmallScreen ? 20 : 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#63b3ed",
    backgroundColor: "#1a202c",
    color: "#ededed",
  },
  buttonForca: {
    backgroundColor: "#63b3ed",
    borderRadius: 8,
    paddingVertical: isSmallScreen ? 10 : 12,
    paddingHorizontal: isSmallScreen ? 16 : 20,
  },
  buttonDisabled: {
    backgroundColor: "#555",
    opacity: 0.5,
  },
  buttonText: {
    color: "#23272f",
    fontWeight: "bold",
    fontSize: isSmallScreen ? 14 : 16,
  },
  errorMessage: {
    color: "#e53e3e",
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: isSmallScreen ? 13 : 14,
  },
  attemptsList: {
    marginTop: 15,
    width: "100%",
    paddingHorizontal: 10,
  },
  attemptsLabel: {
    fontWeight: "bold",
    color: "#f6e05e",
    marginBottom: 10,
    fontSize: isSmallScreen ? 14 : 15,
  },
  attemptsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: isSmallScreen ? 10 : 12,
  },
  correctAttempt: {
    color: "#48bb78",
    fontWeight: "bold",
    fontSize: isSmallScreen ? 16 : 18,
    minWidth: isSmallScreen ? 18 : 20,
  },
  wrongAttempt: {
    color: "#e53e3e",
    fontWeight: "bold",
    fontSize: isSmallScreen ? 16 : 18,
    textDecorationLine: "line-through",
    minWidth: isSmallScreen ? 18 : 20,
  },
  remainingAttempts: {
    marginTop: 15,
    fontWeight: "bold",
    color: "#f6e05e",
    fontSize: isSmallScreen ? 14 : 15,
  },
});
