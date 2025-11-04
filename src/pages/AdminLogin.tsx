import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const from = location.state?.from?.pathname || "/admin-panel";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }
    if (loading) return;

    setError("");
    setLoading(true);

    try {
      // ✅ use the correct API path for admin login
      const API_URL =
        window.location.hostname === "localhost"
          ? "http://localhost:8080/api/admin_login.php"
          : "https://cnaws.in/api/admin_login.php";

      const res = await fetch(API_URL, {
        method: "POST",
        credentials: "include", // ✅ important for PHP sessions
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      // Handle possible plain-text or malformed responses
      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        console.error("Invalid JSON from server:", text);
        setError("Server error: Invalid response.");
        setLoading(false);
        return;
      }

      // ✅ If login successful, set admin and redirect
      if (data.success) {
        setIsAdmin(true);
        navigate(from, { replace: true });
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch (err) {
      console.error("Login request failed:", err);
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: hideFooterStyle }} />
      <form
        onSubmit={handleLogin}
        className="max-w-md mx-auto mt-20 p-6 bg-gray-100 rounded shadow"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        {error && <p className="text-red-500 mb-3 text-center">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
          autoFocus
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-4 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white font-semibold ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </>
  );
}

export default Login;
