import axios from "axios";
import React, { useState, useEffect } from "react";

const fetchHotelById = (id) => {
  const [hotel, setHotel] = useState();
  // const [coordinates, setCoordinates] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://192.168.1.236:4001/api/hotel/${id}`
      );
      const fetchedHotel = response.data.hotel;

      // const coordinates = {
      //   id: fetchedHotel._id,
      //   title: fetchedHotel.title,
      //   latitude: fetchedHotel.coordinates.latitude,
      //   longitude: fetchedHotel.coordinates.longitude,
      //   latitudeDelta: 0.01,
      //   longitudeDelta: 0.01,
      // };
      console.log("THIS ISFETCHED:", fetchedHotel);
      setHotel(fetchedHotel);
      // setCoordinates(coordinates);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const refetch = async () => {
    setIsLoading(true);
    fetchData();
  };

  // coordinates,

  return { hotel, isLoading, error, refetch };
};

export default fetchHotelById;
