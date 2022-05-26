import React, { useState } from "react";
import backCd from "../assets/crew/background-crew-desktop.jpg";
import backCm from "../assets/crew/background-crew-mobile.jpg";
import backCt from "../assets/crew/background-crew-tablet.jpg";
import { useGlobalEvent } from "beautiful-react-hooks";

import style from "./Crew.module.scss";
import Douglas from "./subpages/Douglas";
import Mark from "./subpages/Mark";
import Victor from "./subpages/Victor";
import Anausheh from "./subpages/Anausheh";

const Crew = (props) => {
  const [first, setFirst] = useState(0);

  return (
    <>
      {props.width < 400 ? (
        <img src={backCm} alt="" className={style.imageBack} />
      ) : props.width > 850 ? (
        <img src={backCd} alt="" className={style.imageBack} />
      ) : (
        <img src={backCt} alt="" className={style.imageBack} />
      )}

      <h2 className={style.h2}>MEET YOUR CREW</h2>
      <div className={style.radioButton}>
        <button
          onClick={() => setFirst(0)}
          className={style.buttonCrew}
        ></button>
        <button
          onClick={() => setFirst(1)}
          className={style.buttonCrew}
        ></button>
        <button
          onClick={() => setFirst(2)}
          className={style.buttonCrew}
        ></button>
        <button
          onClick={() => setFirst(3)}
          className={style.buttonCrew}
        ></button>
      </div>

      <div className={style.container}>
        {first === 0 ? (
          <Douglas />
        ) : first === 1 ? (
          <Mark />
        ) : first === 2 ? (
          <Victor />
        ) : (
          <Anausheh />
        )}
      </div>
    </>
  );
};

export default Crew;
