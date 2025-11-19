import { StyleSheet, ScrollView, View, SafeAreaView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SobreScreen() {
  const technologies = [
    {
      name: "React Native",
      icon: "react",
      description:
        "Framework multiplataforma que permite criar apps nativos para IOS e Android usando Typescript e React.",
    },
    {
      name: "Expo",
      icon: "rocket-launch",
      description:
        "Plataforma que simplifica o desenvolvimento, facilitando testes e deploy de aplicativos.",
    },
    {
      name: "TypeScript",
      icon: "language-typescript",
      description:
        "Linguagem que adiciona tipagem ao JavaScript, tornando o código mais seguro e confiável.",
    },
    {
      name: "Expo Router",
      icon: "routes",
      description:
        "Sistema de navegação intuitivo baseado na estrutura de pastas do projeto.",
    },
  ];

  const features = [
    {
      icon: "tab",
      text: "Sistema de navegação por abas para facilitar o acesso a todas as seções do portfólio.",
    },
    {
      icon: "gamepad-variant",
      text: "Jogo da Forca interativo para demonstrar habilidades de lógica de programação.",
    },
    {
      icon: "link-variant",
      text: "Links diretos para GitHub, Linkedin e outros projetos desenvolvidos.",
    },
    {
      icon: "cellphone-check",
      text: "Interface responsiva que se ajusta perfeitamente a diferentes tamanhos de tela.",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ThemedView style={styles.content}>
          <ThemedText type="title" style={styles.title}>
            Sobre o App
          </ThemedText>

          <ThemedText style={styles.description}>
            Este aplicativo foi desenvolvido como parte de um projeto acadêmico
            para demonstrar minhas habilidades em desenvolvimento mobile. Aqui
            você encontra informações sobre minha formação, experiências e
            projetos realizados.
          </ThemedText>

          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Tecnologias Utilizadas
          </ThemedText>

          {technologies.map((tech, index) => (
            <ThemedView key={index} style={styles.techCard}>
              <View style={styles.techHeader}>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name={tech.icon as any}
                    size={28}
                    color="#63b3ed"
                  />
                </View>
                <ThemedText type="defaultSemiBold" style={styles.techName}>
                  {tech.name}
                </ThemedText>
              </View>
              <ThemedText style={styles.techDescription}>
                {tech.description}
              </ThemedText>
            </ThemedView>
          ))}

          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Recursos Implementados
          </ThemedText>

          <ThemedView style={styles.featuresSection}>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <MaterialCommunityIcons
                  name={feature.icon as any}
                  size={22}
                  color="#63b3ed"
                  style={styles.featureIcon}
                />
                <ThemedText style={styles.featureText}>
                  {feature.text}
                </ThemedText>
              </View>
            ))}
          </ThemedView>
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
    marginBottom: 16,
    color: "#63b3ed",
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 24,
    textAlign: "center",
    opacity: 0.9,
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 12,
    color: "#63b3ed",
    fontWeight: "600",
  },
  techCard: {
    backgroundColor: "#23272f",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  techHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "rgba(99, 179, 237, 0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  techName: {
    fontSize: 17,
    marginLeft: 12,
    color: "#f6e05e",
    flex: 1,
  },
  techDescription: {
    fontSize: 14,
    lineHeight: 21,
    opacity: 0.85,
  },
  featuresSection: {
    backgroundColor: "#23272f",
    borderRadius: 10,
    padding: 14,
    marginTop: 8,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 10,
  },
  featureIcon: {
    marginTop: 2,
    marginRight: 12,
  },
  featureText: {
    fontSize: 14,
    lineHeight: 21,
    flex: 1,
    opacity: 0.9,
  },
});
