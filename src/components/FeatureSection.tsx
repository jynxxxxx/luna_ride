
import { forwardRef } from "react";
import { MapPin, Shield, Users, CreditCard, Layout, Settings, Clock } from "lucide-react";

const FeatureSection = forwardRef<HTMLDivElement>((props, ref) => {
  const features = [
    {
      icon: <Users className="text-white" />,
      title: "여성 전용 서비스",
      description: "여성 기사님과 여성 고객만을 위한 안전을 최우선으로 하는 대리운전 서비스입니다."
    },
    {
      icon: <Shield className="text-white" />,
      title: "안전 보장 서비스",
      description: "실시간 위치 공유 및 모니터링 시스템으로 이동 중 안전을 보장합니다."
    },
    {
      icon: <Users className="text-white" />,
      title: "인증된 기사님 매칭",
      description: "철저한 신원 확인과 교육을 거친 인증된 여성 기사님과 매칭됩니다"
    },
    {
      icon: <CreditCard className="text-white" />,
      title: "합리적인 요금",
      description: "투명한 요금 체계로 안심하고 이용할 수 있습니다."
    },
    {
      icon: <Layout className="text-white" />,
      title: "편리한 시스템",
      description: "앱을 통해 빠르게 예약 및 기사님 도착 예정 시간, 이동 루트 등을 확인할 수 있습니다."
    },
    {
      icon: <Clock className="text-white" />,
      title: "24시간 고객센터 운영",
      description: "트러블 방지 혹은 대응을 위해 바로 대응 가능한 고객센터를 운영합니다"
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-lady-dark mb-4">
            여성만을 위한 특별한 서비스
          </h2>
          <p className="text-lady-muted md:text-lg">
            여성 고객과 여성 기사의 안전하고 편안한 만남을 위한 최고의 시스템을 갖추고 있습니다.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="premium-card slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="premium-icon">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-lady-dark mb-3">{feature.title}</h3>
              <p className="text-lady-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

FeatureSection.displayName = "FeatureSection";

export default FeatureSection;
