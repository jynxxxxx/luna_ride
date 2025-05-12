
import { useState } from "react";
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

const Index = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Tabs defaultValue="home" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="home">홈</TabsTrigger>
            <TabsTrigger value="register">기사 등록</TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <section className="bg-gradient-to-b from-lady-light to-white py-16 md:py-24">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-lady-primary">
                      여성을 위한 안전한 대리운전 서비스
                    </h1>
                    <p className="max-w-[600px] text-zinc-700 md:text-xl">
                      여성 기사가 여성 고객을 모십니다. 안전하고 편안한 대리운전 서비스를 경험해보세요.
                    </p>
                    <div className="space-y-4 sm:space-x-4 sm:space-y-0 sm:flex sm:items-center">
                      <Button className="bg-lady-primary hover:bg-lady-primary/90 text-white" onClick={() => setActiveTab("register")}>
                        기사 등록하기
                      </Button>
                      <Button variant="outline" className="border-lady-primary text-lady-primary hover:text-lady-primary/90 hover:bg-lady-light">
                        더 알아보기
                      </Button>
                    </div>
                  </div>
                  <div className="lg:order-last">
                    <img
                      alt="여성 대리운전"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                      height="310"
                      src="/placeholder.svg"
                      width="550"
                    />
                  </div>
                </div>
              </div>
            </section>
            
            <FeatureSection />
            
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
                  <Button className="bg-lady-primary hover:bg-lady-primary/90 text-white" onClick={() => setActiveTab("register")}>
                    지금 기사로 등록하기
                  </Button>
                </div>
              </div>
            </section>

            <section className="py-12 md:py-16 bg-white">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-3">
                  <Card className="p-6">
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
                      <Button>알림 받기</Button>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-lady-primary mb-2">안전 보장</h3>
                    <p className="text-zinc-700">
                      모든 기사는 철저한 신원 확인과 교육을 거친 검증된 여성 기사만 활동합니다.
                      실시간 위치 공유와 안전 알림 시스템을 통해 언제나 안심할 수 있습니다.
                    </p>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-lady-primary mb-2">문의하기</h3>
                    <p className="text-zinc-700 mb-4">
                      서비스에 대한 문의사항이 있으신가요?
                    </p>
                    <Textarea 
                      placeholder="문의 내용을 입력하세요" 
                      className="mb-4"
                    />
                    <Button 
                      onClick={() => toast({
                        title: "메시지가 전송되었습니다",
                        description: "빠른 시일 내에 답변 드리겠습니다.",
                      })}
                    >
                      보내기
                    </Button>
                  </Card>
                </div>
              </div>
            </section>
          </TabsContent>
          
          <TabsContent value="register">
            <DriverRegistration />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
