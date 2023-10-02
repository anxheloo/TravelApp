import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import AppBar from "../../components/Reusable/AppBar";
import ReusableText from "../../components/Reusable/ReusableText";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import SettingsTile from "../../components/Tiles/Settings/SettingsTile";

const Settings = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
      <View style={{ height: 120 }}>
        <AppBar
          title={"Settings"}
          color={COLORS.white}
          color1={COLORS.white}
          // icon={}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("Search")}
          top={40}
          left={20}
          right={20}
        ></AppBar>
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <ReusableText
          text={"Account Settings"}
          family={"regular"}
          size={SIZES.xLarge}
          color={COLORS.black}
        ></ReusableText>

        <HeightSpacer height={10}></HeightSpacer>

        <SettingsTile
          onPress={() => {}}
          title={"Language"}
          title1={"adsfasdf"}
        ></SettingsTile>

        <HeightSpacer height={3}></HeightSpacer>

        <SettingsTile
          onPress={() => {}}
          title={"Country"}
          title1={"USA"}
        ></SettingsTile>

        <HeightSpacer height={3}></HeightSpacer>

        <SettingsTile
          onPress={() => {}}
          title={"Currency"}
          title1={"USD"}
        ></SettingsTile>

        <HeightSpacer height={40}></HeightSpacer>

        <ReusableText
          text={"Support"}
          family={"regular"}
          size={SIZES.xLarge}
          color={COLORS.black}
        ></ReusableText>

        <HeightSpacer height={10}></HeightSpacer>

        <SettingsTile
          onPress={() => {}}
          title={"Get Help"}
          title1={""}
        ></SettingsTile>

        <HeightSpacer height={3}></HeightSpacer>

        <SettingsTile
          onPress={() => {}}
          title={"Give a Feedbacl"}
          title1={""}
        ></SettingsTile>

        <HeightSpacer height={40}></HeightSpacer>

        <ReusableText
          text={"Legal"}
          family={"regular"}
          size={SIZES.xLarge}
          color={COLORS.black}
        ></ReusableText>
        <HeightSpacer height={10}></HeightSpacer>

        <SettingsTile
          onPress={() => {}}
          title={"Terms of Service"}
          title1={""}
        ></SettingsTile>

        <HeightSpacer height={3}></HeightSpacer>

        <SettingsTile
          onPress={() => {}}
          title={"Privacy Policy"}
          title1={""}
        ></SettingsTile>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Settings;
