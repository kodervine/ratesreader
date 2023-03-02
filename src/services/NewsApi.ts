import { useState, useEffect } from "react";

interface Article {
  author: string;
  title: string;
  description: string;
}

interface Response {
  articles: Article[];
}

export function useFetchNews(): Article[] | null {
  const [articles, setArticles] = useState<Article[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=ng&apiKey=bb35831a96ff46feaa9a86668569191d"
        );
        const data: Response = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return articles;
}
