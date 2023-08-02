import React, { FC, createContext, useContext, useState } from "react";

type SelectedCurrencyContextType = {
  handleselectedFromCurrencyValue: (value: string) => void;
  handleselectedToCurrencyValue: (value: string) => void;
  handleCurrencyNumberInputValue: (value: string) => void;
  currencyNumberInput: string;
  selectedFromCurrencyValue: string;
  selectedToCurrencyValue: string;
  selectedDateValue: Date | undefined;
  handleSelectedDateValue: (value: Date | undefined) => void;
};

const SelectedCurrencyContext = createContext<SelectedCurrencyContextType>({
  currencyNumberInput: "",
  handleselectedFromCurrencyValue: () => {},
  handleselectedToCurrencyValue: () => {},
  handleCurrencyNumberInputValue: () => {},
  selectedFromCurrencyValue: "",
  selectedToCurrencyValue: "",
  selectedDateValue: undefined,
  handleSelectedDateValue: () => {},
});

export const useSelectedCurrencyContext = (): SelectedCurrencyContextType => {
  return useContext(SelectedCurrencyContext);
};

export const SelectedCurrencyProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currencyNumberInput, setCurrencyNumberInput] = useState<string>("");
  const [selectedFromCurrencyValue, setselectedFromCurrencyValue] =
    useState<string>("");
  const [selectedToCurrencyValue, setselectedToCurrencyValue] =
    useState<string>("");
  const [selectedDateValue, setSelectedDateValue] = useState<Date | undefined>(
    undefined
  );

  const handleselectedFromCurrencyValue = (value: string) => {
    setselectedFromCurrencyValue(value);
  };
  const handleselectedToCurrencyValue = (value: string) => {
    setselectedToCurrencyValue(value);
  };
  const handleCurrencyNumberInputValue = (value: string) => {
    setCurrencyNumberInput(value);
  };

  const handleSelectedDateValue = (value: Date | undefined) => {
    setSelectedDateValue(value);
  };

  const values: SelectedCurrencyContextType = {
    currencyNumberInput,
    handleCurrencyNumberInputValue,
    selectedFromCurrencyValue,
    selectedToCurrencyValue,
    handleselectedFromCurrencyValue,
    handleselectedToCurrencyValue,
    selectedDateValue,
    handleSelectedDateValue,
  };

  return (
    <SelectedCurrencyContext.Provider value={values}>
      {children}
    </SelectedCurrencyContext.Provider>
  );
};
