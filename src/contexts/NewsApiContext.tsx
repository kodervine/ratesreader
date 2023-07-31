import React, { useContext, FC, useState, useEffect } from "react";
import { useFilterContext } from "contexts";
import { ENewsCategory } from "types";

type NewsApiArticle = {
  title: string;
  description: string;
  url: string;
  source: { name: string };
  author: string;
};

type NewsApiContextType = {
  newsApiArticles: NewsApiArticle[];
  loading: boolean;
  error: string | null;
};

const NewsApiContext = React.createContext<NewsApiContextType>({
  newsApiArticles: [],
  loading: true,
  error: null,
});

/**

The NewsApiProvider component wraps the application with a context that provides news articles fetched from the NewsAPI (https://newsapi.org/).
It fetches news articles based on the active news tab category and stores the data in state.
The component provides the following context values:
newsApiArticles: An array of news articles with properties like title, description, url, source, and author.
loading: A boolean indicating whether the articles are currently being loaded.
error: A string containing the error message, if any, during the fetch process.
@example
// Usage inside a React component
import { NewsApiProvider, useNewsContext } from "./NewsApiProvider";
// In NewsDisplay component
const NewsDisplay: React.FC = () => {
const { newsApiArticles, loading, error } = useNewsContext();
// Handle the state and render the news articles
};
@returns A context provider that fetches and provides news articles from the NewsAPI.
*/

const NewsApiProvider: FC = ({ children }: any) => {
  const { activeNewsTab } = useFilterContext();
  // define state and functions here
  const [newsApiArticles, setNewsApiArticles] = useState<NewsApiArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { VITE_NEWS_API_KEY } = import.meta.env;

  const apiUrl =
    activeNewsTab === ENewsCategory.All
      ? `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${VITE_NEWS_API_KEY}`
      : `https://newsapi.org/v2/top-headlines?country=ng&category=${activeNewsTab}&apiKey=${VITE_NEWS_API_KEY}`;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setNewsApiArticles(data.articles);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        // setError(error.message);
        console.log(error);
      }
    };

    fetchArticles();
  }, [activeNewsTab]);

  return (
    <NewsApiContext.Provider value={{ newsApiArticles, loading, error }}>
      {children}
    </NewsApiContext.Provider>
  );
};

export const useNewsContext = (): NewsApiContextType => {
  const context = useContext(NewsApiContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within NewsApiProvider");
  }
  return context;
};

export { NewsApiContext, NewsApiProvider };
