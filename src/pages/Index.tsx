import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { TrendingUp, Globe, Users } from "lucide-react";

const Index = () => {
  const featuredNews = [
    {
      title: "Breaking: Historic Peace Agreement Signed",
      excerpt: "After months of negotiations, world leaders reach a landmark agreement that promises to reshape international relations for decades to come.",
      author: "Jennifer Adams",
      publishedAt: "15 minutes ago",
      category: "Breaking News",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
      featured: true,
    },
    {
      title: "Revolutionary Medical Treatment Shows Promise",
      excerpt: "Clinical trials reveal breakthrough therapy could change treatment protocols for millions of patients worldwide.",
      author: "Dr. Sarah Kim",
      publishedAt: "1 hour ago",
      category: "Health",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
    },
    {
      title: "Economic Markets React to Policy Changes",
      excerpt: "Global financial indicators show positive response to new economic policies announced by major world economies.",
      author: "Mark Thompson",
      publishedAt: "2 hours ago",
      category: "Economics",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    },
    {
      title: "Space Mission Achieves Major Milestone",
      excerpt: "International space collaboration reaches unprecedented achievement in deep space exploration and research.",
      author: "Dr. Emily Watson",
      publishedAt: "3 hours ago",
      category: "Science",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    },
    {
      title: "Environmental Initiative Gains Global Support",
      excerpt: "Innovative conservation project receives backing from multiple nations, promising significant environmental impact.",
      author: "Lucas Green",
      publishedAt: "4 hours ago",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1569163139394-de44cb2b7d46?w=800&h=600&fit=crop",
    },
  ];

  const stats = [
    { icon: Globe, label: "TIK TOKER BHAVNEET", value: "150 JAGAH" },
    { icon: Users, label: "PEOPLE READING THIS SHIT", value: "2.5M+" },
    { icon: TrendingUp, label: "AAJ KI TAZA KHABAR", value: "24/7" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-news-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-news-dark mb-4">
              PORNHUB
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              BHUNDNEET SINGH BAHUJA
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Explore LATEST NUDES
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-news-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-news-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-news-dark mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-news-dark mb-2">Latest Headlines</h2>
          <p className="text-muted-foreground">NEWS KA PYASA</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredNews.map((article, index) => (
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

export default Index;