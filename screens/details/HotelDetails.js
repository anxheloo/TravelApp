import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HotelDetails = ({ route }) => {
  const id = route.params;

  return (
    <View>
      <Text>HotelDetails + {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HotelDetails;
