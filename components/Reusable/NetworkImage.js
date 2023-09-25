import { StyleSheet, Image } from "react-native";
import React from "react";

const NetworkImage = ({ source, width, height, radius }) => {
  return (
    <Image
      style={styles.image(width, height, radius)}
      source={{ uri: source }}
    ></Image>
  );
};

const styles = StyleSheet.create({
  image: (width, height, radius) => ({
    width: width,
    height: height,
    borderRadius: radius,
    resizeMode: "cover",
  }),
});

export default NetworkImage;
