import React, { useEffect, useState } from "react";

interface Conflict {
  Incident_ID?: string;
  Date?: string;
  Time?: string;
  Group?: string;
  "Subgroup/Affiliate"?: string;
  "Event Type"?: string;
  "Type of Incident"?: string;
  "Target Type"?: string;
  "Target Name/Unit"?: string;
  "Conflict Actor 1"?: string;
  "Conflict Actor 2"?: string;
  Location?: string;
  District?: string;
  "Province/Region"?: string;
  Latitude?: number;
  Longitude?: number;
  GeoPrecision?: string;
  "Casualties (Total)"?: string;
  "Civilians Killed"?: string;
  "Security Forces Killed"?: string;
  "Militants Killed"?: string;
  "Wounded (All)"?: string;
  "Weapons/Method Used"?: string;
  "Claimed by Group"?: string;
  "Claim Source"?: string;
  "Credibility Rating"?: string;
  "Summary Description"?: string;
  "Notes/Context"?: string;
  "Source Links"?: string;
  "Source Credibility Tag"?: string;
  "Fatality Category"?: string;
  "Incident Week/Fortnight/Month"?: string;
  "Verification Status"?: string;
  "Data Entry By"?: string;
  "Reviewed By"?: string;
  IDLE?: string;
  "ID-Helper1"?: string;
  "ID-Helper2"?: string;
}

const API_BASE = window.location.hostname.includes("localhost")
  ? "http://localhost:8080/api"
  : "https://cnaws.in/api";

const TerrorismDatabaseJK = () => {
  const [conflicts, setConflicts] = useState<Conflict[]>([]);
  const [filtered, setFiltered] = useState<Conflict[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState({ start: "", end: "" });

  // --- Safe JSON parsing ---
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

  // --- Fetch Data ---
  const fetchConflicts = () => {
    setLoading(true);
    getJSON(`${API_BASE}/conflicts_jk_get.php`, { credentials: "include" })
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

  // --- Filtering Logic ---
  useEffect(() => {
    let filteredData = [...conflicts];

    // Global Search (all columns)
    if (search.trim()) {
      const term = search.toLowerCase();
      filteredData = filteredData.filter((c) =>
        Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(term)
      );
    }

    // Date range filter
    if (dateFilter.start) {
      filteredData = filteredData.filter(
        (c) => c.Date && c.Date >= dateFilter.start
      );
    }
    if (dateFilter.end) {
      filteredData = filteredData.filter(
        (c) => c.Date && c.Date <= dateFilter.end
      );
    }

    setFiltered(filteredData);
  }, [search, dateFilter, conflicts]);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Terrorism Incident Database — Jammu & Kashmir
      </h1>

      {/* Search + Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-wrap gap-4 items-center justify-start">
        <input
          type="text"
          placeholder="Search all fields..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full sm:w-64"
        />

        <div className="flex gap-3 items-center">
          <label className="text-sm text-gray-600">From:</label>
          <input
            type="date"
            value={dateFilter.start}
            onChange={(e) =>
              setDateFilter({ ...dateFilter, start: e.target.value })
            }
            className="border px-2 py-1 rounded"
          />
        </div>

        <div className="flex gap-3 items-center">
          <label className="text-sm text-gray-600">To:</label>
          <input
            type="date"
            value={dateFilter.end}
            onChange={(e) =>
              setDateFilter({ ...dateFilter, end: e.target.value })
            }
            className="border px-2 py-1 rounded"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        {loading ? (
          <div className="p-6 text-center text-gray-500">Loading data...</div>
        ) : filtered.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No matching incidents found.
          </div>
        ) : (
          <table className="min-w-full text-gray-900 text-sm">
            <thead className="bg-gray-100">
              <tr>
                {Object.keys(filtered[0]).map((key) => (
                  <th
                    key={key}
                    className="px-3 py-2 border-b text-left whitespace-nowrap"
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  {Object.keys(filtered[0]).map((key) => (
                    <td
                      key={key}
                      className="px-3 py-2 border-b whitespace-nowrap max-w-[250px] truncate"
                      title={String(row[key as keyof Conflict] ?? "-")}
                    >
                      {row[key as keyof Conflict] ?? "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TerrorismDatabaseJK;
