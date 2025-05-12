
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { useRef } from "react";

const EmailSignUp = ({setEmailSignUpModal}) => {
    const cardRef = useRef(null);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setEmailSignUpModal(false);
      }
    };
  
    const handleSubmit = () => {
      setEmailSignUpModal(false);
    };

    return (
        <div
        className="bg-white/70 absolute top-0 h-screen w-screen flex items-center justify-center z-50"
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
            />
            <Button onClick={handleSubmit}>알림 받기</Button>
            </div>
        </Card>
        </div>
    );
};

export default EmailSignUp;
