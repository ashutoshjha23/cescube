import { useState, useEffect } from "react";
import { useAuth } from "@/App";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  image_url?: string;
  created_at: string;
}

// Detect API URL based on environment
const API_BASE = window.location.hostname.includes("localhost")
  ? "http://localhost:8080/api"
  : "https://cnaws.in/api";

const AdminPanel = () => {
  const { logout } = useAuth();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"list" | "add" | "edit">("list");
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);

  // Form states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Admin");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch articles
  const fetchArticles = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/articles_get.php`, {
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) setArticles(data.articles);
      else setError(data.message || "Failed to fetch articles");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch articles. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Reset form when switching to Add view
  useEffect(() => {
    if (view === "add") {
      setCurrentArticle(null);
      setTitle("");
      setContent("");
      setAuthor("Admin");
      setImageFile(null);
      setImagePreview(null);
      setError("");
      setSuccessMessage("");
    }
  }, [view]);

  // Handle Add/Edit
  const handleAddOrEdit = async () => {
    setError("");
    setSuccessMessage("");

    if (!title || !content || !author)
      return setError("Title, author, and content are required");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author", author);
    if (imageFile) formData.append("image", imageFile);

    const url =
      view === "add"
        ? `${API_BASE}/articles_post.php`
        : `${API_BASE}/articles_update.php?id=${currentArticle?.id}`;

    try {
      const res = await fetch(url, {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setView("list");
        fetchArticles();
        setSuccessMessage(data.message || "Article saved successfully");
      } else setError(data.message || "Failed to save article");
    } catch (err) {
      console.error(err);
      setError("Failed to save article. Check backend.");
    }
  };

  // Handle Delete
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this article?")) return;
    setError("");
    setSuccessMessage("");

    try {
      const formData = new FormData();
      formData.append("id", id.toString());

      const res = await fetch(`${API_BASE}/articles_delete.php`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMessage("Article deleted successfully");
        fetchArticles();
      } else setError(data.message || "Failed to delete article");
    } catch (err) {
      console.error(err);
      setError("Failed to delete article");
    }
  };

  // Handle Edit click
  const handleEdit = (article: Article) => {
    setCurrentArticle(article);
    setTitle(article.title);
    setContent(article.content);
    setAuthor(article.author);
    setImageFile(null);
    setImagePreview(article.image_url ? `${API_BASE}/${article.image_url}` : null);
    setView("edit");
    setError("");
    setSuccessMessage("");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex-shrink-0 p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => setView("list")}
            className={`text-left px-4 py-2 rounded ${
              view === "list" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Articles
          </button>
          <button
            onClick={() => setView("add")}
            className={`text-left px-4 py-2 rounded ${
              view === "add" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Add New
          </button>
          <button
            onClick={logout}
            className="mt-auto bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {view === "list" ? (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Articles</h2>
              <button
                onClick={() => setView("add")}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Add New Article
              </button>
            </div>

            {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
            {error && <p className="text-red-500 mb-2">{error}</p>}

            {loading ? (
              <p>Loading articles...</p>
            ) : (
              <table className="w-full text-left border-collapse shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 border-b">ID</th>
                    <th className="p-3 border-b">Title</th>
                    <th className="p-3 border-b">Author</th>
                    <th className="p-3 border-b">Image</th>
                    <th className="p-3 border-b">Created At</th>
                    <th className="p-3 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((a) => (
                    <tr key={a.id} className="hover:bg-gray-50">
                      <td className="p-3 border-b">{a.id}</td>
                      <td className="p-3 border-b">{a.title}</td>
                      <td className="p-3 border-b">{a.author}</td>
                      <td className="p-3 border-b">
                        {a.image_url && (
                          <img
                            src={`${API_BASE}/${a.image_url}`}
                            alt={a.title}
                            className="h-12 w-20 object-cover rounded"
                          />
                        )}
                      </td>
                      <td className="p-3 border-b">{new Date(a.created_at).toLocaleDateString()}</td>
                      <td className="p-3 border-b flex gap-2">
                        <button
                          onClick={() => handleEdit(a)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(a.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setView("list")}
              className="mb-4 text-blue-600 hover:underline"
            >
              &larr; Back to Articles
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {view === "add" ? "Add New Article" : "Edit Article"}
            </h2>
            {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
            {error && <p className="text-red-500 mb-2">{error}</p>}

            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 rounded mb-2 w-full"
            />
            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border p-2 rounded mb-2 w-full"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setImageFile(e.target.files[0]);
                  setImagePreview(URL.createObjectURL(e.target.files[0]));
                }
              }}
              className="border p-2 rounded mb-2 w-full"
            />
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="mb-2 h-24 object-cover rounded" />
            )}

            <ReactQuill value={content} onChange={setContent} className="mb-4" />

            <button
              onClick={handleAddOrEdit}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              {view === "add" ? "Add Article" : "Update Article"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;
