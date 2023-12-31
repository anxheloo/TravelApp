import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as Splashscreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "./screens/onboarding/OnBoarding";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import Search from "./screens/search/Search";
import CountryDetails from "./screens/details/CountryDetails";
import Recommended from "./screens/details/Recommended";
import PlaceDetails from "./screens/details/PlaceDetails";
import HotelDetails from "./screens/details/HotelDetails";
import HotelList from "./screens/details/HotelList";
import HotelSearch from "./screens/search/HotelSearch";
import SelectRoom from "./screens/details/SelectRoom";
import TopTabNavigation from "./navigation/TopTabNavigation";
import Settings from "../travel_app/screens/Settings/Settings";
import Payments from "../travel_app/screens/profile/Payments";
import Failed from "../travel_app/screens/bookings/Failed";
import Successful from "../travel_app/screens/bookings/Successful";
import AuthTopTab from "./navigation/AuthTopTab";
import SelectedRoom from "./screens/details/SelectedRoom";
import PopularDestinations from "./screens/popular/PopularDestinations";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/regular.otf"),
    medium: require("./assets/fonts/medium.otf"),
    bold: require("./assets/fonts/bold.otf"),
    light: require("./assets/fonts/light.otf"),
    xtraBold: require("./assets/fonts/xtrabold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await Splashscreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CountryDetails"
          component={CountryDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recommended"
          component={Recommended}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlaceDetails"
          component={PlaceDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HotelDetails"
          component={HotelDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HotelList"
          component={HotelList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HotelSearch"
          component={HotelSearch}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectRoom"
          component={SelectRoom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TopTabNavigation"
          component={TopTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payments"
          component={Payments}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Failed"
          component={Failed}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Successful"
          component={Successful}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthTopTab"
          component={AuthTopTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectedRoom"
          component={SelectedRoom}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PopularDestinations"
          component={PopularDestinations}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
