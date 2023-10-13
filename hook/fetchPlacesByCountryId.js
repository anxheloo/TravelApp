import axios from "axios";
import React, { useState, useEffect } from "react";

const fetchPlacesByCountryId = (countryId, limit) => {
  const [placesByCountryId, setPlacesByCountryId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://192.168.1.236:4001/api/place/byCountry/${countryId}?limit=${limit}`
      );
      setPlacesByCountryId(response.data.places);
      setIsLoading(false);
      // console.log("THIS IS COUNTRIES:", countryById);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = async () => {
    setIsLoading(true);
    fetchData();
  };

  return { placesByCountryId, isLoading, error, refetch };
};

export default fetchPlacesByCountryId;
