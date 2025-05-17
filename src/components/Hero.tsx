
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  scrollToSignup: () => void;
  scrollToContent: () => void;
}

const Hero = ({ scrollToSignup, scrollToContent }: HeroProps) => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-lady-secondary/50 to-background z-[-1]"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-lady-accent/5 rounded-full blur-3xl z-[-1]"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-lady-primary/5 rounded-full blur-3xl z-[-1]"></div>
      
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8 max-w-xl animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-sm md:text-base lg:text-lg inline-block font-medium px-4 py-1 rounded-full bg-lady-secondary text-lady-primary">
                여성 고객과 여성 기사님을 이어 믿음을 만드는
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-lady-primary">
                여성전용 대리운전 <br/> <span className="text-gradient">서비스</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mt-6">
                밤늦은 귀가, 이제 안심하고 자면서 집으로<br />
                여성 기사님과 편안하게 귀가하세요.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-5 rounded-lg border border-lady-primary/10 shadow-lg">
              <p className="text-xl font-display font-semibold text-lady-primary mb-2">
                지금 사전등록하면 10,000원 쿠폰팩 제공!
              </p>
              <div className="text-gray-600 text-sm">
                한정 기간 동안만 제공되는 특별 혜택을 놓치지 마세요
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-primary" 
                onClick={scrollToSignup}
              >
                고객으로 가입하기
              </Button>
          
              <Button 
                variant="outline" 
                className="btn-outline"
                onClick={scrollToContent}
              >
                더 알아보기
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="image-placeholder w-full h-[500px] overflow-hidden rounded-lg shadow-xl">
                <div className="text-center">
                  <p className="text-2xl font-display">Hero Image</p>
                  <p className="text-sm">Premium lifestyle photography</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-lady-primary/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-lady-secondary flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lady-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-lady-primary">100% 여성 기사님</p>
                    <p className="text-sm text-gray-500">안전하고 믿을 수 있는 서비스</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
