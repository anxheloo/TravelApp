import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import ReusableText from "../../Reusable/ReusableText";
import { COLORS, TEXT, SIZES } from "../../../constants/theme";
import NetworkImage from "../../Reusable/NetworkImage";
import HeightSpacer from "../../Reusable/HeightSpacer";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import fetchCountryById from "../../../hook/fetchCountryById";

const CountryTile = ({ item }) => {
  const navigation = useNavigation();

  // const [countryById, setCountryById] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await axios.get(
  //         `http://192.168.1.236:4001/api/country/:${item._id}`
  //       );
  //       setCountryById(response.data.country);
  //       setIsLoading(false);
  //       console.log("THIS IS COUNTRY BY ID:", countryById);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };
  // }, []);

  const { countryById, isLoading, error, refetch } = fetchCountryById(item._id);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("CountryDetails", item._id);
      }}

      // {
      //     countryById,
      //     isLoading,
      //     error,
      //     navigation,
      //   }
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
