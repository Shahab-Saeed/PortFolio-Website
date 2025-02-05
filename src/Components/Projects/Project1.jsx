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
                <div className="btn">
                    Review Project
                </div>
            </div>
    </div>
  )
}

export default Project1
