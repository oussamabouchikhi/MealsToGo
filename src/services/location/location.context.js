import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTranform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [Location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = async (searchTerm) => {
    setIsLoading(true);
    setKeyword(searchTerm);
  };

  useEffect(() => {
    const getLocation = async () => {
      try {
        const rawLocationsData = await locationRequest(keyword.toLowerCase());
        const locationResult = locationTranform(rawLocationsData);
        setLocation(locationResult);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getLocation();
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        Location,
        isLoading,
        error,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
