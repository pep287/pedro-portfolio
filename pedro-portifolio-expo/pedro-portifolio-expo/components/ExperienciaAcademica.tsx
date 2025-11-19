import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ExperienciaAcademica() {
  const experiences = [
    {
      title: "Bacharelado em Ciência da Computação",
      institution: "Universidade Católica de Pernambuco (Unicap)",
      period: "2024 - presente",
      icon: "school",
    },
    {
      title: "Curso de Python",
      institution: "Santander Academy",
      period: "2025",
      icon: "certificate",
    },
  ];

  return (
    <>
      {experiences.map((exp, index) => (
        <ThemedView key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={exp.icon as any}
                size={32}
                color="#63b3ed"
              />
            </View>
            <View style={styles.cardInfo}>
              <ThemedText type="subtitle" style={styles.cardTitle}>
                {exp.title}
              </ThemedText>
              <ThemedText style={styles.institution}>
                {exp.institution}
              </ThemedText>
              <ThemedText style={styles.period}>{exp.period}</ThemedText>
            </View>
          </View>
        </ThemedView>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#23272f",
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "rgba(99, 179, 237, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    color: "#f6e05e",
    marginBottom: 8,
    fontSize: 17,
  },
  institution: {
    fontSize: 14,
    color: "#ededed",
    marginBottom: 4,
    opacity: 0.9,
  },
  period: {
    fontSize: 13,
    color: "#63b3ed",
    opacity: 0.8,
  },
});
