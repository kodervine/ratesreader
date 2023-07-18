import React, { useContext, FC, useState, useEffect } from "react";

interface CurrencyData {
  year: string;
  "Growth Rate": number;
}

interface ForexApiContextValue {
  latestChartData: CurrencyData[];
}

const ForexApiContext = React.createContext<ForexApiContextValue | undefined>(
  undefined
);

const ForexApiProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [latestChartData, setLatestChartData] = useState<CurrencyData[]>([]);
  const { VITE_EXCHANGE_RATES_API_KEY } = import.meta.env;
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch(
          `http://api.exchangeratesapi.io/v1/latest?access_key=${VITE_EXCHANGE_RATES_API_KEY}`
        );
        const data = await response.json();
        const rates = data.rates;

        const chartData: CurrencyData[] = Object.keys(rates).map(
          (currency) => ({
            year: currency,
            "Growth Rate": rates[currency],
          })
        );

        setLatestChartData(chartData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChartData();
  }, []);

  return (
    <ForexApiContext.Provider value={{ latestChartData }}>
      {children}
    </ForexApiContext.Provider>
  );
};

export const useForexApiContext = (): ForexApiContextValue => {
  const context = useContext(ForexApiContext);
  if (!context) {
    throw new Error("useForexApiContext must be used within ForexApiProvider");
  }
  return context;
};

export { ForexApiContext, ForexApiProvider };
