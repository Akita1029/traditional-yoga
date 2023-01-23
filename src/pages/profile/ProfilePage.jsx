import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Row, Col } from 'react-bootstrap'
import { toast } from 'react-toastify'
import config from "../../config/config"
import axios from "axios"
import Select from '@mui/material/Select'
import { Country, City }  from 'country-state-city'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'

const CountrySelect = styled(Select)({
  '& fieldset': {
    borderRadius: 10
  }
})

const ProfilePage = (props) => {
  const navigate = useNavigate()
  const [selectedCountry, setSelectedCountry] = useState()
  const countries = Country.getAllCountries()
  const [countryCode, setCountryCode] = useState()
  const [email, setEmail] = useState("")
  const [nickname, setNickName] = useState("")
  const [whatsapp, setWhatsApp] = useState("")

  const [input, setInput] = useState({
    firstname: '',
    lastname: '',
    nickname: '',
    password: '',
    confirmpassword: ''
  });

  const [error, setError] = useState({
    firstname: '',
    lastname: '',
    nickname: '',
    password: '',
    confirmpassword: ''
  })

  const onInputChange = e => {
    const { name, value } = e.target
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e)
  }

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" }

      switch (name) {
        case "firstname":
          if (!value) {
            stateObj[name] = "Please enter FirstName.";
          }
          break;
        case "lastname":
          if (!value) {
            stateObj[name] = "Please enter LastName."
          }
          break;
        case "nickname":
          if (!value) {
            stateObj[name] = "Please enter Email Address."
          }
          break;
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password."
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match."
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword
          }
          break;

        case "confirmpassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match."
          }
          break;

        default:
          break;
      }

      return stateObj;
    })
  }


  const setCountryDetails = (e) =>{
    setCountryCode(e.target.value)
    console.log(countryCode)
    let country = Country.getCountryByCode(countryCode)
    console.log(country)
    setSelectedCountry(country !== undefined ? country.name : "")
  }

  useEffect(() => {
    if (localStorage.userToken) {
      let user = JSON.parse(localStorage.userToken).user
      setEmail(user.email)
      setInput(prev => ({
        ...prev,
        firstname: user.first_name,
        lastname: user.last_name,
        nickname: user.nick_name
      }))
    } else {
      navigate("/")
      toast.warning("You can't access this page", {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }, [])

  const updateProfile = () => {
    if( error.firstname === "" && error.lastname === ""){
      axios.put(`${config.server}api/users/updateProfile`, {
        email: email,
        firstname: input.firstname,
        lastname: input.lastname,
        nickname: nickname,
        whatsapp: whatsapp,
        country: selectedCountry
      })
      .then(response => {
        if(response.status === 200){
          toast.success('Personal Information Successfully Updated!', {
            position: toast.POSITION.TOP_RIGHT
          })
        } else {
          toast.warning("Profile Update Fail!. Please try again or contacts to support team", {
            position: toast.POSITION.TOP_RIGHT
          })
        }
      })
    } else {
      toast.warning('Please type correct informations to update', {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }

  const resetPassword = () => {
    if( error.password === "" && error.confirmPassword === ""){
      axios.put(`${config.server}api/users/resetPassword`, {
        email: email,
        password: input.password
      })
      .then(response => {
        if(response.data.message === 'password_updated'){
          toast.success('Password Successfully Updated!', {
            position: toast.POSITION.TOP_RIGHT
          })
        } else {
          toast.warning("Password Update Fail!. Please try again or contacts to support team", {
            position: toast.POSITION.TOP_RIGHT
          })
        }
      })
    } else {
      toast.warning('Please type new password to set', {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }

  return (
    <>
      <div className='border-primary-clr'>
        <div className='bg-primary text-light py-2 px-3'>
          Edit
        </div>
        <div className='px-4'>
          <div className='mt-2 text-primary'>
          <h5>Personal Information</h5>
          </div>
          <Row>
            <Col xl={6} md={12} className="pt-2">
              <label>First Name</label>
              <input
                className="form-control mt-2"
                id="firstName"
                placeholder="Enter First Name"
                name="firstname"
                value={input.firstname}
                onChange={onInputChange}
                onBlur={validateInput}
              />
                {error.firstname && <p className='pt-1 text-danger'>{error.firstname}</p>}
            </Col>
            <Col xl={6} md={12} className="pt-2">
              <label>Last Name</label>
              <input
                className="form-control mt-2"
                id="lastName"
                placeholder="Enter Last Name"
                name="lastname"
                value={input.lastname}
                onChange={onInputChange}
                onBlur={validateInput}
              />
                {error.lastname && <p className='pt-1 text-danger'>{error.lastname}</p>}
            </Col>
            <Col xl={12} className="pt-2">
              <label>Nick Name</label>
              <input
                className="form-control mt-2"
                id="nickname"
                placeholder="Enter Nick Name"
                value={nickname}
                onChange={(e) => setNickName(e.target.value)}
              />
            </Col>
            <Col xl={12} md={12} className="pt-2">
              <label>Phone (Optional)</label>
              <input
                className="form-control mt-2"
                id="phone"
                placeholder="Enter your phone number"
                name={whatsapp}
                onChange={(e) => setWhatsApp(e.target.value)}
              />
            </Col>
            <Col xl={12} md={12} className="pt-2">
              <label>Country</label>
              <CountrySelect
                className="form-control mt-2"
                id="country"
                placeholder="Choose your country"
                onChange={setCountryDetails}
                size="small"
              >
                {countries.map((value, key) => {
                  return (
                    <MenuItem key={value.isoCode} value={value.isoCode}>{value.name}</MenuItem>
                  );
                })}
              </CountrySelect>
            </Col>
          </Row>
          <button
            className="w-100 border-primary bg-primary rounded px-4 text-light fs-5 py-1 mt-4"
            onClick={() => updateProfile()}
          >
            SUBMIT
          </button>
          <div className='mt-4 text-primary'>
            <h5>Password Update</h5>
          </div>
          <Row>
            <Col xl={12} className="pt-2">
              <label>Password</label>
              <input
                className="form-control mt-2"
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={input.password}
                onChange={onInputChange}
                onBlur={validateInput}
              />
              {error.password && <p className='pt-1 text-danger'>{error.password}</p>}
            </Col>
            <Col xl={12} className="pt-2">
              <label>Confirm Password</label>
              <input
                className="form-control mt-2"
                type="password"
                id="confirm"
                name="confirmpassword"
                placeholder="Enter password"
                value={input.confirmpassword}
                onChange={onInputChange}
                onBlur={validateInput}
              />
              {error.confirmpassword && <p className='pt-1 text-danger'>{error.confirmpassword}</p>}
            </Col>
          </Row>
          <button
            className="w-100 border-primary bg-primary rounded px-4 text-light fs-5 py-1 my-4"
            onClick={() => resetPassword()}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  )
}

export default ProfilePage