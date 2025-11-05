import React, { useEffect, useState } from "react";
import { useAuth } from "@/App";

interface Conflict {
  id: number;
  title: string;
  lat: number;
  lng: number;
  description?: string;
  date?: string;
}

const API_BASE = window.location.hostname.includes("localhost")
  ? "http://localhost:8080/api"
  : "https://cnaws.in/api";

const MapAdmin = () => {
  const { isAdmin, isLoading } = useAuth();
  const [conflicts, setConflicts] = useState<Conflict[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    lat: "",
    lng: "",
    description: "",
    date: "",
  });
  const [adding, setAdding] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null);

  // Fetch conflicts
  const fetchConflicts = () => {
    setLoading(true);
    fetch(`${API_BASE}/conflicts_get.php`, { credentials: "include" })
      .then(res => res.json())
      .then(data => {
        if (data.success) setConflicts(data.conflicts || []);
        else setConflicts([]);
      })
      .catch(() => setConflicts([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (isAdmin) fetchConflicts();
  }, [isAdmin]);

  // Handle form input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add conflict
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdding(true);
    const res = await fetch(`${API_BASE}/conflicts_add.php`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      setForm({ title: "", lat: "", lng: "", description: "", date: "" });
      fetchConflicts();
    } else {
      alert(data.message || "Failed to add conflict");
    }
    setAdding(false);
  };

  // Delete conflict
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this conflict?")) return;
    setDeleting(id);
    try {
      const res = await fetch(`${API_BASE}/conflicts_delete.php`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        fetchConflicts();
      } else {
        alert(data.message || "Failed to delete conflict");
      }
    } catch (err) {
      alert("Error deleting conflict");
    } finally {
      setDeleting(null);
    }
  };

  if (isLoading) return <div>Checking admin authentication...</div>;
  if (!isAdmin) return <div>Access denied. Admins only.</div>;

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Conflict Map Data (Admin)</h1>
      <div className="mb-8">
        <form onSubmit={handleAdd} className="bg-white/10 p-6 rounded-lg mb-6 max-w-xl">
          <h2 className="text-xl font-semibold mb-4">Add New Conflict</h2>
          <div className="mb-3">
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="Title"
              className="w-full px-3 py-2 rounded border"
            />
          </div>
          <div className="mb-3">
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full px-3 py-2 rounded border"
            />
          </div>
          <div className="mb-3 flex gap-2">
            <input
              name="lat"
              value={form.lat}
              onChange={handleChange}
              required
              placeholder="Latitude"
              type="number"
              step="any"
              className="w-1/2 px-3 py-2 rounded border"
            />
            <input
              name="lng"
              value={form.lng}
              onChange={handleChange}
              required
              placeholder="Longitude"
              type="number"
              step="any"
              className="w-1/2 px-3 py-2 rounded border"
            />
          </div>
          <div className="mb-3">
            <input
              name="date"
              value={form.date}
              onChange={handleChange}
              placeholder="Date (YYYY-MM-DD)"
              type="date"
              className="w-full px-3 py-2 rounded border"
            />
          </div>
          <button
            type="submit"
            disabled={adding}
            className="bg-blue-600 text-white px-6 py-2 rounded font-semibold"
          >
            {adding ? "Adding..." : "Add Conflict"}
          </button>
        </form>
        <h2 className="text-2xl font-semibold mb-4">All Conflicts</h2>
        {loading ? (
          <div>Loading data...</div>
        ) : conflicts.length === 0 ? (
          <div>No conflict data available.</div>
        ) : (
          <table className="min-w-full bg-white text-gray-900 rounded-lg shadow">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Title</th>
                <th className="px-4 py-2 border-b">Description</th>
                <th className="px-4 py-2 border-b">Date</th>
                <th className="px-4 py-2 border-b">Latitude</th>
                <th className="px-4 py-2 border-b">Longitude</th>
                <th className="px-4 py-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {conflicts.map(conflict => (
                <tr key={conflict.id}>
                  <td className="px-4 py-2 border-b">{conflict.title}</td>
                  <td className="px-4 py-2 border-b">{conflict.description || "-"}</td>
                  <td className="px-4 py-2 border-b">{conflict.date || "-"}</td>
                  <td className="px-4 py-2 border-b">{conflict.lat}</td>
                  <td className="px-4 py-2 border-b">{conflict.lng}</td>
                  <td className="px-4 py-2 border-b">
                    <button
                      onClick={() => handleDelete(conflict.id)}
                      disabled={deleting === conflict.id}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs disabled:opacity-50"
                    >
                      {deleting === conflict.id ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MapAdmin;
