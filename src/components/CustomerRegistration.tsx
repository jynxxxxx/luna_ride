
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Shield } from "lucide-react";

const CustomerRegistration = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!checked) {
      toast({
        title: "모든 필드를 입력해주세요",
        description: "개인정보 수집 동의에 체크하셔야 합니다.",
        variant: "destructive",
      });
      return;
    }

    if (!email || !email.includes('@')) {
      toast({
        title: "유효한 이메일 주소를 입력해주세요",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('email_signups')
        .insert([{ 
          email: email,
          consent_given: checked
         }]);
      
      if (error) {
        if (error.code === '23505') { // Unique constraint error
          toast({
            title: "이미 등록된 이메일입니다",
            description: "알림 신청이 이미 완료되었습니다.",
          });
        } else {
          console.error("Error submitting email:", error);
          toast({
            title: "오류가 발생했습니다",
            description: "잠시 후 다시 시도해주세요.",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "알림 신청이 완료되었습니다",
          description: "출시 소식을 이메일로 알려드리겠습니다.",
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
    <div className="registration-container">
      <div className="registration-container-header">
        <h1>고객으로 등록하기</h1>
        <p className="highlight">사전등록 시 총 10,000원 쿠폰팩을 드려요!</p>
        <p>아래 이메일을 남겨주시면 서비스 출시 소식을 전해드릴게요</p>
      </div>
    
      <div className="registration-container-form">
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="form-group">
            <div className="form-group">
              <Label htmlFor="name">이메일</Label>
              <Input 
                type="email" 
                placeholder="이메일 주소" 
                className="mr-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="consent-box">
            <h4>개인정보 수집 및 이용 동의</h4>
            <p>
              1. 수집 목적: 할인 쿠폰 제공 및 앱 사전 등록
              <br />2. 수집 항목: 이메일 주소
              <br />3. 보유 및 이용 기간: 앱 출시 후 6개월
            </p>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={checked}
                onChange={() => setChecked(!checked)}
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
            {isSubmitting ? "제출 중..." : "소식 받아보기"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CustomerRegistration;
