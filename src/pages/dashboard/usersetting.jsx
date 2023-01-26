import React, { useEffect, useState } from "react"
import "../../assets/css/usersetting.css"
import config from "../../config/config"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { MenuItem, TextField } from '@mui/material'
import { Country, State, City }  from 'country-state-city'

const UserSetting = (props) => {
  const [selectflag, setSelectflag] = useState("1")
  const [AuthUser, setAuthUser] = useState({})
  const [selectedCountry, setSelectedCountry] = useState()
  const [selectedState, setSelectedState] = useState()
  const [selectedCity, setSelectedCity] = useState()
  const countries = Country.getAllCountries()
  const [states, setStates] = useState()
  const [countryDetails, setcountryDetails] = useState()
  const [cities, setCities] = useState()
  const [countryCode, setCountryCode] = useState()
  const [stateCode, setStateCode] = useState()

  const setCountryDetails = (e) =>{
    setCountryCode(e.target.value)
    setSelectedCountry(Country.getCountryByCode(countryCode).name)
  }

  const stateList = State.getStatesOfCountry(countryCode)
  const cityList = City.getCitiesOfState(countryCode, stateCode)

  const setStateDetails = (e) =>{
    setStateCode(e.target.value)
    setSelectedState(State.getStateByCodeAndCountry(stateCode, countryCode).name)
  }

  const navigate = useNavigate()

  const [nickName, setNickName] = useState("")
  const [ryit_cert, setRYITCert] = useState("no")
  const [gender, setGender] = useState("female")
  const [address2, setAddress2] = useState("")
  const [hearfrom, setHearFrom] = useState("")

  const [input, setInput] = useState({
    email: '',
    firstName: '',
    lastName: '',
    whatsapp: '',
    language: '',
    occupation: '',
    education: '',
    address1: '',
    zipcode: '',
    relationship: '',
    familycontacts: '',
    pastpractice: '',
    courseoutline: '',
    courseethostext: '',
    coursediscipline: '',
    communication: '',
    vedic: '',
    codediscipline: '',
    contactdetails: '',
    birthDate: new Date()
  })

  const [error, setError] = useState({
    email: '',
    firstName: '',
    lastName: '',
    whatsapp: '',
    language: '',
    occupation: '',
    education: '',
    address1: '',
    zipcode: '',
    relationship: '',
    familycontacts: '',
    pastpractice: '',
    courseoutline: '',
    courseethostext: '',
    coursediscipline: '',
    communication: '',
    vedic: '',
    codediscipline: '',
    contactdetails: '',
    birthDate: ''
  })

  const updatePhoneNumber = () => {
    axios.put(`${config.server}api/users/updatePhoneNumber`, {
      email: AuthUser.email,
      whatsapp: input.whatsapp
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
  }

  const onInputChange = e => {
    const { name, value } = e.target
    setInput(prev => ({
      ...prev,
      [name]: value
    }))
    validateInput(e)
  }

  const validateInput = e => {
    let { name, value } = e.target
    setError(prev => {
      const stateObj = { ...prev, [name]: "" }

      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "Please enter email address."
          }
          break
        case "firstName":
          if (!value) {
            stateObj[name] = "Please enter first name."
          }
          break
        case "lastName":
          if (!value) {
            stateObj[name] = "Please enter last name."
          }
          break
        case "whatsapp":
          if (!value) {
            stateObj[name] = "Please enter whatsapp phone number."
          }
          break
        case "language":
          if (!value) {
            stateObj[name] = "Please enter spoken languages."
          }
          break
        case "occupation":
          if (!value) {
            stateObj[name] = "Please enter profession / occupation details."
          }
          break
        case "education":
          if (!value) {
            stateObj[name] = "Please enter other education details"
          }
          break
        case "address1":
          if (!value) {
            stateObj[name] = "Please enter street address."
          }
          break
        case "zipcode":
          if (!value) {
            stateObj[name] = "Please enter zip code / postal code."
          }
          break
        case "relationship":
          if (!value) {
            stateObj[name] = "Please enter relationship to family member."
          }
          break
        case "familycontacts":
          if (!value) {
            stateObj[name] = "Please enter family member's contact phone number"
          }
          break
        case "pastpractice":
          if (!value) {
            stateObj[name] = "Please enter what yoga traditions you did practice in the past."
          }
          break
        case "courseoutline":
          if (!value) {
            stateObj[name] = "Please enter course outline text and acknowledgement."
          }
          break
        case "courseethostext":
          if (!value) {
            stateObj[name] = "Please enter course ethos text and acknowledgement."
          }
          break
        case "coursediscipline":
          if (!value) {
            stateObj[name] = "Please enter course discipline and joining agreement and acknowledgement."
          }
          break
        case "communication":
          if (!value) {
            stateObj[name] = "Please enter communication and daily classes acknowledgement."
          }
          break
        case "vedic":
          if (!value) {
            stateObj[name] = "Please enter about vedic nutraceuticals acknowledgement."
          }
          break
        case "codediscipline":
          if (!value) {
            stateObj[name] = "Please enter code of discipline acknowledgment."
          }
          break
        case "contactdetails":
          if (!value) {
            stateObj[name] = "Please enter contact details."
          }
          break
        case "birthDate":
          if (!value) {
            stateObj[name] = "Please enter birth date."
          }
          break
        default:
          break
      }

      return stateObj
    })
  }

  useEffect(() => {
    if (localStorage.userToken) {
      let user = JSON.parse(localStorage.userToken).user
      setAuthUser(user)
      setInput(prev => ({
        ...prev,
        email: user.email,
        firstname: user.first_name,
        lastname: user.last_name,
        nickname: user.nick_name,
        birthDate: user.birthday,
        whatsapp: user.whatsapp_phonenumber,
        password: user.password,
        language: user.language,
        occupation: user.profession,
        education: user.education_detail
      }))
      setNickName(user.nick_name)
      setGender(user.gender)
      setRYITCert(user.ryit_cert)
    } else {
      navigate("/")
      toast.warning("You can't access this page", {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }, [])

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
                <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="firstName"
                    name="firstName"
                    value={input.firstName}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.firstName && <p className='pt-1 text-danger'>{error.firstName}</p>}
              </div>
              <div className="col-md-6">
                <label>Last Name</label>
                <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="lastName"
                    name="lastName"
                    value={input.lastName}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.lastName && <p className='pt-1 text-danger'>{error.lastName}</p>}
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
              <div className="col-md-12">
                <label>First Name</label>
                <TextField
                  className="form-control mt-2"
                  variant="outlined"
                  size="small"
                  id="whatsapp"
                  name="whatsapp"
                  value={input.whatsapp}
                  onChange={onInputChange}
                  onBlur={validateInput}
                />
                {error.whatsapp && <p className='pt-1 text-danger'>{error.whatsapp}</p>}
              </div>
            </div>
            <button
              className="w-100 border-primary bg-primary rounded px-4 text-light py-1 mt-4"
              onClick={() => updatePhoneNumber()}
            >UPDATE</button>
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
                  setSelectflag("1")
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
                  setSelectflag("2")
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
                  setSelectflag("3")
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
                  setSelectflag("4")
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
                  setSelectflag("5")
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
                  setSelectflag("6")
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
                  setSelectflag("7")
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
                  setSelectflag("8")
                }}>Notifications</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSetting
