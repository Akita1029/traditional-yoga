import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/landing.css';

import logo from '../assets/logo-white.png';
import video from '../assets/ad_video.mp4';

export default function LandingPage(props) {

  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    window.onscroll = (event) => {
      if (window.scrollY > 0) {
        setExpanded(true);
      }
      else {
        setExpanded(false);
      }
    };

    return () => {
      window.onscroll = undefined;
    };
  }, []);

  const navigate = useNavigate();
  const handleRoute = (data) =>{
    navigate(`/${data}`);
  }

  return (
    <div className="w-100">
      <div className={`w-100 menu-bar d-flex flex-row justify-content-between align-items-center ${expanded ? "expanded-header" : ""}`}>
        <img className="logo" src={logo}></img>
        <div className="menu-list text-light d-flex justify-content-center align-items-center">
          <li onClick={()=>handleRoute('about')}>About Us</li>
          <li>Courses</li>
          <li><a href="https://vedicnutraceuticalsusa.com/" className="text-light text-decoration-none active:text-light active:text-decoration-none">Shop</a></li>
          <li>Donations</li>
          <li className="signin-btn">Sign In</li>
          <li className="border border-2 rounded-circle border-light d-flex justify-content-center align-items-center" style={{
            width:46,
            height:46,
          }}>
            <i className="bi bi-list"></i>
          </li>
        </div>
      </div>
      <div className="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
        <div className="row m-0 p-0">
          <div className="col m-0 p-0 bg-primary">
            <div className="d-flex flex-column min-vh-100">
              <div className="flex-grow-1 px-6 pb-4" style={{paddingTop: 120}}>
                <p className="text-light">Don't stop till you drop!</p>
                <h1 className="text-light fw-bold" style={{fontSize: 52, letterSpacing: 3}}>
                  In order to learn
                  <br/>
                  we must unlearn
                  <br/>
                  and learn
                </h1>
                {/* <h1 className="text-light fw-bold" style={{fontSize: 52, letterSpacing: 3}}>we must unlearn</h1>
                <h1 className="text-light fw-bold" style={{fontSize: 52, letterSpacing: 3}}>and learn</h1> */}
                <p className="text-light mt-4">
                  Learn the most ancient tools of yoga for holistic healing by Asana, Paranyama, Mudra, Bhandana, Dharana, Dhynana and Yoga Kaya Chikitsa.
                </p>
              </div>
              <div className="left-bottom border border-bottom-0 border-start-0 border-end-0 border-light py-5 px-6 d-flex flex-row justify-content-between align-items-center" style={{cursor:'pointer'}}>
                <span style={{fontSize:50}}>Get Started</span>
                <span className="arrow-icon border-2 rounded-circle d-flex justify-content-center align-items-center">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col m-0 p-0 d-flex bg-dark flex-1 flex-column justify-content-center align-items-center">
            <video
              src={video}
              itemType="video/mp4"
              autoPlay
              loop={true}
              style={{
                marginTop: '-5%',
                width:'380px',
                minHeight: 'fit-content'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}