import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";

const ProfileTile = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tile}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <AntDesign name={icon} size={20}></AntDesign>
          <WidthSpacer width={15}></WidthSpacer>

          <ReusableText
            text={title}
            family={"regular"}
            size={SIZES.medium}
            color={COLORS.gray}
          ></ReusableText>
        </View>

        <AntDesign name={"right"} size={20}></AntDesign>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    backgroundColor: COLORS.lightWhite,
    width: "100%",
    height: 60,
    padding: 10,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 15,
    justifyContent: "center",
  },
});

export default ProfileTile;
