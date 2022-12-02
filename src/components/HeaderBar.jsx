import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import logo from "../assets/logo-primary.png";
import "../assets/css/header.css"

const HeaderBar = () => {

  const navigate = useNavigate();
  const handleRoute = (data) =>{
    navigate(`/${data}`);
  }
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1170px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1170px)' });

  React.useEffect(() => {

  }, [isTabletOrMobile]);

  return(
    <div className="w-100">
      {isDesktopOrLaptop && (
        <>
        <div className="top-banner d-flex flex-row justify-content-between align-items-center mt-0 pe-8">
          <div className="top-leader text-light d-flex flex-row justify-content-center align-items-center w-60 bg-primary h-100 ps-8 pe-8">
            <span><i className="bi bi-record2 fs-6"></i>Welcome to our TRADITIONAL YOGA</span>
          </div>
          <div className="top-login d-flex flex-row justify-content-center align-items-center">
            <span className="text-primary">Sign In &nbsp;</span>|
            <span className="text-primary"> &nbsp; Enroll</span>
          </div>
        </div>
        <div className="main-menu-bar d-flex flex-row justify-content-between align-items-center shadow-sm ps-8 pe-8">
            <img className="logo" src={logo}/>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={()=>handleRoute('')}>HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>handleRoute('about')}>ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>handleRoute('courses')}>COURSES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>handleRoute('library')}>LIBRARY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>handleRoute('shop')}>SHOP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>handleRoute('contactus')}>CONTACT US</a>
              </li>
              <li className="nav-item bg-primary rounded-3">
                <a className="nav-link text-light" href="#">DONATIONS</a>
              </li>
            </ul>
        </div>
        </>
      )}

      {isTabletOrMobile && (
        <>
        <div className="top-banner d-flex flex-row justify-content-between align-items-center mt-0 pe-1 pe-sm-2 pe-xs-4">
          <div className="top-leader-res text-light d-flex flex-row justify-content-center align-items-center w-30 bg-primary h-100 px-5">
            <span><i className="bi bi-record2 fs-6"></i>Welcome to our TRADITIONAL YOGA</span>
          </div>
        </div>
        <div className="main-menu-bar d-flex flex-row justify-content-between align-items-center shadow-sm px-5">
            <img className="logo" src={logo}/>
            
            <ul className="nav">
              <li className="nav-item bg-primary rounded-5 d-flex justify-content-center">
                <a className=" fs-6 nav-link text-light">Sign In</a>
              </li>
              <li className="border cursor-pointer ms-3 border-2 rounded-circle border-primary d-flex justify-content-center align-items-center" style={{
                width:46,
                height:46,
              }}>
                <i className="bi bi-list-ul fs-5 text-primary"></i>
              </li>
            </ul>
        </div>
        </>
      )}
    </div>
  );
}

export default HeaderBar ;