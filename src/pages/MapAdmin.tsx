import React, { useEffect, useState } from "react";
import { useAuth } from "@/App";
import { Plus, Trash2, RefreshCcw } from "lucide-react";

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
  const [activeTab, setActiveTab] = useState<"main" | "jk" | "pakistan">("main");

  const [conflicts, setConflicts] = useState<Conflict[]>([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [form, setForm] = useState({
    title: "",
    lat: "",
    lng: "",
    description: "",
    date: "",
  });

  const endpointMap = {
    main: {
      get: `${API_BASE}/conflicts_get.php`,
      add: `${API_BASE}/conflicts_add.php`,
      del: `${API_BASE}/conflicts_delete.php`,
      label: "India & General",
    },
    jk: {
      get: `${API_BASE}/conflicts_jk_get.php`,
      add: `${API_BASE}/conflicts_jk_add.php`,
      del: `${API_BASE}/conflicts_jk_delete.php`,
      label: "Jammu & Kashmir",
    },
    pakistan: {
      get: `${API_BASE}/conflicts_pakistan_get.php`,
      add: `${API_BASE}/conflicts_pakistan_add.php`,
      del: `${API_BASE}/conflicts_pakistan_delete.php`,
      label: "Pakistan",
    },
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(endpointMap[activeTab].get, { credentials: "include" });
      const data = await res.json();
      setConflicts(data.success ? data.conflicts || [] : []);
    } catch {
      setConflicts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin) fetchData();
  }, [isAdmin, activeTab]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdding(true);
    try {
      const res = await fetch(endpointMap[activeTab].add, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setForm({ title: "", lat: "", lng: "", description: "", date: "" });
        fetchData();
      } else alert(data.message || "Error adding record");
    } catch {
      alert("Error adding record");
    } finally {
      setAdding(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this record?")) return;
    setDeleting(id);
    try {
      const res = await fetch(endpointMap[activeTab].del, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) fetchData();
      else alert(data.message || "Delete failed");
    } catch {
      alert("Error deleting");
    } finally {
      setDeleting(null);
    }
  };

  if (isLoading) return <div className="p-10 text-center">Checking admin authentication...</div>;
  if (!isAdmin) return <div className="p-10 text-center">Access denied. Admins only.</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Conflict Data Admin Panel</h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 border-b pb-3 mb-6">
          {(["main", "jk", "pakistan"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md font-medium transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {endpointMap[tab].label}
            </button>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleAdd}
          className="bg-gray-50 border rounded-lg p-5 mb-8 space-y-4"
        >
          <h2 className="text-lg font-semibold mb-2">
            Add New Entry — {endpointMap[activeTab].label}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Title"
              required
              className="border px-3 py-2 rounded"
            />
            <input
              name="date"
              value={form.date}
              onChange={handleChange}
              type="date"
              className="border px-3 py-2 rounded"
            />
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              className="border px-3 py-2 rounded md:col-span-2"
            />
            <input
              name="lat"
              value={form.lat}
              onChange={handleChange}
              placeholder="Latitude"
              type="number"
              step="any"
              className="border px-3 py-2 rounded"
            />
            <input
              name="lng"
              value={form.lng}
              onChange={handleChange}
              placeholder="Longitude"
              type="number"
              step="any"
              className="border px-3 py-2 rounded"
            />
          </div>
          <button
            type="submit"
            disabled={adding}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            {adding ? "Adding..." : "Add Entry"}
          </button>
        </form>

        {/* Table */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">All Records</h2>
          <button
            onClick={fetchData}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <RefreshCcw className="w-4 h-4" /> Refresh
          </button>
        </div>

        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="px-4 py-2 border-b">Title</th>
                <th className="px-4 py-2 border-b">Description</th>
                <th className="px-4 py-2 border-b">Date</th>
                <th className="px-4 py-2 border-b">Latitude</th>
                <th className="px-4 py-2 border-b">Longitude</th>
                <th className="px-4 py-2 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              ) : conflicts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-4 text-gray-500">
                    No records found
                  </td>
                </tr>
              ) : (
                conflicts.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">{c.title}</td>
                    <td className="px-4 py-2 border-b">{c.description || "-"}</td>
                    <td className="px-4 py-2 border-b">{c.date || "-"}</td>
                    <td className="px-4 py-2 border-b">{c.lat}</td>
                    <td className="px-4 py-2 border-b">{c.lng}</td>
                    <td className="px-4 py-2 border-b text-center">
                      <button
                        onClick={() => handleDelete(c.id)}
                        disabled={deleting === c.id}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs flex items-center gap-1 mx-auto disabled:opacity-60"
                      >
                        <Trash2 className="w-3 h-3" />
                        {deleting === c.id ? "Deleting..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MapAdmin;
