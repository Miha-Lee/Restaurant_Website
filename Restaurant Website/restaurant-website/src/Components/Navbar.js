import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="m-main" smooth={true} duration={1000}>
        <h1 className="brand-name">MK Taste</h1>
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="m-main" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link to="m-about" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li>
          <Link to="m-menu" smooth={true} duration={1000}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="m-contact" smooth={true} duration={1000}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
