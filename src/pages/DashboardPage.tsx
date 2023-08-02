import { DashboardChart, Header, Sidebar, RateByDate } from "components";

export const DashboardPage = () => {
  return (
    <main className="flex flex-row w-full">
      <Sidebar />

      <section className="flex flex-col w-full  lg:px-4">
        <Header title="Dashboard" />
        <article className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4">
            {/* <TopCards /> */}
            <DashboardChart />
          </div>
          <section className="w-full lg:w-1/4 lg:ml-4">
            <RateByDate />
          </section>
        </article>
      </section>
    </main>
  );
};
