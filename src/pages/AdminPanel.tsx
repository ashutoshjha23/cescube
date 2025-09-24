import { useState, useEffect, forwardRef } from "react";
import { useAuth } from "@/App";
import ReactQuillOriginal from "react-quill";
import "react-quill/dist/quill.snow.css";


// Enhanced ReactQuill with custom toolbar and modules
const quillModules = {
  toolbar: [
    // Use only one of these:
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // headings + "Normal"
    // OR
    // [{ size: ["small", "large", "huge", false] }], // font sizes + "Normal"

    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const quillFormats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike',
  'color', 'background',
  'script', 'blockquote', 'code-block',
  'list', 'bullet', 'indent',
  'align', 'link', 'image', 'video'
];

// ✅ Fix: forwardRef must handle refs correctly
// Correct typing: ref points to ReactQuillOriginal instance
const ReactQuill = forwardRef<any, React.ComponentProps<typeof ReactQuillOriginal>>(
  (props, ref) => (
    <ReactQuillOriginal
      {...props}
      ref={ref}
      modules={quillModules}
      formats={quillFormats}
      theme="snow"
    />
  )
);
ReactQuill.displayName = "ReactQuill"; // avoid anonymous component warnings




interface Article {
  id: number;
  title: string;
  content: string;
  author?: string | number;
  author_details?: {
    id?: number;
    name: string;
    description?: string;
    image_url?: string;
  };
  image_url?: string;
  created_at: string;
  tags: string[];
}

interface Tag {
  id: number;
  name: string;
  articles: string[];
}

interface Author {
  id: number;
  name: string;
  description?: string;
  image_url?: string;
}

const API_BASE = window.location.hostname.includes("localhost")
  ? "http://localhost:8080/api"
  : "https://cnaws.in/api";

const AdminPanel = () => {
  const { logout } = useAuth();

  const [articles, setArticles] = useState<Article[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [newTag, setNewTag] = useState("");
  const [newAuthorName, setNewAuthorName] = useState("");
  const [newAuthorDesc, setNewAuthorDesc] = useState("");
  const [newAuthorImage, setNewAuthorImage] = useState<File | null>(null);

  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"articles" | "add" | "edit" | "tags" | "authors">("articles");
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);

  // Form states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState<number | "">(""); // ✅ default to empty string
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Author editing states
  const [editingAuthor, setEditingAuthor] = useState<Author | null>(null);
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editImage, setEditImage] = useState<File | null>(null);
  

  // =====================
  // Fetch Articles, Tags, Authors
  // =====================
  const fetchArticles = async () => {
    setLoading(true);
    setError("");
    try {
      // Always fetch authors first to ensure up-to-date mapping
      const authorsRes = await fetch(`${API_BASE}/authors/authors_get.php`, { credentials: "include" });
      const authorsData = await authorsRes.json();
      let authorsList = [];
      if (authorsData.success) {
        setAuthors(authorsData.authors);
        authorsList = authorsData.authors;
      }
      const res = await fetch(`${API_BASE}/articles_get.php`, { credentials: "include" });
      const data = await res.json();
      if (data.success) {
        setArticles(
          data.articles.map((a: any) => {
            // If author_details is missing, attach from authorsList
            if (!a.author_details && a.author && Array.isArray(authorsList)) {
              const found = authorsList.find((au) => au.id === Number(a.author));
              if (found) {
                a.author_details = {
                  id: found.id,
                  name: found.name,
                  description: found.description,
                  image_url: found.image_url,
                };
              }
            }
            return a;
          })
        );
      } else setError(data.message || "Failed to fetch articles");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch articles. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  const fetchTags = async () => {
    try {
      const res = await fetch(`${API_BASE}/tags/tags_get.php`, { credentials: "include" });
      const data = await res.json();
      if (data.success) setTags(data.tags);
    } catch (err) {
      console.error("Failed to fetch tags", err);
    }
  };

  const fetchAuthors = async () => {
    try {
      const res = await fetch(`${API_BASE}/authors/authors_get.php`, { credentials: "include" });
      const data = await res.json();
      if (data.success) setAuthors(data.authors);
    } catch (err) {
      console.error("Failed to fetch authors", err);
    }
  };

  useEffect(() => {
    fetchArticles();
    fetchTags();
    fetchAuthors();
  }, []);

  // Reset form when switching to Add view
  useEffect(() => {
    if (view === "add") {
      setCurrentArticle(null);
      setTitle("");
      setContent("");
      setAuthor(""); // ✅ reset to empty string
      setImageFile(null);
      setImagePreview(null);
      setSelectedTags([]);
      setError("");
      setSuccessMessage("");
    }
  }, [view]);

  // =====================
  // Add/Edit Article
  // =====================

const handleAddOrEdit = async () => {
setError("");
setSuccessMessage("");
if (!title || !content)
  return setError("Title and content are required");

const formData = new FormData();
formData.append("title", title);
formData.append("content", content);
if (author !== "") formData.append("author_id", author.toString());
if (imageFile) formData.append("image", imageFile);
selectedTags.forEach((tagId) => formData.append("tags[]", tagId.toString()));

  const url =
    view === "add"
      ? `${API_BASE}/article_add.php`
      : `${API_BASE}/articles_update.php?id=${currentArticle?.id}`;

  try {
    const res = await fetch(url, { method: "POST", credentials: "include", body: formData });
    const data = await res.json();
    if (data.success) {
      setView("articles");
      // Ensure articles are refetched after view changes
      setTimeout(() => {
        fetchArticles();
      }, 0);
      setSuccessMessage(data.message || "Article saved successfully");
    } else setError(data.message || "Failed to save article");
  } catch (err) {
    console.error(err);
    setError("Failed to save article. Check backend.");
  }
};


  // =====================
  // Delete Article
  // =====================
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this article?")) return;
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

  // =====================
  // Edit Article
  // =====================
  const handleEdit = (article: Article) => {
setCurrentArticle(article);
setTitle(article.title);
setContent(article.content);
// Allow blank author if not present
if (article.author && !isNaN(Number(article.author))) {
  setAuthor(Number(article.author));
} else {
  setAuthor("");
}
setImageFile(null);
setImagePreview(article.image_url ? `${API_BASE}/${article.image_url}` : null);
const ids = tags.filter((t) => article.tags.includes(t.name)).map((t) => t.id);
setSelectedTags(ids);
setView("edit");
setError("");
setSuccessMessage("");
  };

  // =====================
  // Tag Management
  // =====================
  const handleAddTag = async () => {
    if (!newTag.trim()) return;
    try {
      const formData = new FormData();
      formData.append("name", newTag);
      const res = await fetch(`${API_BASE}/tags/tags_post.php`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setNewTag("");
        fetchTags();
      } else alert(data.message || "Failed to add tag");
    } catch (err) {
      console.error(err);
      alert("Failed to add tag");
    }
  };

  const handleDeleteTag = async (id: number) => {
    if (!confirm("Are you sure you want to delete this tag?")) return;
    try {
      const formData = new FormData();
      formData.append("id", id.toString());
      const res = await fetch(`${API_BASE}/tags/tags_delete.php`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        fetchTags();
        fetchArticles();
      } else alert(data.message || "Failed to delete tag");
    } catch (err) {
      console.error(err);
      alert("Failed to delete tag");
    }
  };

  // =====================
  // Author Management
  // =====================
  const handleAddAuthor = async () => {
    if (!newAuthorName.trim()) return setError("Name is required");
    try {
      const formData = new FormData();
      formData.append("name", newAuthorName);
      formData.append("description", newAuthorDesc);
      if (newAuthorImage) formData.append("image", newAuthorImage);

      const res = await fetch(`${API_BASE}/authors/authors_add.php`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMessage("Author added successfully!");
        setNewAuthorName("");
        setNewAuthorDesc("");
        setNewAuthorImage(null);
        fetchAuthors();
      } else setError(data.message || "Failed to add author");
    } catch (err) {
      console.error(err);
      setError("Error adding author");
    }
  };

  const handleEditAuthor = (author: Author) => {
    setEditingAuthor(author);
    setEditName(author.name);
    setEditDesc(author.description || "");
  };

  const handleUpdateAuthor = async () => {
    if (!editingAuthor) return;
    try {
      const formData = new FormData();
      formData.append("id", editingAuthor.id.toString());
      formData.append("name", editName);
      formData.append("description", editDesc);
      if (editImage) formData.append("image", editImage);

      const res = await fetch(`${API_BASE}/authors/authors_update.php`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMessage("Author updated successfully!");
        setEditingAuthor(null);
        setEditImage(null);
        fetchAuthors();
      } else setError(data.message || "Failed to update author");
    } catch (err) {
      console.error(err);
      setError("Error updating author");
    }
  };

  const handleDeleteAuthor = async (id: number) => {
    try {
      const res = await fetch(`${API_BASE}/authors/authors_delete.php`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMessage("Author deleted successfully!");
        fetchAuthors();
      } else setError(data.message || "Failed to delete author");
    } catch (err) {
      console.error(err);
      setError("Error deleting author");
    }
  };


  // =====================
  // RENDER
  // =====================
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex-shrink-0 p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => setView("articles")}
            className={`text-left px-4 py-2 rounded ${
              view === "articles" ? "bg-gray-700" : "hover:bg-gray-700"
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
            onClick={() => setView("tags")}
            className={`text-left px-4 py-2 rounded ${
              view === "tags" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Tags
          </button>
          <button
            onClick={() => setView("authors")}
            className={`text-left px-4 py-2 rounded ${
              view === "authors" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Authors
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
        {/* Articles View */}
        {view === "articles" && (
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
              <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow">
  <thead className="bg-gray-100">
    <tr>
      <th className="p-2 border-b text-sm font-semibold">ID</th>
      <th className="p-2 border-b text-sm font-semibold">Title</th>
      <th className="p-2 border-b text-sm font-semibold">Author</th>
      <th className="p-2 border-b text-sm font-semibold">Tags</th>
      <th className="p-2 border-b text-sm font-semibold">Image</th>
      <th className="p-2 border-b text-sm font-semibold">Created At</th>
      <th className="p-2 border-b text-sm font-semibold text-center">Actions</th>
    </tr>
  </thead>
  <tbody>
    {articles.map((a) => (
      <tr key={a.id} className="hover:bg-gray-50">
        <td className="p-2 border-b align-middle">{a.id}</td>
        <td className="p-2 border-b align-middle">{a.title}</td>
        <td className="p-2 border-b align-middle">
          {a.author_details ? (
            <span className="font-semibold">{a.author_details.name}</span>
          ) : (
            <span>—</span>
          )}
        </td>
        <td className="p-2 border-b align-middle">
          {a.tags?.length
            ? a.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1"
                >
                  {t}
                </span>
              ))
            : "—"}
        </td>
        <td className="p-2 border-b align-middle">
          {a.image_url && (
            <img
              src={`${API_BASE}/${a.image_url}`}
              alt={a.title}
              className="h-10 w-16 object-cover rounded"
            />
          )}
        </td>
        <td className="p-2 border-b align-middle">
          {new Date(a.created_at).toLocaleDateString()}
        </td>
        <td className="p-2 border-b align-middle text-center">
          <div className="flex justify-center gap-2">
            <button
              onClick={() => handleEdit(a)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(a.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>
            )}
          </div>
        )}

        {/* Add/Edit Article */}
        {(view === "add" || view === "edit") && (
          <div>
            <button
              onClick={() => setView("articles")}
              className="mb-4 text-blue-600 hover:underline"
            >
              &larr; Back to Articles
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {view === "add" ? "Add New Article" : "Edit Article"}
            </h2>
            <button
              onClick={handleAddOrEdit}
              className="mb-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              {view === "add" ? "Add Article" : "Update Article"}
            </button>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 rounded mb-2 w-full"
            />

            {/* Author dropdown */}
         {/* Author dropdown */}
<select
  value={author === "" ? "" : String(author)}
  onChange={(e) => {
    const val = e.target.value;
    setAuthor(val === "" ? "" : Number(val));
  }}
  className="border p-2 rounded mb-2 w-full"
>
  <option value="">No author</option>
  {authors.map((a) => (
    <option key={a.id} value={a.id}>{a.name}</option>
  ))}
</select>



            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setImageFile(e.target.files[0]);
                  setImagePreview(URL.createObjectURL(e.target.files[0]));
                }
              }}
              className="border p-2 rounded mb-2 w-full"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mb-2 h-24 object-cover rounded"
              />
            )}

            {/* Tags select */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Tags</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedTags.map((id) => {
                  const tag = tags.find((t) => t.id === id);
                  if (!tag) return null;
                  return (
                    <span
                      key={id}
                      className="flex items-center bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                    >
                      {tag.name}
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedTags(selectedTags.filter((tid) => tid !== id))
                        }
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </span>
                  );
                })}
                {!selectedTags.length && (
                  <span className="text-gray-400 text-sm">No tags selected</span>
                )}
              </div>
              <select
                value=""
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!selectedTags.includes(value)) {
                    setSelectedTags([...selectedTags, value]);
                  }
                }}
                className="border p-2 rounded w-full"
              >
                <option value="" disabled>
                  Select tag to add
                </option>
                {tags
                  .filter((tag) => !selectedTags.includes(tag.id))
                  .map((tag) => (
                    <option key={tag.id} value={tag.id}>
                      {tag.name}
                    </option>
                  ))}
              </select>

              <div className="flex mt-2">
                <input
                  type="text"
                  placeholder="New tag name"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  className="border p-2 rounded-l w-full"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="bg-blue-600 text-white px-4 py-2 rounded-r"
                >
                  Add Tag
                </button>
              </div>
            </div>

            <ReactQuill
              value={content}
              onChange={setContent}
              className="mb-4 quill-content"
            />
          </div>
        )}

        {/* Tags Management */}
        {view === "tags" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Manage Tags</h2>
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="New tag name"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                className="border p-2 rounded-l w-full"
              />
              <button
                onClick={handleAddTag}
                className="bg-blue-600 text-white px-4 py-2 rounded-r"
              >
                Add Tag
              </button>
            </div>
            <table className="w-full text-left border-collapse shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border-b">ID</th>
                  <th className="p-3 border-b">Name</th>
                  <th className="p-3 border-b">Articles Using</th>
                  <th className="p-3 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tags.map((tag) => (
                  <tr key={tag.id} className="hover:bg-gray-50">
                    <td className="p-3 border-b">{tag.id}</td>
                    <td className="p-3 border-b">{tag.name}</td>
                    <td className="p-3 border-b">
                      {tag.articles?.length ? tag.articles.join(", ") : "—"}
                    </td>
                    <td className="p-3 border-b">
                      <button
                        onClick={() => handleDeleteTag(tag.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

{/* Authors Management */}
{view === "authors" && (
  <div>
    <h2 className="text-2xl font-bold mb-4">Manage Authors</h2>

    {/* Add Author Form */}
    <div className="flex mb-4 gap-2">
  <input
    type="text"
    placeholder="Author name"
    value={newAuthorName}
    onChange={(e) => setNewAuthorName(e.target.value)}
    className="border p-2 rounded-l w-full"
  />
  <input
    type="text"
    placeholder="Description"
    value={newAuthorDesc}
    onChange={(e) => setNewAuthorDesc(e.target.value)}
    className="border p-2 w-full"
  />
  <input
    type="file"
    accept="image/*"
    onChange={(e) => setNewAuthorImage(e.target.files?.[0] || null)}
    className="border p-2"
  />
  <button
    onClick={handleAddAuthor}
    className="bg-blue-600 text-white px-4 py-2 rounded-r"
  >
    Add Author
  </button>
</div>


    {/* Edit Author Form (shown only if editing) */}
    {editingAuthor && (
  <div className="p-4 border rounded bg-gray-100 mb-4">
    <h3 className="font-bold mb-2">Edit Author</h3>
    <input
      type="text"
      value={editName}
      onChange={(e) => setEditName(e.target.value)}
      className="border px-2 py-1 mr-2"
    />
    <input
      type="text"
      value={editDesc}
      onChange={(e) => setEditDesc(e.target.value)}
      className="border px-2 py-1 mr-2"
    />
    <input
      type="file"
      accept="image/*"
      onChange={(e) => setEditImage(e.target.files?.[0] || null)}
      className="border px-2 py-1 mr-2"
    />
    {editingAuthor.image_url && !editImage && (
      <img
        src={`${API_BASE}/${editingAuthor.image_url}`}
        alt={editingAuthor.name}
        className="h-12 w-12 object-cover rounded mb-2"
      />
    )}
    <button
      onClick={handleUpdateAuthor}
      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
    >
      Save
    </button>
    <button
      onClick={() => setEditingAuthor(null)}
      className="ml-2 bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
    >
      Cancel
    </button>
  </div>
)}


{/* Authors Table */}
<table className="w-full text-left border-collapse shadow-md rounded-lg overflow-hidden">
  <thead className="bg-gray-100">
    <tr>
      <th className="p-3 border-b">ID</th>
      <th className="p-3 border-b">Name</th>
      <th className="p-3 border-b">Description</th>
      <th className="p-3 border-b">Image</th> {/* ✅ New column */}
      <th className="p-3 border-b">Actions</th>
    </tr>
  </thead>
  <tbody>
    {authors.map((a) => (
      <tr key={a.id} className="hover:bg-gray-50">
        <td className="p-3 border-b">{a.id}</td>
        <td className="p-3 border-b">{a.name}</td>
        <td className="p-3 border-b">{a.description || "—"}</td>
        <td className="p-3 border-b">
          {a.image_url ? (
            <img
              src={`${API_BASE}/${a.image_url}`} // ✅ show image from backend
              alt={a.name}
              className="h-12 w-12 object-cover rounded-full border"
            />
          ) : (
            <span className="text-gray-400 text-sm">No Image</span>
          )}
        </td>
        <td className="p-3 border-b flex gap-2">
          <button
            onClick={() => handleEditAuthor(a)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteAuthor(a.id)}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

  </div>
)}
</main>
</div>
);
};

// Add custom CSS for Quill headers

const quillHeaderStyle = `
  <style>
    .ql-editor h1 { font-size: 2.25rem; font-weight: bold; margin: 1rem 0; }
    .ql-editor h2 { font-size: 1.75rem; font-weight: bold; margin: 0.75rem 0; }
    .ql-editor h3 { font-size: 1.5rem; font-weight: bold; margin: 0.5rem 0; }
    .ql-editor h4 { font-size: 1.25rem; font-weight: 600; margin: 0.5rem 0; }
    .ql-editor h5 { font-size: 1rem; font-weight: 600; margin: 0.25rem 0; }
    .ql-editor h6 { font-size: 0.875rem; font-weight: 600; margin: 0.25rem 0; }
  </style>
`;


// Hide the default Quill footer (powered by Quill message)
const hideFooterStyle = `
  <style>
    .ql-container .ql-tooltip.ql-hidden { display: none !important; }
    .ql-toolbar.ql-snow + .ql-container.ql-snow::after { display: none !important; }
  </style>
`;


const AdminPanelWithFooterHide = () => (
  <>
    <div dangerouslySetInnerHTML={{ __html: quillHeaderStyle + hideFooterStyle }} />
    <AdminPanel />
  </>
);

export default AdminPanelWithFooterHide;
