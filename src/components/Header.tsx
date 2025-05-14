
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EmailSignUp from "./EmailSignUp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Header = ({ activeTab, setActiveTab }) => {
  const [showEmailSignUpModal, setEmailSignUpModal] = useState(false);

  return (
    <header className="border-b bg-lady-light sticky top-0 z-50">
       <div className="container grid grid-cols-2 md:grid-cols-3 items-center px-4 md:px-6 py-2">
        <div className="flex justify-start md:col-span-1">
          <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-lady-primary flex items-center justify-center">
                <span className="font-bold text-white">UC</span>
              </div>
              {/* <div className="h-8 w-24 rounded-full flex items-center justify-center">
                <img
                  alt="여성 대리운전"
                  className="aspect-video rounded-xl object-contain object-center"
                  src="/logo_bgr.png"
                />
              </div> */}
            <span className="text-lady-primary font-bold">UnnieCar</span>
          </a>
        </div>

        <nav className="flex justify-center gap-4 col-span-2 row-start-2 row-span-1 md:mt-0 md:col-start-2 md:col-span-1 md:row-start-1 ">
          <div className="flex gap-4">
            {["home", "customer", "driver"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-semibold border-b-2 ${
                  activeTab === tab
                    ? "border-lady-primary text-lady-primary"
                    : "border-transparent"
                }`}
              >
                {tab === "home" ? "홈" : tab === "customer" ? "고객님" : "기사님"}
              </button>
            ))}
          </div>
        </nav>

        <div className="flex justify-end md:col-span-1 md:col-start-3 items-center gap-4">
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
