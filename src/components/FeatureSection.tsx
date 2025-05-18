
import { forwardRef } from "react";
import { Shield, Clock, CreditCard } from "lucide-react";

const FeatureSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="bg-white section-spacing overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="magazine-grid items-center">
          <div className="md:col-span-5 md:pr-8 space-y-6 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-lady-primary mb-4 text-balance">
              여성만을 위한<br/> 특별한 기준의 서비스
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 text-balance">
              여성 고객과 여성 기사의 안전하고 편안한 만남을 위한 최고의 시스템을 갖추고 있습니다.
            </p>
            
            <div className="grid gap-y-8 md:gap-y-10">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-lady-light flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-lady-primary">
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-lady-primary mb-2">여성 전용 서비스</h3>
                  <p className="text-gray-600 text-balance">
                    여성 기사님과 여성 고객만을 위한 안전을 최우선으로 하는 대리운전 서비스입니다.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-lady-light flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-lady-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-lady-primary mb-2">안전 보장 시스템</h3>
                  <p className="text-gray-600 text-balance">
                    실시간 위치 공유 및 모니터링 시스템으로 이동 중 안전을 보장합니다.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-lady-light flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-lady-primary">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-lady-primary mb-2">검증된 기사님 매칭</h3>
                  <p className="text-gray-600 text-balance">
                    철저한 신원 확인과 교육을 거친 인증된 여성 기사님과 매칭됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 md:pl-4 order-1 md:order-2 mb-10 md:mb-0">
            <div className="relative">
              <div className="aspect-[3/2] bg-gray-200 rounded-2xl overflow-hidden card-shadow">
                <img
                  alt="언니차 서비스"
                  className="w-full h-full object-cover object-center"
                  src="/driver.png"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 w-48 md:w-64 aspect-square bg-lady-light p-5 rounded-2xl shadow-lg">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <p className="text-lady-primary font-serif text-lg md:text-xl font-semibold mb-2">10,000원</p>
                  <p className="text-sm text-gray-700">사전등록 할인 쿠폰팩 제공</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

FeatureSection.displayName = "FeatureSection";

export default FeatureSection;
