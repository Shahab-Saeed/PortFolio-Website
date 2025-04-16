import React, { useState } from "react";
import "./Skills.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { assets } from "../../assets/Assets";
import { useEffect } from "react";
const Skills = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    centerMode: true,
    centerPadding: "20px",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    arrows:false,

    
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "10px",
        },
      },
     
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding: "0px",
        },
      }, {
        breakpoint: 500,
        settings: {
          slidesToShow: 2 ,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (


    <div className="cards">
      <h1 className="heading">Skills</h1>
      <div className="slider-container">
        <Slider {...settings}>
          <div  className={`card ${activeIndex === 0 ? "active" : ""}`}>
            <img src={assets.javasvg} alt="" />
            <h1>Java</h1>
          </div>
          <div className={`card ${activeIndex === 0 ? "active" : ""}`}>
            <img src={assets.jsicon} alt="" />
            <h1>Java SCript</h1>
          </div>
          <div className={`card ${activeIndex === 0 ? "active" : ""}`}>
            <img src={assets.mysqlicon} alt="" />
            <h1>MySql</h1>
          </div>
          <div className={`card ${activeIndex === 0 ? "active" : ""}`}>
            <img src={assets.mongodbicon} alt="" className="sma" />
            <h1>MongoDB</h1>
          </div>
          <div className={`card ${activeIndex === 0 ? "active" : ""}`}>
            <img src={assets.postgreicon} alt="" />
            <h1>Postgre SQl</h1>
          </div>
          <div className={`card ${activeIndex === 0 ? "active" : ""}`}>
            <img src={assets.gsapicon} alt="" />
            <h1>Gsap</h1>
          </div>
          <div className={`card ${activeIndex === 0 ? "active" : ""}`}>
            <img src={assets.materialuilogo} alt="" />
            <h1>Material UI</h1>
          </div>
          <div className={`card ${activeIndex === 0 ? "active" : ""}`}>
            <img src={assets.bootstrapicon} alt="" />
            <h1>Bootstrap</h1>
          </div>
          <div className={`card ${activeIndex === 0 ? "active" : ""}`}>
            <img src={assets.tailwindicon} alt="" />
            <h1>Tailwind CSS</h1>
          </div>
          <div className={`card ${activeIndex === 0 ? "active" : ""}`}>
            <img src={assets.cssicon} alt="" />
            <h1>CSS</h1>
          </div>
          <div className={`card ${activeIndex === 0 ? "active" : ""}`}>
            <img src={assets.html} alt="" />
            <h1>HTML</h1>
          </div>
      
          <div className={`card ${activeIndex === 0 ? "active" : ""}`}>
            <img src={assets.giticon} alt="" />
            <h1>Git Hub</h1>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
