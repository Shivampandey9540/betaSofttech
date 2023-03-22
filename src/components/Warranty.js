import React from "react";
import warranty from "../img/2years_warranty.png";
import "./css/Warranty.css";
function Warranty() {
  return (
    <div className="WarrantySection">
      <div className="WarrantyHolder">
        <div className="Warranty_right">
          <div className="WarrantyImg">
            <img src={warranty} alt="2yearWarranty" />
          </div>

          <div className="contant">
            <p>
              we Warrant that our tools shall be free from defects in original
              workmanship and material and that it will be inspected by us
              before shipment.
            </p>
          </div>
        </div>
        <div className="button_holder">
          <div className="LearnmoreButton">
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Warranty;
