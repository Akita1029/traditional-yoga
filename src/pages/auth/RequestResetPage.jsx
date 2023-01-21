import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import logo from "../../assets/logo-white.png";
import logo_primary from "../../assets/logo-primary.png";
import "../../assets/css/signin.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { toast } from 'react-toastify';

// Connect redux, action

const theme = createTheme({
  palette: {
    signin: {
      light: "#FF7B26",
      main: "#F96302",
      dark: "#C84F00",
      contrastText: "#fff", //button text white instead of black
    }
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

const RequestResetPage = (props) => {

  const isDesktop = useMediaQuery({ query: "(min-width:992px)" });

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
              <img alt="logo" className="logo logo-white" src={logo}></img>
            </div>
          )}
          <div className="col-md-12 col-lg-6 singin-info-container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="text-center">
              <img
                alt="logo"
                className="logo"
                src={logo_primary}
                style={{ cursor: "pointer" }}
              ></img>
              <h1 className="text-primary mt-2">You can now reset the login credientials, Will you reset it?</h1>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
              <div className="col-md-12 col-lg-6 mt-2">
                <Button
                  variant="contained"
                  color="signin"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    width: "100%",
                    height: "100%",
                  }}
                  onClick={()=> handleRoute('ty/courses/main')}
                >
                  No
                </Button>
              </div>
              <div className="col-md-12 col-lg-6 mt-2">
                <Button
                  variant="contained"
                  color="signin"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    width: "100%",
                    height: "100%",
                  }}
                  onClick={()=> handleRoute('forget')}
                >
                  Yes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};


export default RequestResetPage;
