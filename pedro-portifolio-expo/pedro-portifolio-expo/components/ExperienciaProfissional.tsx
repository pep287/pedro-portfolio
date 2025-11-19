import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ExperienciaProfissional() {
  const softSkills = [
    {
      icon: "account-group",
      title: "Trabalho em equipe",
      description:
        "Colaboro efetivamente com colegas e compartilho conhecimentos",
    },
    {
      icon: "lightbulb-on",
      title: "Proatividade",
      description: "Busco sempre novos desafios e oportunidades de aprendizado",
    },
    {
      icon: "forum",
      title: "Comunicação",
      description: "Expresso ideias com clareza e escuto ativamente feedbacks",
    },
    {
      icon: "sync",
      title: "Adaptabilidade",
      description: "Me ajusto rapidamente a novas tecnologias e ambientes",
    },
    {
      icon: "puzzle",
      title: "Resolução de Problemas",
      description: "Analiso situações complexas e encontro soluções criativas",
    },
    {
      icon: "clock-fast",
      title: "Gestão de Tempo",
      description: "Organizo tarefas e prioridades de forma eficiente",
    },
  ];

  return (
    <>
      {softSkills.map((skill, index) => (
        <ThemedView key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={skill.icon as any}
                size={28}
                color="#63b3ed"
              />
            </View>
            <View style={styles.cardInfo}>
              <ThemedText type="defaultSemiBold" style={styles.skillTitle}>
                {skill.title}
              </ThemedText>
              <ThemedText style={styles.skillDescription}>
                {skill.description}
              </ThemedText>
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
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: "rgba(99, 179, 237, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
  },
  skillTitle: {
    fontSize: 16,
    color: "#f6e05e",
    marginBottom: 6,
  },
  skillDescription: {
    fontSize: 13,
    lineHeight: 20,
    opacity: 0.85,
  },
});
