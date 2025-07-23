import { Clock, User } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
  image?: string;
  featured?: boolean;
}

const NewsCard = ({
  title,
  excerpt,
  author,
  publishedAt,
  category,
  image,
  featured = false,
}: NewsCardProps) => {
  return (
    <article
      className={`bg-card border border-news-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {image && (
        <div className={`relative ${featured ? "h-64" : "h-48"} overflow-hidden`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-news-primary text-news-light px-2 py-1 text-xs font-medium rounded">
              {category}
            </span>
          </div>
        </div>
      )}
      
      <div className="p-6">
        <h2
          className={`font-bold text-news-dark mb-3 leading-tight hover:text-news-primary transition-colors cursor-pointer ${
            featured ? "text-2xl" : "text-lg"
          }`}
        >
          {title}
        </h2>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>{publishedAt}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;