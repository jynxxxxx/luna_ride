
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

const EmailSignUp = () => {
    return (
        <div className="bg-white/50">
            <div className="flex items-center mt-4">
                <Input 
                    type="email" 
                    placeholder="이메일 주소" 
                    className="mr-2"
                />
                <Button>알림 받기</Button>
            </div>
        </div>
    );
};

export default EmailSignUp;
