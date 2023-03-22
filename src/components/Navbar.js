import "./css/Navbar.css";
import React from "react";
import Email from "../img/icons/email.png";
import support from "../img/icons/support.png";
import Facebook from "../img/icons/facebook.png";
import Instagram from "../img/icons/instagram.png";
import Youtube from "../img/icons/youtube.png";
import AirCat from "../img/AirCatLogo.png";
import SeachIcon from "../img/icons/search-interface-symbol.png";

import leftbutton from "../img/icons/left-arrow (1).png";
import rightbutton from "../img/icons/right-arrow.png";
import HeroImg from "../img/Hero_img.png";
function Navbar() {
  return (
    <div>
      <div className="Hero_div">
        {/*
        NavBar section
        */}
        <nav className="nav">
          <header>
            <div className="top_nav">
              <div className="Email_Phone_holder">
                <div className="Phone_holder">
                  <div className="Phone_Logo">
                    <img
                      src={support}
                      className="top_nav_image Phone_img"
                      alt="Phonelogo"
                    />
                  </div>
                  <div>
                    <a href="tel:44(1)494883300" className="Call_a">
                      44 (1) 494883300
                    </a>
                  </div>
                </div>
                <div className="Email_holder">
                  <div className=" Email_Logo">
                    <img
                      src={Email}
                      className=" top_nav_image Email_logo"
                      alt="Emaillogo"
                    />
                  </div>
                  <div>
                    <a href="mailto:sales@out-tools.com" className="Email_a">
                      sales@out-tools.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="Follow_Section_holder">
                <div>
                  <p>Follow us @</p>
                </div>
                <div className="Follow_Icons">
                  <div className="Follow_icon_holder Facebook">
                    <a href="https://www.facebook.com/search/top?q=beta%20soft%20technology">
                      <div className="Image_Holder">
                        <img
                          src={Facebook}
                          className="Follow_logo Facebook "
                          alt="Youtube"
                        />
                      </div>
                    </a>
                  </div>

                  <div className="Follow_icon_holder Instagram">
                    <div className="Image_Holder">
                      <a href="https://www.instagram.com/betasoft.technology/">
                        <div className="Image_Holder">
                          <img
                            src={Instagram}
                            className="Follow_logo Instagram "
                            alt="Youtube"
                          />
                        </div>
                      </a>{" "}
                    </div>
                  </div>
                  <div className="Follow_icon_holder Youtube">
                    <div className="Image_Holder">
                      <a href="https://www.youtube.com/@betasofttechnology1084">
                        <div className="Image_Holder">
                          <img
                            src={Youtube}
                            className="Follow_logo Youtube"
                            alt="Youtube"
                          />
                        </div>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lower_nav">
              <div className="lower_nav_positing">
                <div className="Company_logo_holder">
                  <div className="AirCat_Head_logo">
                    <div className="AirCat_Logo_Background">
                      <img
                        src={AirCat}
                        className="Company_logo_image"
                        alt="AirCat"
                      />
                    </div>
                  </div>
                </div>
                <div className="Navigation_Section">
                  <div className="Navigation_holder">
                    <div className="Navigation_Setup_Alignment">
                      <ul className="Navigation">
                        <li className="Links">
                          <a href="/">HOME</a>
                        </li>
                        <li className="Links">
                          <a href="/">ABOUT US</a>
                        </li>
                        <li className="Links">
                          <a href="/">PRODUCT</a>
                        </li>
                        <li className="Links">
                          <a href="/">SERVICES</a>
                        </li>
                        <li className="Links">
                          <a href="/">CONTACT US</a>
                        </li>
                      </ul>
                    </div>
                    <div className="Quary_section_Search">
                      <div className="Quary_button_holder">
                        <button className="Quary_button">QUICK QUARY</button>
                      </div>
                      <div className="Search_button">
                        <div>
                          <img
                            src={SeachIcon}
                            className="SearchIcons"
                            alt="SearchIcon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </nav>

        {/**
            HeroSection

             */}
        <section className="Hero_section">
          <div className="Hero_div_Slogan_Section">
            <div className="left_section_Hero">
              <div className="right_button_slogan_holder">
                <div>
                  <img
                    src={leftbutton}
                    className="leftButton"
                    alt="leftClick"
                  />
                </div>
                <div className="Slogan_section">
                  <div>
                    <h2>Killer Torque. Shocking Speed.</h2>
                    <h2>Half the Noise</h2>
                  </div>
                  <div>
                    <h3>When you've got real work to do...</h3>
                    <b>GRAB HOLD OF AN AIRCAT.</b>
                  </div>
                  <div className="Buttons_Section">
                    <div>
                      <div>
                        <button>OUR PRODUCT</button>
                      </div>
                      <div>
                        <button>CONTACT US</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_Section_Hero">
              <div>
                <img src={HeroImg} className="HeroImg" alt="HeroImg" />
              </div>
              <div>
                <img src={rightbutton} alt="rightarrow" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="redline"></div>
    </div>
  );
}

export default Navbar;
