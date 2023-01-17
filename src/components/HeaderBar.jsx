import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import logo from "../assets/logo-primary.png";
import "../assets/css/header.css"

const HeaderBar = () => {

  const navigate = useNavigate();
  const [navIndex, setNavIndex] = useState(1);

  const handleRoute = (data, index) =>{
    setNavIndex(index);
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
            <span className="text-primary" onClick={()=>handleRoute('signin')}>Sign In &nbsp;</span>|
            <span className="text-primary"> &nbsp; Enroll</span>
          </div>
        </div>
        <div className="main-menu-bar d-flex flex-row justify-content-between align-items-center shadow-sm ps-8 pe-8" >
            <img className="logo" style={{cursor:'pointer'}} src={logo} onClick={()=>handleRoute('')}/>
            <ul className="nav">
              <li className="nav-item">
                <a className={`nav-link ${navIndex == 0? ' active' : ''}`} onClick={()=>handleRoute('', 0)}>HOME</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${navIndex == 1? ' active' : ''}`} onClick={()=>handleRoute('ty/about', 1)}>ABOUT US</a>
              </li>
              <li className="nav-item dropdown">
                <a className="dropbtn nav-link">COURSES <i className="bi bi-chevron-down"></i></a>
                <div className="dropdown-content">
                  {/* <a onClick={()=>handleRoute('ty/courses/main#OnlineCourses', 2)}><div style={{ width: 120 }}>Online Courses</div></a> */}
                  <a href="/ty/courses/main#OnlineCourses"><div style={{ width: 120 }}>Online Courses</div></a>
                  <a href="/ty/courses/main#Retreats"><div style={{ width: 120 }}>Retreats</div></a>
                  <a href="/ty/courses/main#InPersonTrainings"><div style={{ width: 120 }}>In Person Trainings</div></a>
                  <a href="/ty/courses/main#PastInTrainings"><div style={{ width: 120 }}>Past In-Person Trainings</div></a>
                </div>
                {/* <a className={`nav-link ${navIndex == 2? ' active' : ''}`} onClick={()=>handleRoute('ty/courses/main', 2)}>COURSES  <i className="bi bi-chevron-down"></i></a> */}
              </li>
              <li className="nav-item">
                <a className={`nav-link ${navIndex == 3? ' active' : ''}`} onClick={()=>handleRoute('ty/library', 3)}>LIBRARY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://vedicnutraceuticalsusa.com/" target="_blank">SHOP</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${navIndex == 5? ' active' : ''}`} onClick={()=>handleRoute('ty/contactus', 5)}>CONTACT US</a>
              </li>
              <button className="btn btn-primary text-light rounded-3 ms-2" onClick={()=>handleRoute('donations/payment', 6)}>DONATIONS</button>
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