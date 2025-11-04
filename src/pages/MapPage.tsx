import React, { useEffect, useState } from "react";

interface Conflict {
  id: number;
  title: string;
  lat: number;
  lng: number;
  description?: string;
  date?: string;
}

const MapPage = () => {
  const [conflicts, setConflicts] = useState<Conflict[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchConflicts = () => {
    setLoading(true);
    fetch("https://cnaws.in/api/conflicts_get.php", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setConflicts(data.conflicts || []);
        else setConflicts([]);
      })
      .catch(() => setConflicts([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchConflicts();
    const interval = setInterval(fetchConflicts, 10000); // refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Conflict Data</h1>

      <button
        onClick={fetchConflicts}
        disabled={loading}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded shadow"
      >
        {loading ? "Refreshing..." : "Refresh Data"}
      </button>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Conflict Data Table</h2>

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
              </tr>
            </thead>
            <tbody>
              {conflicts.map((conflict) => (
                <tr key={conflict.id}>
                  <td className="px-4 py-2 border-b">{conflict.title}</td>
                  <td className="px-4 py-2 border-b">{conflict.description || "-"}</td>
                  <td className="px-4 py-2 border-b">{conflict.date || "-"}</td>
                  <td className="px-4 py-2 border-b">{conflict.lat}</td>
                  <td className="px-4 py-2 border-b">{conflict.lng}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MapPage;
