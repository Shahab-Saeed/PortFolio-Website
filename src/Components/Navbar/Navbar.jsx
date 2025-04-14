import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/Assets";

const Navbar = (props) => {


  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return ( 
    <header className="header" >
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
        <a href="#home" onClick={()=>{props.setsetprojectcategory(false)}}>Home</a>
        <a href="#about" onClick={()=>{props.setsetprojectcategory(false)}}>About</a>
        <a href="#services" onClick={()=>{props.setsetprojectcategory(false)}}>Services</a>
        <a href="#projects" onClick={()=>{props.setsetprojectcategory(false)}}>Projects</a>
      </nav>

      <a href="#contact" className="gradientbtn">Contact Me</a> 
    </header>
  );
};

export default Navbar;
