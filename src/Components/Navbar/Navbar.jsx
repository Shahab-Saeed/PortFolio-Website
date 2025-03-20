import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/Assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <header className="header">
      <a href="#home" className="logo" >
        Shahab<span> Saeed</span>
      </a>

      {/* Hamburger Icon */}
      <img
        onClick={toggleMenu}
        src={assets.menu_icon}
        className={`menu-icon ${toggle ? "active" : ""}`}
        alt="menu"
      />

      {/* Navigation Menu */}
      <nav className={`navbar ${toggle ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
      </nav>

      <button className="gradientbtn">Contact Me</button>
    </header>
  );
};

export default Navbar;
