
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import driverStyle from "@/styles/driver.module.scss";
import { Dice1 } from "lucide-react";

const DriverRegistration = () => {
  const driverSignupRef = useRef(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    consent: false,
    experience: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

    
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
          className: "bg-white text-black",
          title: "오류가 발생했습니다",
          description: "잠시 후 다시 시도해주세요.",
          variant: "destructive",
        });
      } else {
        toast({
          className: "bg-white text-black",
          title: "등록 신청이 완료되었습니다",
          description: "검토 후 문자/카카오톡으로 안내드리겠습니다.",
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
    <div className={driverStyle.signupctn}>
      <div className={driverStyle.title}>
        모블의 드라이버가 되어주세요 
      </div>
      <div className={driverStyle.subtext1}>
          운전 경력이 있으시다면 지금 바로 지원해보세요!
          <br />원하시는 시간대에 자유롭게 근무하실 수 있습니다.
      </div>
      <div className={driverStyle.subtext2}>
        모든 기사님의 안전을 위해 24시간 관제센터를 운영하며,
        <br /> 불안한 상황 없이 안심하고 근무하실 수 있도록 돕고 있습니다.
      </div>
      <div className={driverStyle.subtext3}>
        본 서비스는 여성 고객과 여성 기사님을 매칭하는 전용 플랫폼으로, 여성 기사님만 지원이 가능합니다.
      </div>

        <form onSubmit={handleSubmit} className={driverStyle.formctn}>
          <div>
            <Label className={driverStyle.label} htmlFor="name">이름</Label>
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

          <div >
            <Label className={driverStyle.label} htmlFor="phone">휴대폰 번호</Label>
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

          <div>
            <Label className={driverStyle.label} htmlFor="name">대리기사 혹은 운송업 경험이 있으신가요? &#40;없으셔도 괜찮습니다&#41;</Label>
            <div className={driverStyle.radioctn}>
              <label className={driverStyle.radiobtn}>
                <input
                  type="radio"
                  name="experience"
                  value="true"
                  checked={formData.experience===true}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                />
                예
              </label>
              <label className={driverStyle.radiobtn}>
                <input
                  type="radio"
                  name="experience"
                  value="false"
                  checked={formData.experience===false}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                />
                아니오
              </label>
            </div>
          </div>

          <div className={driverStyle.consentctn}>
            <h4>개인정보 수집 및 이용 동의</h4>
            <p>
              제출해주신 정보는 기사 등록 정보 제공 만을 위해 사용되며, 이외의 목적으로는 사용 되지 않습니다. 
              정보는 기사 정보 제공 이후 자동적으로 자체 폐기될 예정입니다. 
            </p>
            <div className={driverStyle.consentbox}>
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
              <Label htmlFor="consent" className="font-normal">
                개인정보 수집 및 이용에 동의합니다
              </Label>
            </div>
          </div>

          <Button 
            type="submit" 
            className={driverStyle.formbtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? "제출 중..." : "지원하기"}
          </Button>
        </form>
    </div>
  );
};

export default DriverRegistration;
