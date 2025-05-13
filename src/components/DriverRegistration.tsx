
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const DriverRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.consent) {
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
          consent_given: formData.consent
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
          consent: false
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
    <div className="container py-12 px-4 md:px-6 max-w-3xl">
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

      <p className="text-zinc-700 text-center mt-8">
        곧 서비스 정식 출시 예정입니다. 
        <br />조금만 기다려주세요. 감사합니다
      </p>
    </div>
  );
};

export default DriverRegistration;
