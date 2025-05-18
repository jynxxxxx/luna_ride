
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
import { Shield, Clock, MapPin } from "lucide-react";

const Index = ({activeTab}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const signupRef = useRef(null);
  const contentRef = useRef(null);
  
  // For parallax effect
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffset(window.pageYOffset);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <main className="flex-1 pt-16">
        <Tabs value={activeTab} className="w-full" onValueChange={handleTabChange}>
          <TabsContent value="home">
            {/* Hero section with parallax effect */}
            <section className="relative min-h-[85vh] flex items-center py-16 md:py-24 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-90"
                style={{ 
                  backgroundImage: "url('/passenger.jpg')",
                  transform: `translateY(${offset * 0.4}px)`
                }}
                aria-hidden="true"
              ></div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10"></div>
              
              <div className="relative container px-4 md:px-6 z-10">
                <div className="max-w-3xl">
                  <div className="inline-block bg-lady-gold/90 px-4 py-1 rounded-full mb-6">
                    <p className="text-white font-medium text-sm">사전 등록 10,000원 쿠폰팩 증정</p>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                    여성만을 위한<br/>프리미엄 대리운전
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                    여성 고객과 여성 기사님을 이어 믿음을 만드는 안전한 서비스. 
                    밤늦은 귀가, 이제 안심하고 자면서 집으로
                  </p>
                  
                  <div className="flex flex-col md:flex-row gap-4 md:items-center">
                    <Button 
                      className="h-12 md:h-14 px-8 text-base bg-lady-gold hover:bg-lady-gold/90 text-white"
                      onClick={scrollToSignup}
                    >
                      고객으로 가입하기
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="h-12 md:h-14 px-8 text-base border-white text-white hover:bg-white/10 backdrop-blur-sm"
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
              </div>
            </section>
            
            {/* Trust indicators section */}
            <section className="bg-white py-8 md:py-10 border-y border-gray-100">
              <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-lady-light flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-lady-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lady-primary">안전 보장 시스템</h3>
                      <p className="text-sm text-gray-500">실시간 위치 추적 및 모니터링</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-lady-light flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-lady-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lady-primary">24시간 고객 지원</h3>
                      <p className="text-sm text-gray-500">언제든 필요할 때 바로 도움 제공</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-lady-light flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-lady-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lady-primary">전국 서비스 지원</h3>
                      <p className="text-sm text-gray-500">어디서든 필요한 곳에서 이용 가능</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <FeatureSection ref={contentRef}/>
            
            {/* Testimonial section for additional trust */}
            <section className="bg-lady-light section-spacing">
              <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-lady-primary mb-4">
                    고객님의 소중한 경험
                  </h2>
                  <p className="text-lg text-gray-700">
                    언니차를 이용해주신 분들의 진솔한 후기입니다
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl card-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-lady-gold/10 flex items-center justify-center text-lady-gold font-semibold">
                        김
                      </div>
                      <div>
                        <p className="font-medium text-lady-primary">김미영님</p>
                        <p className="text-sm text-gray-500">서울 강남구</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      "회식 후 늦은 밤, 언니차 덕분에 안전하게 집에 돌아갈 수 있었습니다. 여성 기사님이라서 정말 안심이 되었고 친절하게 대해주셔서 감사했습니다."
                    </p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl card-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-lady-gold/10 flex items-center justify-center text-lady-gold font-semibold">
                        이
                      </div>
                      <div>
                        <p className="font-medium text-lady-primary">이지현님</p>
                        <p className="text-sm text-gray-500">인천 부평구</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      "취한 상태로 대리운전을 잡았는데, 여성 기사님이 오셔서 마음이 놓였어요. 정말 편안하게 이동할 수 있었고 앞으로도 계속 이용할 예정입니다."
                    </p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl card-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-lady-gold/10 flex items-center justify-center text-lady-gold font-semibold">
                        박
                      </div>
                      <div>
                        <p className="font-medium text-lady-primary">박수진님</p>
                        <p className="text-sm text-gray-500">경기 분당구</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      "다른 대리운전은 항상 불안했는데, 언니차는 모니터링 시스템도 있고 여성 기사님이셔서 안심하고 잠들 수 있었어요. 감사합니다!"
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section ref={signupRef} className="bg-white section-spacing">
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
