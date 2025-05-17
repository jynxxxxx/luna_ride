
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface PromotionSectionProps {
  navigateToDriver: () => void;
}

const PromotionSection = ({ navigateToDriver }: PromotionSectionProps) => {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-lady-primary/5 to-lady-secondary/20 z-[-1]"></div>
      
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="image-placeholder w-full h-[400px] rounded-lg shadow-xl overflow-hidden">
              <div className="text-center">
                <p className="text-2xl font-display">Driver Image</p>
                <p className="text-sm">Professional female driver imagery</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-lady-primary">
                여성을 위한, 여성에 의한 서비스
              </h2>
              <p className="text-gray-600">
                안전함과 편안함을 최우선으로 생각하는 여성 대리운전 서비스입니다.
                지금 기사로 등록하고 함께 안전한 이동 문화를 만들어보세요.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Button 
                className="btn-primary" 
                onClick={navigateToDriver}
              >
                지금 기사로 등록하기
              </Button>
              
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-lady-secondary border-2 border-white" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">100+ 기사님이 함께하고 있어요</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
