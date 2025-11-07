import React, { useEffect, useState } from "react";
import { useAuth } from "@/App";
import { Trash2, RefreshCcw, Upload, AlertTriangle } from "lucide-react";
import * as XLSX from "xlsx";

const API_BASE = window.location.hostname.includes("localhost")
  ? "http://localhost:8080/api"
  : "https://cnaws.in/api";

// ✅ Full target schema (matching your Excel columns)
const TARGET_FIELDS = [
  "Incident_ID", "Date", "Time", "Group", "Subgroup/Affiliate", "Event Type", "Type of Incident",
  "Target Type", "Target Name/Unit", "Conflict Actor 1", "Conflict Actor 2", "Location", "District",
  "Province/Region", "Latitude", "Longitude", "GeoPrecision", "Casualties (Total)", "Civilians Killed",
  "Security Forces Killed", "Militants Killed", "Wounded (All)", "Weapons/Method Used", "Claimed by Group",
  "Claim Source", "Credibility Rating", "Summary Description", "Notes/Context", "Source Links",
  "Source Credibility Tag", "Fatality Category", "Incident Week/Fortnight/Month",
  "Verification Status", "Data Entry By", "Reviewed By", "IDLE", "ID-Helper1", "ID-Helper2"
];

const MapAdmin = () => {
  const { isAdmin, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<"jk" | "pakistan">("jk");

  const [conflicts, setConflicts] = useState<any[]>([]);
  const [excelData, setExcelData] = useState<any[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [columnMapping, setColumnMapping] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [importing, setImporting] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [deletingAll, setDeletingAll] = useState(false);

  // ✅ Endpoint map (only Jammu & Kashmir and Pakistan)
  const endpointMap = {
    jk: {
      get: `${API_BASE}/get_marker_jk.php`,
      add: `${API_BASE}/conflicts_jk_add.php`,
      del: `${API_BASE}/conflicts_jk_delete.php`,
      delAll: `${API_BASE}/conflicts_jk_delete.php`,
      label: "Jammu & Kashmir",
    },
    pakistan: {
      get: `${API_BASE}/get_marker_pakistan.php`,
      add: `${API_BASE}/conflicts_pakistan_add.php`,
      del: `${API_BASE}/conflicts_pakistan_delete.php`,
      delAll: `${API_BASE}/conflicts_pakistan_delete.php`,
      label: "Pakistan",
    },
  };

  // 🔄 Fetch all records
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${endpointMap[activeTab].get}?_=${Date.now()}`, { credentials: "include" });
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

  // 📂 Handle Excel Upload
  const handleExcelUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = event.target?.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "" });
      const headerList = XLSX.utils.sheet_to_json(sheet, { header: 1 })[0] as string[];

      const normalize = (s: string) => s.toLowerCase().replace(/\s+/g, "").trim();
      const autoMap: Record<string, string> = {};
      TARGET_FIELDS.forEach((target) => {
        const found = headerList.find(
          (h) => normalize(h) === normalize(target) || normalize(h).includes(normalize(target))
        );
        autoMap[target] = found || "";
      });

      setHeaders(headerList);
      setColumnMapping(autoMap);
      setExcelData(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  // 📤 Import Excel to DB
  const handleImportToDB = async () => {
    if (excelData.length === 0) {
      alert("Please upload an Excel file first.");
      return;
    }

    if (!confirm(`Import ${excelData.length} records to ${endpointMap[activeTab].label}?`)) return;

    setImporting(true);
    let successCount = 0;

    for (const row of excelData) {
      const record: Record<string, any> = {};
      TARGET_FIELDS.forEach((field) => {
        const mappedHeader = columnMapping[field];
        record[field] = mappedHeader && row[mappedHeader] !== undefined ? row[mappedHeader] : "";
      });

      try {
        const res = await fetch(endpointMap[activeTab].add, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(record),
        });
        const data = await res.json();
        if (data.success) successCount++;
      } catch (err) {
        console.error("Error importing record:", err);
      }
    }

    alert(`Imported ${successCount}/${excelData.length} records successfully.`);
    setImporting(false);
    setExcelData([]);
    fetchData();
  };

  // 🗑 Delete Single Record
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this record?")) return;
    setDeleting(id);
    try {
      const res = await fetch(endpointMap[activeTab].del, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Record deleted successfully.");
        await fetchData();
        setTimeout(() => window.location.reload(), 500);
      } else {
        alert(data.message || "Delete failed");
      }
    } catch {
      alert("Error deleting record");
    } finally {
      setDeleting(null);
    }
  };

  // ⚠️ Delete All Records
  const handleDeleteAll = async () => {
    if (!confirm(`⚠️ WARNING: This will permanently delete ALL records from ${endpointMap[activeTab].label}. Continue?`))
      return;

    setDeletingAll(true);
    try {
      const res = await fetch(endpointMap[activeTab].delAll, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ delete_all: true }),
      });
      const data = await res.json();
      if (data.success) {
        alert("All records deleted successfully.");
        await fetchData();
        setTimeout(() => window.location.reload(), 500);
      } else {
        alert(data.message || "Failed to delete all records.");
      }
    } catch {
      alert("Error deleting all records.");
    } finally {
      setDeletingAll(false);
    }
  };

  if (isLoading) return <div className="p-10 text-center">Checking admin authentication...</div>;
  if (!isAdmin) return <div className="p-10 text-center">Access denied. Admins only.</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Conflict Data Admin Panel</h1>

        {/* Tabs — Only JK & Pakistan */}
        <div className="flex flex-wrap gap-3 border-b pb-3 mb-6">
          {(["jk", "pakistan"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md font-medium transition ${
                activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {endpointMap[tab].label}
            </button>
          ))}
        </div>

        {/* Excel Upload Section */}
        <div className="bg-gray-50 border rounded-lg p-5 mb-8 space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Upload className="w-5 h-5" /> Bulk Import from Excel
          </h2>
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={handleExcelUpload}
            className="border px-3 py-2 rounded w-full md:w-1/2"
          />

          {headers.length > 0 && (
            <>
              <p className="text-gray-600 text-sm mt-3">
                Auto-detected column mappings (edit if needed):
              </p>
              <div className="overflow-x-auto border rounded p-3 bg-white max-h-96">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-3 py-2 border">Target Field</th>
                      <th className="px-3 py-2 border">Matched Excel Column</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TARGET_FIELDS.map((field) => (
                      <tr key={field}>
                        <td className="border px-3 py-2 font-medium">{field}</td>
                        <td className="border px-3 py-2">
                          <select
                            value={columnMapping[field] || ""}
                            onChange={(e) =>
                              setColumnMapping({ ...columnMapping, [field]: e.target.value })
                            }
                            className="border px-2 py-1 rounded w-full"
                          >
                            <option value="">-- None --</option>
                            {headers.map((h) => (
                              <option key={h} value={h}>
                                {h}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button
                onClick={handleImportToDB}
                disabled={importing}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold flex items-center gap-2 mt-4"
              >
                {importing ? "Importing..." : "Import to Database"}
              </button>
            </>
          )}
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">All Records</h2>
          <div className="flex gap-3 items-center">
            <button
              onClick={fetchData}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <RefreshCcw className="w-4 h-4" /> Refresh
            </button>
            <button
              onClick={handleDeleteAll}
              disabled={deletingAll}
              className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold"
            >
              <AlertTriangle className="w-4 h-4" />
              {deletingAll ? "Deleting All..." : "Delete All"}
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                {TARGET_FIELDS.map((field) => (
                  <th key={field} className="px-3 py-2 border-b text-left">
                    {field}
                  </th>
                ))}
                <th className="px-3 py-2 border-b text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={TARGET_FIELDS.length + 1} className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              ) : conflicts.length === 0 ? (
                <tr>
                  <td
                    colSpan={TARGET_FIELDS.length + 1}
                    className="text-center py-4 text-gray-500"
                  >
                    No records found
                  </td>
                </tr>
              ) : (
                conflicts.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    {TARGET_FIELDS.map((field) => (
                      <td key={field} className="px-3 py-2 border-b">
                        {row[field] || "-"}
                      </td>
                    ))}
                    <td className="px-3 py-2 border-b text-center">
                      <button
                        onClick={() => handleDelete(row.id)}
                        disabled={deleting === row.id}
                        className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs flex items-center gap-1 mx-auto disabled:opacity-60"
                      >
                        <Trash2 className="w-3 h-3" />
                        {deleting === row.id ? "Deleting..." : "Delete"}
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
