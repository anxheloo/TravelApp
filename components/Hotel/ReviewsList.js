import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import ReviewTile from "../Tiles/Reviews/ReviewTile";

const ReviewsList = ({ reviews }) => {
  return (
    <FlatList
      data={reviews}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <ReviewTile review={item}></ReviewTile>}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
    ></FlatList>
  );
};

export default ReviewsList;

const styles = StyleSheet.create({});
