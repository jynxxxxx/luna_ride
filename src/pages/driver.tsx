
import DriverRegistration from "@/components/DriverRegistration";
import DriverTypes from "@/components/DriverTypes";
import driverStyle from "@/styles/driver.module.scss";

const Driver = () => {

  return (
    <div className={driverStyle.ctn}>
      <div className={driverStyle.signupctn}>
        <div className={driverStyle.title}>
          모블 드라이버가 되어주세요 
        </div>
        <div className={driverStyle.subtext1}>
            운전 경력이 있으시다면 지금 바로 지원해보세요!
            <br />원하시는 시간대에 자유롭게 근무하실 수 있습니다.
        </div>
        <div className={driverStyle.subtext2}>
          모든 기사님의 안전을 위해 24시간 관제센터를 운영하며,
          <br />안심하고 근무하실 수 있도록 돕고 있습니다.
        </div>
        <div className={driverStyle.subtext3}>
          본 서비스는 여성 고객과 여성 기사님을 매칭하는 전용 플랫폼으로, 여성 기사님만 지원이 가능합니다.
        </div>
        <DriverTypes />
        <DriverRegistration />
      </div>
    </div>
  );
};

export default Driver;
