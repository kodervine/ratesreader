import React, { FC, createContext, useContext, useState } from "react";
import {
  EXCHANGE_API_URL,
  requestOptions,
  useSelectedCurrencyContext,
} from "contexts";
import { format } from "date-fns";

type ExchangeRatesByDate = {
  [date: string]: {
    [currencyCode: string]: number;
  };
};

interface ExchangeRatesByDateContextType {
  exchangeRatesByDate: ExchangeRatesByDate;
  getExchangeRatesByDate: () => Promise<void>;
}

const ExchangeRatesByDateContext =
  createContext<ExchangeRatesByDateContextType>({
    exchangeRatesByDate: {},
    getExchangeRatesByDate: async () => {},
  });

export const ExchangeRatesByDateProvider: FC<{ children: React.ReactNode }> = ({
  children,
}: any) => {
  const {
    selectedDateValue,
    selectedFromCurrencyValue,
    selectedToCurrencyValue,
  } = useSelectedCurrencyContext();
  const [exchangeRatesByDate, setExchangeRatesByDate] =
    useState<ExchangeRatesByDate>({});

  // Define the function to fetch exchange rates by date
  const getExchangeRatesByDate = async () => {
    const dateValue = format(selectedDateValue as Date, "yyyy-MM-dd");

    try {
      const response = await fetch(
        `${EXCHANGE_API_URL}/${dateValue}?symbols=${selectedToCurrencyValue}&base=${selectedFromCurrencyValue}`,
        requestOptions
      );
      const data = await response.json();
      setExchangeRatesByDate(data);
    } catch (error) {
      console.error("Error fetching exchange rates by date:", error);
    }
  };

  return (
    <ExchangeRatesByDateContext.Provider
      value={{ exchangeRatesByDate, getExchangeRatesByDate }}
    >
      {children}
    </ExchangeRatesByDateContext.Provider>
  );
};

// Custom hook to use the ExchangeRatesByDateContext
export const useExchangeRatesByDateContext = () => {
  return useContext(ExchangeRatesByDateContext);
};
