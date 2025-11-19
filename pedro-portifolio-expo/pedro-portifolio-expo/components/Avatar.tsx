import { StyleSheet, Image, View, ImageResizeMode } from "react-native";

interface AvatarProps {
  size?: number;
  borderWidth?: number;
  borderColor?: string;
  resizeMode?: ImageResizeMode;
  scale?: number;
  verticalOffset?: number;
  horizontalOffset?: number;
}

export default function Avatar({
  size = 140,
  borderWidth = 3,
  borderColor = "#63b3ed",
  resizeMode = "cover",
  scale = 1.0,
  verticalOffset = 0,
  horizontalOffset = 0,
}: AvatarProps) {
  const imageSize = size * scale;
  const offsetLeft = (size - imageSize) / 2 + horizontalOffset;
  const offsetTop = (size - imageSize) / 2 + verticalOffset;

  return (
    <View style={styles.avatarContainer}>
      <View
        style={[
          styles.avatarWrapper,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: borderWidth,
            borderColor: borderColor,
            overflow: "hidden",
            backgroundColor: "#1a1d23",
          },
        ]}
      >
        <Image
          source={require("@/assets/images/myimage.jpg")}
          resizeMode={resizeMode}
          style={[
            styles.avatar,
            {
              width: imageSize,
              height: imageSize,
              top: offsetTop,
              left: offsetLeft,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    marginVertical: 12,
  },
  avatarWrapper: {
    overflow: "hidden",
    position: "relative",
  },
  avatar: {
    position: "absolute",
  },
});
