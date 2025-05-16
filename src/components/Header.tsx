
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EmailSignUp from "./EmailSignUp";
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, User, Menu, X } from "lucide-react";

const Header = () => {
  const [showEmailSignUpModal, setEmailSignUpModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentTab = (() => {
    if (location.pathname === "/customer") return "customer";
    if (location.pathname === "/driver") return "driver";
    return "home";
  })();

  const handleTabClick = (tab: string) => {
    navigate(tab === "home" ? "/" : `/${tab}`);
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container grid grid-cols-2 md:grid-cols-3 items-center px-4 md:px-6 py-4">
        <div className="flex justify-start md:col-span-1">
          <a href="/" className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-lady-primary to-lady-dark flex items-center justify-center shadow-md">
              <span className="font-display font-bold text-white text-lg">UC</span>
            </div>
            <span className="text-lady-primary font-display font-bold text-xl tracking-tight">UnnieCar</span>
          </a>
        </div>

        <nav className="hidden md:flex justify-center gap-4 md:mt-0 md:col-start-2 md:col-span-1 md:row-start-1">
          <div className="flex gap-6">
            {["home", "driver"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-2 font-medium transition-all duration-300 relative ${
                  currentTab === tab
                    ? "text-lady-primary"
                    : "text-lady-muted hover:text-lady-primary"
                }`}
              >
                {tab === "home" ? "홈" : "기사님"}
                {currentTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lady-accent rounded-full" />
                )}
              </button>
            ))}
          </div>
        </nav>

        <div className="flex justify-end md:col-span-1 md:col-start-3 items-center gap-3">
          {/* Mobile menu toggle */}
          <button 
            className="md:hidden p-2 text-lady-primary" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-4 bg-white border-t border-gray-100 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {["home", "driver"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-3 rounded-lg font-medium ${
                  currentTab === tab
                    ? "bg-lady-primary/10 text-lady-primary"
                    : "text-lady-muted hover:bg-gray-50"
                }`}
              >
                {tab === "home" ? "홈" : "기사님"}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
