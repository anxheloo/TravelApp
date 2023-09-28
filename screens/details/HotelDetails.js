import { StyleSheet, Text, View } from "react-native";
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

const HotelDetails = ({ navigation, route }) => {
  // const item = route.params;

  const hotel = {
    availability: {
      start: "2023-08-20T00:00:00.000Z",
      end: "2023-08-25T00:00:00.000Z",
    },
    _id: "64c675793cfa5e847bcd5436",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Urban Chic Boutique Hotel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
    contact: "64c5d95adc7efae2a45ec376",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
    rating: 4.8,
    review: "2312 Reviews",
    location: "San Francisco, CA",
    latitude: 37.7749,
    longitude: -122.4194,
    price: 400,
    facilities: [
      {
        wifi: true,
        _id: "64c675793cfa5e847bcd5437",
      },
    ],
    __v: 0,
  };

  let coordinates = {
    id: hotel._id,
    title: hotel.title,
    latitude: hotel.latitude,
    longitude: hotel.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          title={hotel.title}
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
              source={hotel.imageUrl}
              width={"100%"}
              height={220}
              radius={25}
            ></NetworkImage>
          </View>

          <View style={styles.titleContainer}>
            <View style={styles.titleColumn}>
              <ReusableText
                text={hotel.title}
                family={"medium"}
                size={SIZES.xLarge}
                color={COLORS.black}
                align={"center"}
              ></ReusableText>

              <HeightSpacer height={10}></HeightSpacer>

              <ReusableText
                text={hotel.location}
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
                  stars={hotel.rating}
                  maxStars={5}
                  size={25}
                  bordered={false}
                  color={"#FD9942"}
                ></Rating>

                <ReusableText
                  text={`(${hotel.review})`}
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

          <DescriptionText lines={6} text={hotel.description}></DescriptionText>

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
            text={hotel.location}
            family={"regular"}
            size={SIZES.small + 2}
            color={COLORS.black}
            // align={"center"}
          ></ReusableText>

          <HotelMap coordinates={coordinates}></HotelMap>
        </View>
      </View>
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
    height: 120,
    position: "absolute",
    top: 170,
    left: 0,
    right: 0,
    borderRadius: 20,
  },

  titleColumn: {
    padding: 15,
  },
});

export default HotelDetails;
