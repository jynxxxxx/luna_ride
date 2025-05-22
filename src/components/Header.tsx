
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EmailSignUp from "./EmailSignUp";
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import headerStyles from "@/styles/header.module.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentTab = (() => {
    if (location.pathname === "/driver") return "driver";
    if (location.pathname === "/customer") return "customer";
    return "home";
  })();

  const handleTabClick = (tab: string) => {
    navigate(tab === "home" ? "/" : `/${tab}`);
    window.scrollTo(0, 0);;
  };

  return (
    <header className={headerStyles.header}>
       <div className={headerStyles.ctn}>
        <div className={headerStyles.logo}>
          <a href="/" >
            mobl
            {/* <img
              alt="여성 대리운전"
              className="h-10 sm:h-12 w-auto"
              src="/logo.png"
            /> */}
          </a>
        </div>

        <nav className={headerStyles.nav}>
          <div className={headerStyles.tabs}>
            {["customer", "driver"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`${headerStyles.tabButton} ${
                  currentTab === tab ? headerStyles.active : ''
                }`}
              >
                {tab === "customer" ? "모블 서비스" : "드라이버 채용"}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
