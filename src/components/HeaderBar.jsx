import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo-primary.png";
import "../assets/css/header.css"


const HeaderBar = () => {

  const navigate = useNavigate();
  const handleRoute = (data) =>{
    navigate(`/${data}`);
  }

  return(
    <div className="w-100">
      <div className="top-banner d-flex flex-row justify-content-between align-items-center mt-0 pe-6">
        <div className="top-leader text-light d-flex flex-row justify-content-center align-items-center w-60 bg-primary h-100 ps-6 pe-8">
          <span><i className="bi bi-record2 fs-6"></i>Welcome to our TRADITIONAL YOGA</span>
        </div>
        <div className="top-login d-flex flex-row justify-content-center align-items-center">
          <span className="text-primary">Sign In &nbsp;</span>|
          <span className="text-primary"> &nbsp; Enroll</span>
        </div>
      </div>
      <div className="main-menu-bar d-flex flex-row justify-content-between align-items-center shadow-sm">
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
    </div>
  );
}

export default HeaderBar ;