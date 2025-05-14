
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault()

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
        .insert([{ email }]);
      
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
    <div className="container py-12 px-4 md:px-6 max-w-2xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-lady-primary mb-4">
          고객으로 등록하기
        </h1>
        <p className="mt-4 mb-2 font-semibold text-zinc-700 max-w-2xl mx-auto">
          선등록 시 총 10,000원 쿠폰팩을 드려요! (₩5,000 + ₩3,000 + ₩2,000)
        </p>
        <p className="text-zinc-700 max-w-2xl mx-auto">
          밤늦은 귀가, 여성 기사님과 안전하게 귀가해보세요. 
          <br />아래 이메일을 남겨주시면 누구보다 빠르게 서비스 출시 소식을 전해드릴게요
        </p>
      </div>

      <Card className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 ">
            <div className="space-y-2">
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

          <Button 
            type="submit" 
            className="w-full bg-lady-primary hover:bg-lady-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "제출 중..." : "소식 받아보기"}
          </Button>
        </form>
      </Card>

      <p className="text-zinc-700 text-center mt-8">
        곧 서비스 정식 출시 예정입니다. 
        <br />조금만 기다려주세요. 감사합니다.
      </p>
    </div>
  );
};

export default CustomerRegistration;
