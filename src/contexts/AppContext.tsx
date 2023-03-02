import React, { useContext, createContext, FC } from "react";

interface AppContextType {
  // define the properties and methods here
}

const AppContext = createContext<AppContextType | null>(null);

const AppProvider: FC = ({ children }: any) => {
  // define state and functions here

  const value = {
    // add state and functions to value object
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within AppProvider");
  }
  return context;
};

export { AppContext, AppProvider };
