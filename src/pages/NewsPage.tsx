import { useFilterContext, useNewsContext } from "contexts";
import { Header, NewsFilterTabs, NewsGrid, Sidebar } from "components";
import { ENewsCategory } from "types";

export const NewsPage = () => {
  const { newsApiArticles } = useNewsContext();
  const { activeNewsTab } = useFilterContext();
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="w-full">
        <Header title="What's on the news?" />
        <div className="flex justify-between p-4 ">
          <h2 className="mb-12 text-center text-2xl font-bold font-robotoSlab">
            Latest articles on:
            {activeNewsTab === ENewsCategory.All
              ? " General News"
              : activeNewsTab.charAt(0).toUpperCase() + activeNewsTab.slice(1)}
          </h2>
        </div>
        <NewsFilterTabs />
        <NewsGrid />
      </div>
    </div>
  );
};
