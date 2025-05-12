
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const DriverRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    licenseImage: null,
    businessCardImage: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const { name } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: e.target.files?.[0] || null
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "등록 신청이 완료되었습니다",
        description: "검토 후 이메일로 안내드리겠습니다.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        licenseImage: null,
        businessCardImage: null
      });
    }, 1500);
  };

  return (
    <div className="container py-12 px-4 md:px-6 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-lady-primary mb-4">
          여성 대리운전 기사 등록
        </h1>
        <p className="text-zinc-700 max-w-2xl mx-auto">
          안전하고 신뢰할 수 있는 여성 대리운전 서비스를 함께 만들어갈 기사님을 모십니다.
          아래 양식을 작성하여 지원해주세요.
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
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                required
                value={formData.email}
                onChange={handleInputChange}
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
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="licenseImage">운전면허증 사진</Label>
            <div className="border rounded-md p-4">
              <Input
                id="licenseImage"
                name="licenseImage"
                type="file"
                accept="image/*"
                required
                onChange={handleFileChange}
                className="cursor-pointer"
              />
              <p className="text-sm text-zinc-500 mt-2">
                면허증 앞면을 선명하게 찍어 업로드해주세요.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessCardImage">기존 대리운전 명함 (선택사항)</Label>
            <div className="border rounded-md p-4">
              <Input
                id="businessCardImage"
                name="businessCardImage"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="cursor-pointer"
              />
              <p className="text-sm text-zinc-500 mt-2">
                기존 대리운전 명함이 있으신 경우 업로드해주세요.
              </p>
            </div>
          </div>

          <div className="bg-lady-light p-4 rounded-md">
            <h4 className="font-medium text-lady-primary mb-2">개인정보 수집 및 이용 동의</h4>
            <p className="text-sm text-zinc-700 mb-4">
              여성 대리운전 서비스는 기사 등록을 위해 개인정보를 수집합니다. 
              수집된 정보는 기사 자격 심사 및 등록을 위해서만 사용되며, 
              이외의 목적으로는 사용되지 않습니다.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="consent"
                required
                className="w-4 h-4 rounded border-gray-300"
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

      <div className="mt-8 space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-medium text-lady-primary mb-4">자주 묻는 질문</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-lady-dark">지원 후 절차는 어떻게 되나요?</h4>
              <p className="text-sm text-zinc-700">
                지원서 검토 후 적합하다고 판단되면 면접 일정을 이메일로 안내드립니다. 
                면접 이후 교육 과정을 거쳐 정식 기사로 활동하게 됩니다.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-lady-dark">근무 시간은 어떻게 되나요?</h4>
              <p className="text-sm text-zinc-700">
                원하는 시간대에 자유롭게 활동할 수 있습니다. 풀타임, 파트타임 모두 가능합니다.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-lady-dark">수입은 어떻게 되나요?</h4>
              <p className="text-sm text-zinc-700">
                건당 수수료 방식으로, 월평균 활동량에 따라 수입이 달라집니다. 
                자세한 내용은 면접 시 안내드립니다.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DriverRegistration;
