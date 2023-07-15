import { DashboardChart, Header, Sidebar, TopCards } from "components";
import NewsUpdates from "components/News/NewsUpdates";

export const DashboardPage = () => {
  return (
    <main className="flex flex-row w-full font-sans">
      <Sidebar />

      <section className="flex flex-col w-full">
        <Header />
        <TopCards />
        <div className="flex">
          <DashboardChart />
          <NewsUpdates />
        </div>
      </section>
      <div className="w-2/5">Reight side</div>
    </main>
  );
};
