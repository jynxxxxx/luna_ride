
import { useLocation, useNavigate } from "react-router-dom";

const Footer = ({scrollToSignup}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="bg-lady-primary py-16 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            <img
              alt="언니차"
              className="h-8 sm:h-10 w-fit"
              src="/logo_white.png"
            />
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-lady-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-base">010-6642-9318</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-lady-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-base">unniecar.drive@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-lady-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="text-base">
                  카카오 채널: <a href="https://pf.kakao.com/_xnxkxfin" target="_blank" rel="noopener noreferrer" className="text-lady-gold font-medium hover:underline premium-transition">언니차</a>
                </span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h4 className="text-base font-medium mb-4 text-lady-gold">서비스</h4>
              <ul className="space-y-3 text-sm text-white/90">
                <li>
                  <button 
                    onClick={() => {
                      navigate("/");
                      window.scrollTo(0, 0);
                    }} 
                    className="hover:text-lady-gold premium-transition"
                  >
                    서비스 소개
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-medium mb-4 text-lady-gold">고객님</h4>
              <ul className="space-y-3 text-sm text-white/90">
                <li>
                  <button 
                    onClick={() => navigate("/", { state: { scrollToCustomerSignup: true } })}
                    className="hover:text-lady-gold premium-transition"
                  >
                    고객 등록
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-medium mb-4 text-lady-gold">기사님</h4>
              <ul className="space-y-3 text-sm text-white/90">
                <li>
                  <button 
                    onClick={() => navigate("/driver", { state: { scrollToDriverSignup: true } })}
                    className="hover:text-lady-gold premium-transition"
                  >
                    기사 등록
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center text-sm text-white/70">
          <p>ⓒ 2025. Unniecar Co. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
