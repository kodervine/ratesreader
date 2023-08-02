import {
  DashboardChart,
  Header,
  Sidebar,
  TopCards,
  RateByDate,
} from "components";
export const DashboardPage = () => {
  return (
    <main className="flex flex-row w-full">
      <Sidebar />

      <section className="flex flex-col w-full lg:px-4">
        <Header title="Dashboard" />
        <article className="flex">
          <div className="w-full">
            <TopCards />
            <DashboardChart />
          </div>
          <section className="w-2/5">
            <RateByDate />
          </section>
        </article>
      </section>
    </main>
  );
};
