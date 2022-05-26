import imgAnousheh from "../../assets/crew/image-anousheh-ansari.webp";
import "./subStyleCrew.css";
import style from "../Crew.module.scss";

import React from "react";

const Anausheh = () => {
  return (
    <>
      <div className={style.imgCont}>
        <img src={imgAnousheh} alt="" className={style.img} />
      </div>
      <div className={style.textCont}>
        <span className={style.span}> FLIGTER ENGINEER </span>
        <h3 className={style.h3}>ANOUSHEH ANSARI</h3>
        <p className={style.p}>
          Anousheh Ansari is an Iranian American engineer and co-founder of
          Prodea Systems. Ansari was the fourth self-funded space tourist, the
          first self-funded woman to fly to the ISS, and the first Iranian in
          space.
        </p>
      </div>
    </>
  );
};

export default Anausheh;
