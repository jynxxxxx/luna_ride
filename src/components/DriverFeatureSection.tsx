
import { forwardRef } from "react";
import { Shield, Clock, CreditCard } from "lucide-react";

const DriverFeatureSection = forwardRef<HTMLDivElement>((props, ref) => {
  const features = [
    {
      icon: <CreditCard />,
      title: "더 많은 수익",
      subtitle: "빠른 매칭과 낮은 수수료",
      description: "실시간으로 매칭되는 시스템 덕분에, 기사님은 빠르게 고객과 연결될 수 있습니다. 낮은 수수료는 매우 경쟁력 있어, 더 많은 수익을 기사님께 돌려드립니다."
    },
    {
      icon: <Shield />,
      title: "안전한 운전 환경 제공",
      subtitle: "바디캠과 보험 처리",
      description: "기사님에게 제공되는 바디캠은 운전 중 발생할 수 있는 모든 상황을 기록합니다. 이를 통해 사고 발생 시 보험 처리가 원활하게 이루어집니다."
    },
    {
      icon: <Clock />,
      title: "프리미엄 서비스 혜택",
      subtitle: "프리미엄 Pricing 적용",
      description: "프리미엄 서비스를 통해 더 높은 요금을 받고, 더 많은 배차를 받게 됩니다. 기사님은 더 유리한 조건에서 일하며, 더 많은 수익을 올릴 수 있습니다."
    }
  ];

  return (
    <div ref={ref} className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="premium-card slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="premium-icon">
              {feature.icon}
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-lady-dark mb-2">{feature.title}</h3>
              <h4 className="text-base font-medium text-lady-primary mb-3">{feature.subtitle}</h4>
            </div>
            <p className="text-lady-muted">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
});

DriverFeatureSection.displayName = "DriverFeatureSection";

export default DriverFeatureSection;
