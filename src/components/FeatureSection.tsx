
import { forwardRef } from "react";

const FeatureSection = forwardRef<HTMLDivElement>((props, ref) => {
  const features = [
    {
      title: "여성 전용 서비스",
      description: "여성 기사님과 여성 고객만을 위한 안전을 최우선으로 하는 대리운전 서비스입니다.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7h-9M14 17H5M17 17a3 3 0 100-6 3 3 0 000 6zM7 7a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
      )
    },
    {
      title: "안전 보장 서비스",
      description: "실시간 위치 공유 및 모니터링 시스템으로 이동 중 안전을 보장합니다.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3l4 8 5-5 5 15H2L8 3z" />
        </svg>
      )
    },
    {
      title: "인증된 기사님 매칭",
      description: "철저한 신원 확인과 교육을 거친 인증된 여성 기사님과 매칭됩니다.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "합리적인 요금",
      description: "투명한 요금 체계로 안심하고 이용할 수 있습니다.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM12 12a2 2 0 100-4 2 2 0 000 4zM6 12h.01M18 12h.01" />
        </svg>
      )
    },
    {
      title: "편리한 시스템",
      description: "앱을 통해 빠르게 예약 및 기사님 도착 예정 시간, 이동 루트 등을 확인할 수 있습니다.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3zM9 9v12M3 9h18M9 3v6" />
        </svg>
      )
    },
    {
      title: "24시간 고객센터 운영",
      description: "트러블 방지 혹은 대응을 위해 바로 대응 가능한 고객센터를 운영합니다.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.2 2h-.4a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.4a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2zM12 12a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={ref} className="section bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-lady-primary">
            여성만을 위한 특별한 서비스
          </h2>
          <p className="text-gray-600 md:text-lg">
            여성 고객과 여성 기사의 안전하고 편안한 만남을 위한 최고의 시스템을 갖추고 있습니다.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="feature-card hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 p-3 rounded-lg bg-lady-secondary inline-flex w-min">
                  <div className="text-lady-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold text-lady-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 flex-grow">
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

FeatureSection.displayName = "FeatureSection";

export default FeatureSection;
