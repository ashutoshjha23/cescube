import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 

// Pages
import Index from "./pages/Index";
import World from "./pages/World";
import Politics from "./pages/Politics";
import Business from "./pages/Business";
import Technology from "./pages/Technology";
import Sports from "./pages/Sports";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Team from "./pages/Team";
import BoardOfAdvisor from "./pages/BoardOfAdvisor";
import Emerging from "./pages/Emerging";
import Disruptive from "./pages/Disruptive";
import Hybrid from "./pages/Hybrid";
import Economic from "./pages/Economic";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Header />
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/world" element={<World />} />
              <Route path="/politics" element={<Politics />} />
              <Route path="/business" element={<Business />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/board-of-advisor" element={<BoardOfAdvisor />} />
              <Route path="/board" element={<BoardOfAdvisor />} /> {/* optional alias */}
              <Route path="/emerging" element={<Emerging />} />
              <Route path="/disruptive" element={<Disruptive />} />
              <Route path="/hybrid" element={<Hybrid />} />
              <Route path="/economic" element={<Economic />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
