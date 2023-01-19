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
        <div className="col-md-9 col-sm-12">
          <div id="accountdetail">
            <h5 className="text-primary">Account Details</h5>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-6">
                <label>First Name</label>
                <input className="form-control mt-2" id="firstName" />
              </div>
              <div className="col-md-6">
                <label>Last Name</label>
                <input className="form-control mt-2" id="lastName" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <label>Date of Birth</label>
                <input className="form-control mt-2" id="birthdate" />
              </div>
              <div className="col-md-6">
                <label>Gender</label>
                <input className="form-control mt-2" id="gender" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3">
                <label>Country</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>State</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>Address</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>Zip Code</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <button className="w-100 border-primary bg-primary rounded px-4 text-light py-1 mt-4">UPDATE</button>
          </div>
          <div style={{ marginTop: "20px" }} id="academicprofile">
            <h5 className="text-primary">Academic Profile</h5>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-6">
                <label>First Name</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-6">
                <label>Last Name</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <label>Date of Birth</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-6">
                <label>Gender</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3">
                <label>Country</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>State</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>Address</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>Zip Code</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <button className="w-100 border-primary bg-primary rounded px-4 text-light py-1 mt-4">UPDATE</button>
          </div>
          <div style={{ marginTop: "20px" }} id="jobprofile">
            <h5 className="text-primary">Job Profile</h5>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-6">
                <label>First Name</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-6">
                <label>Last Name</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <label>Date of Birth</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-6">
                <label>Gender</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3">
                <label>Country</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>State</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>Address</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>Zip Code</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <button className="w-100 border-primary bg-primary rounded px-4 text-light py-1 mt-4">UPDATE</button>
          </div>
          <div style={{ marginTop: "20px" }} id="socialprofile">
            <h5 className="text-primary">Social Profile</h5>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-6">
                <label>First Name</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-6">
                <label>Last Name</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <label>Date of Birth</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-6">
                <label>Gender</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3">
                <label>Country</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>State</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>Address</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>Zip Code</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <button className="w-100 border-primary bg-primary rounded px-4 text-light py-1 mt-4">UPDATE</button>
          </div>
          <div style={{ marginTop: "20px" }} id="changeemail">
            <h5 className="text-primary">Change Email</h5>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-6">
                <label>First Name</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-6">
                <label>Last Name</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <label>Date of Birth</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-6">
                <label>Gender</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3">
                <label>Country</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>State</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>Address</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>Zip Code</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <button className="w-100 border-primary bg-primary rounded px-4 text-light py-1 mt-4">UPDATE</button>
          </div>
          <div style={{ marginTop: "20px" }} id="updatephonenumber">
            <h5 className="text-primary">Update Phone Number</h5>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-6">
                <label>First Name</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-6">
                <label>Last Name</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <label>Date of Birth</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-6">
                <label>Gender</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3">
                <label>Country</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>State</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>Address</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>Zip Code</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <button className="w-100 border-primary bg-primary rounded px-4 text-light py-1 mt-4">UPDATE</button>
          </div>
          <div style={{ marginTop: "20px" }} id="changepassword">
            <h5 className="text-primary">Change Password</h5>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-6">
                <label>First Name</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-6">
                <label>Last Name</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <label>Date of Birth</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-6">
                <label>Gender</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3">
                <label>Country</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>State</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>Address</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>Zip Code</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <button className="w-100 border-primary bg-primary rounded px-4 text-light py-1 mt-4">UPDATE</button>
          </div>
          <div style={{ marginTop: "20px" }} id="notifications">
            <h5 className="text-primary">Notifications</h5>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-6">
                <label>First Name</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-6">
                <label>Last Name</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <label>Date of Birth</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-6">
                <label>Gender</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-3">
                <label>Country</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>State</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>Address</label>
                <input className="form-control mt-2" />
              </div>
              <div className="col-md-3">
                <label>Zip Code</label>
                <input className="form-control mt-2" />
              </div>
            </div>
            <button className="w-100 border-primary bg-primary rounded px-4 text-light py-1 mt-4">UPDATE</button>
          </div>
        </div>
        <div className="col-md-3 col-sm-12">
          <div>
            <div
              className={
                selectflag === "1"
                  ? "select-position-active"
                  : "select-position-passive"
              }
              style={{
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
                marginTop: "10px",
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
