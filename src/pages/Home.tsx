import Header from "../components/Header";
import HistoricalChart from "../components/HistoricalChart";
import NewsUpdates from "../components/NewsUpdates";
import Sidebar from "../components/Sidebar";
import TopCards from "../components/TopCards";

const Home = () => {
  return (
    <main className="flex flex-row w-full font-inter">
      <Sidebar />

      <section className="flex flex-col w-full">
        <Header />
        <TopCards />
        <div className="flex">
          <HistoricalChart />
          <NewsUpdates />
        </div>
      </section>
      <div>Reight side</div>
    </main>
  );
};

export default Home;
