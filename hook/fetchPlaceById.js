import axios from "axios";
import React, { useState, useEffect } from "react";

const fetchPlaceById = (id) => {
  const [place, setPlace] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://192.168.1.236:4001/api/place/${id}`
      );
      setPlace(response.data.place);
      setIsLoading(false);
      console.log("THIS IS place:", place);
      console.log("THIS IS response.data.place:", response.data.place);
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

  return { place, isLoading, error, refetch };
};

export default fetchPlaceById;
