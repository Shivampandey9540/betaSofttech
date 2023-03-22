import React from "react";
import Facebook from "../img/Facebook_red.png";
import Twitter from "../img/Twitter_red.png";
import Youtube from "../img/YouTube_red_hover.png";
import Email from "../img/email (1).png";
import mail from "../img/icons/mail.png";
import location from "../img/icons/placeholder.png";
import phone from "../img/icons/phone-call.png";
import Footerlog1 from "../img/footer-logo1a.png";
import Footerlog2 from "../img/footer-logo2a.png";
import catalog from "../img/catalog.jpg";

import "./css/Footer.css";
function Footer() {
  return (
    <div>
      <footer>
        <div className="Footer_Structure">
          <div className="Footer_upper_Section">
            <div className="GetAircat">
              <h2>Get AIRCAT News!</h2>
            </div>
            <div className="EmailInputSection">
              <div className="EmailHolder">
                <div className="ImageInput">
                  <img src={Email} className="FooterEmail" alt="Email" />
                  <input
                    type="email"
                    className="Email_Footer_input"
                    placeholder="Your Email add.."
                  />
                  <div className="EmailSendButton">
                    <button className="EmailButton">submit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="followLinks">
              <div className="Follow FacebookFooter">
                <img src={Facebook} alt="Facebook" />
              </div>
              <div className="Follow TwitterFooter">
                <img src={Twitter} alt="Twitter" />
              </div>
              <div className="Follow YoutubeFooter">
                <img src={Youtube} alt="Youtube" />
              </div>
            </div>
          </div>

          <div className="Footer_middle_Section">
            <div className="ContactDetailsHolder">
              <div className="Contactinfo">
                <div className="Location lowerfooter">
                  <div className="Footer_middle_images">
                    <img src={location} alt="Location" />
                  </div>
                  <div className="Footer_middle_Details">
                    <div className="HighLight">
                      <b>Universal Air ToolCo,. Ltd</b>
                    </div>
                    <div>
                      <p>
                        Unit 8, Lane End industrial Park, High Wycombe HP14 3BY,
                        United Kingom
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Email lowerfooter">
                  <div className="Footer_middle_images">
                    <img src={mail} alt="Location" />
                  </div>
                  <div className="Footer_middle_Details">
                    <div className="HighLight">
                      <b>Universal Air ToolCo,. Ltd</b>
                    </div>
                    <div>
                      <p>
                        Unit 8, Lane End industrial Park, High Wycombe HP14 3BY,
                        United Kingom
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Call lowerfooter">
                  <div className="Footer_middle_images">
                    <img src={phone} alt="Location" />
                  </div>
                  <div className="Footer_middle_Details">
                    <div className="HighLight">
                      <b>Universal Air ToolCo,. Ltd</b>
                    </div>
                    <div>
                      <p>
                        Unit 8, Lane End industrial Park, High Wycombe HP14 3BY,
                        United Kingom
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Footer_lower_Section">
            <div className="FooterContainer">
              <div className="FooterLogo">
                <div className="AirCat">
                  <img src={Footerlog1} alt="AirCat" />
                </div>

                <div className="NITROCAT">
                  <img src={Footerlog2} alt="NITRO" />
                </div>
              </div>

              <div className="FootermiddleLink">
                <div className="QuickLinks">
                  <div className="FooterLinksHeading">
                    <h2>Quick Links</h2>
                  </div>
                  <div className="FooterLinksoption">
                    <ul>
                      <li lassName="Linksclick">
                        <a href="/"> Home</a>
                      </li>
                      <li lassName="Linksclick">
                        <a href="/">About Us</a>
                      </li>
                      <li lassName="Linksclick">
                        <a href="/">Products</a>
                      </li>
                      <li lassName="Linksclick">
                        <a href="/">Services</a>
                      </li>
                      <li lassName="Linksclick">
                        <a href="/">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="QuickLinks">
                  <div className="FooterLinksHeading">
                    <h2>Quick Links</h2>
                  </div>
                  <div className="FooterLinksoption">
                    <ul>
                      <li className="Linksclick">
                        <a href="/"> Home</a>
                      </li>
                      <li lassName="Linksclick">
                        <a href="/">About Us</a>
                      </li>
                      <li lassName="Linksclick">
                        <a href="/">Products</a>
                      </li>
                      <li lassName="Linksclick">
                        <a href="/">Services</a>
                      </li>
                      <li lassName="Linksclick">
                        <a href="/">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footerendCatalog">
                <div className=" CatalogSection ">
                  <div className="CatalogHeading">
                    <h2>2022 Catalog</h2>
                  </div>
                  <div className="DownloadCatalog">
                    <p>
                      Download our 2022 catalog to view our latest product
                      offerings
                    </p>
                  </div>
                  <div className="CatalogDownloadImage">
                    <div className="Catalog">
                      <img src={catalog} alt="catalog" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
