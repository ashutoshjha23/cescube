import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";

const World = () => {
  const worldNews = [
    {
      title: "Global Climate Summit Reaches Historic Agreement",
      excerpt: "World leaders unite on ambitious new climate targets for 2030, marking a significant step forward in environmental protection.",
      author: "Sarah Johnson",
      publishedAt: "2 hours ago",
      category: "Climate",
      image: "https://images.unsplash.com/photo-1569163139394-de44cb2b7d46?w=800&h=600&fit=crop",
    },
    {
      title: "International Trade Relations Show Signs of Recovery",
      excerpt: "New bilateral agreements signal improving economic cooperation between major trading partners.",
      author: "Michael Chen",
      publishedAt: "4 hours ago",
      category: "Economy",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop",
    },
    {
      title: "Humanitarian Aid Reaches Remote Regions",
      excerpt: "International organizations successfully deliver essential supplies to areas affected by recent natural disasters.",
      author: "Elena Rodriguez",
      publishedAt: "6 hours ago",
      category: "Humanitarian",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-news-dark mb-2">World News</h1>
          <p className="text-muted-foreground">Stay updated with global events and international affairs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {worldNews.map((article, index) => (
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

export default World;