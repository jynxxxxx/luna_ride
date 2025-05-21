
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const EmailSignUp = ({setEmailSignUpModal}) => {
    const cardRef = useRef(null);
    const { toast } = useToast();
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setEmailSignUpModal(false);
      }
    };
  
    const handleSubmit = async () => {
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
          setEmailSignUpModal(false);
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
        <div
        className="modal-overlay"
        onClick={handleOverlayClick}
        >
        <Card ref={cardRef} className="p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-lady-primary mb-2">고객으로 이용하기</h3>
            <p className="text-zinc-700 mb-4">
            곧 출시될 앱을 통해 여성 대리운전 서비스를 이용할 수 있습니다.
            </p>
            <div className="flex items-center mt-4">
            <Input
                type="email"
                placeholder="이메일 주소"
                className="mr-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
            />
            <Button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? "제출 중..." : "알림 받기"}
            </Button>
            </div>
        </Card>
        </div>
    );
};

export default EmailSignUp;
