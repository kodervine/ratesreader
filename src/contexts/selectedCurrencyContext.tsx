// import React, { createContext, useContext, useState } from "react";

// type SelectedCurrencyContextType = {
//   handleselectedFromCurrencyValue: (value: string) => void;
//   handleselectedToCurrencyValue: (value: string) => void;
//   handleCurrencyNumberInputValue: (value: string) => void;
//   currencyNumberInput: string;
//   selectedFromCurrencyValue: string;
//   selectedToCurrencyValue: string;
//   children: React.ReactNode; // Add this line
// };

// const SelectedCurrencyContext = createContext<SelectedCurrencyContextType>({
//   currencyNumberInput: "",
//   handleselectedFromCurrencyValue: () => {},
//   handleselectedToCurrencyValue: () => {},
//   handleCurrencyNumberInputValue: () => {},
//   selectedFromCurrencyValue: "",
//   selectedToCurrencyValue: "",
//   children: null,
// });

// export const useSelectedCurrencyContext = (): SelectedCurrencyContextType => {
//   return useContext(SelectedCurrencyContext);
// };

// export const SelectedCurrencyProvider: React.FC = ({ children }: any) => {
//   const [currencyNumberInput, setCurrencyNumberInput] = useState<string>("");
//   const [selectedFromCurrencyValue, setselectedFromCurrencyValue] =
//     useState<string>("");
//   const [selectedToCurrencyValue, setselectedToCurrencyValue] =
//     useState<string>("");

//   const handleselectedFromCurrencyValue = (value: string) => {
//     setselectedFromCurrencyValue(value);
//   };
//   const handleselectedToCurrencyValue = (value: string) => {
//     setselectedToCurrencyValue(value);
//   };
//   const handleCurrencyNumberInputValue = (value: string) => {
//     setCurrencyNumberInput(value);
//   };

//   const values: SelectedCurrencyContextType = {
//     currencyNumberInput,
//     handleCurrencyNumberInputValue,
//     selectedFromCurrencyValue,
//     selectedToCurrencyValue,
//     handleselectedFromCurrencyValue,
//     handleselectedToCurrencyValue,
//   };

//   return (
//     <SelectedCurrencyContext.Provider value={values}>
//       {children}
//     </SelectedCurrencyContext.Provider>
//   );
// };

import React, { FC, createContext, useContext, useState } from "react";

type SelectedCurrencyContextType = {
  handleselectedFromCurrencyValue: (value: string) => void;
  handleselectedToCurrencyValue: (value: string) => void;
  handleCurrencyNumberInputValue: (value: string) => void;
  currencyNumberInput: string;
  selectedFromCurrencyValue: string;
  selectedToCurrencyValue: string;
};

const SelectedCurrencyContext = createContext<SelectedCurrencyContextType>({
  currencyNumberInput: "",
  handleselectedFromCurrencyValue: () => {},
  handleselectedToCurrencyValue: () => {},
  handleCurrencyNumberInputValue: () => {},
  selectedFromCurrencyValue: "",
  selectedToCurrencyValue: "",
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

  const handleselectedFromCurrencyValue = (value: string) => {
    setselectedFromCurrencyValue(value);
  };
  const handleselectedToCurrencyValue = (value: string) => {
    setselectedToCurrencyValue(value);
  };
  const handleCurrencyNumberInputValue = (value: string) => {
    setCurrencyNumberInput(value);
  };

  const values: SelectedCurrencyContextType = {
    currencyNumberInput,
    handleCurrencyNumberInputValue,
    selectedFromCurrencyValue,
    selectedToCurrencyValue,
    handleselectedFromCurrencyValue,
    handleselectedToCurrencyValue,
  };

  return (
    <SelectedCurrencyContext.Provider value={values}>
      {children}
    </SelectedCurrencyContext.Provider>
  );
};
