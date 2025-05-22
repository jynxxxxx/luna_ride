import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import homeStyles from "@/styles/home.module.scss";

const Index = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/customer#signup');
  };

  const cards = [
    {
      img: '/icons/driving.svg',
      title: '안전한 귀가를 책입집니다',
      content:
        '회식, 모임 후에 안심하고 귀가할 수 있도록 설계된 서비스입니다. 미리 연락 주시면 원하시는 시간에 모시러 가겠습니다.',
    },
    {
      img: '/icons/clipboard-tick.svg',
      title: '검증된 여성 기사님만',
      content:
        '불쾌한 시선과 대화없이 쾌적하게 귀가하세요. 범죄 이력 등 신원이 검증된 여성 기사님이 직접 운전합니다.',
    },
    {
      img: '/icons/medal-star.svg',
      title: '단정하고 청결한 기사',
      content:
        '단정한 복장은 물론 냄새까지 관리합니다. 고객님의 소중한 차, 청결과 안전 교육을 받은 기사님께 맡겨보세요.',
    },
    {
      img: '/icons/like-tag.svg',
      title: '이 기사님이 마음에 든다면?',
      content:
        '매번 부를 때마다 누가 올지 몰라 불편했다면 선호 기사님을 지정해주세요. 다음 일정부터 지정 기사님이 모시러 갑니다.',
    },
  ]

  const doubledCards = [...cards, ...cards]

  return (
    <div className={homeStyles.ctn}>
      <section className={homeStyles.heroSection}>
        mobl, 신뢰를 운전합니다
        <p className={homeStyles.subtext}>
          여성의 안심이 기준이 되는 세상.
          <br/>믿을 수 있는 여성 기사님과 함께하세요.
        </p>
      </section>
      <section style={{width:'100%'}}>
        <div className={homeStyles.intro}>
          <div className={homeStyles.introTitle}>
            What is <strong>mobl</strong>?
          </div>
          <div className={homeStyles.introSubTitle}>
            단 한 끗의 불편함도 없이, 조용히 집까지.
            <br /> 검증된 여성 기사와 함께라면 도착까지 잠시 눈 붙혀도 좋습니다.
            <br /> 심야 귀가는 이제, 나를 위한 룸서비스처럼 편안하게.
            <p className={homeStyles.introSubTitle2}>
              여성만을 위한 새로운 대리운전 문화를 만듭니다.
            </p>
          </div>
          <div className={homeStyles.carouselOuter}>
            <div className={homeStyles.carouselTrack}>
              {doubledCards.map((card, i) => (
                <div key={i} className={homeStyles.contentCard}>
                  <img src={card.img} alt="" className={homeStyles.icons} />
                  <div className={homeStyles.cardTitle}>{card.title}</div>
                  <div className={homeStyles.cardContent}>{card.content}</div>
                </div>
              ))}
            </div>
          </div>
          <button
            className={homeStyles.introButton}
            onClick={handleClick}
          >
            대리 운전 이용하기
          </button>
        </div>
      </section>
      <section className={homeStyles.reasonSection}>
        <div className={homeStyles.reason1}>
          <div className={homeStyles.reasonContent}>
            모임을 마친 늦은 밤, 집으로 향하는 순간에
          </div>
        </div>
        <div className={homeStyles.reason2}>
          <div className={homeStyles.reasonContent}>
            이동 중 업무가 필요한 순간에
          </div>
        </div>
        <div className={homeStyles.reason3}>
          <div className={homeStyles.reasonContent}>
            특별히 지친 날 이동이 필요한 순간에
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
