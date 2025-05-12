
import { Card } from "@/components/ui/card";

const FeatureSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-lady-primary mb-4">
            여성만을 위한 특별한 서비스
          </h2>
          <p className="text-zinc-700 md:text-lg max-w-3xl mx-auto">
            여성 고객과 여성 기사의 안전하고 편안한 만남을 위한 최고의 시스템을 갖추고 있습니다.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-lady-secondary flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lady-primary">
                <path d="M20 7h-9"></path>
                <path d="M14 17H5"></path>
                <circle cx="17" cy="17" r="3"></circle>
                <circle cx="7" cy="7" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-lady-primary mb-2">여성 전용 서비스</h3>
            <p className="text-zinc-700">
              100% 여성 기사와 여성 고객만을 위한 안전한 대리운전 서비스입니다.
            </p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-lady-secondary flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lady-primary">
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-lady-primary mb-2">안전 최우선</h3>
            <p className="text-zinc-700">
              실시간 위치 공유 및 모니터링 시스템으로 이동 중 안전을 보장합니다.
            </p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-lady-secondary flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lady-primary">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-lady-primary mb-2">인증된 기사</h3>
            <p className="text-zinc-700">
              엄격한 심사와 교육을 거친 검증된 여성 기사만 활동합니다.
            </p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-lady-secondary flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lady-primary">
                <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M6 12h.01M18 12h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-lady-primary mb-2">합리적인 요금</h3>
            <p className="text-zinc-700">
              투명한 요금 체계로 안심하고 이용할 수 있습니다.
            </p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-lady-secondary flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lady-primary">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M9 21V9"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-lady-primary mb-2">편리한 앱</h3>
            <p className="text-zinc-700">
              간편한 앱으로 빠르게 예약하고 기사의 도착을 실시간으로 확인할 수 있습니다.
            </p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-lady-secondary flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lady-primary">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-lady-primary mb-2">24시간 고객센터</h3>
            <p className="text-zinc-700">
              언제든지 도움이 필요할 때 연락할 수 있는 24시간 고객 지원 서비스를 제공합니다.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
