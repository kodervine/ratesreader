import { AreaChart } from "@tremor/react";

export const HistoricalLineChart = ({ data, xAxisKey, yAxisKey }: any) => {
  return (
    <AreaChart
      className="h-80"
      data={data}
      index={xAxisKey}
      valueFormatter={(number) => `$ ${number.toFixed(2)}`}
      categories={[yAxisKey]}
      colors={["purple"]}
      showXAxis={true}
      showGridLines={false}
      startEndOnly={true}
      showYAxis={false}
      showLegend={false}
    />
  );
};
