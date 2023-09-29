import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../constants/theme";
import NetworkImage from "../../Reusable/NetworkImage";
import WidthSpacer from "../../Reusable/WidthSpacer";
import ReusableText from "../../Reusable/ReusableText";
import Rating from "../../Reusable/Rating";
import DescriptionText from "../../Reusable/DescriptionText";

const ReviewTile = ({ review }) => {
  return (
    <View style={styles.reviewBorder}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <NetworkImage
            source={review.user.profile}
            width={54}
            height={54}
            radius={10}
          ></NetworkImage>

          <WidthSpacer width={20}></WidthSpacer>

          <View style={{ width: "80%" }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <ReusableText
                text={review.user.username}
                family={"medium"}
                size={SIZES.small + 2}
                color={COLORS.black}
              ></ReusableText>

              <WidthSpacer width={"20%"}></WidthSpacer>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Rating rating={review.rating}></Rating>

                <WidthSpacer width={10}></WidthSpacer>

                <ReusableText
                  text={review.updatedAt}
                  family={"medium"}
                  size={SIZES.small + 2}
                  color={COLORS.black}
                ></ReusableText>
              </View>
            </View>

            <DescriptionText text={review.review} lines={1}></DescriptionText>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewBorder: {
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    borderColor: COLORS.lightGrey,
  },
});

export default ReviewTile;
