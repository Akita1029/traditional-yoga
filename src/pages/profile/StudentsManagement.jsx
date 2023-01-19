import React from 'react'
import { Row, Col } from 'react-bootstrap'

const StudentManagementPage = (props) => {
  return (
    <>
      <div>
        <Row>
          <Col lg={3} md={6} className="mt-2">
            <label>Email</label>
            <input className="form-control mt-2" id="email" />
          </Col>
          <Col lg={3} md={6} className="mt-2">
            <label>First Name</label>
            <input className="form-control mt-2" id="firstName" />
          </Col>
          <Col lg={3} md={6} className="mt-2">
            <label>LastName</label>
            <input className="form-control mt-2" id="lastName" />
          </Col>
          <Col lg={3} md={6} className="mt-2">
            <label>Country</label>
            <input className="form-control mt-2" id="country" />
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={6} className="mt-2">
            <label>Start Date</label>
            <input className="form-control mt-2" id="access" />
          </Col>
          <Col lg={3} md={6} className="mt-2">
            <label>Gender</label>
            <input className="form-control mt-2" id="gender" />
          </Col>
          <Col lg={3} md={6} className="mt-2">
            <label>City</label>
            <input className="form-control mt-2" id="email" />
          </Col>
          <Col lg={3} md={6} className="mt-2">
            <label>Yoga Asprint's Access</label>
            <input className="form-control mt-2" id="email" />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default StudentManagementPage