import React from "react";
import "./Services2.css";
const Services2 = (props) => {
  return (
    <div>
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

export default Services2; 
