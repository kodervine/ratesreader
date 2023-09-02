import { useCurrencyConverterApiContext } from "contexts";
import { ICurrencyConversion } from "types";
import { Card, Subtitle, Metric, Text, Divider } from "@tremor/react";

export const ConverterContainer = () => {
  const { convertedCurrencyData } = useCurrencyConverterApiContext();

  const { date, info, query, result, success }: ICurrencyConversion =
    convertedCurrencyData;
  return (
    <>
      {success ? (
        <Card className=" bg-gray-900 text-green-50">
          <Text>Date: {date}</Text>
          <Metric>Converted Amount: $ {result}</Metric>
          <Divider />
          <Subtitle>Conversion Query</Subtitle>
          <Text className="mt-2">
            {query.from} to {query.to}
          </Text>
          <Subtitle className="mt-4">Conversion Rate</Subtitle>
          <Text className="mt-2">
            1 {query.from} = {info.rate} {query.to}
          </Text>
          <Subtitle className="mt-4">Amount Entered</Subtitle>
          <Text className="mt-2">{query.amount}</Text>
          <Subtitle className="mt-4">Conversion Status</Subtitle>
          {success ? (
            <Text className="mt-2 text-green-600">Conversion Successful!</Text>
          ) : (
            <Text className="mt-2 text-red-600">Conversion Failed!</Text>
          )}
        </Card>
      ) : null}
    </>
  );
};

export default ConverterContainer;
