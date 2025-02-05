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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quae
            exercitationem, aliquid ipsam explicabo dignissimos beatae
            voluptates est doloribus nisi quidem, at dolorem nam odio delectus
            sit quas esse, perferendis rerum neque obcaecati quos minus! Debitis
            perferendis reiciendis nisi commodi totam blanditiis facere, ex eos?
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
