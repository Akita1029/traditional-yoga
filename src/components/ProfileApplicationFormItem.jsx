import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProfileApplicationFrom = (props, form) => {
  const updateAppForm = () => {

  }

  return (
    <>
      <div className='p-3'>
        <div className='rounded w-50 border-primary-clr mb-4' style={{ height: 180, background: 'grey', margin: 'auto' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div className='position-absolute' style={{ bottom: 10, right: 15 }}>
              <button className="border-primary bg-primary rounded px-3 text-light py-1 mx-1"><i class="bi bi-cloud-upload"></i></button>
              <button className="border-primary bg-danger rounded px-3 text-light py-1"><i class="bi bi-trash"></i></button>
            </div>
          </div>
        </div>
        <div className='mb-3 text-primary'>
          <span>Personal Details</span>
        </div>
        <Row>
          <Col xl={6} md={12}>
            <label>First Name</label>
            <input
              className="form-control mt-2"
              id="firstName"
              value = {form.first_name} />
          </Col>
          <Col xl={6} md={12}>
            <label>Last Name</label>
            <input
              className="form-control mt-2"
              id="lastName"
              value = {form.last_name} />
          </Col>
          <Col xl={6} md={12}>
            <label>Nick Name</label>
            <input
              className="form-control mt-2"
              id="lastName"
              value = {form.nick_name} />
          </Col>
          <Col xl={6} md={12}>
            <label>Date of Birth</label>
            <input
              className="form-control mt-2"
              id="birthDate"
              value = {form.birthday} />
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col xl={12}>
            <label>Are you interested in Traditional Yoga’s RYIT Certification?</label>
            <input className="form-control mt-2" id="interest" />
          </Col>
          <Col xl={6} md={12}>
            <label>Gender</label>
            <input className="form-control mt-2" id="gender" />
          </Col>
          <Col xl={6} md={12}>
            <label>Whatsapp Phone Number</label>
            <input
              className="form-control mt-2"
              id="whatsapp"
              value = {form.whatsapp_phonenumber} />
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col xl={12}>
            <label>Email Address</label>
            <input
              className="form-control mt-2"
              id="email"
              value = {form.email} />
          </Col>
          <Col xl={12}>
            <label>Profession / Occupation</label>
            <input
              className="form-control mt-2"
              id="occupation"
              value = {form.profession} />
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col xl={12} md={12}>
            <label>Spoken Language</label>
            <input
              className="form-control mt-2"
              id="language"
              value = {form.language} />
          </Col>
          <Col xl={12} md={12}>
            <label>Other Education Details</label>
            <input
              className="form-control mt-2"
              id="education"
              value = {form.education_detail} />
          </Col>
        </Row>
        <div className='my-3 text-primary'>
          <span>Address</span>
        </div>
        <Row>
          <Col xl={6} md={12}>
            <label>Country</label>
            <input
              className="form-control mt-2"
              id="country" />
          </Col>
          <Col xl={6} md={12}>
            <label>Street Address</label>
            <input
              className="form-control mt-2"
              id="streetAddress"
              value = {form.street_address} />
          </Col>
          <Col xl={6} md={12}>
            <label>Address Line2</label>
            <input
              className="form-control mt-2"
              id="addressLine2"
              value = {form.address_line_2} />
          </Col>
          <Col xl={6} md={12}>
            <label>State</label>
            <input
              className="form-control mt-2"
              id="state" />
          </Col>
        </Row>
        <Row className='mt-3'>
          {/* <Col xl={6} md={12}>
            <label>Country</label>
            <input className="form-control mt-2" id="country" />
          </Col>
          <Col xl={6} md={12}>
            <label>State / Province / Region</label>
            <input className="form-control mt-2" id="state" />
          </Col> */}
          <Col xl={6} md={12}>
            <label>city</label>
            <input
              className="form-control mt-2"
              id="city" />
          </Col>
          <Col xl={6} md={12}>
            <label>Zip Code / Postal Code</label>
            <input
              className="form-control mt-2"
              id="postalCode"
              value = {form.zip_code} />
          </Col>
        </Row>
        <div className='my-3 text-primary'>
          <span>Additional Family contact Details</span>
        </div>
        <Row>
          <Col xl={12} md={12}>
            <label>Relationship to Family Member</label>
            <input
              className="form-control mt-2"
              id="relationship"
              value = {form.relation} />
          </Col>
          <Col xl={12} md={12}>
            <label>Family Member’s Contact Phone Number</label>
            <input
              className="form-control mt-2"
              id="memberContactNumber"
              value = {form.phone_number} />
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col xl={12} md={12}>
            <label className='text-primary'>How Did you Hear about Us?</label>
            <input
              className="form-control mt-2"
              id="hearFrom"
              value = {form.hear_about_us} />
          </Col>
          <Col xl={12} md={12}>
            <label className='text-primary'>Course Outline Text and Acknowledgement</label>
            <input
              className="form-control mt-2"
              id="courseOutline"
              value = {form.course_outline} />
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col md={12}>
            <label className='text-primary'>What Yoga Traditions did you practice in the past (If any) ? Please explain in detail</label>
            <textarea
              rows={4}
              className="form-control mt-2"
              id="everPractice"
              value = {form.past_yoga_experience} />
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col xl={12} md={12}>
            <label className='text-primary'>Course Ethos Text and Acknowledgement*</label>
            <input
              className="form-control mt-2"
              id="ethosText"
              value = {form.course_ethos} />
          </Col>
          <Col xl={12} md={12}>
            <label className='text-primary'>Communication and Daily Classes Acknowledgement*</label>
            <input
              className="form-control mt-2"
              id="communication"
              />
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col md={12}>
            <label className='text-primary'>Course Discipline and Joining Agreement and Acknowledgement*</label>
            <input
              className="form-control mt-2"
              id="courseDiscipline"
              value = {form.course_discipline} />
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col xl={12} md={12}>
            <label className='text-primary'>About Vedic Nutraceuticals Acknowledgement*</label>
            <input
              className="form-control mt-2"
              id="vedic"
              value = {form.vedic_nutraceutical} />
          </Col>
          <Col xl={12} md={12}>
            <label className='text-primary'>Code of Discipline Acknowledgment*</label>
            <input
              className="form-control mt-2"
              id="disciplineCode"
              value = {form.discipline_acknowledgement} />
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col xl={12} md={12}>
            <label className='text-primary'>Contact Details</label>
            <input
              className="form-control mt-2"
              id="contactDetail"
              value = {form.contact_detail} />
          </Col>
          <Col xl={12} md={12}>
            <label className='text-primary'>&nbsp;</label>
            <button
              className="w-100 border-primary bg-primary rounded px-4 text-light fs-5 py-2 mt-2"
              onClick={() => updateAppForm()} >
                SUBMIT
            </button>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ProfileApplicationFrom;