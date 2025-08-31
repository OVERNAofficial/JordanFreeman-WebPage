import { BrowserRouter, Routes, Route } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";

// Global components
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Pages
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Project pages
import RacetekPage from "@/pages/projects/racetek";
import OvernaPage from "@/pages/projects/overna";
import PluginsPage from "@/pages/projects/plugins";
import SynterraPage from "@/pages/projects/synterra";
import AermorixPage from "@/pages/projects/aermorix";
import SaasTrendPage from "@/pages/projects/saastrend";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/racetek" element={<RacetekPage />} />
                <Route path="/projects/overna" element={<OvernaPage />} />
                <Route path="/projects/plugins" element={<PluginsPage />} />
                <Route path="/projects/synterra" element={<SynterraPage />} />
                <Route path="/projects/aermorix" element={<AermorixPage />} />
                <Route path="/projects/saastrend" element={<SaasTrendPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
