import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const PlaceDetails = ({ route }) => {
  const id = route.params;

  return (
    <SafeAreaView>
      <Text>PlaceDetails + {id}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default PlaceDetails;
