import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Driver from "./pages/driver";
import Customer from "./pages/customer";
import Corporate from "./pages/corporate";
import NotFound from "./pages/NotFound";
import React, { useEffect } from "react";
import { useMetaPixel } from "./hooks/useMetaPixel";
import '@/styles/global.scss';

const queryClient = new QueryClient();

const App = () => {

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="driver" element={<Driver />} />
            <Route path="customer" element={<Customer />} />
            <Route path="corporate" element={<Corporate />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
}
export default App;
