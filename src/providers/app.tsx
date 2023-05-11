import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/index";
import Layout from "../components/Layout/Layout";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.StrictMode>
      <Provider store={store}>{children}</Provider>
    </React.StrictMode>
  );
};
