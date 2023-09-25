import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CountryDetails = ({ navigation, route }) => {
  const item = route.params;

  return (
    <View>
      <Text>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CountryDetails;
