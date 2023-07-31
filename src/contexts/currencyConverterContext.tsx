import { useLocalStorage } from "hooks/useLocalStorage";
import React, { useContext, FC, useState, useEffect } from "react";
import { CurrencyName } from "types/currency";

/**

The ConverterForm component uses this custom hook to manage currency-related states and functions.
The hook provides the following values and functions:
currencyNumberInput: The amount input value for currency conversion.
handleCurrencyNumberInputValue: A function to handle changes in the amount input value.
selectedCurrencyDropdown1: The selected "from" currency in the first dropdown.
selectedCurrencyDropdown2: The selected "to" currency in the second dropdown.
handleSelectedCurrencyDropdown1Value: A function to handle changes in the selected "from" currency.
handleSelectedCurrencyDropdown2Value: A function to handle changes in the selected "to" currency.
@returns An object containing the currency-related state values and functions.
*/

interface CurrencyConverterContextValue {
  // todo - better type declaration for the currency list
  currencyList: any;
}

const CurrencyConverterApiContext =
  React.createContext<CurrencyConverterContextValue>({
    currencyList: {
      code: "",
      name: "",
    },
  });

const CurrencyConverterApiProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { VITE_API_LAYER_EXCHANGE_RATES_API_KEY } = import.meta.env;

  const EXCHANGE_API_URL = "https://api.apilayer.com/exchangerates_data/";
  const apiLayerFetchHeaders = new Headers();
  apiLayerFetchHeaders.append("apikey", VITE_API_LAYER_EXCHANGE_RATES_API_KEY);
  const requestOptions = {
    headers: apiLayerFetchHeaders,
  };

  // fetch available symbols
  const [currencyList, setCurrencyList] = useState<Error | CurrencyName[]>();
  const [currencyListToLocalStorage, setCurrencyListToLocalStorage] =
    useLocalStorage("currencyList");

  useEffect(() => {
    const fetchAvailableCurrenciesSymbols = async () => {
      // try {
      //   const response = await fetch(
      //     `${EXCHANGE_API_URL}symbols`,
      //     requestOptions
      //   );
      //   if (!response.ok) {
      //     alert("error fetching available currencies");
      //   }
      //   const symbolsJSON: SymbolsResponse = await response.json();
      //   if (!symbolsJSON.success) {
      //     throw new Error("API Error");
      //   }
      //   const currencyNames = Object.entries(symbolsJSON.symbols).map(
      //     ([code, name]) => ({ code, name })
      //   );
      //   setCurrencyList(currencyNames);
      //   setCurrencyListToLocalStorage(JSON.stringify(currencyNames));
      // } catch (error) {
      //   console.error(`Can't get the list of currencies: ${error}`);
      //   setCurrencyList(new Error(error as string));
      // }
    };

    if (currencyListToLocalStorage) {
      setCurrencyList(JSON.parse(currencyListToLocalStorage));
    } else {
      fetchAvailableCurrenciesSymbols();
    }
  }, [currencyListToLocalStorage, setCurrencyListToLocalStorage]);

  // console.log(currencyList);

  return (
    <CurrencyConverterApiContext.Provider value={{ currencyList }}>
      {children}
    </CurrencyConverterApiContext.Provider>
  );
};

export const useCurrencyConverterApiContext =
  (): CurrencyConverterContextValue => {
    const context = useContext(CurrencyConverterApiContext);
    if (!context) {
      throw new Error(
        "useForexApiContext must be used within ForexApiProvider"
      );
    }
    return context;
  };

export { CurrencyConverterApiContext, CurrencyConverterApiProvider };
