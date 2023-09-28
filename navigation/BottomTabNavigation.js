import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import Location from "../screens/location/Location";
import Chat from "../screens/chat/Chat";
import Profile from "../screens/profile/Profile";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  paddingTop: 20,
  paddingBottom: 20,
  // flexDirection: "row",
  // justifyContent: "center",
  // alignContent: "center",
  // alignItems: "center",
  borderRadius: 20,
  height: 80,
  position: "absolute",
  bottom: 40,
  left: 20,
  right: 20,
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      // screenOptions={{
      //   tabBarStyle: { tabBarStyle },
      // }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            // <View
            //   style={{
            //     alignItems: "center",
            //     justifyContent: "center",
            //     // flex: 1,
            //   }}
            // >
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              color={focused ? COLORS.red : COLORS.gray}
              size={26}
            ></Ionicons>
            // </View>
          ),
        }}
      />

      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "location" : "location-outline"}
              color={focused ? COLORS.red : COLORS.gray}
              size={26}
            ></Ionicons>
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={
                focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"
              }
              color={focused ? COLORS.red : COLORS.gray}
              size={26}
            ></Ionicons>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={focused ? COLORS.red : COLORS.gray}
              size={26}
            ></Ionicons>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
