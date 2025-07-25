import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import NewsCard from "@/components/NewsCard";
import Footer from "@/components/Footer";

const IndexPage = () => {
  const navigate = useNavigate();

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
      image: "https://source.unsplash.com/featured/?climate,earth"
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

  const handleExploreClick = () => {
    navigate("/news");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow px-6 py-12 md:px-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Stay Informed. Stay Ahead.
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-md">
              Get the latest news and reports from across the globe, all in one place.
            </p>
            <button
              onClick={handleExploreClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold w-fit transition"
            >
              Explore News
            </button>
          </motion.div>

          {/* Right Side: Tags Card */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-muted rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Trending Tags</h2>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-muted text-sm text-foreground px-3 py-1 rounded-full hover:bg-blue-100 cursor-pointer transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Headline Cards Section */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Top Headlines</h2>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {headlines.map((article, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <NewsCard {...article} featured={index === 0} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default IndexPage;
