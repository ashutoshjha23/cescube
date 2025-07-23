import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";

const Business = () => {
  const businessNews = [
    {
      title: "Tech Stocks Rally as Market Confidence Returns",
      excerpt: "Major technology companies see significant gains following positive earnings reports and future growth projections.",
      author: "Lisa Chang",
      publishedAt: "30 minutes ago",
      category: "Markets",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    },
    {
      title: "Startup Secures Record-Breaking Funding Round",
      excerpt: "Innovative fintech company raises $500 million in Series C funding, highlighting investor confidence in financial technology.",
      author: "James Mitchell",
      publishedAt: "2 hours ago",
      category: "Startups",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop",
    },
    {
      title: "Supply Chain Innovations Drive Efficiency",
      excerpt: "Companies adopt AI-powered logistics solutions to reduce costs and improve delivery times across global networks.",
      author: "Maria Santos",
      publishedAt: "4 hours ago",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-news-dark mb-2">Business</h1>
          <p className="text-muted-foreground">Financial markets, corporate news, and economic insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessNews.map((article, index) => (
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

export default Business;