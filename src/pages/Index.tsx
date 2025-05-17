
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureSection from "@/components/FeatureSection";
import DriverRegistration from "@/components/DriverRegistration";
import CustomerRegistration from "@/components/CustomerRegistration";
import Hero from "@/components/Hero";
import PromotionSection from "@/components/PromotionSection";

const Index = ({activeTab}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const signupRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToCustomerSignup) {
      setTimeout(() => {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    
        // Adjust the scroll position by subtracting the header height
        window.scrollTo({
          top: signupRef.current.offsetTop - headerHeight,
          behavior: 'smooth'
        });

        navigate(location.pathname, { replace: true, state: {} }); // clean up state
      }, 0);
    }
  }, [location.state]);

  const handleTabChange = (value) => {
    navigate(value === "home" ? "/" : `/${value}`);
    window.scrollTo(0, 0);
  };

  const scrollToSignup = () => {
    // Get the height of the header or any other offset
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    
    // Adjust the scroll position by subtracting the header height
    window.scrollTo({
      top: signupRef.current.offsetTop - headerHeight,
      behavior: 'smooth',
    });
  };
  
  const scrollToContent = () => {
    if (contentRef.current) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      window.scrollTo({
        top: contentRef.current.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  };
  
  const navigateToDriver = () => {
    navigate("/driver", { state: { scrollToDriverSignup: true } });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16">
        <Tabs value={activeTab} className="w-full" onValueChange={handleTabChange}>
          <TabsContent value="home">
            <Hero 
              scrollToSignup={scrollToSignup} 
              scrollToContent={scrollToContent} 
            />
            
            <FeatureSection ref={contentRef}/>
            
            <PromotionSection navigateToDriver={navigateToDriver} />

            <section ref={signupRef} className="section bg-white">
              <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-10">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-lady-accent bg-lady-secondary rounded-full mb-4">
                      지금 등록하세요
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-lady-primary mb-4">
                      편안한 이동을 위한 첫 걸음
                    </h2>
                    <p className="text-gray-600">
                      간단한 정보 입력으로 고객 등록을 완료하고 서비스 출시 알림을 받아보세요.
                    </p>
                  </div>
                  <CustomerRegistration />
                </div>
              </div>
            </section>
          </TabsContent>
          
          <TabsContent value="driver">
            <div className="pt-32 md:pt-40">
              <DriverRegistration />
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer scrollToSignup={scrollToSignup}/>
    </div>
  );
};

export default Index;
