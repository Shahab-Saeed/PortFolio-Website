import React from 'react'
import './Footer.css'
import { assets } from '../../assets/Assets'
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        
      <div className="socialicons">
          <a href="https://github.com/Shahab-Saeed" target='blank'>
            <img src={assets.github_icon} className="bx" />
          </a>

          <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target='blank'>
            <img src={assets.linkedin_icon} className="bx" />
          </a>

          <a href="https://www.instagram.com/shahab__saeed/" target='blank'>
            <img src={assets.instagram_icon} className="bx" />
          </a>

         
          </div>
          <ul className="list">
            <li><a href="#">FAQ</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <p className="copyright">
            @ Shahab Saeed | All rights Reserved
          </p>
      </footer>
    </div>
  )
}

export default Footer
