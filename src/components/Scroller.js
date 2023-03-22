import React from "react";
import Slider from "react-slick";
import drill from "../img/drill.png";
import Ratech from "../img/Ratech.png";
import Grinder from "../img/Grinder.png";
import Cutoff from "../img/Cutofftool.png";
import "./css/Scroller.css";
import Slideritem from "./SmallComp/Slider_item";
import leftArrow from "../img/icons/left-arrow (1).png";
import rightArrow from "../img/icons/right-arrow.png";
import Customericons from "../img/icons/customer-service-1675.png";
import badge from "../img/icons/badge (1).png";
import bestPrice from "../img/icons/best-price (1).png";
import Services from "./SmallComp/Services";
import Setting from "../img/icons/settings.png";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} RightarrowSlider`} onClick={onClick}>
      <img src={rightArrow} alt="rightArrow" />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} leftarrowSlider`} onClick={onClick}>
      <img src={leftArrow} alt="leftArrow" />
    </div>
  );
}
function Scroller() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow /> || false,
    prevArrow: <SamplePrevArrow /> || false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="Slider_section">
      <div className="backgroundSetup">
        <div className="Slider_Partion_for_img">
          <div className="Slider_uper_heading">
            <div>
              <h1>AIRCAT TOOL CATEGORIES</h1>
            </div>
          </div>
          <div>
            <Slider {...settings}>
              <Slideritem Name="IMPACT WRENCHES" imageName={drill} />
              <Slideritem Name="RATECH" imageName={Ratech} />
              <Slideritem Name="GRINDER" imageName={Grinder} />
              <Slideritem Name=" CUT OFF TOOLS" imageName={Cutoff} />
              <Slideritem Name=" CUT OFF TOOLS" imageName={Cutoff} />
            </Slider>
          </div>
        </div>

        <div className="AboutSection">
          <div>
            <div className="AboutAirCat">
              <div>
                <p> About AirCat pneumatic Tools</p>
                <div className="Redline"></div>
              </div>
              <div className="AboutHolderSection">
                <h1>
                  The AIRCAT line represents the most significant advances in
                  the performance of pneumatic power tools in nearly 30 Years.
                </h1>
                <p>
                  Founded in 1998, our tool line has a substantially reduced
                  level of noise while retaining more power and torque. AIRCAT
                  also incorporates a patented ergonomically engineered handle
                  design to relieve stress and fatigue on the operator's hands,
                  wrists and arms. AIRCAT has the patented tuned exhaust muffler
                  technology in most tools, which allows discharged air to pass
                  without developing back pressure, thus retaining more power,
                  while significantly reducing noise.
                </p>

                <div className="ReadMeButton">
                  <button>READ MORE</button>
                </div>
              </div>
            </div>

            <div>
              <div className="whyChoose_Section ">
                <div className="Choose_heading">
                  <div>
                    <h3>why choose Aircat pneumatic Tools</h3>
                  </div>
                  <div className="Redline"></div>
                  <div className="ChooseHeadline">
                    <h1>
                      What makes AIRCAT different then <br /> our competitions?
                    </h1>
                  </div>
                </div>

                <div className="ServicesProvided">
                  <Services
                    Content="AIRCAT strives to maintain a high regard for Customer
                      Service, by providing a quality product that is
                      backed...read"
                    image={Customericons}
                    heading={"Customer Service"}
                  />
                  <Services
                    Content={`AIRCAT customers makes us who we are, that is why  Aircat has created tools that put the end-user first by giving them a quiet...read more`}
                    image={badge}
                    heading={"Quality Products"}
                  />
                  <Services
                    Content={`AIRCAT customers makes us who we are, that is why  Aircat has created tools that put the end-user first by giving them a quiet...read more`}
                    image={Setting}
                    heading={"Quality Products"}
                  />
                  <Services
                    Content={`AIRCAT customers makes us who we are, that is why  Aircat has created tools that put the end-user first by giving them a quiet...read more`}
                    image={bestPrice}
                    heading={"Fair Priced Product"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scroller;
