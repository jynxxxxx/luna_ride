
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

const Footer = ({scrollToSignup}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="bg-lady-dark text-white py-16 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="h-10 w-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="font-display font-bold text-white">UC</span>
              </div>
              <span className="font-display font-bold text-xl">UnnieCar</span>
            </div>
            <p className="mt-4 text-lady-light/70 max-w-md">
              여성의 안전한 이동을 위한 여성 전용 대리운전 서비스
            </p>
            <ul className="mt-6 space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-lady-accent" />
                010-6642-9318
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-lady-accent" />
                unniecar.drive@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-lady-accent" />
                카카오 채널: <a href="http://pf.kakao.com/_Nhqin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lady-accent transition-colors ml-1">언니차</a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7 flex flex-col md:flex-row justify-between gap-8">
            <div>
              <h4 className="text-lg font-display font-medium mb-4 text-white">서비스</h4>
              <ul className="space-y-3 text-white/70">
                <li>
                  <button 
                    onClick={() => {
                      navigate("/");
                      window.scrollTo(0, 0);
                    }} 
                    className="hover:text-lady-accent transition-colors"
                  >
                    서비스 소개
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-display font-medium mb-4 text-white">고객님</h4>
              <ul className="space-y-3 text-white/70">
                <li>
                  <button 
                    onClick={() => navigate("/", { state: { scrollToCustomerSignup: true } })}
                    className="hover:text-lady-accent transition-colors"
                  >
                    고객 등록
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-display font-medium mb-4 text-white">기사님</h4>
              <ul className="space-y-3 text-white/70">
                <li>
                  <button 
                    onClick={() => navigate("/driver", { state: { scrollToDriverSignup: true } })}
                    className="hover:text-lady-accent transition-colors"
                  >
                    기사 등록
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
          <p>ⓒ 2025. Unniecar Co. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
