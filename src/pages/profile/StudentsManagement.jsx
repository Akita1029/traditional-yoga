import React, { useState } from 'react'
import { Row, Col, Table, Form } from 'react-bootstrap'
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css'

const StudentManagementPage = (props) => {
  const [pageS, setPageS] = useState(10)
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
      <div className='border-primary-clr rounded px-4 pb-3 pt-1'>
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
            <label>YA Access</label>
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
                    <div className="py-2 text-center text-white" style={{ background: '#6db100', cursor: 'pointer' }}>
                      <i class="bi bi-list-task"></i>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
          <div className='d-flex justify-content-between'>
            <div className='d-flex'>
              <div className='pt-1'>
                Show
              </div>
              <div className='px-1'>
                <Form.Select value={pageS} size='sm' onChange={e => setPageS(e.target.value)}>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                  <option value={50}>50</option>
                </Form.Select>
              </div>
              <div className='pt-1'>
                entries
              </div>
            </div>
            <div>
              <Pagination total={250} pageSize={pageS} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentManagementPage