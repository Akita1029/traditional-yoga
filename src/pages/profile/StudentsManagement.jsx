import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'

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
        <div className='mt-4'>
          <Table striped bordered hover >
            <thead>
              <tr className='bg-primary text-white'>
                <th style={{ width: 10 }}>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default StudentManagementPage