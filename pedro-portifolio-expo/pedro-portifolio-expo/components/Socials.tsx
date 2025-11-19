import { StyleSheet, View, Linking, TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
          <MaterialCommunityIcons name="github" size={28} color="#63b3ed" />
          <ThemedText style={styles.socialText}>GitHub</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() =>
            openLink("https://www.linkedin.com/in/pedro-mota-mendes-011362328")
          }
        >
          <MaterialCommunityIcons name="linkedin" size={28} color="#63b3ed" />
          <ThemedText style={styles.socialText}>LinkedIn</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
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
  socialsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  socialButton: {
    alignItems: "center",
    padding: 12,
    backgroundColor: "#23272f",
    borderRadius: 8,
    width: 100,
  },
  socialText: {
    marginTop: 6,
    fontSize: 12,
  },
});
