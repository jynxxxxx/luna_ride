
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Tabs value={activeTab} className="w-full" onValueChange={handleTabChange}>
          <TabsContent value="home">
            <section className="mt-[-8px] bg-gradient-to-b from-lady-secondary to-white py-16 md:py-32">
              <div className="pl-4 pr-4 md:pl-12 md:pr-6 container">
                <div className="grid gap-6 sm:grid-cols-[1.5fr_1fr] sm:gap-12 items-center">
                  <div>
                    <p className="break-normal font-bold text-lady-primary md:text-2xl lg:text-3xl">
                      여성 고객과 여성 기사님을 이어 믿음을 만드는
                    </p>
                    <h1 className="mt-4 break-normal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-lady-primary">
                      여성전용 대리운전 서비스
                    </h1>
                    <p className="mt-12 mb-8 break-normal text-zinc-700 md:text-xl">
                      밤늦은 귀가, 이제 안심하고 자면서 집으로
                      <br />여성 기사님과 편안하게 귀가하세요.  
                    </p>
                    <p className="mb-8 text-2xl font-bold text-lady-primary">
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
                        className="border-lady-primary text-lady-primary hover:text-lady-primary/90 hover:bg-lady-secondary"
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
                  <div className="hidden sm:block overflow-visible">
                    <img
                      alt="여성 대리운전"
                      className="mx-auto w-full max-w-[400px] aspect-video rounded-xl object-cover object-center overflow-visible"
                      src="/logo_bgr.png"
                    />
                  </div>
                </div>
              </div>
            </section>
            
            <FeatureSection ref={contentRef}/>
            
            <section className="py-16 md:py-20 lg:py-28 bg-[linear-gradient(to_bottom,_white_0%,_#fff1d6_25%,_#fff1d6_75%,_white_100%)]">
              <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold text-lady-primary mb-4">
                    여성을 위한, 여성에 의한 서비스
                  </h2>
                  <p className="text-zinc-700 mb-8">
                    안전함과 편안함을 최우선으로 생각하는 여성 대리운전 서비스입니다.
                    지금 기사로 등록하고 함께 안전한 이동 문화를 만들어보세요.
                  </p>
                  <Button 
                    className="bg-lady-primary hover:bg-lady-primary/90 text-white" 
                    onClick={() => navigate("/driver", { state: { scrollToDriverSignup: true } })}
                  >
                    지금 기사로 등록하기
                  </Button>
                </div>
              </div>
            </section>

            <section ref={signupRef}>
              <CustomerRegistration />
            </section>

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
