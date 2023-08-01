import { DashboardChart, Header, Sidebar, TopCards } from "components";
import { LineChart } from "components";
import { HistoricalLineChart } from "components";

const data = [
  // Historical exchange rate data
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
    Customers: 4938,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
    Customers: 2938,
  },
];

const realTimeData = [
  // Real-time exchange rate data
  {
    Date: "2022-07-16",
    NGN: 1,
    GHS: 0.019528,
    KES: 0.284566,
  },
  {
    Date: "2023-07-16",
    NGN: 2,
    GHS: 0.019528,
    KES: 0.284566,
  },
];

export const DashboardPage = () => {
  return (
    <main className="flex flex-row w-full">
      <Sidebar />

      <section className="flex flex-col w-full lg:px-4">
        <Header title="Dashboard" />
        <article className="flex">
          <div className="w-full">
            <TopCards />
            <DashboardChart />{" "}
            <div className="p-8">
              <div className="grid grid-cols-2 gap-8">
                <LineChart data={realTimeData} xAxisKey="Date" yAxisKey="NGN" />
                <HistoricalLineChart
                  data={data}
                  xAxisKey="Month"
                  yAxisKey="Customers"
                />
              </div>
            </div>
          </div>
          <section className="w-2/5">Right side of the Dashboard</section>
        </article>
      </section>
    </main>
  );
};
