import React from "react";
import "./Header.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="NavBar" id="Header">
      <div className="left-n">
        <div className="name">Abrar</div>
        <Toggle />
      </div>
      <div className="right">
        <div className="list">
          <ul>
            <li>
              <Link to="Header" spy={true} smooth={true} activeClass="active">
                Home
              </Link>
            </li>

            <li>
              <Link to="services" spy={true} smooth={true}>
                Services
              </Link>
            </li>

            <li>
              <Link to="Experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>

            <li>
              <Link
                spy={true}
                to="Portfolio"
                offset={50}
                duration={500}
                smooth={true}
              >
                portfolio
              </Link>
            </li>
          </ul>
        </div>
        <Link spy={true} to="Contact" offset={50} duration={500} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
