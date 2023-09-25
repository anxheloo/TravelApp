import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";
import { COLORS } from "../../constants/theme";

const Rating = ({ rating }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <MaterialCommunityIcons
        name="star"
        size={20}
        color={"#FD9942"}
      ></MaterialCommunityIcons>

      <WidthSpacer width={5}></WidthSpacer>

      <ReusableText
        text={rating}
        family={"medium"}
        size={15}
        color={"#FD9942"}
      ></ReusableText>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Rating;
