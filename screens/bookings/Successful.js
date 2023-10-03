import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AssetImage from "../../components/Reusable/AssetImage";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import ReusableText from "../../components/Reusable/ReusableText";
import ReusableTile from "../../components/Reusable/ReusableTile";
import { ScrollView } from "react-native";
import ReusableBtn from "../../components/Buttons/ReusableBtn";

const Successful = ({ navigation }) => {
  const hotel = {
    _id: "64c674d23cfa5e847bcd5430",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Seaside Resort",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
    rating: 4.9,
    review: "1204 Reviews",
    location: "Miami Beach, FL",
  };

  return (
    <ScrollView>
      <View style={{ marginTop: "40%", alignItems: "center" }}>
        <AssetImage
          data={require("../../assets/images/checked.png")}
          width={"100%"}
          height={200}
          mode={"contain"}
        ></AssetImage>

        <HeightSpacer height={40}></HeightSpacer>

        <View style={{ alignItems: "center" }}>
          <ReusableText
            text={"Booking Successful"}
            family={"medium"}
            size={TEXT.xLarge}
            color={COLORS.black}
            align={"center"}
          ></ReusableText>

          <HeightSpacer height={20}></HeightSpacer>

          <ReusableText
            text={"You can find your booking details below"}
            family={"regular"}
            size={SIZES.medium}
            color={COLORS.gray}
            // align={"center"}
          ></ReusableText>

          <HeightSpacer height={20}></HeightSpacer>
        </View>
      </View>

      <View style={{ margin: 20 }}>
        <ReusableText
          text={"Room Details"}
          family={"bold"}
          size={SIZES.medium}
          color={COLORS.dark}
          // align={"center"}
        ></ReusableText>

        <HeightSpacer height={20}></HeightSpacer>

        <ReusableTile item={hotel}></ReusableTile>

        <HeightSpacer height={40}></HeightSpacer>

        <ReusableBtn
          onPress={() => {
            navigation.navigate("BottomTabNavigation");
          }}
          btnText={"Done"}
          textColor={COLORS.white}
          width={SIZES.width - 50}
          backgroundColor={COLORS.green}
          borderWidth={1}
          borderColor={COLORS.green}
        ></ReusableBtn>
      </View>

      <HeightSpacer height={150}></HeightSpacer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default Successful;
