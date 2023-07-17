import { useNewsContext } from "contexts";
import { Header, NewsGrid, Sidebar } from "components";

export const NewsPage = () => {
  const { newsApiArticles } = useNewsContext();
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div className="w-full">
        <div className="flex justify-between p-4 ">
          <Header title="What is in the news?" />
          <h2 className="mb-12 text-center text-3xl font-bold">
            Latest articles
          </h2>
        </div>
        <NewsGrid />
      </div>
    </div>
  );
};
