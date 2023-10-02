import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES, COLORS, TEXT } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import ReusableTile from "../../components/Reusable/ReusableTile";
import HotelCard from "../../components/Tiles/Hotels/HotelCard";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import AppBar from "../../components/Reusable/AppBar";

const HotelSearch = ({ route, navigation }) => {
  const item = route.params;
  // console.log(item);

  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const hotels = [
    {
      _id: "64c674d23cfa5e847bcd5430",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Seaside Resort",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
      rating: 4.9,
      review: "1204 Reviews",
      location: "Miami Beach, FL",
    },
    {
      _id: "64c675183cfa5e847bcd5433",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Mountain Lodge",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
      rating: 4.5,
      review: "12024 Reviews",
      location: "Aspen, CO",
    },
    {
      _id: "64d0b5a4d3cb4985a76ac1aa",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Hotel Alpha",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/28266df3-1578-4d0d-8015-c5480f64a73d-hotel-alpha.jpeg",
      rating: 4.7,
      review: "1204 Reviews",
      location: "City Center, USA",
    },
    {
      _id: "64c675be3cfa5e847bcd5439",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Family-Friendly Resort",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/3e6222dc-6b79-4031-914b-60c220782b72-ff.jpeg",
      rating: 4.6,
      review: "12854 Reviews",
      location: "Orlando, FL",
    },
    {
      _id: "64c67442776ed29f19727fd7",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Luxury Hotel 1",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp",
      rating: 4.7,
      review: "1204 Reviews",
      location: "New York City, NY",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 50, alignItems: "center" }}>
        <AppBar
          title={"Find Best Hotels"}
          top={20}
          left={20}
          right={20}
          color={COLORS.white}
          color1={COLORS.white}
          icon={"filter"}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        ></AppBar>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            value={searchKey}
            onChangeText={(text) => setSearchKey(text)}
            placeholder={"Where do you want to stay"}
          ></TextInput>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.searchBtn}>
          <Feather name="search" size={24} color={COLORS.white}></Feather>
        </TouchableOpacity>
      </View>

      {hotels.length === 0 ? (
        <View>
          <HeightSpacer height={"20%"}></HeightSpacer>
          <Image
            source={require("../../assets/images/search.png")}
            style={styles.searchImage}
          ></Image>
        </View>
      ) : (
        <FlatList
          data={hotels}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <HotelCard
              item={item}
              onPress={() => {
                navigation.navigate("PlaceDetails", item);
              }}
              margin={10}
            ></HotelCard>
          )}
          // showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            gap: 10,
            marginLeft: 10,
          }}
          numColumns={2}
        ></FlatList>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: SIZES.small,
    borderColor: COLORS.blue,
    borderWidth: 1,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.small,
    height: 50,
  },

  input: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: 50,
  },

  searchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },

  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightBlue,
  },

  searchImage: {
    resizeMode: "contain",
    width: "100%",
    height: SIZES.height / 2,
    paddingHorizontal: 20,
  },
});

export default HotelSearch;
