import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import ReusableTile from "../../components/Reusable/ReusableTile";
import { useNavigation } from "@react-navigation/native";
import fetchPlacesByCountryId from "../../hook/fetchPlacesByCountryId";

const PopularDestinations = ({ route }) => {
  const navigation = useNavigation();

  const id = route.params;

  const { placesByCountryId, isLoading, error, refetch } =
    fetchPlacesByCountryId(id, "all");

  if (isLoading) {
    return (
      <View
        style={{
          width: SIZES.width,
          height: SIZES.height,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator
          size={SIZES.xxLarge}
          color={COLORS.lightBlue}
        ></ActivityIndicator>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <AppBar
          top={10}
          right={0}
          left={0}
          title={"Popular Destinations"}
          color={COLORS.white}
          color1={COLORS.white}
          icon={"search1"}
          onPress={() => {
            navigation.goBack();
          }}
          onPress1={() => {
            navigation.navigate("Search");
          }}
        ></AppBar>
      </View>

      <View style={{ paddingTop: 20 }}>
        <FlatList
          data={placesByCountryId}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ gap: 10, flexGrow: 1, paddingBottom: 200 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ReusableTile
              item={item}
              onPress={() => {
                navigation.navigate("PlaceDetails", item);
              }}
            ></ReusableTile>
          )}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default PopularDestinations;
