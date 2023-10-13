import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ReusableText from "../Reusable/ReusableText";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import ReusableTile from "../Reusable/ReusableTile";
import fetchRecommendations from "../../hook/fetchRecommendations";

const Recommendations = () => {
  const navigation = useNavigation();

  const { recommendations, isLoading, error, refetch } =
    fetchRecommendations(4);

  if (isLoading) {
    return (
      <View style={{ flex: 1, paddingVertical: 50 }}>
        <ActivityIndicator
          size={SIZES.xxLarge}
          color={COLORS.lightBlue}
        ></ActivityIndicator>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 20,
        }}
      >
        <ReusableText
          text={"Recommendations"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        ></ReusableText>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Recommended");
          }}
        >
          <Feather name="list" size={20}></Feather>
        </TouchableOpacity>
      </View>

      <FlatList
        data={recommendations}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          columnGap: SIZES.medium,
        }}
        renderItem={({ item }) => (
          <ReusableTile
            item={item}
            onPress={() => {
              navigation.navigate("PlaceDetails", item._id);
            }}
          ></ReusableTile>
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});

export default Recommendations;
