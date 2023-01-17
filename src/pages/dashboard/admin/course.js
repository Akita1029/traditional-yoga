import React from "react";
import "../../../assets/css/home.css";

const AdminCourseManagement = (props) => {
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

export default AdminCourseManagement;
