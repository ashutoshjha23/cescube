import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/App";

// Hide global footer when admin login is rendered
const hideFooterStyle = `
  <style>
    footer, .footer, #footer { display: none !important; }
  </style>
`;

function Login() {
  const { setIsAdmin } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const API_URL =
        window.location.hostname === "localhost"
          ? "http://localhost:8080/api/login.php"
          : "https://cnaws.in/api/login.php";

      const res = await fetch(API_URL, {
        method: "POST",
        credentials: "include", // important for cookies
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        console.error("Invalid JSON response:", text);
        setError("Server error: Invalid response");
        setLoading(false);
        return;
      }

      if (data.success) {
        setIsAdmin(true);
        navigate("/admin-panel"); // redirect to admin panel
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: hideFooterStyle }} />
      <div className="max-w-md mx-auto mt-20 p-6 bg-gray-100 rounded shadow">
      <h2 className="text-2xl mb-4">Admin Login</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />
      <button
        onClick={handleLogin}
        disabled={loading}
        className={`w-full py-2 rounded text-white ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
      </div>
    </>
  );
}

export default Login;
