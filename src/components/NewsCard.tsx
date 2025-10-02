import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye } from "lucide-react"; // 👁️ lightweight icon

interface NewsCardProps {
  id: number;
  title: string;
  image_url?: string;
  author?: string;
  created_at?: string;
  views?: number; // ✅ new field for view count
  author_details?: {
    name: string;
    image_url?: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  image_url,
  author,
  created_at,
  views,
  author_details,
}) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    navigate(`/article/${id}`);
  };

  return (
    <motion.div
      className="cursor-pointer flex flex-col h-full rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-gray-900"
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Article Image */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-300 dark:bg-gray-800 animate-pulse" />
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
          <h3 className="text-lg font-bold mb-2 line-clamp-2 text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

{/* Author, Date & Views */}
<div className="mt-4 flex justify-between items-center text-gray-500 text-xs">
  {/* Author */}
  <div className="flex items-center gap-2">
    {author_details?.name && <span>{author_details.name}</span>}
  </div>

  {/* Date & Views */}
      <div className="flex items-center gap-4">
        {created_at && (
          <span>{new Date(created_at).toLocaleDateString()}</span>
        )}
        {typeof views === "number" && (
          <span className="flex items-center gap-1">
            <Eye size={14} className="opacity-70" />
            {views}
          </span>
        )}
      </div>
    </div>
    </div>
    </motion.div>
  );
};

export default NewsCard;
