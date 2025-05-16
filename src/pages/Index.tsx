
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
import { ArrowRight } from "lucide-react";

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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Tabs value={activeTab} className="w-full" onValueChange={handleTabChange}>
          <TabsContent value="home">
            <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-lady-secondary/20 to-white z-0"></div>
              <div className="absolute right-0 top-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -right-20 top-20 w-80 h-80 bg-lady-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-lady-primary/5 rounded-full blur-3xl"></div>
              </div>
              
              <div className="container relative z-10 px-4 md:px-6">
                <div className="grid gap-8 sm:grid-cols-[1.2fr_0.8fr] lg:grid-cols-[1.1fr_0.9fr] sm:gap-12 items-center">
                  <div className="fade-in">
                    <p className="text-lady-primary font-display font-medium md:text-lg lg:text-xl mb-2">
                      여성 고객과 여성 기사님을 이어 믿음을 만드는
                    </p>
                    <h1 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-lady-dark">
                      여성전용 대리운전 서비스
                    </h1>
                    <p className="mt-6 text-lg text-lady-muted md:text-xl leading-relaxed">
                      밤늦은 귀가, 이제 안심하고 자면서 집으로
                      <br />여성 기사님과 편안하게 귀가하세요.  
                    </p>
                    <div className="mt-8 mb-8 inline-block bg-gradient-to-r from-lady-primary/10 to-lady-accent/10 px-6 py-3 rounded-md border border-lady-primary/10">
                      <p className="text-xl md:text-2xl font-bold text-lady-primary">
                        지금 사전등록하면 10,000원 쿠폰팩 제공!
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
                      <Button 
                        className="btn-primary flex items-center gap-2" 
                        onClick={scrollToSignup}
                      >
                        고객으로 가입하기 <ArrowRight size={18} />
                      </Button>
                  
                      <Button 
                        variant="outline" 
                        className="btn-outline"
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
                  <div className="hidden sm:block relative fade-in-delayed">
                    <div className="absolute -inset-1 bg-gradient-to-br from-lady-primary/20 to-lady-accent/20 rounded-lg blur-sm opacity-70"></div>
                    <div className="relative overflow-hidden rounded-lg shadow-premium bg-white p-1">
                      <img
                        alt="여성 대리운전"
                        className="w-full rounded-md object-cover object-center aspect-[4/3]"
                        src="/logo_bgr.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <FeatureSection ref={contentRef}/>
            
            <section className="section-padding relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white via-lady-secondary/20 to-white z-0"></div>
              <div className="container relative z-10 px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-lady-dark mb-6">
                    여성을 위한, 여성에 의한 서비스
                  </h2>
                  <p className="text-lady-muted text-lg mb-8">
                    안전함과 편안함을 최우선으로 생각하는 여성 대리운전 서비스입니다.
                    지금 기사로 등록하고 함께 안전한 이동 문화를 만들어보세요.
                  </p>
                  <Button 
                    className="btn-primary"
                    onClick={() => navigate("/driver", { state: { scrollToDriverSignup: true } })}
                  >
                    지금 기사로 등록하기
                  </Button>
                </div>
              </div>
            </section>

            <section ref={signupRef} className="pt-16">
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
