
import { forwardRef } from "react";
import { Shield, Clock, CreditCard } from "lucide-react";

const DriverFeatureSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="section-spacing bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-lady-primary mb-4">
            기사님을 위한 특별한 혜택
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            UnnieCar와 함께하는 여성 기사님들을 위한 다양한 혜택과 지원 시스템을 준비했습니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 text-center card-shadow group hover:translate-y-[-8px] premium-transition">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-lady-light mb-6 group-hover:bg-lady-accent/10 premium-transition">
              <CreditCard className="h-7 w-7 text-lady-primary" />
            </div>
            
            <h3 className="text-xl font-serif font-semibold text-lady-primary mb-4">더 많은 수익</h3>
            
            <p className="text-gray-600">
              실시간으로 매칭되는 시스템 덕분에, 기사님은 빠르게 고객과 연결될 수 있습니다.
              <br/>낮은 수수료는 매우 경쟁력 있어, 더 많은 수익을 기사님께 돌려드립니다.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 text-center card-shadow group hover:translate-y-[-8px] premium-transition">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-lady-light mb-6 group-hover:bg-lady-accent/10 premium-transition">
              <Shield className="h-7 w-7 text-lady-primary" />
            </div>
            
            <h3 className="text-xl font-serif font-semibold text-lady-primary mb-4">안전한 운전 환경</h3>
            
            <p className="text-gray-600">
              기사님에게 제공되는 바디캠은 운전 중 발생할 수 있는 모든 상황을 기록합니다. 
              <br/>이를 통해 사고 발생 시 보험 처리가 원활하게 이루어집니다.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 text-center card-shadow group hover:translate-y-[-8px] premium-transition">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-lady-light mb-6 group-hover:bg-lady-accent/10 premium-transition">
              <Clock className="h-7 w-7 text-lady-primary" />
            </div>
            
            <h3 className="text-xl font-serif font-semibold text-lady-primary mb-4">프리미엄 서비스</h3>
            
            <p className="text-gray-600">
              프리미엄 서비스를 통해 더 높은 요금을 받고, 더 많은 배차를 받게 됩니다. 
              <br/>기사님은 더 유리한 조건에서 일하며, 더 많은 수익을 올릴 수 있습니다.
            </p>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-lady-light rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-semibold text-lady-primary mb-4">
              함께 성장하는 언니차
            </h3>
            <p className="text-gray-600 mb-6">
              언니차는 단순한 대리운전 서비스가 아닌 여성 운전자들의 경제적 자립과 성장을 함께하는 파트너입니다.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-medium text-lady-primary">유연한 근무시간</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-medium text-lady-primary">안전한 근무환경</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-medium text-lady-primary">정기 기사 모임</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

DriverFeatureSection.displayName = "DriverFeatureSection";

export default DriverFeatureSection;
