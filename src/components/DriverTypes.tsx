import driverStyles from "@/styles/driver.module.scss";

const DriverTypes = () => {
  const drivers = [
    {
      img: '/icons/driver1.png',
      name: '허*숙 기사님',
      age: '45세 주부',
      description:
        '아이들 재우고 집 정리 마친 후, 짬내서 일하고 있어요. 짧은 시간만 일해도 아이 학원비를 보탤 수 있어 뿌듯해요.',
    },
    {
      img: '/icons/driver2.png',
      name: '손*수 기사님',
      age: '30세 자영업',
      description:
        '카페 운영 끝나고 저녁에 잠깐 운전해요.예약제로 일정을 조율할 수 있어서 본업에 지장이 없는게 좋아요.',
    },
    {
      img: '/icons/driver3.png',
      name: '이*희 기사님',
      age: '38세 운송업',
      description:
        '기존 플랫폼에선 불쾌한 남자 손님도 많았는데, 모블에선 여성 고객만 매칭해줘서 마음 편하게 일하고 있어요.',
    },
    
  ]
  return (
    <div className={driverStyles.driversctn}>
      <div className={driverStyles.driversheader}>
        다양한 배경의 기사님들이 모블과 함께하고 있어요.
      </div>
      <div className={driverStyles.cardsctn}>
        {drivers.map((card, i) => (
          <div key={i} className={driverStyles.card}>
            <img src={card.img} alt="" className={driverStyles.icon} />
            <div className={driverStyles.driver}>
              <div className={driverStyles.name}>{card.name} | <span className={driverStyles.age}>{card.age}</span></div>
              <div className={driverStyles.description}>{card.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverTypes;