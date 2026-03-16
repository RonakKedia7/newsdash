import { useEffect, useState } from "react";

export default function useNews(category) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE = import.meta.env.VITE_BACKEND_BASE_URL;

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `${API_BASE}/api/articles?category=${category}`,
        );
        if (!res.ok) throw new Error("Failed to fetch articles from backend");
        const data = await res.json();
        setArticles(data.slice(0, 7));
      } catch (err) {
        console.error(err);
        setError(err.message);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  return { articles, loading, error };
}
