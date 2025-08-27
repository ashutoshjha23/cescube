import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, createContext, useContext, useEffect } from "react";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Pages
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Team from "./pages/Team";
import Course from "./pages/Course";
import BoardOfAdvisor from "./pages/BoardOfAdvisor";
import CoreTeam from "./pages/CoreTeam";
import Emerging from "./pages/Emerging";
import Disruptive from "./pages/Disruptive";
import Hybrid from "./pages/Hybrid";
import Economic from "./pages/Economic";
import MapPage from "./pages/MapPage";
import Gathering from "./pages/Gathering";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/NotFound";

// Admin
import AdminPanel from "@/pages/AdminPanel";
import AdminLogin from "@/pages/AdminLogin";

const queryClient = new QueryClient();

// --- Auth Context ---
interface AuthContextType {
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

// --- AuthProvider ---
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/auth_check.php", {
          credentials: "include",
        });
        const data = await res.json();
        if (data.authenticated) setIsAdmin(true);
      } catch (err) {
        console.error("Auth check failed:", err);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  const logout = async () => {
    await fetch("http://localhost:8080/api/logout.php", { credentials: "include" });
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, setIsAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// --- Protected Route ---
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAdmin } = useAuth();
  if (isAdmin === null) return <p>Loading...</p>;
  return isAdmin ? children : <Navigate to="/admin/login" replace />;
};

// --- App ---
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <main style={{ flex: 1 }}>
              <Routes>
                {/* Public Pages */}
                <Route path="/" element={<Index />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/courses" element={<Course />} />
                <Route path="/board" element={<BoardOfAdvisor />} />
                <Route path="/core-team" element={<CoreTeam />} />
                <Route path="/gathering" element={<Gathering />} />

                {/* Thematic Pages */}
                <Route path="/emerging" element={<Emerging />} />
                <Route path="/disruptive" element={<Disruptive />} />
                <Route path="/hybrid" element={<Hybrid />} />
                <Route path="/economic" element={<Economic />} />
                <Route path="/map" element={<MapPage />} />

                {/* Article Page */}
                <Route path="/article/:id" element={<ArticlePage />} />

                {/* Admin */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route
                  path="/admin-panel"
                  element={
                    <ProtectedRoute>
                      <AdminPanel />
                    </ProtectedRoute>
                  }
                />

                {/* Fallback */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
