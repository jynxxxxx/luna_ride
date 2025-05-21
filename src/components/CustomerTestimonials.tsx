import React, { useEffect, useRef, useState } from 'react';
import testimonialStyles from '@/styles/testimonials.module.scss';

const testimonials = [
  { name: '최*빈', job: '제약회사 영업', review: '접대 자리 후 항상 잔뜩 취해서 집에 갈때마다 불안했는데, 항상 여자 기사분이 오셔서 정신줄 놔도 걱정이 덜 됩니다.' },
  { name: '이*람', job: '승무원', review: '장거리 비행 전 예약하고 가면 새벽 2시에도 시간 맞춰 와주세요. 비행 후 체력 방전 상태에서 정말 구원 같은 서비스입니다. 남성 기사분들은 가끔 어피 그대로 가면 자꾸 힐끗거리는 분들 있어서 좀 불편했는데 그런게 없어서 너무너무 좋아요. 주변에도 소문내고 있어요☺️' },
  { name: '신*혜', job: '은행 PB센터 근무', review: '남자 대리기사님들과 별로 안좋은 기억들이 있어서 대리 잘 안부르려고 하는데 여성 전용이 있다고 해서 반신반의 써봤는데 왠걸 너무 만족스러워요!! 여초 직장이라 주변 사람들한테 다 추천해줬어요! 기사님도 식집사셔서 수다떨면서 집에 왔어용💛' },
  { name: '송*린', job: '주류회사 프로모터', review: '회식에서 술 권유하고 3차 4차까지 하는 편인데 대리 예약해놨다고 중간에 나올 수 있어서 좋아요ㅋㅋ 매번 12시에 예약해놨다고 말하고 도망치는 용으로 쓰고 있어요ㅋㅋㅋ' },
  { name: '김*연', job: '아나운서', review: '술마시고 대리는 여기로 정착했어요. 여자 기사님만 배정되니까 심리적으로 편해요.' },
  { name: '윤*현', job: '대학교 겸임교수', review: '대리기사나 택시기사가 말걸고 그런거 질색인데 여긴 조용히 가기 선택 가능한게 좋음.' },
  { name: '남*솔', job: '대기업 개발자', review: '차를 가져가는 날엔 꼭 술자리가 생기더라고요;; 써본 업체 중 기사님들이 젤 친절해요.' },
  { name: '이*은', job: '대기업 연구원', review: '회사가 대리비를 지원해줘서 술마시는 날에도 차를 꼭 가지고 다니는데요, 다른데서 대리기사 부르면 담배 냄새 때문에 짜증났던적이 많았거든요. 다음 날 아침에 차 타면 담배냄새 안빠져서 한참 환기해야되고. 여기는 사소한 부분까지 관리된 분이 와서 좋아요.' },
  { name: '김*희', job: '중소기업 비서', review: '술에 절어서 차에 탄 기억도 없는데 도착해서 제가 정신 못차리니까 부축해서 집까지 넣어주셨습니다ㅠ 너무 감사해요ㅠㅠㅠㅠ ' },
  { name: '명*진', job: '잡지사 디렉터', review: '미리 예약해두면 같은 기사님이 와주시는게 가장 마음에 들어요. 항상 같은 기사님 부탁드리는데 엄마차 탄 느낌 들어서 좋아요.' },
  { name: '김*연', job: '대기업 마케팅 팀장', review: '연일 야근으로 너무 피곤해서 도저히 운전을 못할 것 같아 처음 불러봤는데, 사전에 조용히 가기 원함 체크했더니 기사님이 불필요한 말 한마디도 안하셔서 좋았고 여자분이셔서 맘 놓고 자면서 왔어요. 또 이용할 것 같아요. ' },
  { name: '이*', job: '대기업 영업', review: '끝까지 달리고 집에 어떻게 온지 기억이 안나는데.. 결제 내역보고 안심합니다...' },
  { name: '정*비', job: '패션매거진 편집자', review: '프리미엄 대리는 비싸고 일반 대리는 기사 퀄리티가 별로인데 여기는 합리적인 가격에 퀄리티도 좋네요.' },
  { name: '송*원', job: '대기업 디자이너', review: '여자 기사님이라 난폭 운전은 안하시는거같아요. 토  안쏠려서 만족~!' },
];

const CustomerTestimonial = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState([false, false, false]);

  useEffect(() => {
    //check initial size
    const checkMobile = () => setIsMobile(window.innerWidth <= 750);
    checkMobile();

    //add resize listener
    window.addEventListener('resize', checkMobile);

    //cleanup on unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const columns = [[], [], []];

  testimonials.forEach((t, i) => {
    columns[i % 3].push(t);
  });

  const mergedTestimonials = [...columns[0], ...columns[1], ...columns[2]];
  const repeatedColumns = columns.map((group) => [...group, ...group]);

 
  return (
     <div className={testimonialStyles.testimonialContainer} style={{ flexDirection: isMobile ? 'column' : 'row' }}>
      {isMobile ? (
        <div
          className={testimonialStyles.column}
          onMouseEnter={() => setPaused([true])}
          onMouseLeave={() => setPaused([false])}
        >
          <div className={`${testimonialStyles.carousel} ${!paused[0] ? testimonialStyles.scrollUp : ''}`}>
            {mergedTestimonials.map((t, i) => (
              <div key={i} className={testimonialStyles.card}>
                <div className={testimonialStyles.name}>{t.name}님 | <span className={testimonialStyles.job}>{t.job}</span></div>
                <div className={testimonialStyles.review}>{t.review}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        repeatedColumns.map((group, i) => (
          <div
            key={i}
            className={testimonialStyles.column}
            onMouseEnter={() => {
              setPaused((prev) => {
                const updated = [...prev];
                updated[i] = true;
                return updated;
              });
            }}
            onMouseLeave={() => {
              setPaused((prev) => {
                const updated = [...prev];
                updated[i] = false;
                return updated;
              });
            }}
          >
            <div
              className={
                testimonialStyles.carousel + ' ' +
                (i === 1 ? testimonialStyles.scrollDown : testimonialStyles.scrollUp)
              }
              style={{ animationPlayState: paused[i] ? 'paused' : 'running' }}
            >
              {group.map((t, index) => (
                <div key={index} className={testimonialStyles.card}>
                  <div className={testimonialStyles.name}>{t.name}님 | <span className={testimonialStyles.job}>{t.job}</span></div>
                  <div className={testimonialStyles.review}>{t.review}</div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CustomerTestimonial;