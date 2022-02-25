import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTranform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchTerm) => {
    setIsLoading(true);
    setKeyword(searchTerm);
  };

  useEffect(() => {
    const getLocation = async () => {
      try {
        if (!keyword.length) {
          return;
        }
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
        location,
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
