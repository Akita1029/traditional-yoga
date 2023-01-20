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
import { toast } from 'react-toastify';
// Connect redux, action
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/auth";

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
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
 
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
 
  const onInputChange = e => {
    const { name, value } = e.target
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
 
  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
 
      switch (name) {
        case "firstName":
          if (!value) {
            stateObj[name] = "Please enter FirstName.";
          }
          break;
        case "lastName":
          if (!value) {
            stateObj[name] = "Please enter LastName.";
          }
          break;
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email Address.";
          }
          break;
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }


  const handleEnterKeyDown = (event) => {
    if (event.key === "Enter") {
      register();
    }
  };

  const register = () => {
    
    if(!error.firstName && !error.lastName && !error.password && !error.email && error.confirmPassword){
      const regUserData = {
        firstname: input.firstName,
        lastname: input.lastName,
        email: input.email,
        password: input.password,
      };
      props.registerUser(regUserData);
    } else {
      toast.warning('Please Enter all required fileds.', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
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
                alt="logo"
                className="logo"
                onClick={() => handleRoute("")}
                src={logo_primary}
                style={{ cursor: "pointer" }}
              ></img>
              <h1 className="text-primary mt-2">Create Account</h1>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-6 mt-2">
                <div className="form-group mt-2">
                  <label>First Name</label>
                  <input
                    className="form-control"
                    id="firstName"
                    onKeyDown={handleEnterKeyDown}
                    placeholder="Enter First Name"
                    name="firstName"
                    value={input.firstName}
                    onChange={onInputChange()}
                    onBlur={validateInput}
                  />
                  {error.firstName && <p className='pt-1 text-danger'>{error.firstName}</p>}                  
                </div>
              </div>
              <div className="col-md-12 col-lg-6 mt-2">
                <div className="form-group mt-2">
                  <label>Last Name</label>
                  <input
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    onKeyDown={handleEnterKeyDown}
                    placeholder="Enter Last Name"
                    value={input.lastName}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.lastName && <p className='pt-1 text-danger'>{error.lastName}</p>}
                </div>
              </div>
            </div>
            
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-2"
                id="email"
                name="email"
                onKeyDown={handleEnterKeyDown}
                placeholder="Enter email address"
                value={input.email}
                onChange={onInputChange}
                onBlur={validateInput}
              />
              {error.email && <p className='pt-1 text-danger'>{error.email}</p>}
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-2"
                id="password"
                name="password"
                onKeyDown={handleEnterKeyDown}
                placeholder="Enter password"
                value={input.password}
                onChange={onInputChange}
                onBlur={validateInput}
              />
              {error.password && <p className='pt-1 text-danger'>{error.password}</p>}
            </div>

            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control mt-2"
                onKeyDown={handleEnterKeyDown}
                id="password"
                name="confirmPassword"
                placeholder="Enter Confirm password"
                value={input.confirmPassword}
                onChange={onInputChange}
                onBlur={validateInput}
              />
              {error.confirmPassword && <p className='pt-1 text-danger'>{error.confirmPassword}</p>}
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

export default connect(mapStateToProps, { registerUser })(SignUpPage);
