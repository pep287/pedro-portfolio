import { StyleSheet, ScrollView, Image, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Socials from "@/components/Socials";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
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
          Estudante do curso de Ciências da Computação na Universidade Católica
          de Pernambuco. Sou apaixonado por tecnologia, principalmente por
          desenvolvimento web. Tenho experiência em HTML, CSS, Javascript e
          React, além de conhecimentos em linguagens como C, Java e Python. Meu
          trunfo é a minha adaptabilidade e vontade de aprender coisas novas,
          além de ter boa proatividade e facilidade de trabalhar em equipe.
        </ThemedText>

        <Socials />
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
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
    color: "#63b3ed",
  },
  avatarContainer: {
    marginVertical: 20,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: "#63b3ed",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginVertical: 20,
    paddingHorizontal: 10,
  },
});
