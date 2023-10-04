import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import ReusableText from "./ReusableText";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter < 4) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={increment} style={{ paddingHorizontal: 10 }}>
        <AntDesign name="pluscircleo" size={24} color="gray" />
      </TouchableOpacity>
      <ReusableText
        text={` ${counter} `}
        family={"regular"}
        size={SIZES.medium}
        color={COLORS.black}
      ></ReusableText>

      {/* <Text style={{ fontSize: 18, paddingHorizontal: 2 }}>{counter}</Text> */}

      <TouchableOpacity onPress={decrement} style={{ paddingHorizontal: 10 }}>
        <AntDesign name="minuscircleo" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Counter;
