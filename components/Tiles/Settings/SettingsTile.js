import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { COLORS, SIZES, TEXT } from "../../../constants/theme";
import ReusableText from "../../Reusable/ReusableText";
import WidthSpacer from "../../Reusable/WidthSpacer";
import { AntDesign } from "@expo/vector-icons";

const SettingsTile = ({ onPress, title, title1 }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ReusableText
        text={title}
        family={"regular"}
        size={SIZES.xLarge - 5}
        color={COLORS.dark}
      ></ReusableText>

      {title === "Language" ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../assets/images/USA.png")}
            style={styles.image}
          ></Image>

          <WidthSpacer width={5}></WidthSpacer>

          <ReusableText
            text={"English"}
            family={"regular"}
            size={SIZES.large}
            color={COLORS.gray}
          ></ReusableText>

          <WidthSpacer width={5}></WidthSpacer>

          <AntDesign name="right" size={20} color={COLORS.dark}></AntDesign>
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <ReusableText
            text={title1}
            family={"regular"}
            size={SIZES.xLarge - 5}
            color={COLORS.dark}
          ></ReusableText>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLORS.lightGrey,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  image: {
    width: 40,
    height: 30,
    resizeMode: "contain",
  },
});

export default SettingsTile;
