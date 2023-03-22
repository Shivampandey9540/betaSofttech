import React from "react";
import Slider from "react-slick";
import News from "./SmallComp/News";
import "./css/Newsletters.css";
import Callender from "../img/icons/icons8-calendar-50.png";
import user from "../img/icons/user (1).png";
function Newsletters() {
  const Setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
      // style={{
      //   backgroundColor: "#ddd",
      //   borderRadius: "10px",
      //   padding: "10px",
      // }}
      >
        <ul
          className="Slider_holder"
          style={{
            margin: "   10px",
            display: "flex",
            gap: "24px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => <div className="dots"></div>,
  };
  const Newsinfo = [
    {
      heading: `AIRCAT Pneumatic 6520: 3" Composite Reversible Cut-Off Tool Designed for Auto Tech...`,
      day: "Feb 01, 2015",
      userName: "by AirCat",
      NewsGot: `Jupiter, FL February, 2015: Florida Pneumatic Manufacturing Corporation will introduce the AIRCAT 6520 3" Composite...`,
    },
    {
      heading: `We are delighted to announce the launch of our new 1" Impact Wrench: 1993-VXL...`,
      day: "Feb 01, 2015",
      userName: "by AirCat",
      NewsGot: `High Wycombe, UK - May 2020: For more than 46 years, Universal Tool & AIRCAT has delivered the most reliable power tools...`,
    },
    {
      heading: `AIRCAT Pneumatic 6520: 3" Composite Reversible Cut-Off Tool Designed for Auto Tech...`,
      day: "Feb 01, 2015",
      userName: "by AirCat",
      NewsGot: `Jupiter, FL February, 2015: Florida Pneumatic Manufacturing Corporation will introduce the AIRCAT 6520 3" Composite...`,
    },
    {
      heading: `We are delighted to announce the launch of our new 1" Impact Wrench: 1993-VXL...`,
      day: "Feb 01, 2015",
      userName: "by AirCat",
      NewsGot: `High Wycombe, UK - May 2020: For more than 46 years, Universal Tool & AIRCAT has delivered the most reliable power tools...`,
    },
    {
      heading: `We are delighted to announce the launch of our new 1" Impact Wrench: 1993-VXL...`,
      day: "Feb 01, 2015",
      userName: "by AirCat",
      NewsGot: `High Wycombe, UK - May 2020: For more than 46 years, Universal Tool & AIRCAT has delivered the most reliable power tools...`,
    },
  ];

  return (
    <div className="NewsLetterHolder">
      <div className="NewsLetterContainers">
        <div className="NewsLetterHeading">
          <div>
            <h1>Press Releases, Latest News & Events</h1>
          </div>
        </div>

        <div className="NewsSection">
          {/* <div className="News">
            <div className="News_uper_Section">
              <div className="NewsHeading">
                <h3>
                  AIRCAT Pneumatic 1350-XL, 1275-XL and 1770-XL Impact Wrench
                  Series Designed for Auto Tech...
                </h3>
              </div>

              <div className="DateUserHolder">
                <div>
                  <div>
                    <div>
                      <img
                        src={Callender}
                        alt="CallenderImage"
                        className=" NewsImages NewsCallender"
                      />
                    </div>
                    <div>
                      <p>Feb 01, 2015</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <img
                        src={user}
                        alt="UserImage"
                        className="NewsImages UserImage"
                      />
                    </div>
                    <div>
                      <p>by Aircat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="News_lower_Section">
              <div className="FullNews">
                <p>
                  Jupiter, FL February, 2015: Florida Pneumatic Manufacturing
                  Corporation will introduce the AIRCAT 6520 3" Composite...
                </p>
              </div>
              <div className="ReadMore">
                <div className="ReadButton">
                  <button>READ MORE</button>
                </div>
              </div>
            </div>
          </div> */}
          <div className="Slider_holder">
            <Slider {...Setting}>
              {Newsinfo.map((e) => {
                return (
                  <div>
                    <News
                      NewsGot={e.NewsGot}
                      day={e.day}
                      heading={e.heading}
                      userName={e.userName}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="SliderArea"></div>
        </div>
      </div>
    </div>
  );
}

export default Newsletters;
