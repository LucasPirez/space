import imgCapsule from "../../assets/technology/image-space-capsule-portrait.jpg";
import imgCapsuletablet from "../../assets/technology/image-space-capsule-landscape.jpg";
// import { useGlobalEvent } from "beautiful-react-hooks";
// import { useState } from "react";
import React from "react";

import style from "../../components/Tecnology.module.scss";

const Capsule = (props) => {
  return (
    <>
      <div className={style.cont}>
        {props.width < 850 ? (
          <img src={imgCapsuletablet} alt="" className={style.img} />
        ) : (
          <img src={imgCapsule} alt="" className={style.img} />
        )}
      </div>
      <section className={style.conText}>
        <span className={style.span}>THE TERMINOLOGY...</span>
        <h3 className={style.h3}>SPACE CAPSULE</h3>
        <p className={style.p}>
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes
          a space gym, cinema, and plenty of other activities to keep you
          entertained.
        </p>
      </section>
    </>
  );
};

export default Capsule;
