import axios from "axios";
import React, { useState, useEffect } from "react";

const fetchCountryById = (id) => {
  const [countryById, setCountryById] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://192.168.1.236:4001/api/country/${id}`
      );
      setCountryById(response.data.country);
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

  return { countryById, isLoading, error, refetch };
};

export default fetchCountryById;
