import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

const HotelMap = ({ coordinates }) => {
  markerCoordinates = {
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
    latitudeDelta: coordinates.latitudeDelta,
    latitudeDelta: coordinates.longitudeDelta,
  };

  return (
    <TouchableOpacity onPress={() => {}}>
      <MapView style={styles.maps} region={markerCoordinates}>
        <Marker
          coordinate={markerCoordinates}
          title={coordinates.title}
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
