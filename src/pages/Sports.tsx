import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";

const Sports = () => {
  const sportsNews = [
    {
      title: "Championship Finals Set Record Viewership",
      excerpt: "Last night's thrilling championship game attracted over 50 million viewers, marking the highest ratings in tournament history.",
      author: "Mike Johnson",
      publishedAt: "1 hour ago",
      category: "Championships",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
    },
    {
      title: "Olympic Preparations Underway",
      excerpt: "Athletes from around the world intensify training as the upcoming Olympic Games approach, with new safety protocols in place.",
      author: "Sophie Martinez",
      publishedAt: "3 hours ago",
      category: "Olympics",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    },
    {
      title: "Youth Sports Programs Expand Nationwide",
      excerpt: "New initiative provides equipment and coaching to underserved communities, promoting athletic participation among young people.",
      author: "Carlos Rivera",
      publishedAt: "6 hours ago",
      category: "Youth Sports",
      image: "https://images.unsplash.com/photo-1593764552116-fa5273d52108?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-news-dark mb-2">Sports</h1>
          <p className="text-muted-foreground">Athletic achievements, game results, and sports industry news</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportsNews.map((article, index) => (
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

export default Sports;