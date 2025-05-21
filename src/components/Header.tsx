
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentTab = (() => {
    if (location.pathname === "/driver") return "driver";
    return "home";
  })();

  const handleTabClick = (tab: string) => {
    navigate(tab === "home" ? "/" : `/${tab}`);
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="flex justify-start">
          <a href="/" className="flex items-center gap-2">
            <img
              alt="여성 대리운전"
              className="header-logo"
              src="/logo.png"
            />
          </a>
        </div>

        <nav className="header-nav">
          <div className="flex gap-4">
            {["home", "driver"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`header-nav-item ${currentTab === tab ? 'active' : ''}`}
              >
                {tab === "home" ? "홈" : "기사님"}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
