import React, { useRef, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import logo from "../assets/logo-white.png";
import logo_primary from "../assets/logo-primary.png";
import "../assets/css/signin.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// Connect redux, action
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/auth";

const theme = createTheme({
  palette: {
    signin: {
      light: "#FF7B26",
      main: "#F96302",
      dark: "#C84F00",
      contrastText: "#fff", //button text white instead of black
    },
    google: {
      light: "#F6513D",
      main: "#F63C25",
      dark: "#D7331E",
      contrastText: "#fff", //button text white instead of black
    },
    twitter: {
      light: "#2FA9F4",
      main: "#1DA1F2",
      dark: "#1B86C8",
      contrastText: "#fff", //button text white instead of black
    },
    facebook: {
      light: "#3085F3",
      main: "#1877F2",
      dark: "#1A66C8",
      contrastText: "#fff", //button text white instead of black
    },
    apple: {
      light: "#292D34",
      main: "#15171B",
      dark: "#0A0A0B",
      contrastText: "#fff", //button text white instead of black
    },
  },
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontSize: 20,
      textTransform: "none",
    },
  },
});

const SignUpPage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirmPassword] = useState("");
  
  const register = () => {
    const regUserData = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    };
    props.registerUser(regUserData);
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktop = useMediaQuery({ query: "(min-width:992px)" });
  const isTable = useMediaQuery({
    query: "(max-width: 992px)",
  });

  const isTiny = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const navigate = useNavigate();
  const handleRoute = (data) => {
    navigate(`/${data}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="w-100 h-100">
        <div className="row">
          {isDesktop && (
            <div className="col-6 left-bar">
              <img className="logo logo-white" src={logo}></img>
            </div>
          )}
          <div className="col-md-12 col-lg-6 singin-info-container">
            <div className="text-center">
              <img
                className="logo"
                onClick={() => handleRoute("")}
                src={logo_primary}
                style={{ cursor: "pointer" }}
              ></img>
              <h1 className="text-primary mt-2">Create Account</h1>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-5">
                <div className="form-group mt-5">
                  <label>First Name</label>
                  <input
                    className="form-control mt-2"
                    id="firstName"
                    placeholder="Enter First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {props.errors.logfirstname && (
                    <p className="pt-1 text-danger">{props.errors.logfirstname}</p>
                  )}
                </div>
              </div>
              <div className="col-md-12 col-lg-1" />
              <div className="col-md-12 col-lg-5">
                <div className="form-group mt-5">
                  <label>Last Name</label>
                  <input
                    className="form-control mt-2"
                    id="lastName"
                    placeholder="Enter Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {props.errors.loglastname && (
                    <p className="pt-1 text-danger">{props.errors.loglastname}</p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="form-group mt-5">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-2"
                id="email"
                placeholder="Enter email"
                onChange={(email) => setEmail(email.target.value)}
              />
              {props.errors.logemail && (
                <p className="pt-1 text-danger">{props.errors.logemail}</p>
              )}
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-2"
                id="password"
                placeholder="Enter password"
                onChange={(password) => setPassword(password.target.value)}
              />
              {props.errors.logpassword && (
                <p className="pt-1 text-danger">{props.errors.logpassword}</p>
              )}
            </div>

            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control mt-2"
                id="password"
                placeholder="Enter Confirm password"
                onChange={(password) => setConfirmPassword(password.target.value)}
              />
              {props.errors.logpassword && (
                <p className="pt-1 text-danger">{props.errors.logpassword}</p>
              )}
            </div>           

            <div className="d-flex flex-column mt-5 mb-5">
              <Button
                variant="contained"
                color="signin"
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "100%",
                  height: "100%",
                }}
                onClick={() => register()}
              >
                SIGN UP                
              </Button>
              <p className="text-center mt-4">or Sign Up with</p>
              <Grid container columnSpacing={5} rowSpacing={2}>
                <Grid item xs={12} sm={6}>
                  <Button
                    color="google"
                    fullWidth
                    variant="contained"
                    startIcon={<GoogleIcon />}
                  >
                    Google
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    color="facebook"
                    fullWidth
                    variant="contained"
                    startIcon={<FacebookIcon />}
                  >
                    Facebook
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    color="twitter"
                    fullWidth
                    variant="contained"
                    startIcon={<TwitterIcon />}
                  >
                    Twitter
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    color="apple"
                    fullWidth
                    variant="contained"
                    startIcon={<AppleIcon />}
                  >
                    Apple
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

SignUpPage.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(SignUpPage);
