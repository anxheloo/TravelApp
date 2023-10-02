import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileTile from "../../components/Reusable/ProfileTile";

const TopInfo = ({ navigation }) => {
  return (
    <View style={{ margin: 20 }}>
      <ProfileTile
        icon={"user"}
        title={"Personal Information"}
        onPress={() => {}}
      ></ProfileTile>

      <ProfileTile
        icon={"creditcard"}
        title={"Payments"}
        onPress={() => {
          navigation.navigate("Payments");
        }}
      ></ProfileTile>

      <ProfileTile
        icon={"setting"}
        title={"Settings"}
        onPress={() => {
          navigation.navigate("Settings");
        }}
      ></ProfileTile>
    </View>
  );
};

const styles = StyleSheet.create({});
export default TopInfo;
