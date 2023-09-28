import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NetworkImage from "../../components/Reusable/NetworkImage";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import AppBar from "../../components/Reusable/AppBar";
import { useNavigation } from "@react-navigation/native";
import ReusableText from "../../components/Reusable/ReusableText";
import DescriptionText from "../../components/Reusable/DescriptionText";
import { Feather } from "@expo/vector-icons";
import ReusableBtn from "../../components/Buttons/ReusableBtn";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import PopularList from "../../components/Country/PopularList";

const PlaceDetails = ({ navigation, route }) => {
  const item = route.params;

  const place = {
    _id: "64d062a3de20d7c932f1f70a",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Statue of Liberty",
    description:
      "The Statue of Liberty is an iconic symbol of freedom and democracy, located on Liberty Island in New York Harbor. This colossal statue was a gift from France to the United States and was dedicated in 1886. Standing at 305 feet tall, the statue represents Libertas, the Roman goddess of liberty, holding a torch and a tablet inscribed with the date of the American Declaration of Independence. The Statue of Liberty has welcomed countless immigrants to the USA, serving as a symbol of hope and opportunity.",
    contact_id: "64c5d95adc7efae2a45ec376",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
    rating: 4.8,
    review: "1452 Reviews",
    latitude: 40.689247,
    longitude: -74.044502,
    location: "Liberty Island, New York Harbor",
    popular: [
      {
        _id: "64c675be3cfa5e847bcd5439",
        title: "Family-Friendly Resort",
        imageUrl:
          "https://d326fntlu7tb1e.cloudfront.net/uploads/3e6222dc-6b79-4031-914b-60c220782b72-ff.jpeg",
        rating: 4.6,
        review: "12854 Reviews",
        location: "Orlando, FL",
      },
      {
        _id: "64c675793cfa5e847bcd5436",
        title: "Urban Chic Boutique Hotel",
        imageUrl:
          "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
        rating: 4.8,
        review: "2312 Reviews",
        location: "San Francisco, CA",
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <NetworkImage
          source={place.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
        ></NetworkImage>

        <AppBar
          title={place.title}
          top={40}
          left={20}
          right={20}
          color={COLORS.white}
          color1={COLORS.white}
          icon={"search1"}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        ></AppBar>
      </View>

      <HeightSpacer height={10}></HeightSpacer>

      <View style={styles.description}>
        <ReusableText
          text={place.location}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
          align={"center"}
        ></ReusableText>

        <HeightSpacer height={10}></HeightSpacer>

        <DescriptionText lines={6} text={place.description}></DescriptionText>

        <View style={{ alignContent: "center" }}>
          <HeightSpacer height={30}></HeightSpacer>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ReusableText
              text={"Popular Hotels"}
              family={"medium"}
              size={TEXT.large}
              color={COLORS.black}
              // align={"center"}
            ></ReusableText>

            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20}></Feather>
            </TouchableOpacity>
          </View>

          <HeightSpacer height={30}></HeightSpacer>

          <PopularList data={place.popular}></PopularList>

          <HeightSpacer height={10}></HeightSpacer>

          <ReusableBtn
            onPress={() => {
              navigation.navigate("HotelSearch", item);
            }}
            btnText={"Find Best Hotels"}
            textColor={COLORS.white}
            width={SIZES.width - 40}
            backgroundColor={COLORS.green}
            borderWidth={0}
            borderColor={COLORS.green}
          ></ReusableBtn>
        </View>

        <HeightSpacer height={30}></HeightSpacer>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F8",
  },

  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});

export default PlaceDetails;
