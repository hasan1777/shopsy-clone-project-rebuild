import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Shopsy routes - these will be implemented in future updates */}
          <Route path="/shop" element={<Navigate to="/" />} />
          <Route path="/categories" element={<Navigate to="/" />} />
          <Route path="/trending" element={<Navigate to="/" />} />
          <Route path="/deals" element={<Navigate to="/" />} />
          <Route path="/flash-sale" element={<Navigate to="/" />} />
          <Route path="/summer-collection" element={<Navigate to="/" />} />
          <Route path="/product/:id" element={<Navigate to="/" />} />
          <Route path="/contact" element={<Navigate to="/" />} />
          {/* For now, we navigate back to home for these routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
