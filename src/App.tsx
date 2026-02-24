import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useCallback } from "react";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import WhyUsPage from "./pages/WhyUsPage";
import DigitalMarketing from "./pages/DigitalMarketing";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import MediaPage from "./pages/MediaPage";
import AuditingTaxPage from "./pages/AuditingTaxPage";
import PersonalLoanPage from "./pages/PersonalLoanPage";
import HomeLoanPage from "./pages/HomeLoanPage";
import NotFound from "./pages/NotFound";
import FixedCTA from "./components/FixedCTA";
import AngelChatbot from "./components/AngelChatbot";
import SplashScreen from "./components/SplashScreen";

const queryClient = new QueryClient();

const App = () => {
  const alreadySeen = sessionStorage.getItem("splash_seen") === "true";
  const [showSplash, setShowSplash] = useState(!alreadySeen);

  const handleSplashFinish = useCallback(() => {
    sessionStorage.setItem("splash_seen", "true");
    setShowSplash(false);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
        <BrowserRouter basename="/skinvestment_website">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/how-we-serve" element={<Navigate to="/why-us" replace />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/testimonials" element={<Navigate to="/why-us" replace />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/auditing-tax" element={<AuditingTaxPage />} />
            <Route path="/personal-loan" element={<PersonalLoanPage />} />
            <Route path="/home-loan" element={<HomeLoanPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FixedCTA />
          <AngelChatbot />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

