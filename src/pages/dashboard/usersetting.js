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
            >
              <a href="#accountdetail"
                onClick={() => {
                  setSelectflag("1");
                }}>Account Details</a>
            </div>
            <div
              className={
                selectflag === "2"
                  ? "select-position-active"
                  : "select-position-passive"
              }
            >
              <a href="#academicprofile"
                onClick={() => {
                  setSelectflag("2");
                }}>Academic Profile</a>
            </div>
            <div
              className={
                selectflag === "3"
                  ? "select-position-active"
                  : "select-position-passive"
              }
            >
              <a href="#jobprofile"
                onClick={() => {
                  setSelectflag("3");
                }}>Job Profile</a>
            </div>
            <div
              className={
                selectflag === "4"
                  ? "select-position-active"
                  : "select-position-passive"
              }
            >
              <a href="#socialprofile"
                onClick={() => {
                  setSelectflag("4");
                }}>Social Profile</a>
            </div>
            <div
              className={
                selectflag === "5"
                  ? "select-position-active"
                  : "select-position-passive"
              }
            >
              <a href="#changeemail"
                onClick={() => {
                  setSelectflag("5");
                }}>Change Email</a>
            </div>
            <div
              className={
                selectflag === "6"
                  ? "select-position-active"
                  : "select-position-passive"
              }
            >
              <a href="#updatephonenumber"
                onClick={() => {
                  setSelectflag("6");
                }}>Update Phone Number</a>
            </div>
            <div
              className={
                selectflag === "7"
                  ? "select-position-active"
                  : "select-position-passive"
              }
            >
              <a href="#changepassword"
                onClick={() => {
                  setSelectflag("7");
                }}>Change Password</a>
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
            >
              <a href="#notifications"
                onClick={() => {
                  setSelectflag("8");
                }}>Notifications</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
