import { StyleSheet, View, TouchableOpacity, Linking } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Projects() {
  const projects = [
    {
      title: "Your Pokédex",
      description:
        "Aplicação web e Mobile que permite buscar e visualizar informações detalhadas sobre Pokémon usando a PokéAPI",
      technologies: ["React", "React Native", "CSS", "TypeScript", "Expo"],
      link: "https://github.com/noemisoares/your-pokedex",
      icon: "pokeball",
      color: "#e74c3c",
    },
    {
      title: "MagiChess",
      description:
        "Jogo de xadrez multiplataforma desenvolvido em Java para a cadeira de Programação Orientada a Objetos",
      technologies: ["Java"],
      link: "https://github.com/MatheusOliveir4/magichess",
      icon: "chess-queen",
      color: "#9b59b6",
    },
    {
      title: "Portfólio Web",
      description:
        "Site e app de portfólio pessoal desenvolvido com Next.js, React e CSS, incluindo jogo da forca interativo",
      technologies: [
        "Next.js",
        "React",
        "CSS",
        "Typescript",
        "React Native",
        "Expo",
      ],
      link: "https://github.com/pep287/pedro-portfolio",
      icon: "web",
      color: "#3498db",
    },
  ];

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Meus Projetos
      </ThemedText>

      <ThemedText style={styles.subtitle}>
        Projetos desenvolvidos durante minha jornada de aprendizado
      </ThemedText>

      {projects.map((project, index) => (
        <ThemedView key={index} style={styles.projectCard}>
          <View style={styles.projectHeader}>
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: project.color + "20" },
              ]}
            >
              <MaterialCommunityIcons
                name={project.icon as any}
                size={32}
                color={project.color}
              />
            </View>
            <View style={styles.projectInfo}>
              <ThemedText type="defaultSemiBold" style={styles.projectTitle}>
                {project.title}
              </ThemedText>
            </View>
          </View>

          <ThemedText style={styles.projectDescription}>
            {project.description}
          </ThemedText>

          <View style={styles.technologiesContainer}>
            {project.technologies.map((tech, techIndex) => (
              <View key={techIndex} style={styles.techTag}>
                <ThemedText style={styles.techText}>{tech}</ThemedText>
              </View>
            ))}
          </View>

          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => openLink(project.link)}
          >
            <MaterialCommunityIcons name="github" size={20} color="#63b3ed" />
            <ThemedText style={styles.linkText}>Ver Repositório</ThemedText>
            <MaterialCommunityIcons
              name="open-in-new"
              size={18}
              color="#63b3ed"
            />
          </TouchableOpacity>
        </ThemedView>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
  projectCard: {
    backgroundColor: "#23272f",
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  projectHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  projectInfo: {
    flex: 1,
  },
  projectTitle: {
    fontSize: 18,
    color: "#f6e05e",
  },
  projectDescription: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 12,
    opacity: 0.9,
  },
  technologiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
  },
  techTag: {
    backgroundColor: "rgba(99, 179, 237, 0.15)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(99, 179, 237, 0.3)",
  },
  techText: {
    fontSize: 12,
    color: "#63b3ed",
  },
  linkButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(99, 179, 237, 0.1)",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(99, 179, 237, 0.3)",
    gap: 8,
  },
  linkText: {
    fontSize: 14,
    color: "#63b3ed",
    fontWeight: "600",
  },
});
