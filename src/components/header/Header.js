import "./Header.scss";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

import Burber from "../../assets/burger.svg";


const Header = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  return (
    <div className="header">
      <a href="#">
        <Logo />
      </a>
      <nav className={click ? "nav__menu active" : "nav__menu"}>
        <ul className="nav__list">
          <li>
            <a href="#" className="active">Home</a>
          </li>
          <li>
            <a href="#">Our mission</a>
          </li>
          <li>
            <a href="#">Places</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
        </ul>
        <button className="btn__apply">Apply</button>
      </nav>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#000" }} />
        ) : (
          <FaBars size={20} style={{ color: "#000" }} />
        )}
      </div>
    </div>
  );
};

export default Header;
