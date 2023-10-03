import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AssetImage from "../../components/Reusable/AssetImage";

const SelectRoom = () => {
  return (
    <View>
      <AssetImage
        width={300}
        height={300}
        radius={0}
        mode={"contain"}
        data={require("../../assets/images/checked.png")}
      ></AssetImage>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SelectRoom;
