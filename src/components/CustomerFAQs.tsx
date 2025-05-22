import { useRef, useState, useEffect } from "react";
import customerStyles from "@/styles/customer.module.scss";

const CustomerFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: '기사님은 어떤 분이 오시나요?',
      answer: '모블 기사님은 모두 여자분이시며 사고 이력, 범죄 이력 등 신원 확인 및 사전 검증을 마친 분들로, 서비스 품질과 안전을 위해 내부 교육을 수료하신 분들만 활동합니다. 여성 고객의 안심 귀가를 최우선으로 생각합니다.',
    },
    {
      question: '예약은 어떻게 진행되나요?',
      answer: '웹사이트 예약 폼 또는 카카오톡 채널과 대표 전화번호를 통해 예약하실 수 있습니다. 원하는 날짜와 시간, 출발지와 도착지를 입력하시면 배정 가능 기사님 확인 후 안내드립니다.',
    },
    {
      question: '이용 가격은 얼마인가요?',
      answer: '기본 요금은 거리와 시간대에 따라 달라지며, 예약 시 예상 요금을 안내해드립니다. 최종 요금은 현장에서 결제하시면 됩니다.',
    },
    {
      question: '시간 변경이나 예약 취소는 어디서 하나요?',
      answer: '카카오톡 채널 혹은 대표 전화번호를 통해 시간 변경이나 취소가 가능합니다. 이용 2시간 전까지 무료로 변경 및 취소가 가능하며, 이후에는 수수료가 발생합니다.',
    },
    {
      question: '기타 문의는 어디에서 가능한가요?',
      answer: '카카오톡 채널 또는 대표 전화번호를 통해 언제든지 연락주시면 신속히 답변드리겠습니다.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={customerStyles.faqctn}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`${customerStyles.faqItem} ${openIndex === i ? customerStyles.open : ''}`}
          onClick={() => toggleFAQ(i)}
        >
          <div className={customerStyles.question}>
              Q: {faq.question} 
              <img src='/icons/caret.svg' alt="caret" className={`${customerStyles.caret} ${openIndex === i ? customerStyles.rotated : ''}`} />
            </div>
          <div className={customerStyles.answer}>{faq.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default CustomerFAQs;