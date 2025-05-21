
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomerFeatureSection from "@/components/CustomerFeatureSection";
import CustomerReservation from "@/components/CustomerReservation";
import customerStyles from "@/styles/customer.module.scss";

const Customer = () => {
  const signupRef = useRef(null);

  const handleScrollToSignup = () => {
    if (signupRef.current) {
      signupRef.current.scrollIntoView({ behavior: "smooth" });
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
      <CustomerFeatureSection />

      <section ref={signupRef} className={customerStyles.signupSection}>
        <CustomerReservation />
      </section>
    </div>
  );
};

export default Customer;
