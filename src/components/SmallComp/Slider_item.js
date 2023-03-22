import React from "react";

function Slideritem({ imageName, Name }) {
  return (
    <div className="item_holder">
      <div className="background">
        <div>
          <img src={imageName} className="SliderImages" alt="Sliderimg" />
        </div>
      </div>
      <div className="Slider_Name">
        <h4>{Name}</h4>
      </div>
    </div>
  );
}

export default Slideritem;
