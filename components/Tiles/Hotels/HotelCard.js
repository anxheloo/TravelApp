import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import NetworkImage from "../../Reusable/NetworkImage";
import HeightSpacer from "../../Reusable/HeightSpacer";
import ReusableText from "../../Reusable/ReusableText";
import { COLORS, TEXT, SIZES } from "../../../constants/theme";
import Rating from "../../Reusable/Rating";

const HotelCard = ({ item, margin, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card(margin)}>
      <View>
        <View style={styles.imageContainer}>
          <NetworkImage
            source={item.imageUrl}
            width={"90%"}
            height={"100%"}
            radius={16}
          ></NetworkImage>
        </View>

        <HeightSpacer height={5}></HeightSpacer>

        <View style={{ padding: 10 }}>
          <ReusableText
            text={item.title}
            family={"medium"}
            size={TEXT.medium}
            color={COLORS.black}
          ></ReusableText>

          <HeightSpacer height={5}></HeightSpacer>

          <ReusableText
            text={item.location}
            family={"medium"}
            size={TEXT.medium}
            color={COLORS.gray}
          ></ReusableText>

          <HeightSpacer height={5}></HeightSpacer>

          <Rating rating={item.rating}></Rating>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: (margin) => ({
    width: SIZES.width / 2.2,
    height: 250,
    borderRadius: 16,
    backgroundColor: COLORS.lightWhite,
    marginRight: margin,
  }),

  imageContainer: {
    alignItems: "center",
    marginTop: 10,
    height: 150,
  },
});

export default HotelCard;
