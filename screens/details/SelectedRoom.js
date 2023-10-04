import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import ReusableText from "../../components/Reusable/ReusableText";
import NetworkImage from "../../components/Reusable/NetworkImage";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import Rating from "../../components/Reusable/Rating";
import WidthSpacer from "../../components/Reusable/WidthSpacer";
import Counter from "../../components/Reusable/Counter";
import ReusableBtn from "../../components/Buttons/ReusableBtn";
import AssetImage from "../../components/Reusable/AssetImage";

const SelectedRoom = ({ route, navigation }) => {
  const item = route.params;
  console.log(item);

  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          title={item.title}
          top={50}
          left={20}
          right={20}
          color={COLORS.white}
          // color1={COLORS.white}
          // icon={"search1"}
          onPress={() => navigation.goBack()}
          // onPress1={() => {}}
        ></AppBar>
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <View
          style={{
            backgroundColor: COLORS.lightWhite,
            borderRadius: 16,
          }}
        >
          <NetworkImage
            source={item.imageUrl}
            width={"100%"}
            height={200}
            radius={16}
          ></NetworkImage>

          <HeightSpacer height={20}></HeightSpacer>

          <View style={{ marginHorizontal: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <ReusableText
                text={item.title}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              ></ReusableText>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  // backgroundColor: "red",
                  // flex: 1,
                }}
              >
                <Rating rating={item.rating}></Rating>
                <WidthSpacer width={12}></WidthSpacer>
                <ReusableText
                  text={`(${item.review})`}
                  family={"regular"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                ></ReusableText>
              </View>
            </View>

            <HeightSpacer height={10}></HeightSpacer>

            <ReusableText
              text={item.location}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.gray}
            ></ReusableText>

            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.lightGrey,
                marginVertical: 15,
              }}
            ></View>

            <ReusableText
              text={"Room Requirements"}
              family={"regular"}
              size={SIZES.medium}
              color={COLORS.black}
            ></ReusableText>

            <HeightSpacer height={30}></HeightSpacer>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <ReusableText
                text={"Price per night"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              ></ReusableText>

              <ReusableText
                text={"$400"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              ></ReusableText>
            </View>

            <HeightSpacer height={10}></HeightSpacer>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <ReusableText
                text={"Payment Method"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              ></ReusableText>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <AssetImage
                  mode={"contain"}
                  width={30}
                  height={20}
                  data={require("../../assets/images/Visa.png")}
                ></AssetImage>

                <ReusableText
                  text={"Visa"}
                  family={"regular"}
                  size={SIZES.medium}
                  color={COLORS.black}
                ></ReusableText>
              </View>
            </View>

            <HeightSpacer height={30}></HeightSpacer>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <ReusableText
                text={"4 Guests"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              ></ReusableText>

              <Counter></Counter>
            </View>

            <HeightSpacer height={30}></HeightSpacer>

            <View style={{ alignItems: "center" }}>
              <ReusableBtn
                onPress={() => {
                  navigation.navigate("Successful", item);
                }}
                btnText={"Select Room"}
                textColor={COLORS.white}
                width={SIZES.width - 70}
                backgroundColor={COLORS.green}
                borderWidth={1}
                borderColor={COLORS.green}
              ></ReusableBtn>
            </View>

            <HeightSpacer height={30}></HeightSpacer>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});

export default SelectedRoom;
