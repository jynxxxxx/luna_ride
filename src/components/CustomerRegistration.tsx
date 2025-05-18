
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Lock, Check } from "lucide-react";

const CustomerRegistration = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
        setIsSuccess(true);
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
    <div className="container max-w-5xl px-4">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-shadow">
        <div className="magazine-grid p-0">
          <div className="md:col-span-6 p-8 md:p-10">
            <div className="max-w-md mx-auto md:ml-0">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-lady-primary mb-4">
                고객으로 등록하기
              </h2>
              
              <div className="mb-8">
                <p className="text-lg font-medium text-lady-burgundy mb-2">
                  사전등록 시 총 10,000원 쿠폰팩을 드려요!
                </p>
                <p className="text-gray-600">
                  아래 이메일을 남겨주시면 서비스 출시 소식을 가장 먼저 전해드릴게요
                </p>
              </div>
            
              {isSuccess ? (
                <div className="bg-lady-light rounded-xl p-6 text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-lady-accent rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-lady-primary">등록이 완료되었습니다</h3>
                  <p className="text-gray-600">출시 소식을 이메일로 알려드리겠습니다.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">이메일</Label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="이메일 주소" 
                        className="h-12 text-base"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="bg-lady-light p-5 rounded-xl space-y-4">
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-lady-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-lady-primary mb-1">개인정보 수집 및 이용 동의</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          1. 수집 목적: 할인 쿠폰 제공 및 앱 사전 등록<br />
                          2. 수집 항목: 이메일 주소<br />
                          3. 보유 및 이용 기간: 앱 출시 후 6개월
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 pl-8">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
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
                    {isSubmitting ? "제출 중..." : "소식 받아보기"}
                  </Button>
                </form>
              )}
              
              <p className="mt-6 text-gray-500 text-center text-sm">
                곧 서비스 정식 출시 예정입니다. 조금만 기다려주세요.
              </p>
            </div>
          </div>
          
          <div className="hidden md:block md:col-span-6 bg-lady-light">
            <div className="h-full flex items-center justify-center p-10">
              <div className="relative w-full max-w-sm">
                <div className="absolute -top-8 -left-8 w-20 h-20 bg-lady-gold/20 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-lady-accent/20 rounded-full"></div>
                <div className="bg-white rounded-xl p-8 shadow-md text-center space-y-4">
                  <h3 className="font-serif text-2xl text-lady-primary">비교 불가한 안전함</h3>
                  <p className="text-gray-600">
                    여성 전용 대리운전으로 밤길도 안전하게, 이제 편안한 마음으로 귀가하세요
                  </p>
                  <div className="flex justify-center pt-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-lady-light p-2 rounded-full">
                        <Shield className="h-6 w-6 text-lady-accent" />
                      </div>
                      <p className="mt-2 font-medium text-lady-primary">100% 여성 기사</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegistration;
