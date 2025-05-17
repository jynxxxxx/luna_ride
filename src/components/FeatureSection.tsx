
import { forwardRef } from "react";

const FeatureSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] py-24 md:py-48 bg-white">
      <div className="hidden ml-8 mr-4 sm:flex items-center justify-center overflow-hidden rounded-2xl">
        <img
          alt="여성 대리운전"
          className="my-auto mx-auto w-full object-cover object-center overflow-visible"
          src="/smiling_driver.png"
        />
      </div>
      <div className="flex items-center">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-lady-primary mb-4">
              여성만을 위한 특별한 서비스
            </h2>
            <p className="text-zinc-700 md:text-lg max-w-3xl mx-auto">
              여성 고객과 여성 기사의 안전하고 편안한 만남을 위한 최고의 시스템을 갖추고 있습니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="p-6 flex flex-col items-center justify-right">
              <div className="flex w-full mb-2">
                <div className="w-8 h-8 rounded-full bg-lady-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </div>
                <h3 className="pl-3 text-xl font-medium text-lady-primary">여성 전용 서비스</h3>
              </div>
              <p className="w-full text-zinc-700">
                여성 기사님과 여성 고객만을 위한 
                안전을 최우선으로 하는 대리운전 서비스입니다.
              </p>
            </div>
            <div className="p-6 flex flex-col items-center justify-right">
              <div className="flex w-full mb-2">
              <div className="w-8 h-8 rounded-full bg-lady-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                </svg>
              </div>
              <h3 className="pl-3 text-xl font-medium text-lady-primary">안전 보장 서비스</h3>
              </div>
              <p className="w-full text-zinc-700">
                실시간 위치 공유 및 모니터링 시스템으로 이동 중 안전을 보장합니다.
              </p>
            </div>
            <div className="p-6 flex flex-col items-center justify-right">
              <div className="flex w-full mb-2">
                <div className="w-8 h-8 rounded-full bg-lady-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="pl-3 text-xl font-medium text-lady-primary">인증된 기사님 매칭</h3>
              </div>
              <p className="w-full text-zinc-700">
                철저한 신원 확인과 교육을 거친 인증된
                여성 기사님과 매칭됩니다
              </p>
            </div>
            <div className="p-6 flex flex-col items-center justify-right">
              <div className="flex w-full mb-2">
                <div className="w-8 h-8 rounded-full bg-lady-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M6 12h.01M18 12h.01"></path>
                  </svg>
                </div>
                <h3 className="pl-3 text-xl font-medium text-lady-primary">합리적인 요금</h3>
              </div>
              <p className="w-full text-zinc-700">
                투명한 요금 체계로 안심하고 이용할 수 있습니다.
              </p>
            </div>
            <div className="p-6 flex flex-col items-center justify-right">
              <div className="flex w-full mb-2">
                <div className="w-8 h-8 rounded-full bg-lady-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M3 9h18"></path>
                    <path d="M9 21V9"></path>
                  </svg>
                </div>
                <h3 className="pl-3 text-xl font-medium text-lady-primary">편리한 시스템</h3>
              </div>
              <p className="w-full text-zinc-700">
                앱을 통해 빠르게 예약 및 기사님 도착 예정 시간, 
                이동 루트 등을 확인할 수 있습니다.
              </p>
            </div>
            <div className="p-6 flex flex-col items-center justify-right">
              <div className="flex w-full mb-2">
                <div className="w-8 h-8 rounded-full bg-lady-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="pl-3 text-xl font-medium text-lady-primary">24시간 고객센터 운영</h3>
              </div>
              <p className="w-full text-zinc-700">
                트러블 방지 혹은 대응을 위해 바로 대응 가능한 고객센터를 운영합니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FeatureSection;
