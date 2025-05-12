
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EmailSignUp from "./EmailSignUp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Header = ({ activeTab, setActiveTab }) => {
  const [showEmailSignUpModal, setEmailSignUpModal] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-lady-primary flex items-center justify-center">
              <span className="font-bold text-white">LR</span>
            </div>
            <span className="text-lady-primary font-bold">LunaRide</span>
          </a>
        </div>
        <nav className="hidden md:flex gap-6">
          <div className="container mx-auto flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("home")}
              className={`px-4 py-2 font-semibold border-b-2 ${
                activeTab === "home" ? "border-lady-primary text-lady-primary" : "border-transparent"
              }`}
            >
              홈
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`px-4 py-2 font-semibold border-b-2 ${
                activeTab === "register" ? "border-lady-primary text-lady-primary" : "border-transparent"
              }`}
            >
              기사 등록
            </button>
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-lady-primary hover:bg-lady-primary/90 text-white" onClick={() => setEmailSignUpModal(true)}>
            앱 출시 알림 받기
          </Button>
        </div>
      </div>
      {showEmailSignUpModal && (
        <EmailSignUp setEmailSignUpModal={setEmailSignUpModal}/>
      )}
    </header>
  );
};

export default Header;
