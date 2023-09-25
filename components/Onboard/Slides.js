import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, SHADOWS, TEXT } from "../../constants/theme";
import ReusableText from "../Reusable/ReusableText";
import ReusableBtn from "../Buttons/ReusableBtn";
import HeightSpacer from "../Reusable/HeightSpacer";
import { useNavigation } from "@react-navigation/native";

const Slides = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Image source={item.image} style={styles.image}></Image>

      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          family={"medium"}
          size={SIZES.xxLarge}
          color={COLORS.white}
        ></ReusableText>

        <HeightSpacer height={30}></HeightSpacer>

        <ReusableBtn
          onPress={() => {
            navigation.navigate("BottomTabNavigation");
          }}
          btnText={"Let's go"}
          textColor={COLORS.white}
          width={(SIZES.width - 50) / 2.2}
          backgroundColor={COLORS.red}
          borderWidth={0}
          borderColor={COLORS.red}
        ></ReusableBtn>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    width: SIZES.width,
    height: SIZES.height,
  },

  stack: {
    position: "absolute",
    bottom: 0,
    marginBottom: 60,
    marginHorizontal: 20,
  },
});

export default Slides;
