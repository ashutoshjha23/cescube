import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import NewsCard from "@/components/NewsCard";
import "@/styles/quill.css";


interface Article {
  id: number;
  title: string;
  content?: string;
  image_url?: string;
  author?: string;
  author_details?: {
    id?: number;
    name: string;
    description?: string;
    image_url?: string;
  };
  created_at?: string;
  tags?: string[];
}

// Fetch all articles
const fetchArticles = async () => {
  const res = await fetch(`https://cnaws.in/api/articles_get.php`);
  if (!res.ok) throw new Error(`Failed to fetch articles: ${res.status}`);
  const json = await res.json();
  return json.articles as Article[];
};

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { data: articles, isLoading, error } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
    staleTime: 1000 * 60 * 5,
  });

  if (!id) return <p className="text-center mt-10 text-red-500">Invalid article ID</p>;
  if (isLoading) return <p className="text-center mt-10 text-gray-500">Loading article...</p>;
  if (error || !articles) return <p className="text-center mt-10 text-red-500">Error loading article.</p>;

  const article = articles.find((a) => a.id.toString() === id);
  if (!article) return <p className="text-center mt-10 text-red-500">Article not found.</p>;

  // Related articles: only those with at least one matching tag
  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.tags && article.tags && a.tags.some(tag => article.tags!.includes(tag)))
    .slice(0, 3);

  // Construct author image URL properly
  const getAuthorImageUrl = (author?: { image_url?: string }) => {
    if (!author?.image_url) return "/default-avatar.png";
    // If already a full URL
    if (author.image_url.startsWith("http")) return author.image_url;
    // If already starts with /uploads or uploads, just prefix domain
    if (author.image_url.startsWith("/uploads/")) {
      return `https://cnaws.in/api${author.image_url}`;
    }
    if (author.image_url.startsWith("uploads/")) {
      return `https://cnaws.in/api/${author.image_url}`;
    }
    // Otherwise, assume it's just the filename
    return `https://cnaws.in/api/uploads/authors/${author.image_url}`;
  };


  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        &larr; Back to Articles
      </button>

      {/* Article Image */}
      {article.image_url && (
        <motion.div
          className="w-full relative mb-8 rounded-3xl overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-800"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ paddingTop: "56.25%" }}
        >
          {!imageLoaded && <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse" />}
          <img
            src={`https://cnaws.in/api/${article.image_url}`}
            alt={article.title}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => (e.currentTarget.src = "/placeholder.png")}
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      )}

      {/* Title */}
      <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
        {article.title}
      </motion.h1>

      {/* Author & Date */}
      <motion.div className="flex flex-wrap items-center text-gray-500 dark:text-gray-400 text-sm mb-8 gap-4">
        {article.author_details?.name && (
          <span>{article.author_details.name}</span>
        )}
        {article.created_at && <span>{new Date(article.created_at).toLocaleDateString()}</span>}
      </motion.div>

<motion.div className="max-w-full text-gray-800 dark:text-gray-100 quill-content prose dark:prose-invert">
  {article.content ? (
    <div
      dangerouslySetInnerHTML={{
        __html: article.content
          ?.replace(
            /<img /g,
            '<img class="mx-auto my-6 rounded-lg max-w-full h-auto" '
          )
          ?.replace(
            /<a /g,
            '<a class="text-blue-600 dark:text-blue-400 hover:underline" '
          ),
      }}
    />
  ) : (
    <p>No content available for this article.</p>
  )}
</motion.div>


      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}



      {/* Author Card */}
      {article.author_details && (
        <div className="mt-20 p-6 bg-gray-100 dark:bg-gray-900 rounded-2xl shadow flex flex-row items-center gap-6 max-w-2xl mx-auto">
          <img
            src={getAuthorImageUrl(article.author_details)}
            alt={article.author_details.name}
            className="w-28 h-28 rounded-xl object-cover border-2 border-blue-500 flex-shrink-0"
            style={{ objectFit: 'cover' }}
            onError={(e) => (e.currentTarget.src = "/default-avatar.png")}
          />
          <div className="flex-1">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-widest mb-1 block">AUTHOR</span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{article.author_details.name}</h3>
            {article.author_details.description && (
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{article.author_details.description}</p>
            )}
          </div>
        </div>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Related Articles</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((ra) => (
              <NewsCard key={ra.id} {...ra} content={ra.content || ""} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
