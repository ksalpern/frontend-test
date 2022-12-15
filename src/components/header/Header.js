import "./Header.scss";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import ApplyButton from "./ApplyButton";

import Burber from "../../assets/burger.svg";

const Header = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);



  return (
    <header className="header">
      <div className="header__container">
        <a href="#">
          <Logo />
        </a>
        <nav className={click ? "nav__menu active" : "nav__menu"}>
          <ul className="nav__list">
            <li>
              <a href="#" onClick={handleClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={handleClick}>Our mission</a>
            </li>
            <li>
              <a href="#" onClick={handleClick}>Places</a>
            </li>
            <li>
              <a href="#" onClick={handleClick}>Team</a>
            </li>
          </ul>
          <div className="desktopHidden" >
            <ApplyButton />
          </div>
        </nav>
        <div className="mobileHidden">
          <ApplyButton />
        </div>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#000" }} />
          ) : (
            <FaBars size={20} style={{ color: "#000" }} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
