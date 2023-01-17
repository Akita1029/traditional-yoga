import React, { useRef, useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/auth";
const ApplicationFrom = (props) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickName, setNickName] = useState("");
  const [interest, setInterest] = useState(0);
  const [birthDate, setBirthDate] = useState(new Date());
  const [whatsapp, setWhatsApp] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [occupation, setOccupation] = useState("");
  const [education, setEducation] = useState("");
  const [country, setCountry] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirmPassword] = useState("");
  
  const register = () => {
    if(password == undefined || password == "" || password !== confirm) return;
    const regData = {
      firstName: firstName,
      lastName: lastName,
      nickName: nickName,
      interest: interest,
      birthDate: birthDate,
      whatsapp: whatsapp,
      gender: gender,
      language: language,
      occupation: occupation,
      education: education,
      country: country,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zipcode: zipcode,
      password: password
    };
    props.registerUser(regData);
    props.handleClose();
  };
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
                  <input className="form-control mt-2" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Col>
                <Col xl={3} md={12}>
                  <label>Last Name</label>
                  <input className="form-control mt-2" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Col>
                <Col xl={3} md={12}>
                  <label>Nick Name</label>
                  <input className="form-control mt-2" id="nickName" value={nickName} onChange={(e) => setNickName(e.target.value)}/>
                </Col>
                <Col xl={3} md={12}>
                  <label>Date of Birth</label>
                  <input className="form-control mt-2" id="birthDate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col xl={6} md={12}>
                  <label>Are you interested in Traditional Yoga’s RYIT Certification?</label>
                  <input className="form-control mt-2" id="interest" value={interest} onChange={(e) => setInterest(e.target.value)}/>
                </Col>
                <Col xl={3} md={12}>
                  <label>Gender</label>
                  <input className="form-control mt-2" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}/>
                </Col>
                <Col xl={3} md={12}>
                  <label>Whatsapp Phone Number</label>
                  <input className="form-control mt-2" id="whatsapp" value={whatsapp} onChange={(e) => setWhatsApp(e.target.value)}/>
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col xl={4} md={12}>
                  <label>Email Address</label>
                  <input className="form-control mt-2" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Col>
                <Col xl={4} md={12}>
                  <label>Password</label>
                  <input type="password" className="form-control mt-2" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Col>
                <Col xl={4} md={12}>
                  <label>Confirm</label>
                  <input type="password" className="form-control mt-2" id="confirm" value={confirm} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </Col>
                
              </Row>
              <Row className='mt-3'>
                <Col xl={4} md={12}>
                  <label>Profession / Occupation</label>
                  <input className="form-control mt-2" id="occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)}/>
                </Col>
                <Col xl={4} md={12}>
                  <label>Spoken Language</label>
                  <input className="form-control mt-2" id="language" value={language} onChange={(e) => setLanguage(e.target.value)}/>
                </Col>
                <Col xl={4} md={12}>
                  <label>Other Education Details</label>
                  <input className="form-control mt-2" id="education" value={education} onChange={(e) => setEducation(e.target.value)}/>
                </Col>
              </Row>
              <div className='my-3 text-primary'>
                <span>Address</span>
              </div>
              <Row>
                <Col xl={4} md={12}>
                  <label>Country</label>
                  <input className="form-control mt-2" id="country" value={country} onChange={(e) => setCountry(e.target.value)}/>
                </Col>
                <Col xl={4} md={12}>
                  <label>Street Address</label>
                  <input className="form-control mt-2" id="streetAddress" value={address1} onChange={(e) => setAddress1(e.target.value)}/>
                </Col>
                <Col xl={4} md={12}>
                  <label>Address Line2</label>
                  <input className="form-control mt-2" id="addressLine2" value={address2} onChange={(e) => setAddress2(e.target.value)}/>
                </Col>                
              </Row>
              <Row className='mt-3'>
                <Col xl={4} md={12}>
                  <label>State / Province / Region</label>
                  <input className="form-control mt-2" id="state" value={state} onChange={(e) => setState(e.target.value)}/>
                </Col>
                <Col xl={4} md={12}>
                  <label>city</label>
                  <input className="form-control mt-2" id="city" value={city} onChange={(e) => setCity(e.target.value)}/>
                </Col>
                <Col xl={4} md={12}>
                  <label>Zip Code / Postal Code</label>
                  <input className="form-control mt-2" id="postalCode" value={zipcode} onChange={(e) => setZipCode(e.target.value)}/>
                </Col>
              </Row>
              <div className='my-3 text-primary'>
                <span>Additional Family contact Details</span>
              </div>
              <Row>
                <Col xl={6} md={12}>
                  <label>Relationship to Family Member</label>
                  <input className="form-control mt-2" id="relationship" />
                </Col>
                <Col xl={6} md={12}>
                  <label>Family Member’s Contact Phone Number</label>
                  <input className="form-control mt-2" id="memberContactNumber" />
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col xl={6} md={12}>
                  <label className='text-primary'>How Did you Hear about Us?</label>
                  <input className="form-control mt-2" id="hearFrom" />
                </Col>
                <Col xl={6} md={12}>
                  <label className='text-primary'>Course Outline Text and Acknowledgement</label>
                  <input className="form-control mt-2" id="courseOutline" />
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col md={12}>
                  <label className='text-primary'>What Yoga Traditions did you practice in the past (If any) ? Please explain in detail</label>
                  <textarea rows={4} className="form-control mt-2" id="everPractice" />
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col xl={6} md={12}>
                  <label className='text-primary'>Course Ethos Text and Acknowledgement*</label>
                  <input className="form-control mt-2" id="ethosText" />
                </Col>
                <Col xl={6} md={12}>
                  <label className='text-primary'>Communication and Daily Classes Acknowledgement*</label>
                  <input className="form-control mt-2" id="communication" />
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col md={12}>
                  <label className='text-primary'>Course Discipline and Joining Agreement and Acknowledgement*</label>
                  <input className="form-control mt-2" id="courseDiscipline" />
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col xl={6} md={12}>
                  <label className='text-primary'>About Vedic Nutraceuticals Acknowledgement*</label>
                  <input className="form-control mt-2" id="vedic" />
                </Col>
                <Col xl={6} md={12}>
                  <label className='text-primary'>Code of Discipline Acknowledgment*</label>
                  <input className="form-control mt-2" id="disciplineCode" />
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col xl={6} md={12}>
                  <label className='text-primary'>Contact Details</label>
                  <input className="form-control mt-2" id="contactDetail" />
                </Col>
                <Col xl={6} md={12}>
                  <label className='text-primary'>&nbsp;</label>
                  <button className="w-100 border-primary bg-primary rounded px-4 text-light fs-5 py-2 mt-2"
                  onClick={() => register()}>SUBMIT</button>
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
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(ApplicationFrom);

