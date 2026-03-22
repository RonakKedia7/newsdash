import { useState, useLayoutEffect, useRef } from "react";
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

  const sectionRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".heading-left", {
        x: -150,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        ".heading-right",
        {
          x: 150,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-slate-900 text-white px-4 sm:px-6 md:px-12 py-16 md:py-24"
    >
      <div className="max-w-400 mx-auto">
        {/* HEADING */}
        <h2 className="font-black mb-10 md:mb-16 flex flex-wrap gap-3 md:gap-5 leading-none">
          <span className="heading-left text-4xl sm:text-6xl md:text-9xl">
            Latest
          </span>
          <span className="heading-right text-red-600 text-4xl sm:text-6xl md:text-9xl">
            Headlines
          </span>
        </h2>

        <CategoryTabs category={category} setCategory={setCategory} />

        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            {/* FEATURED */}
            {articles[0] && (
              <FeaturedArticle
                article={articles[0]}
                bookmarks={bookmarks}
                toggleBookmark={toggleBookmark}
              />
            )}

            {/* SIDE ARTICLES */}
            <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
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
