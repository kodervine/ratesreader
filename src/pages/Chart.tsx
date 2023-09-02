import {
  AreaChart,
  BarChart,
  Card,
  DonutChart,
  LineChart,
  ScatterChart,
  Subtitle,
  Title,
} from "@tremor/react";
import React from "react";

// const workoutChartData = [
//   {
//     period: "Week 1",
//     "Cardio Duration (minutes)": 20,
//     "Strength Training Duration (minutes)": 25,
//   },
//   {
//     period: "Week 2",
//     "Cardio Duration (minutes)": 25,
//     "Strength Training Duration (minutes)": 30,
//   },
//   {
//     period: "Week 3",
//     "Cardio Duration (minutes)": 30,
//     "Strength Training Duration (minutes)": 35,
//   },
//   {
//     period: "Week 4",
//     "Cardio Duration (minutes)": 35,
//     "Strength Training Duration (minutes)": 40,
//   },
//   {
//     period: "Week 5",
//     "Cardio Duration (minutes)": 40,
//     "Strength Training Duration (minutes)": 45,
//   },
//   {
//     period: "Week 6",
//     "Cardio Duration (minutes)": 45,
//     "Strength Training Duration (minutes)": 50,
//   },
//   {
//     period: "Week 7",
//     "Cardio Duration (minutes)": 50,
//     "Strength Training Duration (minutes)": 55,
//   },
//   {
//     period: "Week 8",
//     "Cardio Duration (minutes)": 55,
//     "Strength Training Duration (minutes)": 60,
//   },
//   {
//     period: "Week 9",
//     "Cardio Duration (minutes)": 60,
//     "Strength Training Duration (minutes)": 65,
//   },
//   {
//     period: "Week 10",
//     "Cardio Duration (minutes)": 65,
//     "Strength Training Duration (minutes)": 70,
//   },
// ];

// const ecommerceChartData = [
//   {
//     category: "Electronics",
//     "Total Sales (USD)": 125000,
//   },
//   {
//     category: "Clothing",
//     "Total Sales (USD)": 89000,
//   },
//   {
//     category: "Accessories",
//     "Total Sales (USD)": 62000,
//   },
//   {
//     category: "Beauty",
//     "Total Sales (USD)": 54000,
//   },
//   {
//     category: "Home Decor",
//     "Total Sales (USD)": 48000,
//   },
//   {
//     category: "Toys",
//     "Total Sales (USD)": 36000,
//   },
//   {
//     category: "Books",
//     "Total Sales (USD)": 29000,
//   },
//   {
//     category: "Sports Equipment",
//     "Total Sales (USD)": 22000,
//   },
//   {
//     category: "Health and Wellness",
//     "Total Sales (USD)": 17500,
//   },
//   {
//     category: "Jewelry",
//     "Total Sales (USD)": 14200,
//   },
// ];

// const generateSpiralData = (numPoints: any) => {
//   const data = [];
//   let value1 = 1000;
//   let value2 = 1200;
//   let direction1 = 1;
//   let direction2 = -1;

//   for (let i = 0; i < numPoints; i++) {
//     data.push({
//       date: `Month ${i + 1}`,
//       "New Visitors": value1,
//       "Returning Visitors": value2,
//     });

//     value1 += direction1 * Math.floor(Math.random() * 200);
//     value2 += direction2 * Math.floor(Math.random() * 200);

//     if (value1 < 500 || value1 > 1500) {
//       direction1 *= -1;
//     }
//     if (value2 < 800 || value2 > 1600) {
//       direction2 *= -1;
//     }
//   }

//   return data;
// };

// const spiralVisitorsData = generateSpiralData(12);

// const courseCategories = [
//   {
//     name: "Technology",
//     count: 1200,
//   },
//   {
//     name: "Business",
//     count: 980,
//   },
//   {
//     name: "Health & Wellness",
//     count: 750,
//   },
//   {
//     name: "Creative Arts",
//     count: 610,
//   },
//   {
//     name: "Languages",
//     count: 480,
//   },
// ];

const currencyPairsData = [
  {
    pair: "USD/EUR",
    exchangeRate: 0.85,
  },
  {
    pair: "USD/JPY",
    exchangeRate: 110.73,
  },
  {
    pair: "GBP/USD",
    exchangeRate: 1.37,
  },
  {
    pair: "AUD/USD",
    exchangeRate: 0.73,
  },
  {
    pair: "USD/CAD",
    exchangeRate: 1.25,
  },
];

const historicalTemperatureData = [
  {
    year: 2020,
    temperature: 15,
  },
  {
    year: 2021,
    temperature: 18,
  },
  {
    year: 2022,
    temperature: 20,
  },
  {
    year: 2023,
    temperature: 22,
  },
  {
    year: 2024,
    temperature: 19,
  },
  {
    year: 2025,
    temperature: 16,
  },
  // ... more years
];

const dataFormatter = (number: any) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

const Chart = () => {
  const valueFormatter = {
    x: (pair: any) => pair,
    y: (rate: any) => `${rate}`,
  };
  return (
    <div className="bg-white text-black flex flex-col justify-center items-center px-20 min-h-screen">
      {/* <Card>
        <Title>Workout duration</Title>
        <LineChart
          className="mt-6"
          data={workoutChartData}
          index="period"
          categories={[
            "Cardio Duration (minutes)",
            "Strength Training Duration (minutes)",
          ]}
          colors={["emerald", "red"]}
          valueFormatter={dataFormatter}
          yAxisWidth={40}
        />
      </Card> */}
      {/* <Card>
        <Title>Sales Performance by Category</Title>
        <Subtitle>
          Analyzing sales performance across different product categories on our
          e-commerce platform.
        </Subtitle>
        <BarChart
          className="mt-6"
          data={ecommerceChartData}
          index="category"
          categories={["Total Sales (USD)"]}
          colors={["teal"]}
          valueFormatter={dataFormatter}
          yAxisWidth={58}
        />
      </Card> */}
      {/* <Card>
        <Title>Website Visitors Over Time</Title>
        <AreaChart
          className="h-72 mt-4"
          data={spiralVisitorsData}
          index="date"
          categories={["New Visitors", "Returning Visitors"]}
          colors={["purple", "red"]}
          valueFormatter={dataFormatter}
        />
      </Card> */}
      {/* <Card className="max-w-lg">
        <Title>Course Categories Distribution</Title>
        <DonutChart
          className="mt-6"
          data={courseCategories}
          category="count"
          index="name"
          valueFormatter={dataFormatter}
          colors={["slate", "violet", "indigo", "rose", "cyan"]}
        />
      </Card> */}
      <Card className="max-w-lg">
        <Title>Historical Temperature Data</Title>
        <DonutChart
          className="mt-6"
          data={historicalTemperatureData}
          category="temperature" // Mismatched data
          index="year"
          valueFormatter={dataFormatter}
          colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
        />
      </Card>
      <Card>
        <Title>Currency Pair Correlations</Title>
        <ScatterChart
          className="h-80 mt-6 -ml-2"
          data={currencyPairsData}
          category="pair"
          x="pair"
          y="exchangeRate"
          valueFormatter={{
            // x: (pair) => pair,
            y: (rate) => rate.toFixed(2),
          }}
          showLegend={false}
        />
      </Card>
    </div>
  );
};

export default Chart;
