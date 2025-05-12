
const Footer = ({setActiveTab}) => {
  return (
    <footer className="bg-lady-light py-8 md:py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-lady-primary flex items-center justify-center">
                <span className="font-bold text-white">UC</span>
              </div>
              <span className="text-lady-primary font-bold">UnnieCar</span>
            </div>
            <p className="mt-4 text-sm text-zinc-600">
              여성의 안전한 이동을 위한 여성 전용 대리운전 서비스
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 text-lady-primary">서비스</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>
                <a href="#" className="hover:text-lady-primary">
                  서비스 소개
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-lady-primary">
                  요금 안내
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lady-primary">
                  안전 정책
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 text-lady-primary">기사님</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>
                <button 
                  onClick={() => {
                    setActiveTab("register");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }} 
                  className="hover:text-lady-primary"
                >
                  기사 등록
                </button>
              </li>
              {/* <li>
                <a href="#" className="hover:text-lady-primary">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lady-primary">
                  교육 일정
                </a>
              </li> */}
            </ul>
          </div>
          {/* <div>
            <h4 className="text-sm font-medium mb-4 text-lady-primary">고객센터</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>
                <a href="#" className="hover:text-lady-primary">
                  연락처: 02-123-4567
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lady-primary">
                  이메일: jnykim97@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lady-primary">
                  운영시간: 24시간
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-zinc-600">
          <p>© 2025 여성 대리운전 서비스. 모든 권리 보유.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
