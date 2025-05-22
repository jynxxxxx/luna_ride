
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

  //scroll to #signup if URL hash is present on location change
  useEffect(() => {
    if (location.hash === "#signup" && signupRef.current) {
       signupRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  //scroll to signup section on button click
  const handleScrollToSignup = () => {
    if (signupRef.current) {
      signupRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={customerStyles.ctn}>
      <section className={customerStyles.heroSection}>
        <div>Quiet, safe, and yours.</div>
        <button
          className={customerStyles.btn}
          onClick={handleScrollToSignup}
        >
          예약 하기
        </button>
      </section>
      <section className={customerStyles.tstsection}>
        <div className={customerStyles.tsttitle}>
          많은 고객들이
          <br />만족하며 이용하고 있어요.
        </div>
        <CustomerTestimonial />
      </section>
      
      <section className={customerStyles.featuresection}>
        <div className={customerStyles.tsttitle}>
          오늘 하루의 끝, 
          <br />더 안전하고 편안하게.
        </div>
        <CustomerFeatureSection />
      </section>

      <section id="signup" ref={signupRef} className={customerStyles.signupSection}>
        <CustomerReservation />
      </section>

      <section className={customerStyles.faqsection}>
        <div className={customerStyles.tsttitle}>
          자주하는 질문
        </div>
        <CustomerFAQs />
      </section>
    </div>
  );
};

export default Customer;
