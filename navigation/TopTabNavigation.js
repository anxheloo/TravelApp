import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TopBookings from "../screens/top/TopBookings";
import TopInfo from "../screens/top/TopInfo";
import TopTrips from "../screens/top/TopTrips";
import { COLORS, TEXT, SIZES } from "../constants/theme";
import NetworkImage from "../components/Reusable/NetworkImage";
import HeightSpacer from "../components/Reusable/HeightSpacer";
import AppBar from "../components/Reusable/AppBar";
import ReusableText from "../components/Reusable/ReusableText";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <NetworkImage
            source={
              "https://d326fntlu7tb1e.cloudfront.net/uploads/c87b6dfb-ee4b-47fa-9c02-6ccca2893a6f-vinci_06.jpg"
            }
            width={"100%"}
            height={300}
            radius={0}
          ></NetworkImage>
        </View>

        <AppBar
          title={""}
          color={COLORS.white}
          color1={COLORS.white}
          icon={"logout"}
          onPress={() => {
            navigation.goBack();
          }}
          onPress1={() => {}}
          top={40}
          left={20}
          right={20}
        ></AppBar>

        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={{
              uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/c87b6dfb-ee4b-47fa-9c02-6ccca2893a6f-vinci_06.jpg",
            }}
          ></Image>

          <HeightSpacer height={7}></HeightSpacer>

          <View style={styles.name}>
            <ReusableText
              text={"King Andre"}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.black}
            ></ReusableText>
          </View>

          <HeightSpacer height={7}></HeightSpacer>

          <View style={styles.name}>
            <ReusableText
              text={"andrea@gmail.com"}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.black}
            ></ReusableText>
          </View>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBookings} />
        <Tab.Screen name="Trips" component={TopTrips} />
        <Tab.Screen name="Info" component={TopInfo} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    position: "absolute",
    right: 0,
    left: 0,
    top: 110,
    alignItems: "center",
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 50,
    borderColor: COLORS.lightWhite,
    borderWidth: 2,
  },

  name: {
    paddingHorizontal: 15,
    padding: 2,
    borderRadius: 20,
    backgroundColor: COLORS.lightGrey,
  },
});

export default TopTabNavigation;
