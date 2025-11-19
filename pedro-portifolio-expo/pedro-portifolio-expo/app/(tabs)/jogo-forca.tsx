import { StyleSheet, ScrollView } from "react-native";
import Forca from "@/components/Forca";
import { ThemedView } from "@/components/ThemedView";

export default function JogoForcaScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <Forca />
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
