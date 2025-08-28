import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import NewsCard from "@/components/NewsCard";

interface Article {
  id: number;
  title: string;
  content?: string;
  image_url?: string;
  author?: string;
  created_at?: string;
}

// Fetch all articles (we filter client-side for single + related)
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

  const relatedArticles = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        &larr; Back to Articles
      </button>

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

      <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
        {article.title}
      </motion.h1>

      <motion.div className="flex flex-wrap items-center text-gray-500 dark:text-gray-400 text-sm mb-8 gap-4">
        {article.author && <span className="font-semibold">{article.author}</span>}
        {article.created_at && <span>{new Date(article.created_at).toLocaleDateString()}</span>}
      </motion.div>

      <motion.div className="prose max-w-full text-gray-800 dark:text-gray-100">
        {article.content ? (
          <div
            className="dark-prose"
            dangerouslySetInnerHTML={{
              __html: article.content
                ?.replace(/<img /g, '<img class="mx-auto my-6 rounded-lg max-w-full h-auto" ')
                ?.replace(/<a /g, '<a class="text-blue-600 dark:text-blue-400 hover:underline" '),
            }}
          />
        ) : (
          <p>No content available for this article.</p>
        )}
      </motion.div>

      {relatedArticles.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Related Articles</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((ra) => (
              <NewsCard key={ra.id} {...ra} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
