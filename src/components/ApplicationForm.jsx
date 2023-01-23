import React, { useRef, useEffect, useState } from "react"
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MenuItem, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { Country, State, City }  from 'country-state-city'
import { toast } from 'react-toastify'
import config from "../config/config"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

const ApplicationForm = (props) => {

  const [selectedCountry, setSelectedCountry] = useState()
  const [selectedState, setSelectedState] = useState()
  const [selectedCity, setSelectedCity] = useState()
  const countries = Country.getAllCountries()
  const [states, setStates] = useState()
  const [countryDetails, setcountryDetails] = useState()
  const [cities, setCities] = useState()
  const [countryCode, setCountryCode] = useState()
  const [stateCode, setStateCode] = useState()
  const navigate = useNavigate();

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

  useEffect(() => {

  }, []);

  const take = () => {
    if(error.firstName == "" && error.lastName == "" && error.birthDate == "" ||
    error.whatsapp == "" && error.language == "" && error.occupation == "" ||
    error.education == "" && error.address1 == "" && error.zipcode == "" ||
    error.email == "" && error.relationship == "" && error.familycontacts == "" ||
    error.pastpractice == "" && error.courseoutline == "" && error.contactdetails == "" ||
    error.coursediscipline == "" && error.courseethostext == "" && error.communication == "")
    {

      const regData = {
        firstName: input.firstName,
        lastName: input.lastName,
        nickName: nickName,
        ryit_cert: ryit_cert,
        birthDate: input.birthDate,
        whatsapp: input.whatsapp,
        gender: gender,
        language: input.language,
        occupation: input.occupation,
        education: input.education,
        country: selectedCountry,
        address1: input.address1,
        address2: address2,
        city: selectedCity,
        state: selectedState,
        zipcode: input.zipcode,
        email: input.email,
        relationship: input.relationship,
        familycontacts: input.familycontacts,
        hearfrom: hearfrom,
        pastpractice: input.pastpractice,
        courseoutline: input.courseoutline,
        courseethostext: input.courseethostext,
        coursediscipline: input.coursediscipline,
        communication: input.communication,
        vedic: input.vedic,
        codediscipline: input.codediscipline,
        contactdetails: input.contactdetails
      }
      axios.post(`${config.server}api/courses/takecourse`, {
        regData
      })
      .then(response => {
        switch(response.status){
          case 200:
              toast.success('You submitted successfully and updated profile.', {
                  position: toast.POSITION.TOP_RIGHT
              })
              break;
          case 201:
              toast.success('You submitted successfully and created profile.', {
                  position: toast.POSITION.TOP_RIGHT
              })
              navigate('/ty/courses/main')
              break;
          case 401:
          case 404:
              toast.warning('You submitted success but Family info is not correct. Please try again', {
                  position: toast.POSITION.TOP_RIGHT
              })
              break;
          case 402:
          case 405:
              toast.warning('You submitted success and Student info is not correct. Please try again', {
                  position: toast.POSITION.TOP_RIGHT
              })
              break;
          case 403:
          case 406:
              toast.warning('Submit fail. Please try again.', {
                  position: toast.POSITION.TOP_RIGHT
              })
              break;
          case 407:
              toast.error('Already registered student', {
                  position: toast.POSITION.TOP_RIGHT
              })
              break;
          default:
              break;
          }
        }
      )
      .catch(error => {
        console.log(error.data)
      })
    } else {
    console.log(error)
      toast.warning('Please type all required fields correctly!', {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    props.handleClose()
  }

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
  });

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
            stateObj[name] = "Please enter email address.";
          }
          break;
        case "firstName":
          if (!value) {
            stateObj[name] = "Please enter first name.";
          }
          break;
        case "lastName":
          if (!value) {
            stateObj[name] = "Please enter last name.";
          }
          break;
        case "whatsapp":
          if (!value) {
            stateObj[name] = "Please enter whatsapp phone number.";
          }
          break;
        case "language":
          if (!value) {
            stateObj[name] = "Please enter spoken languages.";
          }
          break;
        case "occupation":
          if (!value) {
            stateObj[name] = "Please enter profession / occupation details.";
          }
          break;
        case "education":
          if (!value) {
            stateObj[name] = "Please enter other education details";
          }
          break;
        case "address1":
          if (!value) {
            stateObj[name] = "Please enter street address.";
          }
          break;
        case "zipcode":
          if (!value) {
            stateObj[name] = "Please enter zip code / postal code.";
          }
          break;
        case "relationship":
          if (!value) {
            stateObj[name] = "Please enter relationship to family member.";
          }
          break;
        case "familycontacts":
          if (!value) {
            stateObj[name] = "Please enter family member's contact phone number";
          }
          break;
        case "pastpractice":
          if (!value) {
            stateObj[name] = "Please enter what yoga traditions you did practice in the past.";
          }
          break;
        case "courseoutline":
          if (!value) {
            stateObj[name] = "Please enter course outline text and acknowledgement.";
          }
          break;
        case "courseethostext":
          if (!value) {
            stateObj[name] = "Please enter course ethos text and acknowledgement.";
          }
          break;
        case "coursediscipline":
          if (!value) {
            stateObj[name] = "Please enter course discipline and joining agreement and acknowledgement.";
          }
          break;
        case "communication":
          if (!value) {
            stateObj[name] = "Please enter communication and daily classes acknowledgement.";
          }
          break;
        case "vedic":
          if (!value) {
            stateObj[name] = "Please enter about vedic nutraceuticals acknowledgement.";
          }
          break;
        case "codediscipline":
          if (!value) {
            stateObj[name] = "Please enter code of discipline acknowledgment.";
          }
          break;
        case "contactdetails":
          if (!value) {
            stateObj[name] = "Please enter contact details.";
          }
          break;
        case "birthDate":
          if (!value) {
            stateObj[name] = "Please enter birth date."
          }
          break;
        default:
          break;
      }

      return stateObj;
    });
  }
  return (
    <>
      <Modal size='xl' fullscreen='sm-down' dialogClassName="modal-90w" show={props.show} onHide={() => props.handleClose()}>
        <Modal.Body style={{ padding: 0 }}>
          <Container style={{ borderRadius: 0 }}>
            <Row className="bg-primary text-white px-4 py-2 fs-5">
              Application Form
            </Row>
            <div className='p-3'>
              <div className='mb-3 text-primary'>
                <span>Personal Details</span>
              </div>
              <Row>
                <Col xl={3} md={12}>
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
                </Col>
                <Col xl={3} md={12}>
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
                </Col>
                <Col xl={3} md={12}>
                  <label>Nick Name</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="nickName"
                    value={nickName}
                    onChange={(e) => setNickName(e.target.value)}/>
                </Col>
                <Col xl={3} md={12}>
                  <label>Date of Birth</label>
                  <DatePicker
                    value={input.birthDate}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    id="birthDate"
                    name="birthDate"
                    size="small"
                    renderInput={(params) => <TextField {...params} />}
                  />
                  {/* <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="whatsapp"
                    name="birthDate"
                    value={input.birthDate}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  /> */}
                  {error.birthDate && <p className='pt-1 text-danger'>{error.birthDate}</p>}
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col xl={6} md={12}>
                  <label>Are you interested in Traditional Yoga’s RYIT Certification?</label>
                  <TextField
                    className="form-control mt-2"
                    select
                    defaultValue={'yes'}
                    id="ryit_cert"
                    onChange={(e) => setRYITCert(e)}
                    size="small"
                  >
                    <MenuItem value='yes'>Yes</MenuItem>
                    <MenuItem value='no'>No</MenuItem>
                  </TextField>
                </Col>
                <Col xl={3} md={12}>
                  <label>Gender</label>
                  <TextField
                    className="form-control mt-2"
                    select
                    defaultValue={'female'}
                    id="gender"
                    onChange={(e) => setGender(e)}
                    size="small"
                  >
                    <MenuItem value='female'>Female</MenuItem>
                    <MenuItem value='male'>Male</MenuItem>
                  </TextField>
                </Col>
                <Col xl={3} md={12}>
                  <label>Whatsapp Phone Number</label>
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
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col xl={3} md={12}>
                  <label>Email Address</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.email && <p className='pt-1 text-danger'>{error.email}</p>}
                </Col>
                <Col xl={3} md={12}>
                  <label>Spoken Language</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="language"
                    name="language"
                    value={input.language}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.language && <p className='pt-1 text-danger'>{error.language}</p>}
                </Col>
                <Col xl={3} md={12}>
                  <label>Profession / Occupation</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="occupation"
                    name="occupation"
                    value={input.occupation}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.occupation && <p className='pt-1 text-danger'>{error.occupation}</p>}
                </Col>
                <Col xl={3} md={12}>
                  <label>Other Education Details</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="education"
                    name="education"
                    value={input.education}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.education && <p className='pt-1 text-danger'>{error.education}</p>}
                </Col>
              </Row>
              <div className='my-3 text-primary'>
                <span>Address</span>
              </div>
              <Row>
                <Col xl={4} md={12}>
                  <label>Country</label>
                  <TextField
                    className="form-control mt-2"
                    select
                    variant="outlined"
                    id="country"
                    placeholder="Choose Country"
                    onChange={setCountryDetails}
                    size="small"
                  >
                    {countries.map((value, key) => {
                      return (
                        <MenuItem key={value.isoCode} value={value.isoCode}>{value.name}</MenuItem>
                      )
                    })}
                  </TextField>
                </Col>
                <Col xl={4} md={12}>
                  <label>State / Province / Region</label>
                  <TextField
                    className="form-control mt-2"
                    select
                    variant="outlined"
                    id="state"
                    placeholder="Choose State"
                    onChange={setStateDetails}
                    size="small"
                  >
                    {stateList.map((states, key) => {
                      return (
                        <MenuItem key={states.isoCode} value={states.isoCode}>{states.name}</MenuItem>
                      )
                    })}
                  </TextField>
                </Col>
                <Col xl={4} md={12}>
                  <label>city</label>
                  <TextField
                    className="form-control mt-2"
                    select
                    variant="outlined"
                    id="city"
                    placeholder="Choose City"
                    onChange={(e) => setSelectedCity(e.target.value)}
                    size="small"
                  >
                    {cityList.map((city, key) => {
                      return (
                        <MenuItem key={city.isoCode} value={city.name}>{city.name}</MenuItem>
                      )
                    })}
                  </TextField>
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col xl={4} md={12}>
                  <label>Street Address</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="streetAddress"
                    name="address1"
                    value={input.address1}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.address1 && <p className='pt-1 text-danger'>{error.address1}</p>}
                </Col>
                <Col xl={4} md={12}>
                  <label>Address Line2</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="addressLine2"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}/>
                </Col>
                <Col xl={4} md={12}>
                  <label>Zip Code / Postal Code</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="zipcode"
                    name="zipcode"
                    value={input.zipcode}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.zipcode && <p className='pt-1 text-danger'>{error.zipcode}</p>}
                </Col>
              </Row>
              <div className='my-3 text-primary'>
                <span>Additional Family contact Details</span>
              </div>
              <Row>
                <Col xl={6} md={12}>
                  <label>Relationship to Family Member</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="relationship"
                    name="relationship"
                    value={input.relationship}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.relationship && <p className='pt-1 text-danger'>{error.relationship}</p>}
                </Col>
                <Col xl={6} md={12}>
                  <label>Family Member’s Contact Phone Number</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="memberContactNumber"
                    name="familycontacts"
                    value={input.familycontacts}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.familycontacts && <p className='pt-1 text-danger'>{error.familycontacts}</p>}
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col xl={6} md={12}>
                  <label className='text-primary'>How Did you Hear about Us?</label>
                  <TextField
                    className="form-control mt-2"
                    select
                    variant="outlined"
                    defaultValue={'google'}
                    id="hearfrom"
                    value={hearfrom}
                    onChange={(e) => setHearFrom(e.target.value)}
                    size="small"
                  >
                    <MenuItem value='google'>Search Engines(like Google)</MenuItem>
                    <MenuItem value='friend'>Friends</MenuItem>
                  </TextField>
                </Col>
                <Col xl={6} md={12}>
                  <label className='text-primary'>Course Outline Text and Acknowledgement</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="courseOutline"
                    name="courseoutline"
                    value={input.courseoutline}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.courseoutline && <p className='pt-1 text-danger'>{error.courseoutline}</p>}
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col md={12}>
                  <label className='text-primary'>What Yoga Traditions did you practice in the past (If any) ? Please explain in detail</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    multiline
                    rows={4}
                    size="small"
                    id="everPractice"
                    name="pastpractice"
                    value={input.pastpractice}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.pastpractice && <p className='pt-1 text-danger'>{error.pastpractice}</p>}
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col xl={6} md={12}>
                  <label className='text-primary'>Course Ethos Text and Acknowledgement*</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="ethosText"
                    name="courseethostext"
                    value={input.courseethostext}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.courseethostext && <p className='pt-1 text-danger'>{error.courseethostext}</p>}
                </Col>
                <Col xl={6} md={12}>
                  <label className='text-primary'>Communication and Daily Classes Acknowledgement*</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="communication"
                    name="communication"
                    value={input.communication}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.communication && <p className='pt-1 text-danger'>{error.communication}</p>}
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col md={12}>
                  <label className='text-primary'>Course Discipline and Joining Agreement and Acknowledgement*</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="courseDiscipline"
                    name="coursediscipline"
                    value={input.coursediscipline}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.coursediscipline && <p className='pt-1 text-danger'>{error.coursediscipline}</p>}
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col xl={6} md={12}>
                  <label className='text-primary'>About Vedic Nutraceuticals Acknowledgement*</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="vedic"
                    name="vedic"
                    value={input.vedic}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.vedic && <p className='pt-1 text-danger'>{error.vedic}</p>}
                </Col>
                <Col xl={6} md={12}>
                  <label className='text-primary'>Code of Discipline Acknowledgment*</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="disciplineCode"
                    name="codediscipline"
                    value={input.codediscipline}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.codediscipline && <p className='pt-1 text-danger'>{error.codediscipline}</p>}
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col xl={6} md={12}>
                  <label className='text-primary'>Contact Details</label>
                  <TextField
                    className="form-control mt-2"
                    variant="outlined"
                    size="small"
                    id="contactDetail"
                    name="contactdetails"
                    value={input.contactdetails}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.contactdetails && <p className='pt-1 text-danger'>{error.contactdetails}</p>}
                </Col>
                <Col xl={6} md={12}>
                  <label className='text-primary'>&nbsp;</label>
                  <button className="w-100 border-primary bg-primary rounded px-4 text-light fs-5 py-2 mt-2"
                  onClick={() => take()}>SUBMIT</button>
                </Col>
              </Row>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}

// ApplicationFrom.propTypes = {
//   takeCourse: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   course: state.course,
//   errors: state.errors,
// });

// export default connect(mapStateToProps, { takeCourse })(ApplicationFrom);

export default ApplicationForm