import React, { createContext, useContext, useState } from "react";

type SelectedCurrencyContextType = {
  handleSelectedCurrencyDropdown1Value: (value: string) => void;
  handleSelectedCurrencyDropdown2Value: (value: string) => void;
  handleCurrencyNumberInputValue: (value: string) => void;
  currencyNumberInput: string;
  selectedCurrencyDropdown1: string;
  selectedCurrencyDropdown2: string;
};

const SelectedCurrencyContext = createContext<SelectedCurrencyContextType>({
  currencyNumberInput: "",
  handleSelectedCurrencyDropdown1Value: () => {},
  handleSelectedCurrencyDropdown2Value: () => {},
  handleCurrencyNumberInputValue: () => {},
  selectedCurrencyDropdown1: "",
  selectedCurrencyDropdown2: "",
});

export const useSelectedCurrencyContext = (): SelectedCurrencyContextType => {
  return useContext(SelectedCurrencyContext);
};

export const SelectedCurrencyProvider: React.FC = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [currencyNumberInput, setCurrencyNumberInput] = useState<string>("");
  const [selectedCurrencyDropdown1, setSelectedCurrencyDropdown1] =
    useState<string>("");
  const [selectedCurrencyDropdown2, setSelectedCurrencyDropdown2] =
    useState<string>("");

  const handleSelectedCurrencyDropdown1Value = (value: string) => {
    setSelectedCurrencyDropdown1(value);
  };
  const handleSelectedCurrencyDropdown2Value = (value: string) => {
    setSelectedCurrencyDropdown2(value);
  };
  const handleCurrencyNumberInputValue = (value: string) => {
    setCurrencyNumberInput(value);
  };

  const values: SelectedCurrencyContextType = {
    currencyNumberInput,
    handleCurrencyNumberInputValue,
    selectedCurrencyDropdown1,
    selectedCurrencyDropdown2,
    handleSelectedCurrencyDropdown1Value,
    handleSelectedCurrencyDropdown2Value,
  };

  return (
    <SelectedCurrencyContext.Provider value={values}>
      {children}
    </SelectedCurrencyContext.Provider>
  );
};
