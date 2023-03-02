import React, {
  useContext,
  createContext,
  FC,
  useState,
  useEffect,
} from "react";

// https://newsapi.org/v2/top-headlines?country=us&apiKey=bb35831a96ff46feaa9a86668569191d

// https://newsapi.org/v2/top-headlines?country=ng&apiKey=bb35831a96ff46feaa9a86668569191d

type NewsApiArticle = {
  title: string;
  description: string;
  url: string;
};

type NewsApiContextType = {
  articles: NewsApiArticle[];
  loading: boolean;
  error: string | null;
};

const NewsApiContext = React.createContext<NewsApiContextType>({
  articles: [],
  loading: true,
  error: null,
});

const NewsApiProvider: FC = ({ children }: any) => {
  // define state and functions here
  const [articles, setArticles] = useState<NewsApiArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=ng&apiKey=bb35831a96ff46feaa9a86668569191d"
        );
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchArticles();
  }, [articles]);

  return (
    <NewsApiContext.Provider value={{ articles, loading, error }}>
      {children}
    </NewsApiContext.Provider>
  );
};

export const useGlobalContext = (): NewsApiContextType => {
  const context = useContext(NewsApiContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within NewsApiProvider");
  }
  return context;
};

export { NewsApiContext, NewsApiProvider };
