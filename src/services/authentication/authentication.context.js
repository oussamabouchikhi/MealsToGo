import React, { useState, createContext } from "react";
import firebase from "firebase/compat/app";
import {
  loginRequest,
  logoutRequest,
  registerRequest,
} from "./authentication.service";

export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = async (email, password) => {
    try {
      setIsLoading(true);
      const foundUser = await loginRequest(email, password);
      setUser(foundUser);
    } catch (err) {
      setError(err.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const onRegister = async (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return setError("Error: Passwords do not match");
    }
    try {
      setIsLoading(true);
      const newUser = await registerRequest(email, password, confirmPassword);
      setUser(newUser);
    } catch (err) {
      setError(err.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const onLogout = () => {
    logoutRequest().then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
