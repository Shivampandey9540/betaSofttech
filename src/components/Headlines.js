import React from "react";
import "./css/Headline.css";
function Headlines() {
  return (
    <div className="HeadlinesSection">
      <div className="HeadlinesContainer">
        <div className="left_Section">
          <div>
            <h1>What Our Customers Are Saying...</h1>
          </div>
        </div>
        <div className="Mid_Section">
          <div className="Circle">
            <h1>"</h1>
          </div>
        </div>
        <div className="right_Section">
          <div className="uperSlogan">
            <h1>
              This is the best 1/2 " impact gun I <br />
              Have ever owned.
            </h1>
          </div>
          <div className="lowerSlogan">
            <h1>Thanks AIRCAT.</h1>
            <h2>-Chris</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headlines;
