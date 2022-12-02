import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Drawer from "react-modern-drawer";

import logo from '../assets/logo-white.png';
import video from '../assets/ad_video.mp4';
import '../assets/css/landing.css';
import 'react-modern-drawer/dist/index.css';

export default function LandingPage(props) {

  const [expanded, setExpanded] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isDesktop = useMediaQuery({query : '(min-width:900px)'})
  const isTable = useMediaQuery({
    query: '(max-width: 900px)'
  });

  const toggleDrawer = () => {
    setDrawerOpened(!drawerOpened);
  };

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

  React.useEffect(() => {

  }, [isTabletOrMobile]);

  const navigate = useNavigate();
  const handleRoute = (data) =>{
    navigate(`/${data}`);
  }

  return (
    <div className="w-100">
      <div className={`w-100 menu-bar d-flex flex-row justify-content-between align-items-center px-5 px-sm-5 px-md-7 ${expanded ? "expanded-header" : ""}`}>
        <img className="logo" src={logo}></img>
        <div className="menu-list text-light d-flex justify-content-center align-items-center">
          {isDesktopOrLaptop && (
            <>
              <li onClick={()=>handleRoute('site/about')}>About Us</li>
              <li>Courses</li>
              <li><a href="https://vedicnutraceuticalsusa.com/" className="text-light text-decoration-none active:text-light active:text-decoration-none">Shop</a></li>
              <li>Donations</li>
            </>
          )}
          <li className="signin-btn">Sign In</li>
          <li className="border border-2 rounded-circle border-light d-flex justify-content-center align-items-center" style={{
            width:46,
            height:46,
          }} onClick={toggleDrawer}>
            <i className="bi bi-list"></i>
          </li>
        </div>
      </div>
      <div className="">
        {isTable && (
          <div className="row m-0 p-0">
            <div className="m-0 p-0 bg-primary col">
              <div className="d-flex flex-column min-vh-100">
                <div className="flex-grow-1 px-4 px-sm-4 px-md-6 pb-4" style={{paddingTop: 120}}>
                  <p className="text-light">Don't stop till you drop!</p>
                  <h1 className="text-light fw-bold" style={{fontSize: 52, letterSpacing: 3}}>
                    In order to learn
                    <br/>
                    we must unlearn
                    <br/>
                    and learn
                  </h1>
                  <div className="text-light mt-4" style={{height:'100px', width:'300px'}}>
                    Learn the most ancient tools of yoga for holistic healing by Asana, Paranyama, Mudra, Bhandana, Dharana, Dhynana and Yoga Kaya Chikitsa.
                  </div>
                </div>
                <div className="left-bottom border border-bottom-0 border-start-0 border-end-0 border-light py-5 px-6 d-flex flex-row justify-content-between align-items-center" style={{cursor:'pointer'}}>
                  <span className="d-none d-md-block d-lg-block d-xl-block d-xxl-block" style={{fontSize:50}}>Get Started</span>
                  <span className="d-block d-md-none" style={{fontSize:36}}>Get Started</span>
                  <span className="arrow-icon border-2 rounded-circle d-flex justify-content-center align-items-center">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col m-0 p-0 d-flex bg-dark flex-column justify-content-center align-items-center landing-right">
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
                className="mt-0 mt-sm-0 vh-sm-100"
              />
            </div>
          </div>
        )}
        {isDesktop && (
          <div className="row m-0 p-0">
          <div className="m-0 p-0 bg-primary landing-left">
            <div className="d-flex flex-column min-vh-100">
              <div className="flex-grow-1 px-4 px-sm-4 px-md-6 pb-4" style={{paddingTop: 120}}>
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
                <div className="text-light mt-4" style={{height:'100px', width:'300px'}}>
                  Learn the most ancient tools of yoga for holistic healing by Asana, Paranyama, Mudra, Bhandana, Dharana, Dhynana and Yoga Kaya Chikitsa.
                </div>
              </div>
              <div className="left-bottom border border-bottom-0 border-start-0 border-end-0 border-light py-5 px-6 d-flex flex-row justify-content-between align-items-center" style={{cursor:'pointer'}}>
                <span className="d-none d-md-block d-lg-block d-xl-block d-xxl-block" style={{fontSize:50}}>Get Started</span>
                <span className="d-block d-md-none" style={{fontSize:36}}>Get Started</span>
                <span className="arrow-icon border-2 rounded-circle d-flex justify-content-center align-items-center">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col m-0 p-0 d-flex bg-dark flex-1 flex-column justify-content-center align-items-center landing-right">
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
              className="mt-0 mt-sm-0 vh-sm-100"
            />
          </div>
        </div>
        )}
        
      </div>

      <Drawer
        open={drawerOpened}
        onClose={toggleDrawer}
        direction="right"
        className="p-4"
        style={{width:"400px"}}
      >
        <div className="vh-100">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <span className="text-black">Need Help?</span>
            <div className="right-drawer d-flex flex-row justify-content-between">
              <li className="signin-btn me-3">Sign In</li>
              <li className="border border-2 rounded-circle border-gray text-black d-flex justify-content-center align-items-center" style={{
                width:46,
                height:46,
              }} onClick={toggleDrawer}><i className="bi bi-x-lg"></i>
              </li>
            </div>
          </div>
          <li className="mt-5 fw-bold fs-1 menu-list-li">About Us</li>
          <li className="mt-3 fw-bold fs-1 menu-list-li">Courses</li>
          <li className="mt-3 fw-bold fs-1 menu-list-li">Shop</li>
          <li className="mt-3 fw-bold fs-1 menu-list-li">Donations</li>
          <div className="mt-5 d-flex flex-row justify-content-start" style={{bottom:20, position:'absolute'}}>
              <a className="pe-2">Terms of Service</a>
              <a className="pe-2">Privacy Policy</a>
              <a className="pe-2">Cookie Settings</a>
          </div>

        </div>
      </Drawer>
    </div>
  );
}