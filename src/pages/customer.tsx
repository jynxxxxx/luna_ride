
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomerFeatureSection from "@/components/CustomerFeatureSection";
import CustomerReservation from "@/components/CustomerReservation";
import customerStyles from "@/styles/customer.module.scss";
import CustomerTestimonial from "@/components/CustomerTestimonials";
import CustomerFAQs from "@/components/CustomerFAQs";

const Customer = () => {
  const signupRef = useRef(null);
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  //scroll to #signup if URL hash is present on location change
  useEffect(() => {
    if (location.hash === "#signup" && signupRef.current) {
       signupRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  useEffect(() => {
    if (showForm) {
      document.body.classList.add('lock-scroll');
    } else {
      document.body.classList.remove('lock-scroll');
    }

    return () => document.body.classList.remove('lock-scroll'); // clean up on unmount
  }, [showForm]);

  //scroll to signup section on button click
  const handleScrollToSignup = () => {
    if (signupRef.current) {
      signupRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleFormClick = () => {
    setShowForm(true);
  }

  const closePopup = () => {
    setShowForm(false);
  };

  const handleKakaoClick = () => {
    window.open("http://pf.kakao.com/_xklxoin", "_blank");
  };

  const handlePhoneClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = "tel:07045716500"; 
    } else {
      setShowPhoneModal(true);
    }
  };

  const closeModal = () => setShowPhoneModal(false);

  return (
    <div className={customerStyles.ctn}>
      {showForm && (
        <div className={customerStyles.overlay}>
          <div className={customerStyles.modalWrapper}>
            <div className={customerStyles.modalContent}>
              <button className={customerStyles.closeButton} onClick={closePopup}>X</button>
              <CustomerReservation setShowForm={setShowForm}/>
            </div>
          </div>
        </div>
      )}

      {showPhoneModal && (
        <div className={customerStyles.overlay}>
          <div className={customerStyles.modalWrapper}>
            <div className={customerStyles.modalContent}>
              <button className={customerStyles.closeButton} onClick={closeModal}>X</button>
              <div className={customerStyles.phonePop}>
                <p style={{fontSize:'2rem'}}>전화번호:</p>
                <h2 style={{fontSize: '3rem', fontWeight: 'bolder'}}>070-4571-6500</h2>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={customerStyles.btnctn}>
        <button
          className={customerStyles.btn}
          onClick={handleScrollToSignup}
        >
          mobl 이용해보기
        </button>
      </div>

      <section className={customerStyles.tstsection}>
        <div className={customerStyles.tsttitle}>
          많은 고객들이
          <br />만족하며 이용하고 있어요.
        </div>
        <CustomerTestimonial />
      </section>
      
      <section className={customerStyles.featuresection}>
        <div className={customerStyles.fttitle}>
          오늘 하루의 끝, 
          <br />더 안전하고 편안하게.
        </div>
        <CustomerFeatureSection />
      </section>

      <section id="signup" ref={signupRef} className={customerStyles.signupSection}>
        <div className={customerStyles.fttitle}>
          지금 바로 예약해보세요.
        </div>
        <div className={customerStyles.ftsubtext}>
          강남 외 지역은 사전 예약제로 운영되고 있어, 2시간 전 예약이 필요합니다.
          <br />더 많은 지역에서 바로 서비스를 이용하실 수 있도록 준비 중입니다. 조금만 기다려 주세요.
        </div>
        <div className={customerStyles.rsvMethods}>
          <div className={customerStyles.rsvCard}>
            <div className={customerStyles.rsvContent}>
              <img src='/icons/white_logo.svg' alt="mobl" className={customerStyles.rsvIcon} />
              <div className={customerStyles.rsvText}>
                웹사이트에서 
                <br /> 빠르고 간편하게 예약하세요
              </div>
            </div>
            <button
              className={customerStyles.rsvButton}
              onClick={handleFormClick}
            >
              웹사이트에서 예약하기
            </button>
          </div>
          <div className={customerStyles.rsvCard}>
            <div className={customerStyles.rsvContent}>
              <img src='/icons/kakao_logo.svg' alt="mobl" className={customerStyles.rsvIcon} />
              <div className={customerStyles.rsvText}>
                카카오톡 공식 채널에서
                <br /> 언제든 간편하게 예약하세요
              </div>
            </div>
            <button
              className={customerStyles.rsvButton}
              onClick={handleKakaoClick}
            >
              카카오톡으로 예약하기
            </button>
          </div>
          <div className={customerStyles.rsvCard}>
            <div className={customerStyles.rsvContent}>
              <img src='/icons/phone.svg' alt="mobl" className={customerStyles.rsvIcon} />
              <div className={customerStyles.rsvText}>
                전화로도 예약이 가능합니다 
                <br /> 응대 시간: 10:30 - 24:00
              </div>
            </div>
            <button
              className={customerStyles.rsvButton}
              onClick={handlePhoneClick}
            >
              전화로 예약하기
            </button>
          </div>
        </div>
      </section>

      <section className={customerStyles.faqsection}>
        <div className={customerStyles.fttitle}>
          자주하는 질문
        </div>
        <CustomerFAQs />
      </section>
    </div>
  );
};

export default Customer;
