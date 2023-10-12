import axios from "axios";
import React, { useState, useEffect } from "react";

const fetchBestHotels = (limitParams) => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://192.168.1.236:4001/api/hotel/byCountry/65252625c270b7bfeeb0b1f7?limit=${limitParams}`
      );

      // ?limit=${limitParams}
      setHotels(response.data.hotels);
      setIsLoading(false);
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

  return { hotels, isLoading, error, refetch };
};

export default fetchBestHotels;
