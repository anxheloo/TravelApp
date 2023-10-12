import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ReusableText from "../../components/Reusable/ReusableText";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import Places from "../../components/Home/Places";
import Recommendations from "../../components/Home/Recommendations";
import BestHotels from "../../components/Home/BestHotels";

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.rowWithSpace}>
            <ReusableText
              text={"Hey User!"}
              family={"regular"}
              size={TEXT.large}
              color={COLORS.black}
            ></ReusableText>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Search");
              }}
              style={styles.box}
            >
              <AntDesign name="search1" size={26}></AntDesign>
            </TouchableOpacity>
          </View>
          <HeightSpacer height={SIZES.xLarge}></HeightSpacer>
          <ReusableText
            text={"Places"}
            family={"medium"}
            size={TEXT.large}
            color={COLORS.black}
          ></ReusableText>
        </View>

        <Places></Places>

        <Recommendations></Recommendations>

        <HeightSpacer height={30}></HeightSpacer>

        <BestHotels></BestHotels>

        <HeightSpacer height={150}></HeightSpacer>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  rowWithSpace: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  box: {
    backgroundColor: COLORS.white,
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
