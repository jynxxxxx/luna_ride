
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureSection from "@/components/FeatureSection";
import DriverRegistration from "@/components/DriverRegistration";
import { supabase } from "@/integrations/supabase/client";
import CustomerRegistration from "@/components/CustomerRegistration";

const Index = () => {
  const contentRef = useRef(null);
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("home");
  const [inlineEmail, setInlineEmail] = useState("");
  const [inquiryText, setInquiryText] = useState("");
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);

  const handleEmailSignup = async () => {
    if (!inlineEmail || !inlineEmail.includes('@')) {
      toast({
        title: "유효한 이메일 주소를 입력해주세요",
        variant: "destructive",
      });
      return;
    }

    setIsSubmittingEmail(true);
    
    try {
      const { error } = await supabase
        .from('email_signups')
        .insert([{ email: inlineEmail }]);
      
      if (error) {
        if (error.code === '23505') {
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
        setInlineEmail("");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "오류가 발생했습니다",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingEmail(false);
    }
  };


  return (
    <div className="flex flex-col min-h-screen">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1">
        <Tabs value={activeTab} className="w-full" onValueChange={setActiveTab}>
          <TabsContent value="home">
            <section className="bg-gradient-to-b from-lady-light to-white py-16 md:py-24">
              <div className="pl-4 pr-4 md:pl-12 md:pr-6 container">
                <div className="grid gap-6 sm:grid-cols-[1.5fr_1fr] sm:gap-12 items-center">
                  <div>
                    <p className="break-normal font-bold text-lady-primary md:text-2xl lg:text-3xl">
                      여성 고객과 여성 기사님을 이어 믿음을 만드는
                    </p>
                    <h1 className="mt-4 break-normal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-lady-primary">
                      여성전용 대리운전 서비스
                    </h1>
                    <p className="mt-12 mb-8 break-normal text-zinc-700 md:text-xl">
                      밤늦은 귀가, 여성 기사님과 편안하게 귀가하세요.  
                      기사님 입장에서도 안전한 콜을 더 많이 받을 수 있도록 서포트 하겠습니다
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                      <Button 
                        className="bg-lady-primary hover:bg-lady-primary/90 text-white" 
                        onClick={() => setActiveTab("customer")}
                      >
                        고객으로 이용하기기
                      </Button>
                      <Button 
                        className="bg-lady-primary hover:bg-lady-primary/90 text-white" 
                        onClick={() => setActiveTab("driver")}
                      >
                        기사로 이용하기기
                      </Button>
                      <Button variant="outline" 
                        className="border-lady-primary text-lady-primary hover:text-lady-primary/90 hover:bg-lady-light"
                        onClick={() => {
                          if (contentRef.current) {
                            contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }}
                      >
                        더 알아보기
                      </Button>
                    </div>
                  </div>
                  <div className="hidden sm:block overflow-visible">
                    <img
                      alt="여성 대리운전"
                      className="mx-auto w-full max-w-[400px] aspect-video rounded-xl object-cover object-center overflow-visible"
                      src="/logo.png"
                    />
                  </div>
                </div>
              </div>
            </section>
            
            <FeatureSection ref={contentRef}/>
            
            <section className="py-12 md:py-16 lg:py-20 bg-lady-light">
              <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold text-lady-primary mb-4">
                    여성을 위한, 여성에 의한 서비스
                  </h2>
                  <p className="text-zinc-700 mb-8">
                    안전함과 편안함을 최우선으로 생각하는 여성 대리운전 서비스입니다.
                    지금 기사로 등록하고 함께 안전한 이동 문화를 만들어보세요.
                  </p>
                  <Button 
                    className="bg-lady-primary hover:bg-lady-primary/90 text-white" 
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setActiveTab("driver")
                    }}
                  >
                    지금 기사로 등록하기
                  </Button>
                </div>
              </div>
            </section>

            <section className="py-12 md:py-16 bg-white">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-3">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-lady-primary mb-2">고객으로 등록하기</h3>
                    <p className="text-zinc-700 mb-4">
                      밤늦은 귀가, 여성 기사님과 안전하게 귀가해보세요. 
                      아래 이메일을 남겨주시면 누구보다 빠르게 서비스 출시 소식을 전해드릴게요
                    </p>
                    <div className="flex items-center mt-4">
                      <Input 
                        type="email" 
                        placeholder="이메일 주소" 
                        className="mr-2"
                        value={inlineEmail}
                        onChange={(e) => setInlineEmail(e.target.value)}
                        disabled={isSubmittingEmail}
                      />
                      <Button onClick={handleEmailSignup} disabled={isSubmittingEmail}>
                        {isSubmittingEmail ? "제출 중..." : "알림 받기"}
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </section>
          </TabsContent>
          <TabsContent value="customer">
            <CustomerRegistration />
          </TabsContent>
          <TabsContent value="driver">
            <DriverRegistration />
          </TabsContent>
        </Tabs>
      </main>
      <Footer setActiveTab={setActiveTab}/>
    </div>
  );
};

export default Index;
