import React, { useContext, FC, useState, useEffect } from "react";

type ForexApiArticle = {
  title: string;
  description: string;
  url: string;
  source: { name: string };
  author: string;
};

type ForexApiContextType = {
  ForexApiArticles: ForexApiArticle[];
  loading: boolean;
  error: string | null;
};

const ForexApiContext = React.createContext<ForexApiContextType>({
  ForexApiArticles: [],
  loading: true,
  error: null,
});

const ForexApiProvider: FC = ({ children }: any) => {
  // define state and functions here
  const [ForexApiArticles, setForexApiArticles] = useState<ForexApiArticle[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `http://api.exchangeratesapi.io/v1/latest?access_key= ${
            import.meta.env.VITE_EXCHANGE_RATES_API_KEY
          }`
        );
        const data = await response.json();
        setForexApiArticles(data.articles);
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
    <ForexApiContext.Provider value={{ ForexApiArticles, loading, error }}>
      {children}
    </ForexApiContext.Provider>
  );
};

export const useNewsContext = (): ForexApiContextType => {
  const context = useContext(ForexApiContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within ForexApiContext");
  }
  return context;
};

export { ForexApiContext, ForexApiProvider };
