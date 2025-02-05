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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sit tenetur rem commodi officiis adipisci iure debitis. Perferendis et ullam modi, repellat voluptate esse eaque adipisci quos labore atque quisquam debitis velit! Saepe exercitationem aliquam dolores repellat officiis, molestias ratione hic. Sed neque illo aspernatur voluptate nam! Iusto ipsam dignissimos tempora, earum maiores excepturi eveniet.</p>
            <a href="#" className='btn'>Read More</a>
        </div>
       </section>
    </div>
  )
}

export default About
