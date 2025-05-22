import customerStyles from "@/styles/customer.module.scss";

const CustomerFeatureSection = () => {
  const features = [
    {
      img: '/icons/thumbsup.svg',
      title: '검증된 여성 기사님',
      description:
        '범죄 경력 조회, 5년 내 무사고 운전자, 리뷰 기반 매너 검증 등을 통해 검증된 기사님만을 배치합니다.',
    },
    {
      img: '/icons/handheart.svg',
      title: '언제나 내가 원하는대로',
      description:
        '조용히 가기, 이야기 하기, 도착 후 깨워주기 등 무드 선택으로 고객님의 편안함을 최우선으로 합니다.',
    },
    {
      img: '/icons/recycle.svg',
      title: '재이용률 86%',
      description:
        '이용 고객의 높은 만족도로 인해 높은 재이용률과 이용 불만족 후기 0%를 유지하고 있습니다.',
    },
    
  ]
  return (
    <div className={customerStyles.items}>
      {features.map((card, i) => (
        <div key={i} className={customerStyles.card}>
          <img src={card.img} alt="" className={customerStyles.icon} />
          <div className={customerStyles.title}>{card.title}</div>
          <div className={customerStyles.description}>{card.description}</div>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeatureSection;
