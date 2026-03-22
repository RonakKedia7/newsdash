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

  if (loading) return <Loader />;

  if (bookmarks && bookmarks.length === 0)
    return (
      <div className="min-h-[83%] bg-slate-900">
        <TextAnimation />

        <div className="w-full flex justify-start">
          <p className="mt-16 md:mt-20 p-6 md:p-10 text-gray-400 text-2xl md:text-4xl">
            No bookmarks yet.
          </p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-900">
      <TextAnimation />

      {/* GRID */}
      <div className="px-4 md:px-8 py-6 grid gap-5 md:gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {bookmarks.map((article) => {
          const isBookmarked = bookmarks.some((a) => a.url === article.url);

          return (
            <article
              key={article.url}
              className="flex flex-col border border-white rounded-xl overflow-hidden h-full"
            >
              {/* IMAGE */}
              <img
                onClick={() => handleClick(article)}
                src={
                  article.urlToImage ||
                  "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg"
                }
                alt={article.title}
                className="h-40 md:h-48 w-full object-cover cursor-pointer"
              />

              {/* CONTENT */}
              <div className="p-4 flex flex-col flex-1">
                {/* TIME */}
                <div className="flex items-center gap-2 mb-2 text-gray-300 text-xs md:text-sm">
                  <Clock size={14} className="text-yellow-300" />
                  <span>{formatTimeAgo(article.publishedAt)}</span>
                </div>

                {/* TITLE */}
                <h2 className="font-bold text-base md:text-lg mb-2 leading-snug">
                  {article.title}
                </h2>

                {/* DESC */}
                <p className="text-gray-400 text-sm flex-1 mb-4 line-clamp-3">
                  {article.description}
                </p>

                {/* ACTIONS */}
                <div className="flex justify-between items-center mt-auto">
                  {/* BOOKMARK */}
                  <button
                    onClick={() => toggleBookmark(article)}
                    className="p-2 border border-white rounded hover:bg-slate-950 transition"
                  >
                    {isBookmarked ? (
                      <BookmarkCheck size={16} className="text-yellow-300" />
                    ) : (
                      <Bookmark size={16} />
                    )}
                  </button>

                  {/* READ */}
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-yellow-300 text-slate-900 px-3 py-1 rounded font-semibold text-xs md:text-sm hover:bg-yellow-400 transition"
                  >
                    Read
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Bookmarks;
