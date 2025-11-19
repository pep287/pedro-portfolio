import { StyleSheet, View, Linking, TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export default function Projects() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle" style={styles.cardTitle}>
            Projetos
          </ThemedText>
          <View style={styles.projectsList}>
            <ThemedText style={styles.projectItem}>
              <ThemedText style={styles.projectName}>
                Portfolio Pessoal:{" "}
              </ThemedText>
              Este aplicativo!
            </ThemedText>

            <TouchableOpacity
              onPress={() =>
                openLink("https://github.com/pep287/pokedex-team-planner")
              }
            >
              <ThemedText style={styles.projectItem}>
                <ThemedText style={styles.projectLink}>
                  Pokedex com team planner:{" "}
                </ThemedText>
                Projeto em Grupo usando React, para a cadeira de Programação Web
                e Mobile.
              </ThemedText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => openLink("https://github.com/pep287/magichess")}
            >
              <ThemedText style={styles.projectItem}>
                <ThemedText style={styles.projectLink}>Magichess: </ThemedText>
                Trabalho em grupo realizado em java para a cadeira de
                Programação Orientada a Objetos.
              </ThemedText>
            </TouchableOpacity>
          </View>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle" style={styles.cardTitle}>
            Acadêmico
          </ThemedText>
          <View style={styles.projectsList}>
            <ThemedText style={styles.projectItem}>
              <ThemedText style={styles.projectName}>
                Bacharelado em Ciência da Computação
              </ThemedText>{" "}
              - Unicap (2024 - presente)
            </ThemedText>
            <ThemedText style={styles.projectItem}>
              <ThemedText style={styles.projectName}>
                Curso de Python
              </ThemedText>{" "}
              - Santander Academy (2025)
            </ThemedText>
          </View>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle" style={styles.cardTitle}>
            Soft Skills
          </ThemedText>
          <View style={styles.projectsList}>
            <ThemedText style={styles.projectItem}>
              • Trabalho em equipe
            </ThemedText>
            <ThemedText style={styles.projectItem}>• Proatividade</ThemedText>
            <ThemedText style={styles.projectItem}>• Comunicação</ThemedText>
            <ThemedText style={styles.projectItem}>• Adaptabilidade</ThemedText>
            <ThemedText style={styles.projectItem}>
              • Resolução de Problemas
            </ThemedText>
          </View>
        </ThemedView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  cardsContainer: {
    gap: 20,
  },
  card: {
    backgroundColor: "#23272f",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
  },
  cardTitle: {
    color: "#63b3ed",
    marginBottom: 15,
  },
  projectsList: {
    gap: 12,
  },
  projectItem: {
    fontSize: 14,
    lineHeight: 20,
  },
  projectName: {
    color: "#f6e05e",
    fontWeight: "bold",
  },
  projectLink: {
    color: "#63b3ed",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
