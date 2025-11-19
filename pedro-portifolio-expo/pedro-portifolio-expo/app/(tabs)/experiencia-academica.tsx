import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ExperienciaAcademica from "@/components/ExperienciaAcademica";

export default function ExperienciaAcademicaScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ThemedView style={styles.content}>
          <ThemedText type="title" style={styles.title}>
            Experiência Acadêmica
          </ThemedText>

          <ExperienciaAcademica />
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
    marginBottom: 20,
    color: "#63b3ed",
    textAlign: "center",
  },
});
