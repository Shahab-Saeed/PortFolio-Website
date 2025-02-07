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
          <Project1 profile_pic={assets.DarkModeEnabler} projectname={Dark Mode Enabler} projectdetail={"Hy! I have created this dark mode enabler using React js, it's portable you can also use it in your projects "}/>
       
   
        
        </div>
      </section>
    </div>
  )
}

export default Projects
