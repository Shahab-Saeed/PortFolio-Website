import React from "react";
import "./Home.css";
import { assets } from "../../assets/Assets"; 
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
          <a href="#">
            <img src={assets.github_icon} className="bx" />
          </a>

          <a href="#">
            <img src={assets.linkedin_icon} className="bx" />
          </a>

          <a href="#">
            <img src={assets.instagram_icon} className="bx" />
          </a>

          <a href="#">
            <img src={assets.twitter_icon} className="bx" />
          </a>
          </div>
            <div className="btn-group">
                <a href="#" className="btn">Hire</a>
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
