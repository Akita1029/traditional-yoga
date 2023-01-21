import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import logo from "../../assets/logo-white.png"
import logo_primary from "../../assets/logo-primary.png"
import "../../assets/css/signin.css"

import { createTheme, ThemeProvider } from "@mui/material/styles"
import Button from "@mui/material/Button"
import { toast } from 'react-toastify'

import config from "../../config/config"
import axios from "axios";

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

const ForgetPage = (props) => {

  const [input, setInput] = useState({
    email: ''
  })

  const [error, setError] = useState({
    email: ''
  })

  const [showError, setShowError] = useState(false)
  const [message, setMessage] = useState("")

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
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email Address.";
          }
          break;
        default:
          break;
      }

      return stateObj;
    });
  }


  const forgetPassword = () => {
    if(!error.email){
      axios.post(`${config.server}api/users/forgetPassword`, {
        email: input.email
      })
      .then(response => {
        if(response.data.message === "not_registered"){
          setShowError(true)
          setMessage("")
          toast.warning("The email address isn't recognized. Please try again or register for a new acccunt", {
            position: toast.POSITION.TOP_RIGHT
          });
        } else if(response.data === "email_sent"){
          setShowError(false)
          setMessage("email_sent")
          toast.success('Password Reset Email Successfully Sent!', {
            position: toast.POSITION.TOP_RIGHT
          });
        }
      })
      .catch(error => {
        console.log(error.data)
      })
    } else {
      toast.warning('Please Enter email address to receive reset password email', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  const isDesktop = useMediaQuery({ query: "(min-width:992px)" });

  const navigate = useNavigate();
  const handleRoute = (data) => {
    navigate(`/${data}`);
  };

  const handleEnterKeyDown = (event) => {
    if (event.key === "Enter") {
      forgetPassword();
    }
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
            <div className="text-center">
              <img
                alt="logo"
                className="logo"
                src={logo_primary}
                style={{ cursor: "pointer" }}
              ></img>
              <h1 className="text-primary mt-2">Please Input Email address</h1>
            </div>
            <div className="form-group mt-5">
              <label>Email address</label>
              <input
                onKeyDown={handleEnterKeyDown}
                type="email"
                className="form-control mt-2"
                id="email"
                placeholder="Enter email"
                name="email"
                value={input.email}
                onChange={onInputChange}
                onBlur={validateInput}
              />
              {error.email && <p className='pt-1 text-danger'>{error.email}</p>}
            </div>

            <div className="d-flex flex-column mt-5 mb-5">
              {
                !showError && message === "email_sent" ?
                (<Button
                  variant="contained"
                  color="signin"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    width: "100%",
                    height: "100%",
                  }}
                  onClick={() => handleRoute("/")}
                >
                  Go Home
                </Button>) :
                (
                  showError && message == "" ?
                  (
                    <div className="row">
                      <div className="col-md-12 col-lg-6">
                        <Button
                          variant="contained"
                          color="signin"
                          style={{
                            textDecoration: "none",
                            color: "white",
                            width: "100%",
                            height: "100%",
                          }}
                          onClick={() => forgetPassword()}
                        >
                          Submit
                        </Button>
                      </div>
                      <div className="col-md-12 col-lg-6">
                        <Button
                        variant="contained"
                        color="signin"
                        style={{
                          textDecoration: "none",
                          color: "white",
                          width: "100%",
                          height: "100%",
                        }}
                        onClick={() => handleRoute("/signup")}
                      >
                        Sign Up
                      </Button>
                      </div>
                    </div>
                  ) : (
                  <Button
                    variant="contained"
                    color="signin"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      width: "100%",
                      height: "100%",
                    }}
                    onClick={() => forgetPassword()}
                  >
                    Submit
                  </Button>
                )
                )
              }
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ForgetPage;
