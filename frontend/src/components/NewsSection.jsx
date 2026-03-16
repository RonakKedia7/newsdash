import { useState, useLayoutEffect } from "react";
import useNews from "../hooks/useNews";
import useBookmarks from "../hooks/useBookmarks";
import FeaturedArticle from "./FeaturedArticle";
import ArticleCard from "./ArticleCard";
import CategoryTabs from "./CategoryTabs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "./Loader";

gsap.registerPlugin(ScrollTrigger);

const NewsSection = () => {
  const [category, setCategory] = useState("general");
  const { articles, loading } = useNews(category);
  const { bookmarks, toggleBookmark } = useBookmarks();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".news-section",
        start: "top 80%",
        end: "top 10%",
        scrub: 2,
      },
    });

    tl.from(".heading-left", { x: -200, opacity: 0, duration: 1 }, "anim").from(
      ".heading-right",
      { x: 200, opacity: 0, duration: 1 },
      "anim",
    );
  }, []);

  return (
    <section className="min-h-screen bg-slate-900 text-white px-12 py-24 news-section">
      <div className="max-w-400 mx-auto">
        <h2 className="text-9xl font-black mb-16 flex gap-5">
          <span className="heading-left">Latest</span>
          <span className="text-red-600 heading-right">Headlines</span>
        </h2>

        <CategoryTabs category={category} setCategory={setCategory} />

        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-12 gap-10">
            {articles[0] && (
              <FeaturedArticle
                article={articles[0]}
                bookmarks={bookmarks}
                toggleBookmark={toggleBookmark}
              />
            )}

            <div className="col-span-5 flex flex-col gap-6">
              {articles.slice(1).map((article, i) => (
                <ArticleCard
                  key={i}
                  article={article}
                  bookmarks={bookmarks}
                  toggleBookmark={toggleBookmark}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
