import { StyleSheet, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function ExperienciaProfissionalScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Soft Skills
        </ThemedText>

        <ThemedView style={styles.card}>
          <ThemedText style={styles.skill}>✓ Trabalho em equipe</ThemedText>
          <ThemedText style={styles.skill}>✓ Proatividade</ThemedText>
          <ThemedText style={styles.skill}>✓ Comunicação</ThemedText>
          <ThemedText style={styles.skill}>✓ Adaptabilidade</ThemedText>
          <ThemedText style={styles.skill}>✓ Resolução de Problemas</ThemedText>
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
  },
  skill: {
    fontSize: 16,
    marginVertical: 8,
  },
});
