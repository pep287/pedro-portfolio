import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Socials from "@/components/Socials";
import Languages from "@/components/Languages";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1d23" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ThemedView style={styles.content}>
          <ThemedText type="title" style={styles.title}>
            Pedro Mota Mendes
          </ThemedText>

          <View style={styles.avatarContainer}>
            <Image
              source={require("@/assets/images/myimage.jpg")}
              style={styles.avatar}
            />
          </View>

          <ThemedText style={styles.description}>
            Estudante do curso de Ciências da Computação na Universidade
            Católica de Pernambuco. Sou apaixonado por tecnologia,
            principalmente por desenvolvimento web. Tenho experiência em HTML,
            CSS, Javascript e React, além de conhecimentos em linguagens como C,
            Java e Python. Meu trunfo é a minha adaptabilidade e vontade de
            aprender coisas novas, além de ter boa proatividade e facilidade de
            trabalhar em equipe.
          </ThemedText>

          <Languages />
          <Socials />
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
    paddingBottom: 100, // Espaço para a tab bar
  },
  content: {
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginTop: 8,
    marginBottom: 16,
    textAlign: "center",
    color: "#63b3ed",
  },
  avatarContainer: {
    marginVertical: 12,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: "#63b3ed",
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    marginVertical: 12,
    paddingHorizontal: 8,
  },
});
