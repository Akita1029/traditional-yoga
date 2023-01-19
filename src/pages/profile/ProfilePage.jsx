import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ProfilePage = (props) => {
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
              <input className="form-control mt-2" id="firstName" />
            </Col>
            <Col xl={6} md={12} className="pt-2">
              <label>Last Name</label>
              <input className="form-control mt-2" id="lastName" />
            </Col>
            <Col xl={12} className="pt-2">
              <label>Last Name</label>
              <input className="form-control mt-2" id="lastName" />
            </Col>
            <Col xl={12} md={12} className="pt-2">
              <label>Phone (Optional)</label>
              <input className="form-control mt-2" id="phone" />
            </Col>
            <Col xl={12} md={12} className="pt-2">
              <label>Country</label>
              <input className="form-control mt-2" id="country" />
            </Col>
          </Row>
          <button className="w-100 border-primary bg-primary rounded px-4 text-light fs-5 py-1 mt-4">SUBMIT</button>
          <div className='mt-4 text-primary'>
            <h5>Password Update</h5>
          </div>
          <Row>
            <Col xl={12} className="pt-2">
              <label>Password</label>
              <input className="form-control mt-2" type="password" id="password" />
            </Col>
            <Col xl={12} className="pt-2">
              <label>Confirm</label>
              <input className="form-control mt-2" type="password" id="confirm" />
            </Col>
          </Row>
          <button className="w-100 border-primary bg-primary rounded px-4 text-light fs-5 py-1 my-4">SUBMIT</button>
        </div>
      </div>
    </>
  )
}

export default ProfilePage