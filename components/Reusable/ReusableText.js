import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ReusableText = ({ text, family, size, color, align, numberOfLines }) => {
  return (
    <Text
      style={styles.textStyle(family, size, color, align)}
      numberOfLines={numberOfLines}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: (family, size, color, align) => ({
    fontFamily: family,
    fontSize: size,
    color: color,
    textAlign: align,
    // flexShrink: 1,
  }),
});

export default ReusableText;
