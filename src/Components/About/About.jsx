import React from 'react'
import './About.css' 
import { assets } from '../../assets/Assets'
const About = () => {
  return (
    <div>
       <section className="about" id="about">
        <div className="about-img"> 
            <img src={assets.profilepic} alt="" />
        </div>

        <div className="about-content">
            <h2>About <span>Me</span></h2>
            <p> Hi, I’m Shahab Saeed — a software engineer with a strong grip on Front-End, Java Language ,SQL, MongoDB, and backend technologies. I love building systems that are not only functional but efficient and scalable. 've worked on various academic and personal project as you can see in my portfolio. My strengths lie in data structuring, clean code practices, and continuously learning new tech. I’m always open to new collaborations, learning opportunities, and exciting projects. Feel free to explore my work and let’s connect!</p>
            <a href="https://github.com/Shahab-Saeed/Curricular-Vitae/blob/main/Resume.pdf" target='blank' className='btn'>Read More</a>
        </div>
       </section>
    </div>
  )
}

export default About
