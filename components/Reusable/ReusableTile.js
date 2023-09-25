import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, TEXT, SIZES } from "../../constants/theme";
import NetworkImage from "./NetworkImage";
import WidthSpacer from "../Reusable/WidthSpacer";
import HeightSpacer from "../Reusable/HeightSpacer";
import ReusableText from "./ReusableText";
import Rating from "./Rating";

const ReusableTile = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <NetworkImage
          source={item.imageUrl}
          width={90}
          height={90}
          radius={12}
        ></NetworkImage>

        <WidthSpacer width={15}></WidthSpacer>

        <View>
          <ReusableText
            text={item.title}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.black}
          ></ReusableText>

          <HeightSpacer height={8}></HeightSpacer>

          <ReusableText
            text={"Locations"}
            family={"medium"}
            size={14}
            color={COLORS.gray}
          ></ReusableText>

          <HeightSpacer height={8}></HeightSpacer>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Rating rating={item.rating}></Rating>

            <WidthSpacer width={10}></WidthSpacer>
            <ReusableText
              text={`(${item.review})`}
              family={"medium"}
              size={14}
              color={COLORS.gray}
            ></ReusableText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
});

export default ReusableTile;
