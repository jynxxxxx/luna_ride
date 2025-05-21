
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureSection from "@/components/CustomerFeatureSection";
import DriverRegistration from "@/components/DriverRegistration";
import { supabase } from "@/integrations/supabase/client";
import CustomerRegistration from "@/components/CustomerReservation";

const Corporate = () => {

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-afacad font-bold mb-4">ribon 기업</h1>
        <p className="text-xl font-afacad text-gray-600 mb-4">Coming Soon... </p>
        <a href="/" className="text-blue-500 font-afacad hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default Corporate;
