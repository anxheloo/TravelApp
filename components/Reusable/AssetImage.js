import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const AssetImage = ({ width, height, radius, mode, data }) => {
  return (
    <Image
      source={data}
      style={styles.image(width, height, radius, mode)}
    ></Image>
  );
};

const styles = StyleSheet.create({
  image: (width, height, radius, mode) => ({
    width: width,
    height: height,
    borderRadius: radius,
    resizeMode: mode,
  }),
});

export default AssetImage;
