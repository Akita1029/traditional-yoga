import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Row, Col, Table, Form } from 'react-bootstrap'
import { MenuItem, TextField } from '@mui/material'
import { Country, State, City }  from 'country-state-city'

import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css'
import { toast } from 'react-toastify'
import config from "../../config/config"
import axios from "axios"

const StudentManagementPage = (props) => {
  const [pageS, setPageS] = useState(10)
  const [authUser, setAuthUser] = useState({})
  const navigate = useNavigate()
  const [studentData, setStudentData] = useState([])

  useEffect(() => {
    if (localStorage.userToken) {
      setAuthUser((JSON.parse(localStorage.userToken)).user)
    } else {
      navigate("/")
      toast.warning("You can't access this page", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    axios.post(`${config.server}api/students/getAllStudents`, {
      email: authUser.email
    })
    .then(response => {
      if(response.status === 200){
        console.log(response.data)
        setStudentData(response.data)
      }
    })
    .catch(error => {
      console.log(error.data)
    })
  }, [])

  const showDetail = () => {

  }

  const old_studentData = [
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
            <input
              className="form-control mt-2"
              id="email" />
          </Col>
          <Col lg={3} md={6} className="mt-2">
            <label>First Name</label>
            <input
              className="form-control mt-2"
              id="firstName" />
          </Col>
          <Col lg={3} md={6} className="mt-2">
            <label>LastName</label>
            <input
              className="form-control mt-2"
              id="lastName" />
          </Col>
          <Col lg={3} md={6} className="mt-2">
            <label>Country</label>
            <input
              className="form-control mt-2"
              id="country" />
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={6} className="mt-2">
            <label>Start Date</label>
            <input
              className="form-control mt-2"
              id="access" />
          </Col>
          <Col lg={3} md={6} className="mt-2">
            <label>Gender</label>
            <input
              className="form-control mt-2"
              id="gender" />
          </Col>
          <Col lg={3} md={6} className="mt-2">
            <label>City</label>
            <input
              className="form-control mt-2"
              id="email" />
          </Col>
          <Col lg={3} md={6} className="mt-2">
            <label>YA Access</label>
            <input
              className="form-control mt-2"
              id="email" />
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
                  <td>{t.first_name +" " +  t.last_name}</td>
                  <td>{t.street_address}</td>
                  <td>{t.whatsapp_phonenumber}</td>
                  <td>{t.created_at}</td>
                  <td >
                    <span style={{ color: '#6db100' }}>
                      {t.status == 0 ? "PENDING" : t.status == 1 ? "PENDING" : t.status == 2 ? "APPROVED" : t.status == 3 ? "REMOVED" : t.status == 4 ? "WITHDRAWN" : t.status = 5 ? "BLACKLIST" : ""}
                    </span>
                  </td>
                  <td>
                    <div
                      className="py-2 text-center text-white"
                      style={{ background: '#6db100', cursor: 'pointer' }}
                      onClick={() => showDetail(t.user_id)}>
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