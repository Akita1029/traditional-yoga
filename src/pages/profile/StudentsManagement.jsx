import React from 'react'
import { Row, Col, Table, Form, Button } from 'react-bootstrap'

const StudentManagementPage = (props) => {
  const studentData = [
    {
      name: 'Lavanya Attaluri',
      address: 'Bridgewater 08807',
      phone: '+18045710993',
      createdAt: 'October 5, 2022',
      status: 'Active'
    },
    {
      name: 'Lavanya Attaluri',
      address: 'Bridgewater 08807',
      phone: '+18045710993',
      createdAt: 'October 5, 2022',
      status: 'Active'
    },
    {
      name: 'Lavanya Attaluri',
      address: 'Bridgewater 08807',
      phone: '+18045710993',
      createdAt: 'October 5, 2022',
      status: 'Active'
    },
    {
      name: 'Lavanya Attaluri',
      address: 'Bridgewater 08807',
      phone: '+18045710993',
      createdAt: 'October 5, 2022',
      status: 'Active'
    },
    {
      name: 'Lavanya Attaluri',
      address: 'Bridgewater 08807',
      phone: '+18045710993',
      createdAt: 'October 5, 2022',
      status: 'Active'
    },
    {
      name: 'Lavanya Attaluri',
      address: 'Bridgewater 08807',
      phone: '+18045710993',
      createdAt: 'October 5, 2022',
      status: 'Active'
    },
    {
      name: 'Lavanya Attaluri',
      address: 'Bridgewater 08807',
      phone: '+18045710993',
      createdAt: 'October 5, 2022',
      status: 'Active'
    },
    {
      name: 'Lavanya Attaluri',
      address: 'Bridgewater 08807',
      phone: '+18045710993',
      createdAt: 'October 5, 2022',
      status: 'Active'
    },
    {
      name: 'Lavanya Attaluri',
      address: 'Bridgewater 08807',
      phone: '+18045710993',
      createdAt: 'October 5, 2022',
      status: 'Active'
    },
    {
      name: 'Lavanya Attaluri',
      address: 'Bridgewater 08807',
      phone: '+18045710993',
      createdAt: 'October 5, 2022',
      status: 'Active'
    },
  ]
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
                <th style={{ width: 10 }}>
                  <Form.Check type='checkbox' />
                </th>
                <th>Name</th>
                <th>Address</th>
                <th style={{ width: 140 }}>Phone</th>
                <th style={{ width: 120 }}>Created Date</th>
                <th style={{ width: 60 }}>Status</th>
                <th style={{ width: 60 }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((t, i) =>
                <tr key={i}>
                  <td>
                    <Form.Check type='checkbox' />
                  </td>
                  <td>{t.name}</td>
                  <td>{t.address}</td>
                  <td>{t.phone}</td>
                  <td>{t.createdAt}</td>
                  <td><span style={{ color: '#6db100' }}>{t.status}</span></td>
                  <td>
                    <Button className='text-white' style={{ background: '#6db100' }}>
                      <i class="bi bi-list-task"></i>
                    </Button>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default StudentManagementPage