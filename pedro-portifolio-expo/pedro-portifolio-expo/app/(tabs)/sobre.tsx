import { StyleSheet, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Languages from "@/components/Languages";

export default function SobreScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Sobre o App
        </ThemedText>

        <ThemedText style={styles.description}>
          Este aplicativo foi desenvolvido utilizando as seguintes tecnologias:
        </ThemedText>

        <Languages />

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Tecnologias Utilizadas:</ThemedText>
          <ThemedText style={styles.tech}>• React Native</ThemedText>
          <ThemedText style={styles.tech}>• Expo</ThemedText>
          <ThemedText style={styles.tech}>• TypeScript</ThemedText>
          <ThemedText style={styles.tech}>• Expo Router</ThemedText>
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
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  section: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#23272f",
  },
  tech: {
    fontSize: 14,
    marginVertical: 5,
  },
});
