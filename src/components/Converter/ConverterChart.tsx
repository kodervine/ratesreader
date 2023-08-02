import {
  useCurrencyConverterApiContext,
  useSelectedCurrencyContext,
} from "contexts";
import { ExchangeRatesByDate } from "types";
import { useEffect, useState } from "react";
import { AreaChart, Card, Title } from "@tremor/react";
import { format } from "date-fns";
import { Spinner } from "components";

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
  const { convertedCurrencyData, isTimeSeriesLoading } =
    useCurrencyConverterApiContext();

  if (isTimeSeriesLoading) {
    return (
      <section className="text-center">
        <Spinner />
      </section>
    );
  }
  return (
    <>
      {chartdata.length > 0 && (
        <Card className=" bg-gray-900 text-green-50 z-20">
          <Title className="text-green-50">1 month Historical rates</Title>

          <AreaChart
            className="h-72 mt-4"
            data={chartdata}
            index="Date"
            categories={["Rate"]}
            colors={["teal"]}
            valueFormatter={(number: number) =>
              ` ${Intl.NumberFormat("us").format(number).toString()}`
            }
          />
        </Card>
      )}
    </>
  );
};
