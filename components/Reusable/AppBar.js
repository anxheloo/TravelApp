import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import ReusableText from "./ReusableText";
import { useNavigation } from "@react-navigation/native";

const AppBar = ({
  title,
  color,
  color1,
  icon,
  onPress,
  onPress1,
  top,
  left,
  right,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.overlay(top, left, right)}>
      <View style={styles.rowWithSpace}>
        <TouchableOpacity onPress={onPress} style={styles.box(color)}>
          <AntDesign name="left" size={26}></AntDesign>
        </TouchableOpacity>

        <ReusableText
          text={title}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        ></ReusableText>

        <TouchableOpacity onPress={onPress1} style={styles.box1(color1)}>
          <AntDesign name={icon} size={26}></AntDesign>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: (top, left, right) => ({
    position: "absolute",
    top: top,
    left: left,
    right: right,
    justifyContent: "center",
  }),

  rowWithSpace: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  box: (color) => ({
    backgroundColor: color,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),

  box1: (color1) => ({
    backgroundColor: color1,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
});

export default AppBar;
