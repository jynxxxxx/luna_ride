
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import EmailSignUp from "./EmailSignUp";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const Header = () => {
  const [showEmailSignUpModal, setEmailSignUpModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container grid grid-cols-2 md:grid-cols-3 items-center px-4 md:px-6 py-4">
        <div className="flex justify-start md:col-span-1">
          <a href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded bg-gradient-to-tr from-lady-primary to-lady-accent flex items-center justify-center">
              <span className="font-display font-bold text-white">UC</span>
            </div>
            <span className="text-lady-primary font-display font-bold text-xl">UnnieCar</span>
          </a>
        </div>

        <nav className="hidden md:flex justify-center gap-6 md:col-start-2 md:col-span-1 md:row-start-1">
          {["home", "driver"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-4 py-2 font-medium relative ${
                currentTab === tab
                  ? "text-lady-primary"
                  : "text-gray-500 hover:text-lady-primary transition-colors"
              }`}
            >
              {tab === "home" ? "홈" : "기사님"}
              {currentTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lady-accent rounded-full" />
              )}
            </button>
          ))}
        </nav>
        
        <div className="md:hidden flex justify-end">
          <Button variant="ghost" size="icon" className="text-lady-primary">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
