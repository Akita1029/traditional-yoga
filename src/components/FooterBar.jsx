import React from "react";

import "../assets/css/footer.css"
import banner from "../assets/images/footer-banner.jpg"

const FooterBar = () => {
  return(
    <>
    <img src={banner} className="w-100" style={{position:"relative"}} />

    <div className="w-100 ps-6 pe-6 pt-8 d-flex flex-column justify-content-center align-items-center">
      
      <div className="content d-flex flex-row justify-content-start">
        <div className="left-side">
          <h2>About Us</h2>
          <span>
            <span className="fw-bold">Yoga Healing Foundation of America Inc.</span> 
            is a registered non-profit (EIN number 47-4872198) run by volunteers 
            that delivers programs under the heading of Traditional Yoga.
          </span>
          <div className="contact-code d-flex flex-row justify-content-center mt-5">
            <div className="d-flex flex-row justify-content-start p-1">
              <img src={require("../assets/images/united states.png")}></img>
              <div className="d-flex flex-column justifay-content-start ps-2">
                <span className="content fs-5">EIN#</span>
                <span className="content">47-4872198</span>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-start p-1">
              <img src={require("../assets/images/united kingdom.png")}></img>
              <div className="d-flex flex-column justifay-content-start ps-2">
                <span className="content fs-5">CHARITY#</span>
                <span className="content">1153094</span>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-start p-1">
              <img src={require("../assets/images/india.png")}></img>
              <div className="d-flex flex-column justifay-content-start ps-2">
                <span className="content fs-5">TRUST#</span>
                <span className="content">91/2010</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side ps-6 pe-3">
        <h2>About edicnutraceuticals</h2>
          <span className="content">Vedic Nutraceuticals provides high quality products for healthy living, 
            informed by the ancient sciences of Yoga and Ayurveda alongside cutting edge 
            contemporary scientific research. Every single input into the body matters. 
            Pramana, standards, as taught by Saint Patanjali are fundamental to Yoga. 
            The standards of ingredient in every product is of the finest and purest. 
            These formulations are what our DNA desperately needs in order to cope with 
            human’s rapidly changing lifestyle and inputs that
            cause a much higher level of stress and demand on the cell.
          </span>
        </div>
      </div>
      <div className="d-flex flex-row mt-5 justify-content-center align-items-center w-100">
        <span className="social-icon-facebook"><i className="bi bi-facebook"></i></span>
        <span className="social-icon-twitter"><i className="bi bi-twitter"></i></span>
        <span className="social-icon-youtube"><i className="bi bi-youtube"></i></span>
        <span className="social-icon-instagram"><i className="bi bi-instagram"></i></span>
      </div>
      <span className="content mt-2 mb-2 fs-6">Copyright@2022 <span className="text-black fw-bold">TRADITIONAL YOGA</span>. All Rights Reserved by <span className="text-black fw-bold">Yoga Healing Foundation of America Inc.</span></span>
    </div>
    </>
    
  );
}

export default FooterBar;