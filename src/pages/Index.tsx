import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import NewsCard from "@/components/NewsCard";
import homepageImage from "@/assets/homepage.png";

const IndexPage = () => {
  const navigate = useNavigate();
  const { scrollY } = useViewportScroll();

  // Animations based on scroll
  const bgOpacity = useTransform(scrollY, [0, 300], [1, 0.7]);
  const bgScale = useTransform(scrollY, [0, 300], [1.05, 1]); 
  const cardOpacity = useTransform(scrollY, [120, 350], [0, 1]);
  const cardY = useTransform(scrollY, [120, 350], [50, 0]);

  const tags = [
    "#BreakingNews", "#Politics", "#Tech", "#CyberSecurity",
    "#AI", "#WorldNews", "#Terrorism", "#Economy", "#WarUpdates", "#HumanRights"
  ];

  const headlines = [
    {
      title: "Global Summit Focuses on Climate Crisis",
      excerpt: "World leaders convene to address climate change policies and green energy investments.",
      author: "Jane Doe",
      publishedAt: "2h ago",
      category: "Environment",
      image: "/team/image2.avif"
    },
    {
      title: "Cyberattack Hits Major Financial Institutions",
      excerpt: "Several banks report data breaches in a coordinated cybersecurity assault.",
      author: "John Smith",
      publishedAt: "3h ago",
      category: "Cybersecurity",
      image: "https://source.unsplash.com/featured/?cybersecurity,hacking"
    },
    {
      title: "Breakthrough in AI Research Stuns Tech Industry",
      excerpt: "A new AI model sets benchmarks in natural language understanding and reasoning.",
      author: "Alex Turner",
      publishedAt: "4h ago",
      category: "Technology",
      image: "https://source.unsplash.com/featured/?AI,technology"
    }
  ];

  const handleExploreClick = () => navigate("/news");
  const handleTagClick = (tag) => navigate(`/news?tag=${encodeURIComponent(tag)}`);

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background with Parallax Zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${homepageImage})`,
          opacity: bgOpacity,
          scale: bgScale
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-0" />

      <main className="flex-grow relative z-10 px-6 py-12 md:px-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[75vh]">
          {/* Left Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              Stay Informed. <br /> Stay Ahead.
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-md text-gray-200 drop-shadow-sm">
              Get the latest news and reports from across the globe — all in one place.
            </p>
            <motion.button
              aria-label="Explore latest news"
              onClick={handleExploreClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition"
            >
              Explore News
            </motion.button>
          </motion.div>

          {/* Right Side: Trending Tags */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Trending Tags</h2>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, idx) => (
                <motion.span
                  key={idx}
                  onClick={() => handleTagClick(tag)}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 text-sm rounded-full bg-white/20 backdrop-blur-sm cursor-pointer hover:bg-blue-500 hover:text-white transition shadow-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Headline Cards Section */}
        <motion.div
          style={{ opacity: cardOpacity, y: cardY }}
          className="mt-12 mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Top Headlines</h2>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {headlines.map((article, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="shadow-xl rounded-2xl overflow-hidden bg-white text-gray-900"
              >
                <NewsCard {...article} featured={index === 0} loading="lazy" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default IndexPage;
