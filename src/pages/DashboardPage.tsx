import { DashboardChart, Header, Sidebar, TopCards } from "components";

export const DashboardPage = () => {
  return (
    <main className="flex flex-row w-full">
      <Sidebar />

      <section className="flex flex-col w-full">
        <Header title="Dashboard" />
        <article className="flex">
          <div className="w-full">
            <TopCards />
            <DashboardChart />{" "}
          </div>
          <section className="w-2/5">Right side of the Dashboard</section>
        </article>
      </section>
    </main>
  );
};
