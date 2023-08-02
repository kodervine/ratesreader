import { useLocalStorage } from "hooks/useLocalStorage";
import React, { useContext, FC, useState, useEffect, useCallback } from "react";
import {
  CurrencyName,
  ExchangeRatesByDate,
  ICurrencyConversion,
  SymbolsResponse,
  TimeseriesResponse,
} from "types/currency";
import {
  EXCHANGE_API_URL,
  requestOptions,
  useSelectedCurrencyContext,
} from "contexts";
import { format, sub } from "date-fns";

/**

The ConverterForm component uses this custom hook to manage currency-related states and functions.
The hook provides the following values and functions:
currencyNumberInput: The amount input value for currency conversion.
handleCurrencyNumberInputValue: A function to handle changes in the amount input value.
selectedFromCurrencyValue: The selected "from" currency in the first dropdown.
selectedToCurrencyValue: The selected "to" currency in the second dropdown.
handleselectedFromCurrencyValue: A function to handle changes in the selected "from" currency.
handleselectedToCurrencyValue: A function to handle changes in the selected "to" currency.
@returns An object containing the currency-related state values and functions.
*/

interface ExchangeRatesContextType {
  timeseries: { [timeseriesParameters: string]: ExchangeRatesByDate };
  getExchangeRatesForCurrencies: (
    fromCurrencyCode: string,
    toCurrencyCode: string
  ) => Promise<ExchangeRatesByDate | undefined>;
}

interface CurrencyConverterContextValue {
  // todo - better type declaration for the currency list
  currencyList: any;
  fetchConvertedCurrencyAmount: () => void;
  convertedCurrencyData: ICurrencyConversion;
  getExchangeRatesForCurrencies: ExchangeRatesContextType["getExchangeRatesForCurrencies"];
  isTimeSeriesLoading: boolean;
}

const CurrencyConverterApiContext =
  React.createContext<CurrencyConverterContextValue>({
    currencyList: {
      code: "",
      name: "",
    },
    fetchConvertedCurrencyAmount: () => {},
    convertedCurrencyData: {
      date: "",
      info: {
        timestamp: 0,
        rate: 0,
      },
      query: {
        from: "",
        to: "",
        amount: 0,
      },
      result: 0,
      success: false,
    },
    getExchangeRatesForCurrencies: () =>
      new Promise<ExchangeRatesByDate | undefined>(() => {}),
    isTimeSeriesLoading: false,
  });

const CurrencyConverterApiProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // fetch available symbols
  const [currencyList, setCurrencyList] = useState<Error | CurrencyName[]>();
  const [currencyListToLocalStorage, setCurrencyListToLocalStorage] =
    useLocalStorage("currencyList");

  useEffect(() => {
    const fetchAvailableCurrenciesSymbols = async () => {
      try {
        const response = await fetch(
          `${EXCHANGE_API_URL}symbols`,
          requestOptions
        );

        if (!response.ok) {
          throw new Error("error fetching available currencies");
        }
        const symbolsJSON: SymbolsResponse = await response.json();
        if (!symbolsJSON.success) {
          throw new Error("API Error");
        }
        const currencyNames = Object.entries(symbolsJSON.symbols).map(
          ([code, name]) => ({ code, name })
        );
        setCurrencyList(currencyNames);
        setCurrencyListToLocalStorage(JSON.stringify(currencyNames));
      } catch (error) {
        console.error(`Can't get the list of currencies: ${error}`);
        setCurrencyList(new Error(error as string));
      }
    };

    if (currencyListToLocalStorage) {
      setCurrencyList(JSON.parse(currencyListToLocalStorage));
    } else {
      fetchAvailableCurrenciesSymbols();
    }
  }, [currencyListToLocalStorage, setCurrencyListToLocalStorage]);

  // convert currency in real time
  const {
    currencyNumberInput,
    selectedFromCurrencyValue,
    selectedToCurrencyValue,
  } = useSelectedCurrencyContext();

  const [convertedCurrencyData, setConvertedCurrencyData] =
    useState<ICurrencyConversion>({
      date: "",
      info: { timestamp: 0, rate: 0 },
      query: { from: "", to: "", amount: 0 },
      result: 0,
      success: false,
    });

  const fetchConvertedCurrencyAmount = async () => {
    try {
      const response = await fetch(
        `${EXCHANGE_API_URL}convert?to=${selectedFromCurrencyValue}&from=${selectedToCurrencyValue}&amount=${currencyNumberInput}`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error("error converting currencies");
      }
      const dataResponse = await response.json();
      if (!dataResponse.success) {
        throw new Error("API Error");
      }

      setConvertedCurrencyData(dataResponse);
    } catch (error) {
      console.error(`Can't convert currency: ${error}`);
    }
  };

  // Fetch one month time series with selected currencies
  const [timeseriesLocalStorage, setTimeseriesLocalStorage] =
    useLocalStorage("timeseries");
  const [timeseries, setTimeseries] = useState<{
    [timeseriesParameters: string]: ExchangeRatesByDate;
  }>({});
  const [isTimeSeriesLoading, setIsTimeseriesLoading] = useState(false);

  useEffect(() => {
    if (!timeseriesLocalStorage) {
      return;
    }

    setTimeseries(JSON.parse(timeseriesLocalStorage));
  }, [timeseriesLocalStorage]);
  const getExchangeRatesForCurrencies = useCallback(
    async (
      fromCurrencyCode: string,
      toCurrencyCode: string
    ): Promise<ExchangeRatesByDate | undefined> => {
      const fromDate = format(sub(new Date(), { months: 1 }), "yyyy-MM-dd");
      const todayDate = format(new Date(), "yyyy-MM-dd");
      const timeseriesParameters = `start_date=${fromDate}&end_date=${todayDate}&base=${fromCurrencyCode}&symbols=${toCurrencyCode}`;

      const fetchExchangeRates = async () => {
        setIsTimeseriesLoading(true);
        try {
          const ratesResponse = await fetch(
            `${EXCHANGE_API_URL}timeseries?${timeseriesParameters}`,
            requestOptions
          );

          if (!ratesResponse.ok) {
            throw new Error(ratesResponse.statusText);
          }

          const ratesJSON: TimeseriesResponse = await ratesResponse.json();

          if (!ratesJSON.success) {
            throw new Error("API Error");
          }

          const transformedRates: ExchangeRatesByDate = {};
          Object.entries(ratesJSON.rates).forEach(([date, value]) => {
            transformedRates[date] = value[toCurrencyCode];
          });
          setIsTimeseriesLoading(false);
          return transformedRates;
        } catch (error) {
          console.error(`Can't get exchange rates ${error}`);
          setIsTimeseriesLoading(false);
          return new Error();
        }
      };

      const exchangeRatesFromLocalStorage = timeseries[timeseriesParameters];

      if (exchangeRatesFromLocalStorage) {
        return exchangeRatesFromLocalStorage;
      }

      const exchangeRates = await fetchExchangeRates();

      if (exchangeRates instanceof Error) {
        return undefined;
      }
      const newTimeseries = {
        ...timeseries,
        [timeseriesParameters]: exchangeRates,
      };
      setTimeseries(newTimeseries);
      setTimeseriesLocalStorage(JSON.stringify(newTimeseries));

      return exchangeRates;
    },

    [setTimeseriesLocalStorage, timeseries]
  );

  return (
    <CurrencyConverterApiContext.Provider
      value={{
        currencyList,
        fetchConvertedCurrencyAmount,
        convertedCurrencyData,
        getExchangeRatesForCurrencies,
        isTimeSeriesLoading,
      }}
    >
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
