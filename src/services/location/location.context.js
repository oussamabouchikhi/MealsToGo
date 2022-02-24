import React, { useState, createContext, useEffect, useMemo } from "react";
import { locationRequest, lovationTranform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [Location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = async (searchTerm) => {
    try {
      setIsLoading(true);
      setKeyword(searchTerm);
      if (!searchTerm.length) {
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const result = await locationRequest(searchTerm.toLowerCase());

      setLocation(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

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
