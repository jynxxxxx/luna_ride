
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import DriverFeatureSection from "@/components/DriverFeatureSection";
import { ArrowRight } from "lucide-react";

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
      <section className="relative bg-gradient-to-b from-lady-light to-white py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/driver_header.png')] bg-right-top bg-no-repeat opacity-10 md:opacity-20"></div>
        
        <div className="pl-4 pr-4 md:pl-12 md:pr-12 container relative z-10">
          <div className="grid gap-6 sm:grid-cols-[1.5fr_1fr] sm:gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-1 bg-lady-accent/10 rounded-full text-lady-accent font-medium text-sm mb-4">
                여성 전용 대리운전
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6 leading-tight">
                여성 기사님을 위한<br/> 
                안전하고 수익 높은 서비스
              </h1>
              <p className="text-gray-600 md:text-lg mb-10 max-w-xl">
                빠른 매칭 시스템과 낮은 수수료 덕분에 더 많은 고객을 만나고, 
                이제는 더 높은 수익을 얻을 수 있는 기회를 잡아보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-lady-accent hover:bg-lady-accent/90 text-white shadow-md flex items-center gap-2 text-base px-6 py-6"
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
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-lady-dark text-lady-dark hover:bg-lady-light"
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
            <div className="hidden sm:block overflow-visible">
              <img
                alt="여성 대리운전"
                className="rounded-2xl object-cover object-center shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500"
                src="/driver_header.png"
              />
            </div>
          </div>
        </div>
      </section>

      <DriverFeatureSection ref={driverFeaturesRef}/>

      <div ref={driverSignupRef} className="container py-16 px-4 md:px-6 max-w-4xl rounded-3xl my-20">
        <div className="mb-12 text-center">
          <h2 className="section-title mx-auto inline-block pb-3 mb-6 text-lady-dark">
            여성 대리운전 기사 등록
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            신뢰할 수 있는 여성 전용 대리운전 서비스를 함께 만들어갈 기사님을 모집합니다. 
            <br />아래 양식을 통해 지원해주세요. 기사님께 안전하고 좋은 콜을 많이 제공할 수 있도록 최선을 다해 지원하겠습니다. 
          </p>
        </div>

        <Card className="p-8 rounded-2xl shadow-soft border border-gray-100 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lady-dark font-medium">이름</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="홍길동"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="border-gray-200 focus:border-lady-primary focus:ring-lady-primary rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-lady-dark font-medium">휴대폰 번호</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="010-1234-5678"
                required
                value={formData.phone}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="border-gray-200 focus:border-lady-primary focus:ring-lady-primary rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-lady-dark font-medium">대리기사 경험이 있으신가요? &#40;없어도 괜찮습니다&#41;</Label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="experience"
                    value="true"
                    checked={formData.experience===true}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                    className="w-4 h-4 text-lady-primary border-gray-300 focus:ring-lady-primary"
                  />
                  예
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="experience"
                    value="false"
                    checked={formData.experience===false}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                    className="w-4 h-4 text-lady-primary border-gray-300 focus:ring-lady-primary"
                  />
                  아니오
                </label>
              </div>
            </div>
            
            <div className="bg-lady-light p-6 rounded-xl">
              <h4 className="font-medium text-lady-dark mb-2">개인정보 수집 및 이용 동의</h4>
              <p className="text-sm text-gray-600 mb-4">
                제출해주신 정보는 기사 등록 정보 제공 만을 위해 사용되며, 이외의 목적으로는 사용 되지 않습니다. 
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                  className="w-4 h-4 rounded border-gray-300 text-lady-primary focus:ring-lady-primary"
                  disabled={isSubmitting}
                />
                <Label htmlFor="consent" className="text-sm font-normal">
                  개인정보 수집 및 이용에 동의합니다
                </Label>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-lady-accent hover:bg-lady-accent/90 text-white py-6 text-base shadow-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? "제출 중..." : "기사 등록 신청"}
            </Button>
          </form>
        </Card>

        <div className="text-center mt-10 p-6 bg-gradient-to-r from-lady-light to-white rounded-xl">
          <p className="text-lady-dark font-medium">
            곧 서비스 정식 출시 예정입니다. 
            <br />조금만 기다려주세요. 감사합니다
          </p>
        </div>
      </div>
    </>
  );
};

export default DriverRegistration;
