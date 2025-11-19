import { StyleSheet, View, Linking, TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";
import { IconSymbol } from "./ui/IconSymbol";

export default function Socials() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>
        Redes Sociais
      </ThemedText>
      <View style={styles.socialsContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => openLink("https://github.com/pep287")}
        >
          <IconSymbol name="link" size={24} color="#63b3ed" />
          <ThemedText style={styles.socialText}>GitHub</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => openLink("https://linkedin.com/in/seu-usuario")}
        >
          <IconSymbol name="link" size={24} color="#63b3ed" />
          <ThemedText style={styles.socialText}>LinkedIn</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: "100%",
    alignItems: "center",
  },
  title: {
    marginBottom: 15,
    color: "#63b3ed",
  },
  socialsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  socialButton: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "#23272f",
    borderRadius: 10,
    minWidth: 100,
  },
  socialText: {
    marginTop: 8,
    fontSize: 14,
  },
});
