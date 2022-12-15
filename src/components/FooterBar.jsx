import React from "react";

import "../assets/css/footer.css"
import banner from "../assets/images/footer-banner.jpg"

const FooterBar = () => {
  return (
    <>
      <div className="bottom-banner py-5 py-md-5" style={{backgroundImage : `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize:"100%"}}>
        <div className="container">
          <div className="row">
            <div className="d-none d-md-block col-sm-12 col-xs-12 col-md-8 col-lg-8 py-md-3 px-lg-5">
              <h1 className="text-white fw-bold" style={{fontSize:'37px', lineHeight:'50px', letterSpacing: 3}}>All our online teacher training certification courses are free</h1>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4 text-center py-md-5">
              <button className="border-primary bg-primary rounded px-4 text-light fs-5 py-2">Read More</button>
            </div>
          </div>
        </div>

      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 mt-5 pe-3 pe-md-6">
            <h2>About Us</h2>
            <span className="content">
              <span className="fw-bold text-black">Yoga Healing Foundation of America Inc.</span>
              is a registered non-profit (EIN number 47-4872198) run by volunteers
              that delivers programs under the heading of Traditional Yoga.
            </span>
            <div className="contact-code d-flex flex-row justify-content-between mt-5">
              <div className="d-flex flex-row justify-content-start">
                <img src={require("../assets/images/united states.png")}></img>
                <div className="d-flex flex-column justifay-content-start ps-2">
                  <span className="content fs-5">EIN#</span>
                  <span className="content">47-4872198</span>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start">
                <img src={require("../assets/images/united kingdom.png")}></img>
                <div className="d-flex flex-column justifay-content-start ps-2">
                  <span className="content fs-5">CHARITY#</span>
                  <span className="content">1153094</span>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start">
                <img src={require("../assets/images/india.png")}></img>
                <div className="d-flex flex-column justifay-content-start ps-2">
                  <span className="content fs-5">TRUST#</span>
                  <span className="content">91/2010</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 mt-5">
            <h2>About Vedic Nutraceuticals</h2>
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
        <div className="content text-center mt-3 mb-2 fs-6 ">Copyright@2022 <strong className="text-black">TRADITIONAL YOGA</strong>. All Rights Reserved by <strong className="text-black">Yoga Healing Foundation of America Inc.</strong></div>

      </div>
    </>

  );
}

export default FooterBar;