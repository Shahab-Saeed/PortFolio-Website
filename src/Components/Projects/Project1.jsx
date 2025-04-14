import React from 'react'
import './Project1.css'
import { assets } from '../../assets/Assets'

const Project1 = (prompts) => {
  return (
    <div>
           <div className="project-card">
                <img src={prompts.profile_pic} alt="" />
                <h3>{prompts.projectname}</h3>
                <p>{prompts.projectdetail}</p>
                <span className="btnspan">
                <div className="btn">
                   <a href={prompts.projectlink} target="blank"> Review Project</a>
                </div>
                </span>
            </div>
    </div>
  )
}

export default Project1
