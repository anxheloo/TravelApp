import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ReusableText from "../../Reusable/ReusableText";
import { COLORS, TEXT, SIZES } from "../../../constants/theme";
import NetworkImage from "../../Reusable/NetworkImage";
import HeightSpacer from "../../Reusable/HeightSpacer";
import { useNavigation } from "@react-navigation/native";

const CountryTile = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("CountryDetails", item);
      }}
    >
      <View>
        <NetworkImage
          source={item.imageUrl}
          width={85}
          height={85}
          radius={12}
        ></NetworkImage>

        <HeightSpacer height={5}></HeightSpacer>

        <ReusableText
          text={item.country}
          family={"medium"}
          size={TEXT.medium}
          color={COLORS.black}
          align={"center"}
        ></ReusableText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CountryTile;
