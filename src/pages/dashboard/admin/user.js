import React, { useState, useEffect } from "react";
import "../../../assets/css/home.css";

import "react-multi-carousel/lib/styles.css";

// Connect redux, action
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getuserdata } from "../../../actions/user";

const AdminUserManagement = (props) => {
  
  return (
    <div
      className={
        !props.expandflag
          ? "dashboard-container expandable"
          : "dashboard-container"
      }
    ></div>
  );
};

export default AdminUserManagement;
