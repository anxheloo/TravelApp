import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HotelSearch = ({ route }) => {
  const item = route.params;
  // console.log(item);

  return (
    <SafeAreaView>
      <Text>HotelSearch</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HotelSearch;
