import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import logo from "../assets/logo-white.png"
import logo_primary from "../assets/logo-primary.png"
import "../assets/css/signin.css"

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

const ResetPasswordPage = (props) => {

  const [input, setInput] = useState({
    password: '',
    confirmPassword
  })

  const [inputerror, setInputError] = useState({
    password: '',
    confirmPassword: ''
  })
  const [updated, setUpdated] = useState(false)
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    axios.get(`${config.server}api/users/checkresettoken`, {
      params: {
        resetPasswordToken: props.match.params.token
      }
    }).then(response => {
      if(response.data.message === 'link_ok'){
        setEmail(response.data.email)
        setUpdated(false)
        setIsLoading(false)
        setError(false)
      } else {
        setUpdated(false)
        setIsLoading(false)
        setError(true)
        toast.warning('The Password reset link is invalid or has expired', {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    }).catch(e => console.log(e));
  }, []);

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
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : inputerror.confirmPassword;
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


  const resetPassword = () => {
    if(!error.password && !error.confirmPassword){
      axios.put(`${config.server}api/users/resetPassword`, {
        email: email,
        password: input.password
      })
      .then(response => {
        if(response.data.message === 'password_updated'){
          setUpdated(true)
          setError(false)
          toast.success('Password Successfully Updated!', {
            position: toast.POSITION.TOP_RIGHT
          });
        } else {
          setUpdated(false)
          setError(true)
          toast.warning("Password Update Fail!. Please try again or contacts to support team", {
            position: toast.POSITION.TOP_RIGHT
          });
        }
      })
    } else {
      toast.warning('Please type new password to set', {
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
      resetPassword();
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
              {
                error ? (
                  <h1 className="text-primary mt-2">Problem resetting password. Please send another reset link</h1>
                ) : (
                  <h1 className="text-primary mt-2">Please set new password</h1>
                )
              }
            </div>
            {
              error ?
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
                      onClick={() => handleRoute("/")}
                    >
                      Go Home
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
                      onClick={() => handleRoute("/forget")}
                    >
                      Forgot password?
                    </Button>
                  </div>
                </div>
              )
              :
              (
                updated ?
                (
                  <div>
                    <p>Your Password has been successfully reset, please try signin again.</p>
                    <Button
                      variant="contained"
                      color="signin"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        width: "100%",
                        height: "100%",
                      }}
                      onClick={() => handleRoute("/signin")}
                    >
                      Sign in
                    </Button>
                  </div>):
                (
                  <div>
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
                      {inputerror.password && <p className='pt-1 text-danger'>{inputerror.password}</p>}
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
                      {inputerror.confirmPassword && <p className='pt-1 text-danger'>{inputerror.confirmPassword}</p>}
                    </div>
                    <Button
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
                    </Button>
                  </div>
                )
              )
            }
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ResetPasswordPage;
