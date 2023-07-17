import { useNewsContext } from "contexts";
import { Header, NewsFilterTabs, NewsGrid, Sidebar } from "components";

export const NewsPage = () => {
  const { newsApiArticles } = useNewsContext();
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="w-full">
        <Header title="What's in the news?" />
        <div className="flex justify-between p-4 ">
          <h2 className="mb-12 text-center text-2xl font-bold">
            Latest articles: category goes here
          </h2>
        </div>
        <NewsFilterTabs />
        <NewsGrid />
      </div>
    </div>
  );
};

// Filtering options: Since you mentioned wanting to filter news by different sources, you can add the NewsFilterTabs component we created earlier to allow users to select and filter news based on specific sources.

// Pagination: If the newsApiArticles data contains a large number of articles, you may want to implement pagination to improve the user experience. This could involve adding pagination controls, such as "Next" and "Previous" buttons, and updating the NewsGrid component to display the appropriate set of articles based on the selected page.

// Search functionality: If you want to enable users to search for specific news articles, you can add a search input field to the Header component. This would allow users to enter keywords or phrases and filter the displayed articles based on their search query.

// Sorting options: If you want to provide sorting options for the news articles, you can add dropdown menus or buttons to the Header component to allow users to sort the articles by date, relevance, or any other relevant criteria.

// Loading state: If the newsApiArticles data takes time to load, you can display a loading state or spinner to indicate to the user that the data is being fetched.

// Remember to adjust the styles and layout of the components as needed to ensure a
