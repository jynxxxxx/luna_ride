
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
    <div className="container w-[90%] sm:w-[40%] px-0 rounded-2xl grid grid-cols-1 bg-white shadow-md my-8">
      <div className="py-8 px-4">
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold text-lady-primary mb-4">
            고객으로 등록하기
          </h1>
          <p className="mt-4 mb-2 font-semibold text-zinc-700 max-w-2xl mx-auto">
            사전등록 시 총 10,000원 쿠폰팩을 드려요!
          </p>
          <p className="text-zinc-700 max-w-2xl mx-auto">
            아래 이메일을 남겨주시면 서비스 출시 소식을 전해드릴게요
          </p>
        </div>
      
        <div className="w-full p-6 border-t border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="grid gap-2 ">
              <div className="space-y-1">
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
            <div className="p-4 rounded-md">
                <h4 className="font-medium text-lady-primary mb-2">개인정보 수집 및 이용 동의</h4>
                <p className="text-sm text-zinc-700 sm:pl-8 mt-1 mb-2">
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
        {/* <p className="text-zinc-700 max-w-2xl mx-auto">
          밤늦은 귀가, 여성 기사님과 안전하게 귀가해보세요. 
        </p> */}
      </div>

      {/* <div className="relative hidden sm:block w-full h-full overflow-hidden rounded-r-2xl">
        <img
          alt="여성 대리운전"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90 rounded-r-2xl"
          src="/friends.png"
        />
      </div> */}
    </div>
  );
};

export default CustomerRegistration;
