import React from 'react'
import './Services.css'
import Services2 from './Services2'
const Services = () => {
  
  return (
    <div>
      <section className="services" id="services">
        <h2 className="heading">Services</h2>

        <div className="service-container">
        
           <Services2 heading={"Front - End Developer"} para={"As a passionate frontend developer, I specialize in creating clean, responsive, and user-friendly web interfaces. I focus on building modern websites and web apps that are not only visually appealing but also offer a seamless user experience across all devices. I’m always learning and keeping up"}/>
           <Services2 heading={"Java Developer"} para={"Being a Java developer, I have hands-on experience building robust and scalable applications using object-oriented programming principles (OOPs). I enjoy working with Java because of its versatility and reliability, whether it's creating desktop applications, backend logic, or complex systems. "}/>
           <Services2 heading={"Database Administrator"} para={"As a Database Administrator, I specialize in managing, maintaining, and securing databases to ensure high availability and performance. I have hands-on experience in configuring database servers, setting up backup and recovery strategies, monitoring system health, and optimizing queries for better efficiency. Whether it's relational databases like MySQL or NoSQL systems like MongoDB "}/>
           
          
           
           
        </div>
        
      </section>
    </div>
  )
}

export default Services
