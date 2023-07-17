import React, { useContext, FC, useState, useEffect } from "react";

// https://newsapi.org/v2/top-headlines?country=us&apiKey=bb35831a96ff46feaa9a86668569191d

// https://newsapi.org/v2/top-headlines?country=ng&apiKey=bb35831a96ff46feaa9a86668569191d

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
  // define state and functions here
  const [newsApiArticles, setNewsApiArticles] = useState<NewsApiArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const newsApiKey = import.meta.env.VITE_NEWS_API_KEY;
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${newsApiKey}`;

  // Use the 'apiUrl' variable in your code to make the API call
  // (e.g., using fetch() or an HTTP library)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(apiUrl);
        // const response = await fetch(
        //   `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${
        //     import.meta.env.VITE_NEWS_API_KEY
        //   }`
        // );
        const data = await response.json();
        setNewsApiArticles(data.articles);
        setLoading(false);
        console.log(data.articles);
      } catch (error) {
        setLoading(false);
        // setError(error.message);
        console.log(error);
      }
    };

    fetchArticles();
  }, []);

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
