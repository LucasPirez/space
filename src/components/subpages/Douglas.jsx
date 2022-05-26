import React from "react";
import imgDouglas from "../../assets/crew/image-douglas-hurley.webp";
import style from "../Crew.module.scss";

const Douglas = () => {
  return (
    <>
      <div className={style.imgCont}>
        <img src={imgDouglas} alt="" className={style.img} />
      </div>
      <div className={style.textCont}>
        <span className={style.span}>COMMANDER</span>
        <h3 className={style.h3}>DOUGLAS HURLEY</h3>
        <p className={style.p}>
          Commander Douglas Hurley Douglas Gerald Hurley is an American
          engineer, former Marine Corps pilot and former NASA astronaut. He
          launched into space for the third time as commander of Crew Dragon
          Demo-2.
        </p>
      </div>
    </>
  );
};

export default Douglas;
