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
        </div>
        <NewsGrid />
      </div>
    </div>
  );
};
