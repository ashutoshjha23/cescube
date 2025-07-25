import NewsCard from "@/components/NewsCard";
import Footer from "@/components/Footer";

const Politics = () => {
  const politicsNews = [
    {
      title: "Senate Passes Major Infrastructure Bill",
      excerpt:
        "Bipartisan legislation allocates billions for roads, bridges, and digital infrastructure improvements across the nation.",
      author: "David Williams",
      publishedAt: "1 hour ago",
      category: "Legislation",
      image:
        "https://images.unsplash.com/photo-1555848962-6e79363bfa19?w=800&h=600&fit=crop",
    },
    {
      title: "Diplomatic Relations Strengthen Between Nations",
      excerpt:
        "High-level talks result in new cooperation agreements on trade and security matters.",
      author: "Anna Thompson",
      publishedAt: "3 hours ago",
      category: "Diplomacy",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop",
    },
    {
      title: "Local Elections See Record Voter Turnout",
      excerpt:
        "Citizens across multiple states participate in unprecedented numbers for municipal elections.",
      author: "Robert Garcia",
      publishedAt: "5 hours ago",
      category: "Elections",
      image:
        "https://images.unsplash.com/photo-1541872705-1f73c6400ec9?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-news-dark dark:text-white mb-2">Politics</h1>
          <p className="text-muted-foreground">
            Latest political developments and government news
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {politicsNews.map((article, index) => (
            <NewsCard key={index} {...article} featured={index === 0} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Politics;
