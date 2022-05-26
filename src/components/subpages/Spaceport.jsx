import imgSpaceport from "../../assets/technology/image-spaceport-portrait.jpg";
import imgSpaceportTablet from "../../assets/technology/image-spaceport-landscape.jpg";

import React from "react";
import style from "../../components/Tecnology.module.scss";

const spaceport = (props) => {
  return (
    <>
      <div className={style.cont}>
        {props.width < 850 ? (
          <img src={imgSpaceportTablet} alt="" className={style.img} />
        ) : (
          <img src={imgSpaceport} alt="" className={style.img} />
        )}
      </div>
      <section className={style.conText}>
        <span className={style.span}>THE TERMINOLOGY...</span>
        <h3 className={style.h3}>SPACEPORT</h3>
        <p p className={style.p}>
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth’s rotation for launch.
        </p>
      </section>
    </>
  );
};

export default spaceport;
