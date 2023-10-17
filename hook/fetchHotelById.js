import axios from "axios";
import React, { useState, useEffect } from "react";

const fetchHotelById = (id) => {
  const [hotel, setHotel] = useState();
  const [coordinates, setCoordinates] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://192.168.1.236:4001/api/hotel/${id}`
      );
      setHotel(response.data.hotel);

      const hotelCoordinates = response.data.hotel.coordinates;
      const coordinate = {
        id: response.data.hotel._id,
        title: response.data.hotel.title,
        latitude: hotelCoordinates.latitude,
        longitude: hotelCoordinates.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

      setCoordinates(coordinate);

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

  return { hotel, isLoading, error, refetch, coordinates };
};

export default fetchHotelById;
