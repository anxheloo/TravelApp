import { FlatList } from "react-native";
import React from "react";
import Slides from "../../components/Onboard/Slides";

const OnBoarding = () => {
  const slides = [
    {
      id: 1,
      image: require("../../assets/images/1.png"),
      title: "Find the perfect place to stay",
    },

    {
      id: 2,
      image: require("../../assets/images/2.png"),
      title: "Discover the world",
    },

    {
      id: 3,
      image: require("../../assets/images/3.png"),
      title: "Find the best hotels in the world",
    },
  ];

  return (
    <FlatList
      data={slides}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Slides item={item}></Slides>}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
    ></FlatList>
  );
};

export default OnBoarding;
