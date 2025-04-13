import React from "react";
import "./Projectscategory.css";
const Projectscategory = (props) => {
    
  return (
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
  );
};

export default Projectscategory;
