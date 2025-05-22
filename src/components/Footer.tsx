import { useLocation, useNavigate } from "react-router-dom";
import footerStyle  from "@/styles/footer.module.scss";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className={footerStyle.ctn}>
      <div className={footerStyle.title}>
        mobl
      </div>
      <div className={footerStyle.companyName}>
        (주)루나 모빌리티
      </div>
      <div className={footerStyle.text}>
        본사  |  서울시 송파구 성내천로 296, 4층
        <br />사업자  |  529-07-03278   
        <br />대표번호  |  070-4571-6500   
        <br />이메일  |  <span className={footerStyle.email}>info@ridemobl.com </span>
      </div>

      <div className={footerStyle.disclaimer}>
        Some images used on this site are sourced from Freepik
        <p>ⓒ 2025. luna mobility. All rights reserved</p>
      </div>

    </footer>
  );
};

export default Footer;
