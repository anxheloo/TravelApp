import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { ActivityIndicator } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const HotelMap = ({ coordinates }) => {
  initial = {
    id: coordinates?.id,
    latitude: coordinates?.latitude,
    latitudeDelta: coordinates?.latitudeDelta,
    longitude: coordinates?.longitude,
    longitudeDelta: coordinates?.longitudeDelta,
    title: coordinates?.title,
  };

  if (!coordinates) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator
          size={SIZES.large}
          color={COLORS.lightBlue}
        ></ActivityIndicator>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={() => {}}>
      <MapView style={styles.maps} initialRegion={initial}>
        <Marker
          coordinate={coordinates}
          title={coordinates?.title}
          pinColor={"red"}
        ></Marker>
      </MapView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  maps: {
    marginVertical: 10,
    height: 120,
    width: "100%",
    borderRadius: 12,
  },
});

export default HotelMap;
