import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import NetworkImage from "../../components/Reusable/NetworkImage";
import ReusableText from "../../components/Reusable/ReusableText";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import { Rating } from "react-native-stock-star-rating";
import DescriptionText from "../../components/Reusable/DescriptionText";
import HotelMap from "../../components/Hotel/HotelMap";
import { Feather } from "@expo/vector-icons";
import ReviewsList from "../../components/Hotel/ReviewsList";
import WidthSpacer from "../../components/Reusable/WidthSpacer";
import ReusableBtn from "../../components/Buttons/ReusableBtn";
import fetchHotelById from "../../hook/fetchHotelById";
import { ActivityIndicator } from "react-native";

const HotelDetails = ({ navigation, route }) => {
  const id = route.params;
  console.log("THIS IS HOTEL ID:", id);

  const { hotel, isLoading, error, refetch } = fetchHotelById(id);

  // console.log("THIS IS TITLE:,", hotel.title);
  // console.log("THIS IS TITLE:,", hotel);

  if (isLoading) {
    return (
      <View
        style={{
          width: SIZES.width,
          height: SIZES.height,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator
          size={SIZES.xxLarge}
          color={COLORS.lightBlue}
        ></ActivityIndicator>
      </View>
    );
  }

  const coordinates = hotel
    ? {
        id: hotel._id,
        title: hotel.title,
        latitude: hotel.coordinates.latitude,
        longitude: hotel.coordinates.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    : {};

  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          title={hotel?.title}
          top={50}
          left={20}
          right={20}
          color={COLORS.white}
          color1={COLORS.white}
          icon={"search1"}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        ></AppBar>
      </View>

      <View style={{ height: SIZES.height }}>
        <View style={styles.container}>
          <View>
            <NetworkImage
              source={hotel?.imageUrl}
              width={"100%"}
              height={220}
              radius={25}
            ></NetworkImage>
          </View>

          <View style={styles.titleContainer}>
            <View style={styles.titleColumn}>
              <ReusableText
                text={hotel?.title}
                family={"medium"}
                size={SIZES.xLarge}
                color={COLORS.black}
                align={"center"}
              ></ReusableText>

              <HeightSpacer height={10}></HeightSpacer>

              <ReusableText
                text={hotel?.location}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
                align={"center"}
              ></ReusableText>

              <HeightSpacer height={15}></HeightSpacer>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Rating
                  stars={hotel?.rating}
                  maxStars={5}
                  size={25}
                  bordered={false}
                  color={"#FD9942"}
                ></Rating>

                <ReusableText
                  text={`(${hotel?.review})`}
                  family={"medium"}
                  size={SIZES.large}
                  color={COLORS.gray}
                  // align={"center"}
                ></ReusableText>
              </View>
            </View>
          </View>
        </View>

        <HeightSpacer height={70}></HeightSpacer>

        <View style={[{ paddingTop: 30 }, styles.container]}>
          <ReusableText
            text={"Description"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
            // align={"center"}
          ></ReusableText>

          <HeightSpacer height={10}></HeightSpacer>

          <DescriptionText
            lines={6}
            text={hotel?.description}
          ></DescriptionText>

          <HeightSpacer height={10}></HeightSpacer>

          <ReusableText
            text={"Location"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
            // align={"center"}
          ></ReusableText>

          <HeightSpacer height={10}></HeightSpacer>

          <ReusableText
            text={hotel?.location}
            family={"regular"}
            size={SIZES.small + 2}
            color={COLORS.black}
            // align={"center"}
          ></ReusableText>

          <HotelMap coordinates={coordinates}></HotelMap>

          <HeightSpacer height={30}></HeightSpacer>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ReusableText
              text={"Reviews"}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            ></ReusableText>

            <TouchableOpacity onPress={() => {}}>
              <Feather name={"list"} size={20}></Feather>
            </TouchableOpacity>
          </View>

          <HeightSpacer height={10}></HeightSpacer>

          <ReviewsList reviews={hotel?.reviews}></ReviewsList>
        </View>

        <HeightSpacer height={20}></HeightSpacer>

        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            },
            styles.bottom,
          ]}
        >
          <View>
            <ReusableText
              text={`$ ${hotel?.price}`}
              family={"regular"}
              size={SIZES.large}
              color={COLORS.black}
            ></ReusableText>

            <HeightSpacer height={5}></HeightSpacer>

            <ReusableText
              text={"Jan -1 - Dec 25"}
              family={"regular"}
              size={SIZES.medium}
              color={COLORS.black}
            ></ReusableText>
          </View>

          <ReusableBtn
            onPress={() => {
              navigation.navigate("SelectRoom");
            }}
            btnText={"Select Room"}
            textColor={COLORS.white}
            width={(SIZES.width - 50) / 2}
            backgroundColor={COLORS.green}
            borderWidth={0}
            borderColor={COLORS.green}
          ></ReusableBtn>
        </View>
      </View>

      <HeightSpacer height={500}></HeightSpacer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginHorizontal: 20,
  },

  titleContainer: {
    margin: 15,
    backgroundColor: COLORS.lightWhite,
    height: 125,
    position: "absolute",
    top: 170,
    left: 0,
    right: 0,
    borderRadius: 20,
  },

  titleColumn: {
    padding: 15,
  },

  bottom: {
    paddingHorizontal: 30,
    backgroundColor: COLORS.lightWhite,
    height: 90,
    paddingVertical: 20,
  },
});

export default HotelDetails;
