import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";

const Technology = () => {
  const techNews = [
    {
      title: "Revolutionary AI Breakthrough in Medical Diagnosis",
      excerpt: "New artificial intelligence system demonstrates 95% accuracy in early disease detection, potentially transforming healthcare outcomes.",
      author: "Dr. Alex Kumar",
      publishedAt: "45 minutes ago",
      category: "AI & Health",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    },
    {
      title: "Quantum Computing Reaches New Milestone",
      excerpt: "Scientists achieve stable quantum state for record duration, bringing practical quantum computing closer to reality.",
      author: "Rachel Green",
      publishedAt: "2 hours ago",
      category: "Quantum",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    },
    {
      title: "Sustainable Tech Solutions Gain Momentum",
      excerpt: "Green technology initiatives show promising results in reducing carbon footprint across various industries.",
      author: "Tom Anderson",
      publishedAt: "5 hours ago",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-news-dark mb-2">Technology</h1>
          <p className="text-muted-foreground">Latest innovations, breakthroughs, and tech industry updates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techNews.map((article, index) => (
            <NewsCard
              key={index}
              {...article}
              featured={index === 0}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Technology;