import {
  useCurrencyConverterApiContext,
  useSelectedCurrencyContext,
} from "contexts";
import { ExchangeRatesByDate, ICurrencyConversion } from "types";
import { useEffect, useState } from "react";
import { Card, Title, LineChart } from "@tremor/react";
import { format } from "date-fns";

export const ConverterChart = () => {
  const { getExchangeRatesForCurrencies } = useCurrencyConverterApiContext();
  const { selectedFromCurrencyValue, selectedToCurrencyValue } =
    useSelectedCurrencyContext();

  const [exchangeRatesByDate, setExchangeRatesByDate] = useState<
    ExchangeRatesByDate | undefined
  >(undefined);

  const [chartdata, setChartdata] = useState<any[]>([]);
  useEffect(() => {
    if (!exchangeRatesByDate) {
      return;
    }
    // Transform fetched exchange rate to the desired chartdata format
    const transformedData = Object.entries(exchangeRatesByDate as any)?.map(
      ([date, rate]) => ({
        Date: format(new Date(date), "dd/LLL"),
        Rate: rate,
      })
    );

    setChartdata(transformedData);
  }, [getExchangeRatesForCurrencies]);

  useEffect(() => {
    setExchangeRatesByDate(undefined);

    if (!selectedFromCurrencyValue || !selectedToCurrencyValue) {
      return;
    }

    const getRates = async () => {
      setExchangeRatesByDate(
        await getExchangeRatesForCurrencies(
          selectedFromCurrencyValue,
          selectedToCurrencyValue
        )
      );
    };

    getRates();
  }, [
    selectedFromCurrencyValue,
    selectedToCurrencyValue,
    getExchangeRatesForCurrencies,
  ]);
  const { convertedCurrencyData } = useCurrencyConverterApiContext();

  const { date, info, query, result, success }: ICurrencyConversion =
    convertedCurrencyData;
  return (
    <>
      {success
        ? chartdata.length > 0 && (
            <Card className=" bg-gray-900 text-green-50">
              <Title>1 month Historical rates</Title>
              <LineChart
                className="mt-6"
                data={chartdata}
                index="Date"
                categories={["Rate"]}
                colors={["emerald"]}
                valueFormatter={(number: number) =>
                  ` ${Intl.NumberFormat("us").format(number).toString()}`
                }
                yAxisWidth={40}
              />
            </Card>
          )
        : null}
    </>
  );
};
