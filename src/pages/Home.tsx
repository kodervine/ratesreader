import React from "react";
import Header from "../components/Header";
import HistoricalChart from "../components/HistoricalChart";
import NewsUpdates from "../components/NewsUpdates";
import Sidebar from "../components/Sidebar";
import TopCards from "../components/TopCards";

const Home = () => {
  return (
    <div className="flex flex-row justify-between w-full">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <TopCards />
        <div className="flex">
          <HistoricalChart />
          <NewsUpdates />
        </div>
      </div>
    </div>
  );
};

export default Home;
