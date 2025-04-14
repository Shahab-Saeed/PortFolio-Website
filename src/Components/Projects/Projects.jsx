import React from "react";
import "./Projects.css";

import Projectscategory from "./Projectscategory";
import { Link } from "react-router-dom";
import { useState } from "react";
const Projects = () => {

  return (
    <div>
      <section className="projects" id="projects">
        <h2 className="heading">Projects</h2>
        <div className="mainproject">
      
    
        <div >
        <Projectscategory 
              heading={"FRONT END PROJECTS"}
              para={
                "Madeup of HTML, CSS, JS, Bootstrap, Tailwind CSS, Material UI, GSAP, REACT, Next.js"
              }
            />
        </div>
     

          <Projectscategory
            heading={"JAVA PROJECTS"}
            para={
              "Madeup of HTML, CSS, JS, Bootstrap, Tailwind CSS, Material UI, GSAP, REACT, Next.js"
            }
          />
          <Projectscategory
            heading={"DATABASE PROJECTS"}
            para={
              "Madeup of HTML, CSS, JS, Bootstrap, Tailwind CSS, Material UI, GSAP, REACT, Next.js"
            }
          />
        </div>

       
      </section>
    </div>
  );
};

export default Projects;
