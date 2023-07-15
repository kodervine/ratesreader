import { Card, Title, LineChart } from "@tremor/react";

const chartdata = [
  {
    year: 1970,
    "Export Growth Rate": 2.04,
    "Import Growth Rate": 1.53,
  },
  {
    year: 1971,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.58,
  },
  {
    year: 1972,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1973,
    "Export Growth Rate": 1.93,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1974,
    "Export Growth Rate": 1.88,
    "Import Growth Rate": 1.67,
  },
  //...
];

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

export const DashboardChart = () => (
  <Card>
    <Title>Export/Import Growth Rates (1970 to 2021)</Title>
    <LineChart
      className="mt-6"
      data={chartdata}
      index="year"
      categories={["Export Growth Rate", "Import Growth Rate"]}
      colors={["emerald", "gray"]}
      valueFormatter={dataFormatter}
      yAxisWidth={40}
    />
  </Card>
);

// import { Card, Title, LineChart } from "@tremor/react";
// import { useForexApiContext } from "contexts";

// const dataFormatter = (number: number) =>
//   `${Intl.NumberFormat("us").format(number).toString()}`;

// export const DashboardChart = () => {
//   const { latestChartData } = useForexApiContext();

//   return (
//     <Card>
//       <Title>Forex rates</Title>
//       <LineChart
//         className="mt-6"
//         data={latestChartData}
//         index="year"
//         categories={["Growth Rate"]}
//         colors={["emerald"]}
//         valueFormatter={dataFormatter}
//         yAxisWidth={40}
//       />
//     </Card>
//   );
// };
