import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NewsCard from "@/components/NewsCard";
import homepageImage from "@/assets/homepage.png";

interface Article {
  id: number;
  title: string;
  content: string;
  image_url?: string;
  author?: string;
  created_at?: string;
}

const IndexPage = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const cardsOpacity = useTransform(scrollY, [150, 450], [0, 1]);
  const cardsY = useTransform(scrollY, [150, 450], [50, 0]);
  const articlesTitleOpacity = useTransform(scrollY, [300, 500], [0, 1]);

  const tags = [
    "#BreakingNews", "#Politics", "#Tech", "#CyberSecurity",
    "#AI", "#WorldNews", "#Terrorism", "#Economy", "#WarUpdates", "#HumanRights"
  ];

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch articles from backend
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchArticles = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/articles_get.php?t=${Date.now()}`, {
          credentials: "include", // important!
          signal,
        });
        const data = await res.json();

        if (data.success) setArticles(data.articles || []);
        else console.error("Failed to fetch articles:", data.message);
      } catch (err) {
        console.error("Error fetching articles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
    return () => controller.abort();
  }, []);

  const handleExploreClick = () => navigate("/emerging");
  const handleTagClick = (tag: string) => navigate(`/emerging?tag=${encodeURIComponent(tag)}`);

  return (
    <div className="relative flex flex-col min-h-screen text-white overflow-x-hidden">
      {/* Fixed Background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <img src={homepageImage} alt="Homepage" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl w-full">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center max-w-lg"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              Tracking Tomorrow's Battles Today
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-sm">
              Get the latest news and reports from across the globe — all in one place.
            </p>
            <motion.button
              onClick={handleExploreClick}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold shadow-md border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              Explore Insights
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Trending Tags</h2>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, idx) => (
                <motion.span
                  key={idx}
                  onClick={() => handleTagClick(tag)}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.25)" }}
                  className="px-4 py-2 text-sm rounded-full bg-white/10 backdrop-blur-md cursor-pointer border border-white/20 transition-all duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        style={{ opacity: articlesTitleOpacity }}
        className="text-4xl md:text-5xl font-bold text-white text-center mt-12 mb-8"
      >
        Latest Insights & Reports
      </motion.div>

      <main className="container mx-auto px-6 md:px-12 mb-20">
        {loading ? (
          <p className="text-center text-gray-400">Loading articles...</p>
        ) : articles.length === 0 ? (
          <p className="text-center text-gray-400">No articles available.</p>
        ) : (
          <motion.div
            style={{ opacity: cardsOpacity, y: cardsY }}
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 280, damping: 25, delay: index * 0.05 }}
                className="shadow-xl rounded-2xl overflow-hidden bg-white text-gray-900 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <NewsCard {...article} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default IndexPage;
