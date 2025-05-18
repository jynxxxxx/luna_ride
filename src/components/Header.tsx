
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentTab = (() => {
    if (location.pathname === "/driver") return "driver";
    return "home";
  })();

  // Add scroll listener for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (tab: string) => {
    navigate(tab === "home" ? "/" : `/${tab}`);
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img
              alt="언니차"
              className="h-8 sm:h-10 w-auto"
              src="/logo.png"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["home", "driver"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`relative px-1 py-2 font-medium text-base premium-transition ${
                  currentTab === tab
                    ? "text-lady-primary"
                    : "text-gray-600 hover:text-lady-primary"
                }`}
              >
                <span>{tab === "home" ? "고객님" : "기사님"}</span>
                {currentTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lady-accent rounded-full"></span>
                )}
              </button>
            ))}
            
            <Button 
              className="bg-lady-primary hover:bg-lady-deep text-white rounded-lg"
              onClick={() => navigate("/", { state: { scrollToCustomerSignup: true } })}
            >
              회원가입
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-lady-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t animate-fade-in shadow-md">
            <div className="container px-4 py-4 flex flex-col space-y-4">
              {["home", "driver"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`px-1 py-3 font-medium text-lg border-b ${
                    currentTab === tab
                      ? "text-lady-primary border-lady-accent"
                      : "text-gray-600 border-transparent"
                  }`}
                >
                  <span>{tab === "home" ? "고객님" : "기사님"}</span>
                </button>
              ))}
              
              <Button 
                className="bg-lady-primary hover:bg-lady-deep text-white w-full rounded-lg"
                onClick={() => {
                  navigate("/", { state: { scrollToCustomerSignup: true } });
                  setMobileMenuOpen(false);
                }}
              >
                회원가입
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
