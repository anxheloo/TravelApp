import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ReusableTile from "../Reusable/ReusableTile";
import { useNavigation } from "@react-navigation/native";

const PopularList = ({ data }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <ReusableTile
        item={item}
        onPress={() => {
          navigation.navigate("PlaceDetails", item._id);
        }}
      ></ReusableTile>
    </View>
  );

  return (
    <FlatList
      data={data}
      //we need to disable scroll on our FlatList cuz we have it inside a ScrollView. And 2 scrollable components dont work
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    ></FlatList>
  );
};

const styles = StyleSheet.create({});

export default PopularList;
