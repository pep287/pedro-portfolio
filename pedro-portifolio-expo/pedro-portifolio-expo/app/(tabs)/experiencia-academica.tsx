import { StyleSheet, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function ExperienciaAcademicaScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Experiência Acadêmica
        </ThemedText>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle" style={styles.cardTitle}>
            Bacharelado em Ciência da Computação
          </ThemedText>
          <ThemedText style={styles.institution}>
            Unicap (2024 - presente)
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle" style={styles.cardTitle}>
            Curso de Python
          </ThemedText>
          <ThemedText style={styles.institution}>
            Santander Academy (2025)
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: "#63b3ed",
  },
  card: {
    backgroundColor: "#23272f",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardTitle: {
    color: "#f6e05e",
    marginBottom: 10,
  },
  institution: {
    fontSize: 14,
    color: "#ededed",
  },
});
