/* ============================================================
   CASTILE REALTY REALTY GROUP — App Router
   Brand: Deep Navy + Gold | Premium Idaho Real Estate
   ============================================================ */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import Relocation from "./pages/Relocation";
import Communities from "./pages/Communities";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BuySell from "./pages/BuySell";
import Listings from "./pages/Listings";
import McCall from "./pages/McCall";
import Blog from "./pages/Blog";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/relocation" component={Relocation} />
      <Route path="/communities" component={Communities} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/buy-sell" component={BuySell} />
      <Route path="/listings" component={Listings} />
      <Route path="/mccall" component={McCall} />
      <Route path="/blog" component={Blog} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
