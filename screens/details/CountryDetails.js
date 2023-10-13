import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NetworkImage from "../../components/Reusable/NetworkImage";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import AppBar from "../../components/Reusable/AppBar";
import { useNavigation } from "@react-navigation/native";
import ReusableText from "../../components/Reusable/ReusableText";
import DescriptionText from "../../components/Reusable/DescriptionText";
import { Feather } from "@expo/vector-icons";
import ReusableBtn from "../../components/Buttons/ReusableBtn";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import PopularList from "../../components/Country/PopularList";
import fetchCountryById from "../../hook/fetchCountryById";

const CountryDetails = ({ route, navigation }) => {
  const id = route.params;
  console.log("THis is ID:", id);

  const { countryById, isLoading, error, refetch } = fetchCountryById(id);

  // const country = {
  //   _id: "64c62bfc65af9f8c969a8d04",
  //   country: "USA",
  //   description:
  //     "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
  //   imageUrl:
  //     "https://d326fntlu7tb1e.cloudfront.net/uploads/1bcdbbd0-d702-475d-92ea-d9171c041674-vinci_01_places_new_york.jpg",
  //   popular: [
  //     {
  //       _id: "64c631650298a05640539adc",
  //       title: "Walt Disney World",
  //       imageUrl:
  //         "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
  //       rating: 4.7,
  //       review: "1204 Reviews",
  //       location: "Orlando, USA",
  //     },
  //     {
  //       _id: "64d062a3de20d7c932f1f70a",
  //       title: "Statue of Liberty",
  //       imageUrl:
  //         "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
  //       rating: 4.8,
  //       review: "1452 Reviews",
  //       location: "Liberty Island, New York Harbor",
  //     },
  //   ],
  //   region: "North America, USA",
  // };

  // if (isLoading) {
  //   return (
  //     <View style={{ width: SIZES.width, height: SIZES.height }}>
  //       <ActivityIndicator
  //         size={SIZES.xxLarge}
  //         color={COLORS.lightBlue}
  //       ></ActivityIndicator>
  //     </View>
  //   );
  // }

  if (isLoading) {
    return (
      <View
        style={{
          width: SIZES.width,
          height: SIZES.height,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator
          size={SIZES.xxLarge}
          color={COLORS.lightBlue}
        ></ActivityIndicator>
      </View>
    );
  }

  return (
    <ScrollView>
      <View>
        <NetworkImage
          source={countryById.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
        ></NetworkImage>

        <AppBar
          title={countryById.country}
          top={40}
          left={20}
          right={20}
          color={COLORS.white}
          color1={COLORS.white}
          icon={"search1"}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        ></AppBar>
      </View>

      <HeightSpacer height={10}></HeightSpacer>

      <View style={styles.description}>
        <ReusableText
          text={countryById.region}
          family={"medium"}
          size={TEXT.xLarge}
          color={COLORS.black}
          align={"center"}
        ></ReusableText>

        <HeightSpacer height={10}></HeightSpacer>

        <DescriptionText
          lines={6}
          text={countryById.description}
        ></DescriptionText>

        <View style={{ alignContent: "center" }}>
          <HeightSpacer height={30}></HeightSpacer>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ReusableText
              text={"Popular Destinations"}
              family={"medium"}
              size={TEXT.large}
              color={COLORS.black}
              // align={"center"}
            ></ReusableText>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PopularDestinations", countryById._id);
              }}
            >
              <Feather name="list" size={20}></Feather>
            </TouchableOpacity>
          </View>

          <HeightSpacer height={30}></HeightSpacer>

          <PopularList data={countryById._id}></PopularList>

          <HeightSpacer height={10}></HeightSpacer>

          <ReusableBtn
            onPress={() => {
              navigation.navigate("HotelSearch", countryById);
            }}
            btnText={"Find Best Hotels"}
            textColor={COLORS.white}
            width={SIZES.width - 40}
            backgroundColor={COLORS.green}
            borderWidth={0}
            borderColor={COLORS.green}
          ></ReusableBtn>
        </View>

        <HeightSpacer height={30}></HeightSpacer>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F8",
  },

  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});

export default CountryDetails;
