import React from "react";
import back from "../../src/assets/home/background-home-desktop.jpg";
import backm from "../../src/assets/home/background-home-mobile.jpg";
import backt from "../../src/assets/home/background-home-tablet.jpg";
import style from "./Home.module.css";

import { useEffect, useState } from "react";

const Home = (props) => {
  return (
    <>
      {props.width < 400 ? (
        <img src={backm} alt="" className={style.imageBack} />
      ) : props.width > 850 ? (
        <img src={back} alt="" className={style.imageBack} />
      ) : (
        <img src={backt} alt="" className={style.imageBack} />
      )}

      <main className={style.main}>
        <div className={style.textHome}>
          <p className={style.p}> SO, YOU WANT TO TRAVEL TO</p>
          <span className={style.space}>SPACE</span>
          <p className={style.p}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world
          </p>
        </div>
        <div className={style.explore}>
          <p>EXPLORE</p>
        </div>
      </main>
    </>
  );
};

export default Home;
