
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureSection from "@/components/FeatureSection";
import DriverRegistration from "@/components/DriverRegistration";
import { supabase } from "@/integrations/supabase/client";
import CustomerRegistration from "@/components/CustomerRegistration";

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
        });

        navigate(location.pathname, { replace: true, state: {} }); // clean up state
      }, 0);
    }
  }, [location.state]);

  const handleTabChange = (value) => {
    navigate(value === "home" ? "/" : `/${value}`);
    window.scrollTo(0, 0);;
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

  // bg-gradient-to-b from-lady-light to-white
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Tabs value={activeTab} className="w-full" onValueChange={handleTabChange}>
          <TabsContent value="home">
            <section className="relative mt-[-8px] min-h-[50vh] sm:min-h-[90vh] flex items-center py-16 md:py-32 overflow-hidden">
              {/* Background Image Layer */}
              <div
                className="absolute inset-0 bg-center bg-cover opacity-85"
                style={{ backgroundImage: "url('/hero_fade.png')" }}
                aria-hidden="true"
              ></div>
              <div className="relative pl-4 pr-4 md:pl-12 md:pr-6 container">
                <div className="grid gap-6 sm:grid-cols-[1.5fr_1fr] sm:gap-12 items-center">
                  <div className="pl-12" >
                    <p className="break-normal font-bold text-lady-contrast md:text-l lg:text-xl">
                      여성 고객과 여성 기사님을 이어 믿음을 만드는
                    </p>
                    <h1 className="mt-4 break-normal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-lady-primary" style={{ textShadow: '0px 2px 8px rgba(136, 136, 136, 0.6)' }}>
                      여성전용 대리운전 서비스
                    </h1>
                    <p className="mt-12 mb-8 break-normal text-lady-contrast-700 md:text-xl">
                      밤늦은 귀가, 이제 안심하고 자면서 집으로
                      <br />여성 기사님과 편안하게 귀가하세요.  
                    </p>
                    <p className="mb-8 text-2xl font-bold text-lady-contrast">
                      지금 사전등록하면 10,000원 쿠폰팩 제공!
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                      <Button 
                        className="bg-lady-primary hover:bg-lady-primary/90 text-white" 
                        onClick={scrollToSignup}
                      >
                        고객으로 가입하기
                      </Button>
                  
                      <Button variant="outline" 
                        className="border-2 border-lady-primary font-bold text-lady-primary hover:text-lady-primary/90 bg-lady-light"
                        onClick={() => {
                          if (contentRef.current) {
                            contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }}
                      >
                        더 알아보기
                      </Button>
                    </div>
                  </div>
                  {/* <div className="hidden sm:block overflow-visible">
                    <img
                      alt="여성 대리운전"
                      className="mx-auto w-full max-w-[400px] aspect-video rounded-xl object-cover object-center overflow-visible"
                      src="/driver.png"
                    />
                  </div> */}
                </div>
              </div>
            </section>
            
            <FeatureSection ref={contentRef}/>

            <section ref={signupRef} className="bg-lady-light py-20 md:py-32">
              <CustomerRegistration />
            </section>
            <p className="text-zinc-700 text-center my-8">
              곧 서비스 정식 출시 예정입니다. 
              <br />조금만 기다려주세요. 감사합니다.
            </p>

          </TabsContent>
          <TabsContent value="driver">
            <DriverRegistration />
          </TabsContent>
        </Tabs>
      </main>
      <Footer scrollToSignup={scrollToSignup}/>
    </div>
  );
};

export default Index;
