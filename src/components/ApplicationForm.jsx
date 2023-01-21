import React, { useRef, useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { Country, State, City }  from 'country-state-city';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { takeCourse } from "../actions/course";

const SelectAnswer = styled(Select)({
  '& fieldset': {
    borderRadius: 10
  }
})


const ApplicationFrom = (props) => {

  const [selectedCountry, setSelectedCountry] = useState()
  const [selectedState, setSelectedState] = useState()
  const [selectedCity, setSelectedCity] = useState()
  const countries = Country.getAllCountries()
  const [states, setStates] = useState()
  const [countryDetails, setcountryDetails] = useState()
  const [cities, setCities] = useState()
  const [countryCode, setcountryCode] = useState()
  const [stateCode, setStateCode] = useState()

  const setCountryDetails = (e) =>{
    setcountryCode(e.target.value)
    setSelectedCountry(Country.getCountryByCode(countryCode).name)
  }

  const stateList = State.getStatesOfCountry(countryCode)
  const cityList = City.getCitiesOfState(countryCode, stateCode)

  const setStateDetails = (e) =>{
    setStateCode(e.target.value)
    setSelectedCountry(State.getStateByCodeAndCountry(stateCode, countryCode).name)
  }

  useEffect(() => {

  }, []);

  const take = () => {
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
    };
    props.takeCourse(regData);
    props.handleClose();
  };

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
                  <input
                    className="form-control mt-2"
                    id="firstName"
                    name="email"
                    value={input.firstName}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.firstName && <p className='pt-1 text-danger'>{error.firstName}</p>}
                </Col>
                <Col xl={3} md={12}>
                  <label>Last Name</label>
                  <input
                    className="form-control mt-2"
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
                  <input
                    className="form-control mt-2"
                    id="nickName"
                    value={nickName}
                    onChange={(e) => setNickName(e.target.value)}/>
                </Col>
                <Col xl={3} md={12}>
                  <label>Date of Birth</label>
                  <input
                    className="form-control mt-2"
                    id="birthDate"
                    name="birthDate"
                    value={input.birthDate}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.birthDate && <p className='pt-1 text-danger'>{error.birthDate}</p>}
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col xl={6} md={12}>
                  <label>Are you interested in Traditional Yoga’s RYIT Certification?</label>
                  <SelectAnswer
                    className="form-control mt-2"
                    defaultValue={'yes'}
                    id="ryit_cert"
                    onChange={(e) => setRYITCert(e)}
                    size="small"
                  >
                    <MenuItem value='yes'>Yes</MenuItem>
                    <MenuItem value='no'>No</MenuItem>
                  </SelectAnswer>
                </Col>
                <Col xl={3} md={12}>
                  <label>Gender</label>
                  <SelectAnswer
                    className="form-control mt-2"
                    defaultValue={'female'}
                    id="gender"
                    onChange={(e) => setGender(e)}
                  >
                    <MenuItem value='female'>Female</MenuItem>
                    <MenuItem value='male'>Male</MenuItem>
                  </SelectAnswer>
                </Col>
                <Col xl={3} md={12}>
                  <label>Whatsapp Phone Number</label>
                  <input
                    className="form-control mt-2"
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
                  <input
                    type="email"
                    className="form-control mt-2"
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
                  <input
                    className="form-control mt-2"
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
                  <input
                    className="form-control mt-2"
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
                  <input
                    className="form-control mt-2"
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
                  <SelectAnswer
                    className="form-control mt-2"
                    id="country"
                    placeholder="Choose Country"
                    onChange={setCountryDetails}
                    size="small"
                  >
                    {countries.map((value, key) => {
                      return (
                        <MenuItem key={value.isoCode} value={value.isoCode}>{value.name}</MenuItem>
                      );
                    })}
                  </SelectAnswer>
                </Col>
                <Col xl={4} md={12}>
                  <label>Street Address</label>
                  <input
                    className="form-control mt-2"
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
                  <input
                    className="form-control mt-2"
                    id="addressLine2"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}/>
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col xl={4} md={12}>
                  <label>State / Province / Region</label>
                  <SelectAnswer
                    className="form-control mt-2"
                    id="state"
                    placeholder="Choose State"
                    onChange={setStateDetails}
                    size="small"
                  >
                    {stateList.map((states, key) => {
                      return (
                        <MenuItem key={states.isoCode} value={states.isoCode}>{states.name}</MenuItem>
                      );
                    })}
                  </SelectAnswer>
                </Col>
                <Col xl={4} md={12}>
                  <label>city</label>
                  <SelectAnswer
                    className="form-control mt-2"
                    id="city"
                    placeholder="Choose City"
                    onChange={(e) => setSelectedCity(e.target.value)}
                    size="small"
                  >
                    {cityList.map((city, key) => {
                      return (
                        <MenuItem key={states.isoCode} value={city.name}>{city.name}</MenuItem>
                      );
                    })}
                  </SelectAnswer>
                </Col>
                <Col xl={4} md={12}>
                  <label>Zip Code / Postal Code</label>
                  <input
                    className="form-control mt-2"
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
                  <input
                    className="form-control mt-2"
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
                  <input
                    className="form-control mt-2"
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
                  <SelectAnswer
                    defaultValue={'google'}
                    id="hearfrom"
                    value={hearfrom}
                    onChange={(e) => setHearFrom(e)}
                  >
                    <MenuItem value='google'>Search Engines(like Google)</MenuItem>
                    <MenuItem value='friend'>Friends</MenuItem>
                  </SelectAnswer>
                </Col>
                <Col xl={6} md={12}>
                  <label className='text-primary'>Course Outline Text and Acknowledgement</label>
                  <input
                    className="form-control mt-2"
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
                  <textarea
                    rows={4}
                    className="form-control mt-2"
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
                  <input
                    className="form-control mt-2"
                    id="ethosText"
                    name="ethostext"
                    value={input.courseethostext}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.courseethostext && <p className='pt-1 text-danger'>{error.courseethostext}</p>}
                </Col>
                <Col xl={6} md={12}>
                  <label className='text-primary'>Communication and Daily Classes Acknowledgement*</label>
                  <input
                    className="form-control mt-2"
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
                  <input
                    className="form-control mt-2"
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
                  <input
                    className="form-control mt-2"
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
                  <input
                    className="form-control mt-2"
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
                  <input
                    className="form-control mt-2"
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

ApplicationFrom.propTypes = {
  takeCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  course: state.course,
  errors: state.errors,
});

export default connect(mapStateToProps, { takeCourse })(ApplicationFrom);

