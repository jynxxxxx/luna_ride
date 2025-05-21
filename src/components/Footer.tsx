import { useLocation, useNavigate } from "react-router-dom";
import footerStyle  from "@/styles/footer.module.scss";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className={footerStyle.ctn}>
      <div className={footerStyle.title}>
        ribon
        {/* <img
          alt="여성 대리운전"
          className="h-8 sm:h-10 w-fit sm:mb-4"
          src="/logo_white.png"
        /> */}
      </div>
      <div className={footerStyle.companyName}>
        (주)리본컴퍼니
      </div>
      <div className={footerStyle.text}>
        본사  |  서울시 마포구 백범 31길 21, 422
        <br />사업자  |  등록번호    
        <br />대표번호  |  02-1234-5678   
        <br />이메일  |  <span className={footerStyle.email}>unniecar.drive@gmail.com </span>
      </div>

      <div className={footerStyle.disclaimer}>
        Some images used on this site are sourced from Freepik
        <p>ⓒ 2025. Unniecar Co. All rights reserved</p>
      </div>

    </footer>
  );
};

export default Footer;
