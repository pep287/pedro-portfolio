import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ExperienciaProfissional from "@/components/ExperienciaProfissional";

export default function ExperienciaProfissionalScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ThemedView style={styles.content}>
          <ThemedText type="title" style={styles.title}>
            Soft Skills
          </ThemedText>

          <ThemedText style={styles.subtitle}>
            Habilidades interpessoais que desenvolvi ao longo da minha jornada
            acadêmica. Ainda não possuo experiência profissional, entretanto
            estou me preparando para isso.
          </ThemedText>

          <ExperienciaProfissional />
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1a1d23",
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 26,
    marginBottom: 12,
    color: "#63b3ed",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 20,
    textAlign: "center",
    opacity: 0.8,
  },
});
