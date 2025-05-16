
import { forwardRef } from "react";
import { Shield, Clock, CreditCard } from "lucide-react";

const DriverFeatureSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="section-title mx-auto inline-block pb-3 mb-6 text-lady-dark">
          기사님 혜택
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          UnnieCar는 기사님들을 위한 최고의 환경과 혜택을 제공합니다.
          안전하고 수익성 높은 운행을 경험해보세요.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-white rounded-2xl shadow-card card-hover p-8 border border-gray-100">
          <div className="mb-6">
            <div className="bg-lady-light rounded-xl p-4 mb-6 w-14 h-14 flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-lady-primary" />
            </div>
            <h3 className="text-xl font-bold text-lady-dark mb-3">더 많은 수익</h3>
          </div>
          <div>
            <h4 className="text-lg font-medium text-lady-dark mb-3">빠른 매칭과 낮은 수수료</h4>
            <p className="text-gray-600">
              실시간으로 매칭되는 시스템 덕분에, 기사님은 빠르게 고객과 연결될 수 있습니다.
              <br/>낮은 수수료는 매우 경쟁력 있어, 더 많은 수익을 기사님께 돌려드립니다.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-2xl shadow-card card-hover p-8 border border-gray-100">
          <div className="mb-6">
            <div className="bg-lady-light rounded-xl p-4 mb-6 w-14 h-14 flex items-center justify-center">
              <Shield className="h-6 w-6 text-lady-primary" />
            </div>
            <h3 className="text-xl font-bold text-lady-dark mb-3">안전한 운전 환경 제공</h3>
          </div>
          <div>
            <h4 className="text-lg font-medium text-lady-dark mb-3">바디캠과 보험 처리</h4>
            <p className="text-gray-600">
              기사님에게 제공되는 바디캠은 운전 중 발생할 수 있는 모든 상황을 기록합니다. 
              <br/>이를 통해 사고 발생 시 보험 처리가 원활하게 이루어집니다.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-2xl shadow-card card-hover p-8 border border-gray-100">
          <div className="mb-6">
            <div className="bg-lady-light rounded-xl p-4 mb-6 w-14 h-14 flex items-center justify-center">
              <Clock className="h-6 w-6 text-lady-primary" />
            </div>
            <h3 className="text-xl font-bold text-lady-dark mb-3">프리미엄 서비스 혜택</h3>
          </div>
          <div>
            <h4 className="text-lg font-medium text-lady-dark mb-3">프리미엄 Pricing 적용</h4>
            <p className="text-gray-600">
              프리미엄 서비스를 통해 더 높은 요금을 받고, 더 많은 배차를 받게 됩니다. 
              <br/>기사님은 더 유리한 조건에서 일하며, 더 많은 수익을 올릴 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

DriverFeatureSection.displayName = "DriverFeatureSection";

export default DriverFeatureSection;
