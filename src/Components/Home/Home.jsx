import React from "react";
import "./Home.css";
import { assets } from "../../assets/Assets"; 
import { Link } from "react-router-dom";
const Home = () => {
  return (
    
    <div> 
      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Hi, This Is <span>Shahab Saeed</span>
          </h1>
          <h3> 
            I am a <span>Software and Web Developer</span>
          </h3>
          <p>
          Welcome! I'm  a versatile digital creator with a passion for crafting compelling content and developing innovative web experiences. My technical expertise spans across front-end development with React and in-depth knowledge of SQL databases like MySQL and PostgreSQL for Database Administration. I have successfully built many dynamic React-based website.
          </p>

          <div className="socialicons">
          <a href="https://github.com/Shahab-Saeed" target="blank">
            <img src={assets.github_icon} className="bx" />
          </a>

          <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target="blank">
            <img src={assets.linkedin_icon} className="bx" />
          </a>

          <a href="https://www.instagram.com/shahab__saeed/" target="blank">
            <img src={assets.instagram_icon} className="bx" />
          </a>

          {/* <a href="#" target="blank">
            <img src={assets.twitter_icon} className="bx" />
          </a> */}
          </div>
            <div className="btn-group">
                <a href="https://www.linkedin.com/in/shahab-saeed-596204343/" target="_blank" className="btn">Hire</a>
                <a href="#contact" className="btn">Contact</a>
            </div>
        </div>
        <div className="homeimg">
            <img src={assets.profilepic} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
