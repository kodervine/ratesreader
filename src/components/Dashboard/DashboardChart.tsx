import {
  Card,
  Title,
  BarChart,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@tremor/react";
import { DropdownOption } from "components/Converter";
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
        [`Change`]: currencyData.change,
        [`Change %`]: currencyData.change_pct,
        [`Start Rate`]: currencyData.start_rate,
      })
    );

    setChartdata(dataArray);
  }, [fluctuationData]);
  const [dropdownOptions, setDropdownOptions] = useState<DropdownOption[]>([]);

  const getCurrencyName = (currencyCode: string) => {
    const currency = dropdownOptions.find(
      (option) => option.code === currencyCode
    );
    return currency ? currency.name : currencyCode;
  };

  useEffect(() => {
    fetchDataFromLocalStorage();
  }, []);

  const fetchDataFromLocalStorage = () => {
    const dataFromLocalStorage = localStorage.getItem("currencyList");
    if (dataFromLocalStorage) {
      try {
        const parsedData = JSON.parse(dataFromLocalStorage) as DropdownOption[];
        setDropdownOptions(parsedData);
      } catch (error) {
        console.error("Error parsing data from local storage:", error);
      }
    }
  };
  return (
    <Card className="bg-gray-900 text-green-50">
      <Title className="text-green-50 text-2xl">
        West Africa Countries Fluctuation Data for the past one month
      </Title>
      <BarChart
        className="mt-6"
        data={chartdata}
        categories={["Exchange Rate"]}
        index="currencyCode"
        colors={["teal"]}
        yAxisWidth={40}
        valueFormatter={(number: number) => `${number}`}
      />
      {/* <LineChart
        className="mt-6"
        data={chartdata}
        index="currencyCode"
        categories={["Exchange Rate"]}
        colors={["teal"]}
        yAxisWidth={40}
        valueFormatter={(number: number) => `${number}`}
      /> */}
      <div className="mt-6">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell className="text-green-50">
                Currency
              </TableHeaderCell>
              <TableHeaderCell className="text-green-50">
                Exchange Rate
              </TableHeaderCell>
              <TableHeaderCell className="text-green-50">
                Change
              </TableHeaderCell>
              <TableHeaderCell className="text-green-50">
                Change %
              </TableHeaderCell>
              <TableHeaderCell className="text-green-50">
                Start Rate
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chartdata.map((currency) => (
              <TableRow key={currency.currencyCode}>
                <TableCell className="text-green-50 font-bold">
                  {getCurrencyName(currency.currencyCode)}
                </TableCell>
                <TableCell className="text-green-50">
                  {currency["Exchange Rate"]}
                </TableCell>
                <TableCell className="text-green-50">
                  {currency["Change"]}
                </TableCell>
                <TableCell className="text-green-50">
                  {currency["Change %"]}
                </TableCell>
                <TableCell className="text-green-50">
                  {currency["Start Rate"]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};
