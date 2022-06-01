import "./App.css";
import { useState } from "react";
import { Routes, NavLink, Route } from "react-router-dom";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import { useGlobalEvent } from "beautiful-react-hooks";
import logo from "./assets/shared/logo.svg";
import close from "./assets/shared/icon-close.svg";
import hamburguer from "./assets/shared/icon-hamburger.svg";

function App() {
  const [header, setHeader] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const onWindowResize = useGlobalEvent("resize");
  onWindowResize((event) => {
    setWidth(window.innerWidth);
  });
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="logo" className="logoImg" />
        </div>
        {width > 450 ? (
          <div className="App-header">
            <NavLink to="/" className="nav" activeClassName="active">
              HOME
            </NavLink>
            <NavLink to="destination" className="nav" activeClassName="active">
              DESTINATION
            </NavLink>
            <NavLink to="/crew" className="nav" activeClassName="active">
              CREW
            </NavLink>
            <NavLink to="/tecnology" className="nav" activeClassName="active">
              TECHNOLOGY
            </NavLink>
          </div>
        ) : width < 450 && !header ? (
          <button className="but-false" onClick={() => setHeader(true)}>
            <img src={close} alt="" />
          </button>
        ) : (
          <div className="header-phone">
            <button className="but-true" onClick={() => setHeader(false)}>
              <img src={hamburguer} alt="" />
            </button>
            <NavLink to="/" className="nav nav-1">
              HOME
            </NavLink>
            <NavLink to="/destination" className="nav">
              DESTINATION
            </NavLink>
            <NavLink to="/crew" className="nav">
              CREW
            </NavLink>
            <NavLink to="/tecnology" className="nav">
              TECHNOLOGY
            </NavLink>
          </div>
        )}
      </header>

      <div className="principal">
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/" element={<Home width={width} />} />
          <Route path="destination" element={<Destination width={width} />} />
          <Route path="/crew" element={<Crew width={width} />} />
          <Route path="/tecnology" element={<Technology width={width} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
