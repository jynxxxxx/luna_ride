
import { forwardRef } from "react";
import { CreditCard, Shield, Clock } from "lucide-react";

const DriverFeatureSection = forwardRef<HTMLDivElement>((props, ref) => {
  const features = [
    {
      title: "더 많은 수익",
      subtitle: "빠른 매칭과 낮은 수수료",
      description: "실시간으로 매칭되는 시스템 덕분에, 기사님은 빠르게 고객과 연결될 수 있습니다. 낮은 수수료는 매우 경쟁력 있어, 더 많은 수익을 기사님께 돌려드립니다.",
      icon: <CreditCard className="h-7 w-7" />
    },
    {
      title: "안전한 운전 환경 제공",
      subtitle: "바디캠과 보험 처리",
      description: "기사님에게 제공되는 바디캠은 운전 중 발생할 수 있는 모든 상황을 기록합니다. 이를 통해 사고 발생 시 보험 처리가 원활하게 이루어집니다.",
      icon: <Shield className="h-7 w-7" />
    },
    {
      title: "프리미엄 서비스 혜택",
      subtitle: "프리미엄 Pricing 적용",
      description: "프리미엄 서비스를 통해 더 높은 요금을 받고, 더 많은 배차를 받게 됩니다. 기사님은 더 유리한 조건에서 일하며, 더 많은 수익을 올릴 수 있습니다.",
      icon: <Clock className="h-7 w-7" />
    }
  ];

  return (
    <section ref={ref} className="section bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-lady-primary">
            기사님을 위한 특별한 혜택
          </h2>
          <p className="text-gray-600 md:text-lg">
            UnnieCar와 함께하는 여성 기사님들을 위한 다양한 혜택과 지원 시스템을 준비했습니다.
          </p>
        </div>
        
        <div className="grid gap-12 md:gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white rounded-xl shadow-lg border border-lady-secondary p-8 transition-all hover:border-lady-primary/30 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 p-3 rounded-full bg-lady-secondary inline-flex w-min">
                  <div className="text-lady-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold text-lady-primary mb-2">
                  {feature.title}
                </h3>
                <h4 className="text-lg font-medium text-gray-700 mb-3">
                  {feature.subtitle}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

DriverFeatureSection.displayName = "DriverFeatureSection";

export default DriverFeatureSection;
