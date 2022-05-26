import React from "react";
import backDd from "../../src/assets/destination/background-destination-desktop.jpg";
import backDm from "../../src/assets/destination/background-destination-mobile.jpg";
import backDt from "../../src/assets/destination/background-destination-tablet.jpg";

import imgEuropa from "../assets/destination/image-europa.webp";

import imgMars from "../assets/destination/image-mars.webp";
import imgTitan from "../assets/destination/image-titan.webp";

import imgMoon from "../assets/destination/image-moon.webp";

import style from "./Destination.module.css";

import { useState } from "react";

const Destination = (props) => {
  const [condi, setCondi] = useState(0);

  return (
    <>
      {props.width < 450 ? (
        <img src={backDm} alt="" className={style.imageBack} />
      ) : props.width > 880 ? (
        <img src={backDd} alt="" className={style.imageBack} />
      ) : (
        <img src={backDt} alt="" className={style.imageBack} />
      )}

      <h2 className={style.h2}>PICK YOUR DESTINATION</h2>
      <div className={style.butConditional}>
        <button onClick={() => setCondi(0)}>MOON</button>
        <button onClick={() => setCondi(1)}>MARS</button>
        <button onClick={() => setCondi(2)}>EUROPA</button>
        <button onClick={() => setCondi(3)}>TITAN</button>
      </div>

      <div className={style.conditionalCont}>
        {condi === 0 ? (
          <Moon />
        ) : condi === 1 ? (
          <Mars />
        ) : condi === 2 ? (
          <Europa />
        ) : (
          <Titan />
        )}
      </div>
    </>
  );
};

const Moon = () => {
  return (
    <>
      <div className={style.imagenPlanets}>
        <img src={imgMoon} alt="" className={style.imgDestination} />
      </div>
      <section className={style.text}>
        <article className={style.textDescrip}>
          <h3 className={style.titleH3}>MOON</h3>
          <p className={style.p}>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
        </article>
        <article className={style.distDay}>
          <p className={style.p}>Avg. distance</p>
          <p className={style.p}>Est. travel time</p>
          <span className={style.span}> 384,400 km </span>
          <span className={style.span}>3 days</span>
        </article>
      </section>
    </>
  );
};

function Europa() {
  return (
    <>
      <>
        <div className={style.imagenPlanets}>
          <img src={imgEuropa} alt="" className={style.imgDestination} />
        </div>
        <section className={style.text}>
          <article className={style.textDescrip}>
            <h3 className={style.titleH3}>EUROPA</h3>
            <p className={style.p}>
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover’s dream. With an icy surface, it’s perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
            </p>
          </article>
          <article className={style.distDay}>
            <p className={style.p}>Avg. distance</p>
            <p className={style.p}>Est. travel time</p>
            <span className={style.span}> 628 mil. km </span>
            <span className={style.span}>3 years</span>
          </article>
        </section>
      </>
    </>
  );
}

function Mars() {
  return (
    <>
      <div className={style.imagenPlanets}>
        <img src={imgMars} alt="" className={style.imgDestination} />
      </div>
      <section className={style.text}>
        <article className={style.textDescrip}>
          <h3 className={style.titleH3}>MARS</h3>
          <p p className={style.p}>
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>
        </article>
        <article className={style.distDay}>
          <p className={style.p}> Avg. distance</p>
          <p className={style.p}>Est. travel time </p>
          <span className={style.span}> 225 mil. km </span>
          <span className={style.span}>9 months</span>
        </article>
      </section>
    </>
  );
}
function Titan() {
  return (
    <>
      <div className={style.imagenPlanets}>
        <img src={imgTitan} alt="" className={style.imgDestination} />
      </div>
      <section className={style.text}>
        <article className={style.textDescrip}>
          <h3 className={style.titleH3}>TITAN</h3>
          <p className={style.p}>
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn...
          </p>
        </article>
        <article className={style.distDay}>
          <p className={style.p}> Avg. distance</p>
          <p className={style.p}>Est. travel time </p>
          <span className={style.span}> 1.6 bil. km </span>
          <span className={style.span}>7 years</span>
        </article>
      </section>
    </>
  );
}

export default Destination;
