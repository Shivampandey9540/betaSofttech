import React from "react";
import Callender from "../../img/icons/icons8-calendar-50.png";
import user from "../../img/icons/user (1).png";
function News({ heading, day, userName, NewsGot }) {
  return (
    <div>
      <div className="News">
        <div className="News_uper_Section">
          <div className="NewsHeading">
            <h3>{heading}</h3>
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
                  <p>{day}</p>
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
                  <p>{userName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="News_lower_Section">
          <div className="FullNews">
            <p>{NewsGot}</p>
          </div>
          <div className="ReadMore">
            <div className="ReadButton">
              <button>READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
