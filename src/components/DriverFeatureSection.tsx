
import { forwardRef } from "react";
import { Shield, Clock, CreditCard } from "lucide-react";

const DriverFeatureSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="driver-feature">
      <div className="driver-feature-header">
        <h2>기사님을 위한 특별한 혜택</h2>
        <p className="text-black mb-8">
          UnnieCar와 함께하는 여성 기사님들을 위한 다양한 혜택과 지원 시스템을 준비했습니다.
        </p>
      </div>
      <div className="driver-feature-grid">
        {/* Feature 1 */}
        <div className="driver-feature-grid-item">
          <div className="driver-feature-grid-item-icon">
            <div className="driver-feature-grid-item-icon-wrapper">
              <CreditCard className="h-8 w-8 text-lady-primary" />
            </div>
            <h3>더 많은 수익</h3>
          </div>
          <div className="driver-feature-grid-item-text">
            <p>
              실시간으로 매칭되는 시스템 덕분에, 기사님은 빠르게 고객과 연결될 수 있습니다.
              <br/>낮은 수수료는 매우 경쟁력 있어, 더 많은 수익을 기사님께 돌려드립니다.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="driver-feature-grid-item">
          <div className="driver-feature-grid-item-icon">
            <div className="driver-feature-grid-item-icon-wrapper">
              <Shield className="h-8 w-8 text-lady-primary" />
            </div>
            <h3>안전한 운전 환경 제공</h3>
          </div>
          <div className="driver-feature-grid-item-text">
            <p>
              기사님에게 제공되는 바디캠은 운전 중 발생할 수 있는 모든 상황을 기록합니다. 
              <br/>이를 통해 사고 발생 시 보험 처리가 원활하게 이루어집니다.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="driver-feature-grid-item">
          <div className="driver-feature-grid-item-icon">
            <div className="driver-feature-grid-item-icon-wrapper">
              <Clock className="h-8 w-8 text-lady-primary" />
            </div>
            <h3>프리미엄 서비스 혜택</h3>
          </div>
          <div className="driver-feature-grid-item-text">
            <p>
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
