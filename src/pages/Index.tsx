import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import NewsCard from "@/components/NewsCard";
import homepageImage from "@/assets/homepage.png";

interface Article {
  id: number;
  title: string;
  content: string;
  image_url?: string;
  author?: string;
  created_at?: string;
  tags?: string[];
}

const IndexPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = useScroll();

  // animations
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const cardsOpacity = useTransform(scrollY, [150, 450], [0, 1]);
  const cardsY = useTransform(scrollY, [150, 450], [50, 0]);
  const articlesTitleOpacity = useTransform(scrollY, [300, 500], [0, 1]);

  // ----------------------------
  // STATE
  // ----------------------------
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const limit = 12;

  // ----------------------------
  // FETCH ARTICLES
  // ----------------------------
  const fetchArticles = async (pageNum: number) => {
    try {
      if (pageNum === 1) setLoading(true);
      else setLoadingMore(true);

      const res = await fetch(
        `https://cnaws.in/api/articles_get.php?page=${pageNum}&limit=${limit}`,
        { credentials: "include" }
      );

      const data = await res.json();

      if (data.success) {
        if (pageNum === 1) {
          setArticles(data.articles || []);
        } else {
          setArticles(prev => [...prev, ...(data.articles || [])]);
        }
        setHasMore(data.articles && data.articles.length === limit);
      } else {
        console.error("Failed to fetch articles:", data.message);
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error fetching articles:", err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchArticles(1);
  }, []);

  // ----------------------------
  // TAG HANDLING
  // ----------------------------
  const queryParams = new URLSearchParams(location.search);
  const initialTag = queryParams.get("tag");

  const [selectedTag, setSelectedTag] = useState<string | null>(initialTag);

  useEffect(() => {
    if (initialTag) {
      setSelectedTag(initialTag);
      // auto-scroll to articles when coming from tag link
      setTimeout(() => {
        if (articlesRef.current) {
          articlesRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    }
  }, [initialTag]);

  // ----------------------------
  // TAGS (from articles)
  // ----------------------------
  const allTags = articles.flatMap(a => a.tags || []);
  const tagCounts: Record<string, number> = {};
  allTags.forEach(tag => {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  });
  const sortedTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);
  const limitedTags: string[] = sortedTags.slice(0, 8);

  // ----------------------------
  // HANDLERS
  // ----------------------------
  const articlesRef = useRef<HTMLDivElement | null>(null);

  const handleExploreClick = () => {
    if (articlesRef.current) {
      articlesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    navigate(`/?tag=${encodeURIComponent(tag)}`);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchArticles(nextPage);
  };

  // ----------------------------
  // RENDER
  // ----------------------------
  return (
    <div className="relative flex flex-col min-h-screen text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <img
          src={homepageImage}
          alt="Homepage"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Filtered Articles Section */}
      {selectedTag && (
        <main ref={articlesRef} className="container mx-auto px-6 md:px-12 mt-10 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Articles tagged #{selectedTag}
            </h2>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow transition"
              onClick={() => {
                setSelectedTag(null);
                navigate("/");
              }}
            >
              &larr; Go Back
            </button>
          </div>
          {loading ? (
            <p className="text-center text-gray-400">Loading articles...</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {articles
                .filter(article => (article.tags || []).includes(selectedTag))
                .map(article => (
                  <div
                    key={article.id}
                    className="shadow-xl rounded-2xl overflow-hidden bg-white text-gray-900 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                  >
                    <NewsCard {...article} />
                  </div>
                ))}
            </div>
          )}
        </main>
      )}

      {/* Hero + Articles Section */}
      {!selectedTag && (
        <>
          {/* Hero Section */}
          <motion.section
            style={{ opacity: heroOpacity }}
            className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12"
          >
            <div className="flex flex-col items-center max-w-3xl w-full mx-auto text-center">
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg"
              >
                Tracking Tomorrow's Battles Today
              </motion.h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-sm">
                Get the latest news and reports from across the globe — all in one place.
              </p>
              <motion.button
                onClick={handleExploreClick}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold shadow-md border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 mb-8"
              >
                Explore Insights
              </motion.button>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg w-full"
              >
                <h2 className="text-2xl font-semibold mb-4">Popular Tags</h2>
                <div className="flex flex-wrap gap-3 justify-center">
                  {limitedTags.length === 0 ? (
                    <span className="text-gray-300">No tags found</span>
                  ) : (
                    limitedTags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        onClick={() => handleTagClick(tag)}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.25)" }}
                        className={`px-4 py-2 text-sm rounded-full bg-white/10 backdrop-blur-md cursor-pointer border border-white/20 transition-all duration-300 ${
                          selectedTag === tag ? "bg-blue-600 text-white" : ""
                        }`}
                      >
                        #{tag}
                      </motion.span>
                    ))
                  )}
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Articles Section */}
          <motion.div
            style={{ opacity: articlesTitleOpacity }}
            className="text-4xl md:text-5xl font-bold text-white text-center mt-12 mb-8"
          >
            Latest Insights & Reports
          </motion.div>

          <main ref={articlesRef} className="container mx-auto px-6 md:px-12 mb-20">
            {loading ? (
              <p className="text-center text-gray-400">Loading articles...</p>
            ) : articles.length === 0 ? (
              <p className="text-center text-gray-400">No articles available.</p>
            ) : (
              <>
                <motion.div
                  style={{ opacity: cardsOpacity, y: cardsY }}
                  className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >
                  {articles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 50, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 25,
                        delay: index * 0.05,
                      }}
                      className="shadow-xl rounded-2xl overflow-hidden bg-white text-gray-900 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                    >
                      <NewsCard {...article} />
                    </motion.div>
                  ))}
                </motion.div>

                {hasMore && (
                  <div className="flex justify-center mt-10">
                    <button
                      onClick={handleLoadMore}
                      disabled={loadingMore}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition disabled:opacity-50"
                    >
                      {loadingMore ? "Loading..." : "Load More"}
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </>
      )}
    </div>
  );
};

export default IndexPage;
