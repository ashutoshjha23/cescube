import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface NewsCardProps {
  id: number;
  title: string;
  content: string;
  image_url?: string;
  author?: string;
  created_at?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  content,
  image_url,
  author,
  created_at,
}) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    navigate(`/article/${id}`);
  };

  return (
    <motion.div
      className="cursor-pointer flex flex-col h-full rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-gray-800"
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse" />
        )}
        <img
          src={
            !imageError && image_url
              ? `https://cnaws.in/api/${image_url}`
              : "/placeholder.png"
          }
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
            {content.replace(/<[^>]+>/g, "").slice(0, 150)}...
          </p>
        </div>

        <div className="mt-4 flex justify-between items-center text-gray-500 text-xs">
          {author && <span>{author}</span>}
          {created_at && (
            <span>{new Date(created_at).toLocaleDateString()}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;
