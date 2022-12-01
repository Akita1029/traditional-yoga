import React from "react";
import { useState } from "react";

import logo from "../assets/logo-primary.png"

const HeaderBar = () => {
  return(
    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
      <div className="top-banner d-flex flex-row justify-content-between align-items-center">
        A
        {/* <p className="text-light">Welcome to our TRADITIONAL YOGA</p>
        <span className="d-flex flex-row justify-content-center align-items-center">
          <a>Sign In</a> &nbsp | &nbsp <a>Enroll</a>
        </span> */}
      </div>
      <div className="menu-bar d-flex flex-row justify-content-between align-items-center">
          {/* <img className="logo" src={logo}/> */}
        B
      </div>
    </div>
  );
}

export default HeaderBar ;