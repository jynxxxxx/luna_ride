
import DriverRegistration from "@/components/DriverRegistration";
import driverStyle from "@/styles/driver.module.scss";

const Driver = () => {

  return (
    <div className={driverStyle.ctn}>
      <DriverRegistration />
    </div>
  );
};

export default Driver;
