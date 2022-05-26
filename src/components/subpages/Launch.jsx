import React from "react";
import imgLaunch from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import imgLaunchTablet from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import style from "../../components/Tecnology.module.scss";

const Launch = (props) => {
  return (
    <>
      <div className={style.cont}>
        {props.width < 850 ? (
          <img src={imgLaunchTablet} alt="" className={style.img} />
        ) : (
          <img src={imgLaunch} alt="" className={style.img} />
        )}
      </div>
      <section className={style.conText}>
        <span className={style.span}>THE TERMINOLOGY...</span>
        <h3 className={style.h3}>LAUNCH VEHICLE</h3>
        <p p className={style.p}>
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!
        </p>
      </section>
    </>
  );
};

export default Launch;
