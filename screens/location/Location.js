import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";

const Location = () => {
  let coordinates = {
    latitude: 35.6855,
    longitude: 139.68884,
    latitudeDelta: 0.01,
    latitudeDelta: 0.01,
    title: "My Location",
  };

  return (
    <MapView style={styles.maps} region={coordinates} showsUserLocation={true}>
      <Marker
        coordinate={coordinates}
        title={coordinates.title}
        pinColor={"red"}
      ></Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  maps: {
    //Same as Above
    ...StyleSheet.absoluteFillObject,

    //WAY 1
    //     position: 'absolute',
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0

    //WAY 2
    // width: "100%",
    // flex: 1,
  },
});

export default Location;
