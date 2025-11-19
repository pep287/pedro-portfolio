import { StyleSheet, View, Text } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { IconSymbol } from "./ui/IconSymbol";

export default function Languages() {
  const languages = [
    { name: "HTML5", icon: "code" },
    { name: "CSS", icon: "code" },
    { name: "JavaScript", icon: "code" },
    { name: "React", icon: "code" },
    { name: "C", icon: "code" },
    { name: "Java", icon: "code" },
    { name: "Python", icon: "code" },
  ];

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>
        Linguagens
      </ThemedText>
      <View style={styles.languagesGrid}>
        {languages.map((lang, idx) => (
          <View key={idx} style={styles.languageItem}>
            <IconSymbol name={lang.icon as any} size={20} color="#63b3ed" />
            <ThemedText style={styles.languageText}>{lang.name}</ThemedText>
          </View>
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#23272f",
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
    width: "100%",
  },
  title: {
    textAlign: "center",
    color: "#63b3ed",
    marginBottom: 15,
  },
  languagesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  languageItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a202c",
    borderRadius: 8,
    padding: 10,
    gap: 8,
    minWidth: 100,
  },
  languageText: {
    fontSize: 14,
    color: "#63b3ed",
  },
});
