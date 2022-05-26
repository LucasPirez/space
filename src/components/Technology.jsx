import React from "react";
import backTd from "../assets/technology/background-technology-desktop.jpg";
import backTm from "../assets/technology/background-technology-mobile.jpg";
import backTt from "../assets/technology/background-technology-tablet.jpg";
import Capsule from "./subpages/Capsule";
import Launch from "./subpages/Launch";
import Spaceport from "./subpages/Spaceport";
import { useState } from "react";
import style from "./Tecnology.module.scss";

const Technology = (props) => {
  const [number, setNumber] = useState(0);

  return (
    <>
      {props.width < 400 ? (
        <img src={backTm} alt="" className={style.imageBack} />
      ) : props.width > 850 ? (
        <img src={backTd} alt="" className={style.imageBack} />
      ) : (
        <img src={backTt} alt="" className={style.imageBack} />
      )}

      <div className={style.render}>
        <div className={style.butCont}>
          <button onClick={() => setNumber(0)} className={style.button}>
            1
          </button>
          <button onClick={() => setNumber(1)} className={style.button}>
            2
          </button>
          <button onClick={() => setNumber(2)} className={style.button}>
            3
          </button>
        </div>

        <div className={style.conTec}>
          {number === 0 ? (
            <Launch width={props.width} />
          ) : number === 1 ? (
            <Spaceport width={props.width} />
          ) : (
            <Capsule width={props.width} />
          )}
        </div>
      </div>
    </>
  );
};

export default Technology;
