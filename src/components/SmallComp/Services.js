import React from "react";

function Services({ image, heading, Content }) {
  return (
    <div>
      <div className="Service_holder">
        <div>
          <img src={image} alt="CustomerCare" />
        </div>
        <div>
          <h3>{heading}</h3>
        </div>
        <div>
          <p>{Content}</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
