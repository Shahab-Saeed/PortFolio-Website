import React from 'react'
import './Projects.css'

import { assets } from '../../assets/Assets'
import Project1 from './Project1'
const Projects = () => {
    
  return (
    
    <div> 
      <section className="projects" id="projects">
        <h2 className="heading">Projects</h2>
        <div className="projects-box">
        
        
          <Project1 profile_pic={assets.PasswordToggler} projectname={"Password Toggler"} projectdetail={"Hy! I have created this Password Toggler using React js, it's portable you can also use it in your projects which helps you to show or hide password and it's fully portable, you can also use it to your code."} projectlink="https://password-toggler-ss.netlify.app"/>
       
          <Project1 profile_pic={assets.DarkModeEnabler} projectname={"Dark Mode Enabler"} projectdetail={"Hy! I have created this dark mode enabler using React js, it's portable you can also use it in your projects which helps you to see better in black Resolutions. you can also use it to your code. "} projectlink="https://dark-mode-enabler-by-ss.netlify.app"/>
       
          <Project1 profile_pic={assets.AgeCalculatorApp} projectname={"Age Calculator App"} projectdetail={"Hy! I have created this Age Calculator App  using React js, it's portable you can also use it in your projects which helps you to see Your age. you can also use it to your code. "} projectlink="https://age-calculator-react-ss.netlify.app"/>
          
          <Project1 profile_pic={assets.ClockApp} projectname={"Digital Clock App"} projectdetail={"Hy! I have created this Digital Clock App  using React js, it's portable you can also use it in your projects which helps you to see Your age. you can also use it to your code. "} projectlink="https://clock-app-react-ss.netlify.app"/>
          
          <Project1 profile_pic={assets.RandomPassGen} projectname={"Random Password Generator App"} projectdetail={"Hy! I have created this Random Password Generator App  using React js, it's portable you can also use it in your projects which helps you to generate random passwords"} projectlink="https://rpgars.netlify.app"/>
       
          
   
        
        </div>
      </section>
    </div>
  )
}

export default Projects
