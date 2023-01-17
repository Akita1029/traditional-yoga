import React, { useState } from "react";
import "../../assets/css/usersetting.css";

const UserSetting = (props) => {
  const [selectflag, setSelectflag] = useState("1");

  return (
    <div
      className={
        !props.expandflag
          ? "dashboard-container expandable"
          : "dashboard-container"
      }
    >
      <div className="row">
        <div className="col-md-9">
          <div id="accountdetail">
            <h4 style={{ color: "#fe6731" }}>Account Details</h4>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-6">
                <p>First Name</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-6">
                <p>Last Name</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <p>Date of Birth</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-6">
                <p>Gender</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3">
                <p>Country</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>State</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>Address</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>Zip Code</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <button className="usersettingbutton">UPDATE</button>
          </div>
          <div style={{ marginTop: "20px" }} id="academicprofile">
            <h4 style={{ color: "#fe6731" }}>Academic Profile</h4>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-6">
                <p>First Name</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-6">
                <p>Last Name</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <p>Date of Birth</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-6">
                <p>Gender</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3">
                <p>Country</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>State</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>Address</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>Zip Code</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <button className="usersettingbutton">UPDATE</button>
          </div>
          <div style={{ marginTop: "20px" }} id="jobprofile">
            <h4 style={{ color: "#fe6731" }}>Job Profile</h4>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-6">
                <p>First Name</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-6">
                <p>Last Name</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <p>Date of Birth</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-6">
                <p>Gender</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3">
                <p>Country</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>State</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>Address</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>Zip Code</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <button className="usersettingbutton">UPDATE</button>
          </div>
          <div style={{ marginTop: "20px" }} id="socialprofile">
            <h4 style={{ color: "#fe6731" }}>Social Profile</h4>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-6">
                <p>First Name</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-6">
                <p>Last Name</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <p>Date of Birth</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-6">
                <p>Gender</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3">
                <p>Country</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>State</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>Address</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>Zip Code</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <button className="usersettingbutton">UPDATE</button>
          </div>
          <div style={{ marginTop: "20px" }} id="changeemail">
            <h4 style={{ color: "#fe6731" }}>Change Email</h4>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-6">
                <p>First Name</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-6">
                <p>Last Name</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <p>Date of Birth</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-6">
                <p>Gender</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3">
                <p>Country</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>State</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>Address</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>Zip Code</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <button className="usersettingbutton">UPDATE</button>
          </div>
          <div style={{ marginTop: "20px" }} id="updatephonenumber">
            <h4 style={{ color: "#fe6731" }}>Update Phone Number</h4>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-6">
                <p>First Name</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-6">
                <p>Last Name</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <p>Date of Birth</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-6">
                <p>Gender</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3">
                <p>Country</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>State</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>Address</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>Zip Code</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <button className="usersettingbutton">UPDATE</button>
          </div>
          <div style={{ marginTop: "20px" }} id="changepassword">
            <h4 style={{ color: "#fe6731" }}>Change Password</h4>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-6">
                <p>First Name</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-6">
                <p>Last Name</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <p>Date of Birth</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-6">
                <p>Gender</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3">
                <p>Country</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>State</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>Address</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>Zip Code</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <button className="usersettingbutton">UPDATE</button>
          </div>
          <div style={{ marginTop: "20px" }} id="notifications">
            <h4 style={{ color: "#fe6731" }}>Notifications</h4>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-6">
                <p>First Name</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-6">
                <p>Last Name</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <p>Date of Birth</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-6">
                <p>Gender</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3">
                <p>Country</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>State</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>Address</p>
                <input style={{ width: "100%" }} />
              </div>
              <div className="col-md-3">
                <p>Zip Code</p>
                <input style={{ width: "100%" }} />
              </div>
            </div>
            <button className="usersettingbutton">UPDATE</button>
          </div>
        </div>
        <div className="col-md-3">
          <div style={{ position: "fixed" }}>
            <div
              className={
                selectflag === "1"
                  ? "select-position-active"
                  : "select-position-passive"
              }
              style={{
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
                marginTop: "40px",
              }}
              onClick={() => {
                setSelectflag("1");
              }}
            >
              <a href="#accountdetail">Account Details</a>
            </div>
            <div
              className={
                selectflag === "2"
                  ? "select-position-active"
                  : "select-position-passive"
              }
              onClick={() => {
                setSelectflag("2");
              }}
            >
              <a href="#academicprofile">Academic Profile</a>
            </div>
            <div
              className={
                selectflag === "3"
                  ? "select-position-active"
                  : "select-position-passive"
              }
              onClick={() => {
                setSelectflag("3");
              }}
            >
              <a href="#jobprofile">Job Profile</a>
            </div>
            <div
              className={
                selectflag === "4"
                  ? "select-position-active"
                  : "select-position-passive"
              }
              onClick={() => {
                setSelectflag("4");
              }}
            >
              <a href="#socialprofile">Social Profile</a>
            </div>
            <div
              className={
                selectflag === "5"
                  ? "select-position-active"
                  : "select-position-passive"
              }
              onClick={() => {
                setSelectflag("5");
              }}
            >
              <a href="#changeemail">Change Email</a>
            </div>
            <div
              className={
                selectflag === "6"
                  ? "select-position-active"
                  : "select-position-passive"
              }
              onClick={() => {
                setSelectflag("6");
              }}
            >
              <a href="#updatephonenumber">Update Phone Number</a>
            </div>
            <div
              className={
                selectflag === "7"
                  ? "select-position-active"
                  : "select-position-passive"
              }
              onClick={() => {
                setSelectflag("7");
              }}
            >
              <a href="#changepassword">Change Password</a>
            </div>
            <div
              className={
                selectflag === "8"
                  ? "select-position-active"
                  : "select-position-passive"
              }
              style={{
                borderBottomLeftRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
              onClick={() => {
                setSelectflag("8");
              }}
            >
              <a href="#notifications">Notifications</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
