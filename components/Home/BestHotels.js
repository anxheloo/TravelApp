import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { COLORS, TEXT, SIZES } from "../../constants/theme";
import ReusableText from "../Reusable/ReusableText";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HotelCard from "../Tiles/Hotels/HotelCard";
import fetchBestHotels from "../../hook/fetchBestHotels";

const BestHotels = () => {
  const navigation = useNavigation();

  const { hotels, isLoading, error, refetch } = fetchBestHotels(4);

  if (isLoading) {
    return (
      <ActivityIndicator
        size={SIZES.xxLarge}
        color={COLORS.lightBlue}
      ></ActivityIndicator>
    );
  }

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 20,
        }}
      >
        <ReusableText
          text={"Best Hotels"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        ></ReusableText>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HotelList");
          }}
        >
          <Feather name="list" size={20}></Feather>
        </TouchableOpacity>
      </View>

      <FlatList
        data={hotels}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        renderItem={({ item }) => (
          <HotelCard
            item={item}
            margin={10}
            onPress={() => {
              navigation.navigate("HotelDetails", item._id);
            }}
          ></HotelCard>
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BestHotels;
