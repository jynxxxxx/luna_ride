
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EmailSignUp from "./EmailSignUp";
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentTab = (() => {
    if (location.pathname === "/driver") return "driver";
    return "home";
  })();

  const handleTabClick = (tab: string) => {
    navigate(tab === "home" ? "/" : `/${tab}`);
    window.scrollTo(0, 0);;
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
       <div className="container grid grid-cols-2 sm:grid-cols-3 items-center px-4 md:px-6 py-2">
        <div className="flex justify-start">
          <a href="/" className="flex items-center gap-2">
            <img
              alt="여성 대리운전"
              className="h-10 sm:h-12 w-auto"
              src="/logo.png"
            />
          </a>
        </div>

        <nav className="flex justify-center gap-4 sm:mt-0">
          <div className="flex gap-4">
            {["home", "driver"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-2 font-semibold border-b-2 ${
                  currentTab === tab
                    ? "border-lady-primary text-lady-primary"
                    : "border-transparent"
                }`}
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
