import { useFilterContext, useNewsContext } from "contexts";
import { Header, NewsFilterTabs, NewsGrid, Sidebar } from "components";
import { ENewsCategory } from "types";

export const NewsPage = () => {
  const { newsApiArticles } = useNewsContext();
  const { activeNewsTab } = useFilterContext();
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-900">
      <div className="hidden  lg:block">
        <Sidebar />
      </div>

      <div className="w-full lg:flex-1 lg:px-4">
        <Header title="What's on the news?" />
        <div className="flex justify-center lg:justify-between p-4 bg-gray-900">
          <h2 className="mb-6 lg:mb-0 text-center lg:text-left text-2xl font-bold font-robotoSlab">
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
