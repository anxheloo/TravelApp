import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Signin from "../screens/authentication/Signin";
import Registration from "../screens/authentication/Registration";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { COLORS } from "../constants/theme";
import HeightSpacer from "../components/Reusable/HeightSpacer";
import AssetImage from "../components/Reusable/AssetImage";

const Tab = createMaterialTopTabNavigator();

const AuthTopTab = () => {
  const [signinBtn, setSigninBtn] = useState(true);
  const [registrationBtn, setRegistrationBtn] = useState(false);

  const signin = () => {
    setSigninBtn(true);
    setRegistrationBtn(false);
  };

  const registration = () => {
    setSigninBtn(false);
    setRegistrationBtn(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
        <HeightSpacer height={60}></HeightSpacer>

        <AssetImage
          mode={"cover"}
          width={"100%"}
          height={250}
          data={require("../assets/images/bg1.png")}
        ></AssetImage>

        <View style={{ flex: 1 }}>
          <Tab.Navigator>
            <Tab.Screen name="Signin" component={Signin} />
            <Tab.Screen name="Registration" component={Registration} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  name: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.blue,
  },
});

export default AuthTopTab;
