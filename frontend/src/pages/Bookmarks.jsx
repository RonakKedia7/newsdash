import TextAnimation from "../components/TextAnimation";
import useBookmarks from "../hooks/useBookmarks";
import { Bookmark, BookmarkCheck, ExternalLink, Clock } from "lucide-react";
import formatTimeAgo from "../utils/formatTimeAgo";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Bookmarks = () => {
  const { bookmarks, toggleBookmark, loading } = useBookmarks();
  const navigate = useNavigate();

  const handleClick = (article) => {
    navigate(`/article/${encodeURIComponent(article.url)}`, {
      state: { article },
    });
  };

  if (loading) {
    return <Loader />;
  }

  if (bookmarks && bookmarks.length === 0)
    return (
      <div className="min-h-[83%] bg-slate-900">
        <TextAnimation />
        <div className="bg-slate-900 w-full h-full flex justify-start">
          <p className="mt-20 p-10 text-gray-400 text-4xl">No bookmarks yet.</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-900">
      <TextAnimation />

      <div className="p-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {bookmarks.map((article) => (
          <article
            key={article.url}
            className="flex flex-col border border-white rounded-xl overflow-hidden shadow-lg"
          >
            {article.urlToImage && (
              <img
                onClick={() => handleClick(article)}
                src={article.urlToImage}
                alt={article.title}
                className="h-48 w-full object-cover cursor-pointer"
              />
            )}

            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2 text-gray-300">
                <Clock size={16} className="text-yellow-300" />
                <span className="text-sm">
                  {formatTimeAgo(article.publishedAt)}
                </span>
              </div>

              <h2 className="font-bold text-lg mb-2 text-white">
                {article.title}
              </h2>
              <p className="text-gray-400 text-sm flex-1 mb-4">
                {article.description}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleBookmark(article)}
                    className="p-2 border border-white rounded hover:bg-red-600  cursor-pointer transition-colors"
                  >
                    {bookmarks.some((a) => a.url === article.url) ? (
                      <BookmarkCheck size={18} className="text-yellow-300" />
                    ) : (
                      <Bookmark size={18} />
                    )}
                  </button>
                </div>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-yellow-300 text-slate-900 px-3 py-1 rounded font-semibold hover:bg-yellow-400 transition-colors text-sm"
                >
                  Read
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
