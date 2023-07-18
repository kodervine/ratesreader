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

const NewsApiProvider: FC = ({ children }: any) => {
  const { activeNewsTab } = useFilterContext();
  // define state and functions here
  const [newsApiArticles, setNewsApiArticles] = useState<NewsApiArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const newsApiKey = import.meta.env.VITE_NEWS_API_KEY;
  const apiUrl =
    activeNewsTab === ENewsCategory.All
      ? `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${newsApiKey}`
      : `https://newsapi.org/v2/top-headlines?country=ng&category=${activeNewsTab}&apiKey=${newsApiKey}`;

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
