import imgVictor from "../../assets/crew/image-victor-glover.webp";

import React from "react";
import style from "../Crew.module.scss";
const Victor = () => {
  return (
    <>
      <div className={style.imgCont}>
        <img src={imgVictor} alt="" className={style.img} />
      </div>
      <div className={style.textCont}>
        <span className={style.span}>PILOT</span>
        <h3 className={style.h3}>VICTOR GLOVER</h3>
        <p className={style.p}>
          Pilot on the first operational flight of the SpaceX Crew Dragon to the
          International Space Station. Glover is a commander in the U.S. Navy
          where he pilots an F/A-18.He was a crew member of Expedition 64, and
          served as a station systems flight engineer.
        </p>
      </div>
    </>
  );
};

export default Victor;
