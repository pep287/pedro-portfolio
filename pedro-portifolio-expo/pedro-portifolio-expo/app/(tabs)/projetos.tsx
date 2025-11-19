import { StyleSheet, ScrollView } from "react-native";
import Projects from "@/components/Projects";
import { ThemedView } from "@/components/ThemedView";

export default function ProjetosScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <Projects />
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
});
