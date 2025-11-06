import React, { useEffect, useState } from "react";

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

const TerrorismDatabasePakistan = () => {
  const [conflicts, setConflicts] = useState<Conflict[]>([]);
  const [filtered, setFiltered] = useState<Conflict[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState({ start: "", end: "" });

  const [sortConfig, setSortConfig] = useState<{ key: keyof Conflict; direction: "asc" | "desc" } | null>(null);

  // --- Safe JSON Parsing ---
  const getJSON = async (url: string, init?: RequestInit) => {
    const res = await fetch(url, init);
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      console.error("Invalid JSON from", url, "\nResponse:\n", text);
      throw new Error(`Bad JSON from ${url}`);
    }
  };

  // --- Fetch Pakistan Conflict Data ---
  const fetchConflicts = () => {
    setLoading(true);
    getJSON(`${API_BASE}/conflicts_pakistan_get.php`, { credentials: "include" })
      .then((data) => {
        const list = data.success ? data.conflicts || [] : [];
        setConflicts(list);
        setFiltered(list);
      })
      .catch(() => setConflicts([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchConflicts();
  }, []);

  // --- Filtering & Sorting Logic ---
  useEffect(() => {
    let filteredData = [...conflicts];

    // Keyword Search
    if (search.trim()) {
      const term = search.toLowerCase();
      filteredData = filteredData.filter(
        (c) =>
          c.title.toLowerCase().includes(term) ||
          (c.description && c.description.toLowerCase().includes(term))
      );
    }

    // Date Range
    if (dateFilter.start) {
      filteredData = filteredData.filter((c) => c.date && c.date >= dateFilter.start);
    }
    if (dateFilter.end) {
      filteredData = filteredData.filter((c) => c.date && c.date <= dateFilter.end);
    }

    // Sorting
    if (sortConfig) {
      filteredData.sort((a, b) => {
        const key = sortConfig.key;
        const valA = a[key] || "";
        const valB = b[key] || "";

        if (typeof valA === "number" && typeof valB === "number") {
          return sortConfig.direction === "asc" ? valA - valB : valB - valA;
        }

        return sortConfig.direction === "asc"
          ? String(valA).localeCompare(String(valB))
          : String(valB).localeCompare(String(valA));
      });
    }

    setFiltered(filteredData);
  }, [search, dateFilter, conflicts, sortConfig]);

  // --- Sort Handler ---
  const handleSort = (key: keyof Conflict) => {
    setSortConfig((prev) => {
      if (prev && prev.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  const getSortIcon = (key: keyof Conflict) => {
    if (!sortConfig || sortConfig.key !== key) return "↕️";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  // --- UI ---
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Proposed Terrorism Incident Database Fields (Pakistan)
      </h1>

      {/* Filters Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-wrap gap-4 items-center">
        <input
          type="text"
          placeholder="Search by title or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full sm:w-1/3"
        />

        <div className="flex gap-3 items-center">
          <label className="text-sm text-gray-600">From:</label>
          <input
            type="date"
            value={dateFilter.start}
            onChange={(e) => setDateFilter({ ...dateFilter, start: e.target.value })}
            className="border px-2 py-1 rounded"
          />
        </div>

        <div className="flex gap-3 items-center">
          <label className="text-sm text-gray-600">To:</label>
          <input
            type="date"
            value={dateFilter.end}
            onChange={(e) => setDateFilter({ ...dateFilter, end: e.target.value })}
            className="border px-2 py-1 rounded"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        {loading ? (
          <div className="p-6 text-center text-gray-500">Loading data...</div>
        ) : filtered.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No matching incidents found.
          </div>
        ) : (
          <table className="min-w-full text-gray-900">
            <thead className="bg-gray-100">
              <tr>
                <th
                  className="px-4 py-2 border-b text-left cursor-pointer"
                  onClick={() => handleSort("title")}
                >
                  Title {getSortIcon("title")}
                </th>
                <th className="px-4 py-2 border-b text-left">Description</th>
                <th
                  className="px-4 py-2 border-b text-left cursor-pointer"
                  onClick={() => handleSort("date")}
                >
                  Date {getSortIcon("date")}
                </th>
                <th
                  className="px-4 py-2 border-b text-left cursor-pointer"
                  onClick={() => handleSort("lat")}
                >
                  Latitude {getSortIcon("lat")}
                </th>
                <th
                  className="px-4 py-2 border-b text-left cursor-pointer"
                  onClick={() => handleSort("lng")}
                >
                  Longitude {getSortIcon("lng")}
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{c.title}</td>
                  <td className="px-4 py-2 border-b">{c.description || "-"}</td>
                  <td className="px-4 py-2 border-b">{c.date || "-"}</td>
                  <td className="px-4 py-2 border-b">{c.lat}</td>
                  <td className="px-4 py-2 border-b">{c.lng}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TerrorismDatabasePakistan;
