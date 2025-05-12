
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-lady-primary flex items-center justify-center">
              <span className="font-bold text-white">여</span>
            </div>
            <span className="text-lady-primary font-bold">여성 대리운전</span>
          </a>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-sm font-medium hover:text-lady-primary">
            서비스 소개
          </a>
          <a href="#" className="text-sm font-medium hover:text-lady-primary">
            기사 지원
          </a>
          <a href="#" className="text-sm font-medium hover:text-lady-primary">
            고객센터
          </a>
          <a href="#" className="text-sm font-medium hover:text-lady-primary">
            앱 다운로드
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-lady-primary hover:bg-lady-primary/90 text-white">
            앱 출시 알림 받기
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
