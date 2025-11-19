import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Languages() {
  const languages = [
    { name: "JavaScript", icon: "language-javascript", color: "#f7df1e" },
    { name: "TypeScript", icon: "language-typescript", color: "#3178c6" },
    { name: "Python", icon: "language-python", color: "#3776ab" },
    { name: "Java", icon: "language-java", color: "#007396" },
    { name: "C", icon: "language-c", color: "#a8b9cc" },
    { name: "HTML", icon: "language-html5", color: "#e34c26" },
    { name: "CSS", icon: "language-css3", color: "#264de4" },
    { name: "React", icon: "react", color: "#61dafb" },
    { name: "React Native", icon: "react", color: "#61dafb" },
  ];

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>
        Linguagens e Tecnologias
      </ThemedText>
      <View style={styles.languagesGrid}>
        {languages.map((lang, index) => (
          <ThemedView key={index} style={styles.languageCard}>
            <MaterialCommunityIcons
              name={lang.icon as any}
              size={32}
              color={lang.color}
            />
            <ThemedText style={styles.languageName}>{lang.name}</ThemedText>
          </ThemedView>
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    width: "100%",
  },
  title: {
    marginBottom: 12,
    color: "#63b3ed",
    textAlign: "center",
    fontSize: 18,
  },
  languagesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
  },
  languageCard: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#23272f",
    borderRadius: 8,
    width: 95,
    height: 75,
  },
  languageName: {
    marginTop: 4,
    fontSize: 10,
    textAlign: "center",
  },
});
