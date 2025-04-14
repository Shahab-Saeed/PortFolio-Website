import React from "react";
import "./Projectscategory.css";
import { Link } from "react-router-dom";

const Projectscategory = (props) => {
    
  return (
    <a href="/Frontendprojects" >
     <div className="projectcategory">
        <div className="service-box">
        <div className="service-info">
          <h4>{props.heading}</h4>
          <p>
            {props.para}
          </p>
        </div>
      </div>
    </div>
    </a>
  
  );
};

export default Projectscategory;
