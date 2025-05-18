
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import DriverFeatureSection from "@/components/DriverFeatureSection";
import { Shield, Lock } from "lucide-react";

const DriverRegistration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const driverFeaturesRef = useRef(null);
  const driverSignupRef = useRef(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    consent: false,
    experience: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    if (location.state?.scrollToDriverSignup) {
      setTimeout(() => {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    
        // Adjust the scroll position by subtracting the header height
        window.scrollTo({
          top: driverSignupRef.current.offsetTop - headerHeight,
        });

        navigate(location.pathname, { replace: true, state: {} }); // clean up state
      }, 0);
    }
  }, [location.state]);
    
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    let parsedValue: string | boolean = value;

    if (type === "checkbox") {
      parsedValue = checked;
    } else if (name === "experience") {
      parsedValue = value === "true";
    }

    setFormData((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone  || formData.experience === null || !formData.consent) {
      toast({
        title: "모든 필드를 입력해주세요",
        description: "개인정보 수집 동의에 체크하셔야 합니다.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('driver_registrations')
        .insert([{
          name: formData.name,
          phone: formData.phone,
          consent_given: formData.consent,
          experience: formData.experience
        }]);
      
      if (error) {
        console.error("Error submitting form:", error);
        toast({
          title: "오류가 발생했습니다",
          description: "잠시 후 다시 시도해주세요.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "등록 신청이 완료되었습니다",
          description: "검토 후 이메일로 안내드리겠습니다.",
        });
        
        // Reset form
        setFormData({
          name: "",
          phone: "",
          consent: false,
          experience: false
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "오류가 발생했습니다",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive", 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section for Driver */}
      <section className="relative min-h-[85vh] flex items-center py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-95"
          style={{ 
            backgroundImage: "url('/driver_hero.jpg')",
            transform: `translateY(${offset * 0.4}px)`
          }}
          aria-hidden="true"
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        
        <div className="relative container px-4 md:px-6 z-10">
          <div className="max-w-2xl">
            <div className="inline-block bg-lady-gold/90 px-4 py-1 rounded-full mb-6">
              <p className="text-white font-medium text-sm">기사 등록 이벤트 진행 중</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              여성 기사님을 위한<br/>새로운 기회
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl">
              언니차와 함께 안전하고 높은 수익을 올릴 수 있는 새로운 시작을 해보세요.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <Button 
                className="h-12 md:h-14 px-8 text-base bg-lady-gold hover:bg-lady-gold/90 text-white"
                onClick={() => {
                  if (driverSignupRef.current) {
                    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                    window.scrollTo({
                      top: driverSignupRef.current.offsetTop - headerHeight,
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                기사로 가입하기
              </Button>
              
              <Button 
                variant="outline" 
                className="h-12 md:h-14 px-8 text-base border-white text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => {
                  if (driverFeaturesRef.current) {
                    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                    window.scrollTo({
                      top: driverFeaturesRef.current.offsetTop - headerHeight,
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                더 알아보기
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust indicators for drivers */}
      <section className="bg-white py-8 md:py-10 border-y border-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-lady-light flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-lady-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lady-primary">안전한 고객 매칭</h3>
                <p className="text-sm text-gray-500">100% 여성 고객만 매칭됩니다</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-lady-light flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-lady-primary">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M3 9h18"></path>
                  <path d="M9 21V9"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lady-primary">유연한 근무 시간</h3>
                <p className="text-sm text-gray-500">원하는 시간에 일하세요</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-lady-light flex items-center justify-center flex-shrink-0">
                <CreditCard className="h-5 w-5 text-lady-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lady-primary">경쟁력 있는 보수</h3>
                <p className="text-sm text-gray-500">낮은 수수료, 더 많은 수익</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DriverFeatureSection ref={driverFeaturesRef}/>
      
      <section ref={driverSignupRef} className="bg-lady-light section-spacing">
        <div className="container px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-lady-primary mb-4">
              여성 대리운전 기사 등록
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              신뢰할 수 있는 여성 전용 대리운전 서비스를 함께 만들어갈 기사님을 모집합니다.
            </p>
          </div>
  
          <Card className="bg-white rounded-2xl overflow-hidden shadow-lg card-shadow border-0">
            <div className="magazine-grid">
              <div className="md:col-span-7 p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-base">이름</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="홍길동"
                        className="h-12 text-base"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                    </div>
  
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-base">휴대폰 번호</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="010-1234-5678"
                        className="h-12 text-base"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                    </div>
  
                    <div className="space-y-3">
                      <Label htmlFor="experience" className="text-base">대리기사 경험이 있으신가요? (없어도 괜찮습니다)</Label>
                      <div className="flex items-center gap-6 mt-2">
                        <label className="flex items-center gap-2 text-base">
                          <input
                            type="radio"
                            name="experience"
                            value="true"
                            checked={formData.experience===true}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            required
                            className="w-5 h-5 text-lady-primary focus:ring-lady-accent"
                          />
                          예
                        </label>
                        <label className="flex items-center gap-2 text-base">
                          <input
                            type="radio"
                            name="experience"
                            value="false"
                            checked={formData.experience===false}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            required
                            className="w-5 h-5 text-lady-primary focus:ring-lady-accent"
                          />
                          아니오
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-lady-light p-6 rounded-xl space-y-4">
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-lady-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-lady-primary mb-2">개인정보 수집 및 이용 동의</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          제출해주신 정보는 기사 등록 정보 제공 만을 위해 사용되며, 이외의 목적으로는 사용 되지 않습니다. 
                          정보는 기사 정보 제공 이후 자동적으로 자체 폐기될 예정입니다. 
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 pl-8">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        required
                        className="w-5 h-5 rounded border-gray-300 text-lady-primary focus:ring-lady-accent"
                        disabled={isSubmitting}
                      />
                      <Label htmlFor="consent" className="text-base font-medium text-lady-primary cursor-pointer">
                        개인정보 수집 및 이용에 동의합니다
                      </Label>
                    </div>
                  </div>
  
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base bg-lady-primary hover:bg-lady-deep"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "제출 중..." : "기사 등록 신청"}
                  </Button>
                </form>
              </div>
              
              <div className="hidden md:block md:col-span-5 bg-lady-accent/10">
                <div className="h-full flex items-center justify-center p-8">
                  <div className="relative w-full max-w-sm">
                    <div className="absolute -top-8 -left-8 w-20 h-20 bg-lady-gold/20 rounded-full"></div>
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-lady-accent/20 rounded-full"></div>
                    <div className="bg-white rounded-xl p-8 shadow-md">
                      <h3 className="font-serif text-2xl text-lady-primary mb-4">기사님 혜택</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lady-accent mt-1">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                          <span className="text-gray-700">유연한 근무 일정</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lady-accent mt-1">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                          <span className="text-gray-700">업계 최저 수수료</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lady-accent mt-1">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                          <span className="text-gray-700">100% 여성 고객 매칭</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lady-accent mt-1">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                          <span className="text-gray-700">정기적인 기사님 모임 및 교육</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <p className="text-gray-500 text-center mt-8 text-sm">
          곧 서비스 정식 출시 예정입니다. 조금만 기다려주세요. 감사합니다.
        </p>
      </section>
    </>
  );
};

export default DriverRegistration;
