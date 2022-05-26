import imgMark from "../../assets/crew/image-mark-shuttleworth.webp";

import React from "react";
import style from "../Crew.module.scss";

const Mark = () => {
  return (
    <>
      <div className={style.imgCont}>
        <img src={imgMark} alt="" className={style.img} />
      </div>
      <div className={style.textCont}>
        <span className={style.span}>Mission Specialist</span>
        <h3 className={style.h3}>Mark Shuttleworth</h3>
        <p className={style.p}>
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the
          company behind the Linux-based Ubuntu operating system. Shuttleworth
          became the first South African to travel to space as a space tourist.
        </p>
      </div>
    </>
  );
};

export default Mark;
