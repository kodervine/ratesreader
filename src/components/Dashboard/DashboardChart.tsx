import { Card, Title, BarChart, LineChart } from "@tremor/react";
import { useFluctuationContext } from "contexts";
import { useEffect, useState } from "react";

export const DashboardChart = () => {
  const [chartdata, setChartdata] = useState<any[]>([]);
  const { fluctuationData } = useFluctuationContext();

  useEffect(() => {
    if (!fluctuationData) {
      return;
    }

    const dataArray = Object.entries(fluctuationData.rates).map(
      ([currencyCode, currencyData]) => ({
        currencyCode,
        [`Exchange Rate`]: currencyData.end_rate,
      })
    );

    setChartdata(dataArray);
  }, [fluctuationData]);

  return (
    <Card className="bg-gray-900 text-green-50">
      <Title>Fluctuation Data for the past one month</Title>
      <BarChart
        className="mt-6"
        data={chartdata}
        categories={["Exchange Rate"]}
        index="currencyCode"
        colors={["teal"]}
        yAxisWidth={40}
        valueFormatter={(number: number) => `${number}`}
      />
      <LineChart
        className="mt-6"
        data={chartdata}
        index="currencyCode"
        categories={["Exchange Rate"]}
        colors={["teal"]}
        yAxisWidth={40}
        valueFormatter={(number: number) => `${number}`}
      />
    </Card>
  );
};
