
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import DriverFeatureSection from "@/components/DriverFeatureSection";

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
      <section className="relative mt-[-8px] min-h-[50vh] sm:min-h-[90vh] flex items-center py-16 md:py-32">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-top bg-cover opacity-90"
          style={{ backgroundImage: "url('/driver_hero.png')" }}
          aria-hidden="true"
        ></div>
        <div className="relative pl-4 pr-4 md:pl-12 md:pr-12 container">
          <div className="grid gap-6 sm:grid-cols-[1.5fr_1fr] sm:gap-12 items-center md:pl-12">
            <div>
              <p className="break-normal font-bold text-lady-light md:text-2xl lg:text-3xl">
                여성 기사님을 위한 안전하고 수익 높은
              </p>
              <h1 className="mt-4 break-normal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-lady-light">
                여성전용 대리운전 서비스
              </h1>
              <p className="mt-12 mb-8 break-normal text-white md:text-xl">
                빠른 매칭 시스템과 낮은 수수료 덕분에 더 많은 고객을 만나고, 
                <br /> 이제는 더 높은 수익을 얻을 수 있는 기회를 잡아보세요.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                <Button 
                  className="bg-lady-primary hover:bg-lady-primary/90 text-lady-light" 
                  onClick={() => {
                    if (driverSignupRef.current) {
                      // Get the height of the header or any other offset
                      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                      
                      // Adjust the scroll position by subtracting the header height
                      window.scrollTo({
                        top: driverSignupRef.current.offsetTop - headerHeight,
                        behavior: 'smooth',
                      });
                    }
                  }}
                >
                  기사로 가입하기
                </Button>
                <Button variant="outline" 
                  className="border-2 border-lady-primary font-bold text-lady-primary hover:text-lady-primary/90 hover:bg-lady-light"
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
            {/* <div className="hidden sm:block overflow-visible">
              <img
                alt="여성 대리운전"
                className="mx-auto w-full max-w-[400px] aspect-video rounded-xl object-cover object-center overflow-visible"
                src="/driver_header.png"
              />
            </div> */}
          </div>
        </div>
      </section>

      <DriverFeatureSection ref={driverFeaturesRef}/>

      <div className="bg-[linear-gradient(to_bottom,_white_0%,_#FAF4FE_10%,_#FAF4FE_90%,_white_100%)]">
        <div ref={driverSignupRef} className="container py-20 md:py-32 px-4 md:px-6 max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-lady-primary mb-4">
              여성 대리운전 기사 등록
            </h1>
            <p className="text-zinc-700 max-w-2xl mx-auto">
              신뢰할 수 있는 여성 전용 대리운전 서비스를 함께 만들어갈 기사님을 모집합니다. 
              <br />아래 양식을 통해 지원해주세요. 기사님께 안전하고 좋은 콜을 많이 제공할 수 있도록 최선을 다해 지원하겠습니다. 
            </p>
          </div>

          <Card className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">이름</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="홍길동"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">휴대폰 번호</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="010-1234-5678"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">대리기사 경험이 있으신가요? &#40;없어도 괜찮습니다&#41;</Label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-1 text-sm font-normal">
                    <input
                      type="radio"
                      name="experience"
                      value="true"
                      checked={formData.experience===true}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      required
                      className="w-4 h-4"
                    />
                    예
                  </label>
                  <label className="flex items-center gap-1 text-sm font-normal">
                    <input
                      type="radio"
                      name="experience"
                      value="false"
                      checked={formData.experience===false}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      required
                      className="w-4 h-4"
                    />
                    아니오
                  </label>
                </div>
              </div>
              <div className="bg-lady-light p-4 rounded-md">
                <h4 className="font-medium text-lady-primary mb-2">개인정보 수집 및 이용 동의</h4>
                <p className="text-sm text-zinc-700 mb-4">
                  제출해주신 정보는 기사 등록 정보 제공 만을 위해 사용되며, 이외의 목적으로는 사용 되지 않습니다. 
                  정보는 기사 정보 제공 이후 자동적으로 자체 폐기될 예정입니다. 
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                    className="w-4 h-4 rounded border-gray-300"
                    disabled={isSubmitting}
                  />
                  <Label htmlFor="consent" className="text-sm font-normal">
                    개인정보 수집 및 이용에 동의합니다
                  </Label>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-lady-primary hover:bg-lady-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "제출 중..." : "기사 등록 신청"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DriverRegistration;
