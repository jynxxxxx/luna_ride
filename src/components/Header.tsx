
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EmailSignUp from "./EmailSignUp";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50 shadow-soft">
      <div className="container px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-lady-primary flex items-center justify-center shadow-md">
              <span className="font-bold text-white">UC</span>
            </div>
            <span className="text-lady-primary font-bold text-xl">UnnieCar</span>
          </a>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-lady-dark"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {["home", "driver"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-3 py-2 text-sm font-medium relative transition-colors ${
                  currentTab === tab
                    ? "text-lady-primary font-semibold"
                    : "text-lady-dark/70 hover:text-lady-primary"
                }`}
              >
                {tab === "home" ? "홈" : "기사님"}
                {currentTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lady-accent rounded-full transform origin-left animate-fade-in"></span>
                )}
              </button>
            ))}
            
            <Button 
              className="bg-lady-accent hover:bg-lady-accent/90 text-white shadow-md"
              onClick={() => setEmailSignUpModal(true)}
            >
              앱 출시 알림 받기
            </Button>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t mt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {["home", "driver"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`px-3 py-2 text-lg ${
                    currentTab === tab
                      ? "text-lady-primary font-semibold"
                      : "text-lady-dark/70"
                  }`}
                >
                  {tab === "home" ? "홈" : "기사님"}
                </button>
              ))}
              
              <Button 
                className="bg-lady-accent hover:bg-lady-accent/90 text-white w-full mt-2"
                onClick={() => {
                  setEmailSignUpModal(true);
                  setMobileMenuOpen(false);
                }}
              >
                앱 출시 알림 받기
              </Button>
            </div>
          </nav>
        )}
      </div>
      
      {showEmailSignUpModal && (
        <EmailSignUp setEmailSignUpModal={setEmailSignUpModal}/>
      )}
    </header>
  );
};

export default Header;
