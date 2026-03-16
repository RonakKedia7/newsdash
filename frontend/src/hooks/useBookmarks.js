import { useEffect, useState } from "react";

export default function useBookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let userId = localStorage.getItem("userId");
  if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem("userId", userId);
  }

  const API_BASE = import.meta.env.VITE_BACKEND_BASE_URL;

  useEffect(() => {
    const fetchBookmarks = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/api/bookmarks?userId=${userId}`);
        if (!res.ok) throw new Error("Failed to fetch bookmarks");
        const data = await res.json();
        setBookmarks(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, [userId]);

  const toggleBookmark = async (article) => {
    const exists = bookmarks.find((b) => b.url === article.url);

    try {
      if (exists) {
        const bookmarkId = exists._id;
        const res = await fetch(
          `${API_BASE}/api/bookmarks/${bookmarkId}?userId=${userId}`,
          {
            method: "DELETE",
          },
        );
        if (!res.ok) throw new Error("Failed to remove bookmark");
        setBookmarks((prev) => prev.filter((b) => b.url !== article.url));
      } else {
        const res = await fetch(`${API_BASE}/api/bookmarks`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...article, userId }),
        });
        if (!res.ok) throw new Error("Failed to add bookmark");
        const data = await res.json();
        setBookmarks((prev) => [...prev, data]);
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return { bookmarks, toggleBookmark, loading, error };
}
