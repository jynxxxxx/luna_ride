
const Footer = ({setActiveTab}) => {
  return (
    <footer className="bg-lady-light py-8 md:py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
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
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>
                연락처: 010-6642-9318
              </li>
              <li>
                이메일: unniecar.drive@gmail.com
              </li>
              <li>
                카카오 채늘: <a href="http://pf.kakao.com/_Nhqin" target="_blank" rel="noopener noreferrer" className="text-zinc-600 font-semibold hover:underline">언니차</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:justify-around">
            <div>
              <h4 className="text-sm font-medium mb-4 text-lady-primary">서비스</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>
                  <button 
                    onClick={() => {
                      setActiveTab("home");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }} 
                    className="hover:text-lady-primary"
                  >
                    서비스 소개
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4 text-lady-primary">기사님</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>
                  <button 
                    onClick={() => {
                      setActiveTab("customer");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }} 
                    className="hover:text-lady-primary"
                  >
                    고객객 등록
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4 text-lady-primary">기사님</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>
                  <button 
                    onClick={() => {
                      setActiveTab("driver");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }} 
                    className="hover:text-lady-primary"
                  >
                    기사 등록
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-zinc-600">
          <p>ⓒ 2025. Unniecar Co. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
