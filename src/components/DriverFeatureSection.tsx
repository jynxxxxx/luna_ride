
import { forwardRef } from "react";
import { Shield, Clock, CreditCard } from "lucide-react";
          // 안전함과 편안함을 최우선으로 생각하는 여성 대리운전 서비스입니다.
          // 지금 기사로 등록하고 함께 안전한 이동 문화를 만들어보세요.
const DriverFeatureSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="bg-lady-light py-24 md:py-40 px-4 md:px-8 mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-lady-primary mb-4">
          기사님을 위한 특별한 혜택
        </h2>
        <p className="text-black mb-8">
          UnnieCar와 함께하는 여성 기사님들을 위한 다양한 혜택과 지원 시스템을 준비했습니다.
        </p>
      </div>
      <div className="mx-auto lg:w-[80%] grid grid-cols-1 md:grid-cols-3 md:gap-8">
        {/* Feature 1 */}
        <div className="p-6">
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-full mb-2 drop-shadow-lg">
              <CreditCard className="h-8 w-8 text-lady-primary" />
            </div>
            <h3 className="text-xl font-bold text-lady-primary mb-2">더 많은 수익</h3>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              실시간으로 매칭되는 시스템 덕분에, 기사님은 빠르게 고객과 연결될 수 있습니다.
              <br/>낮은 수수료는 매우 경쟁력 있어, 더 많은 수익을 기사님께 돌려드립니다.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="p-6">
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-full mb-2 drop-shadow-lg">
              <Shield className="h-8 w-8 text-lady-primary" />
            </div>
            <h3 className="text-xl font-bold text-lady-primary mb-2">안전한 운전 환경 제공</h3>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              기사님에게 제공되는 바디캠은 운전 중 발생할 수 있는 모든 상황을 기록합니다. 
              <br/>이를 통해 사고 발생 시 보험 처리가 원활하게 이루어집니다.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="p-6">
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-full mb-2 drop-shadow-lg">
              <Clock className="h-8 w-8 text-lady-primary" />
            </div>
            <h3 className="text-xl font-bold text-lady-primary mb-2">프리미엄 서비스 혜택</h3>
          </div>
          <div className="text-center">
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
