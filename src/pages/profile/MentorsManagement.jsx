import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Row, Col, Button, Table, Form } from 'react-bootstrap'
import Pagination from 'rc-pagination';

const MentorsManagement = (props) => {
  const [pageS, setPageS] = useState(10)
  const studentData = [
    {
      createdAt: 'October 5, 2022',
      legalName: 'Lavanya Attaluri',
      chiefMentor: 'DR. Kumar',
      phone: '123123123',
      country: 'US',
      city: 'Irvine',
      gender: 'Female'
    },
    {
      createdAt: 'October 5, 2022',
      legalName: 'Lavanya Attaluri',
      chiefMentor: 'DR. Kumar',
      phone: '123123123',
      country: 'US',
      city: 'Irvine',
      gender: 'Female'
    },
    {
      createdAt: 'October 5, 2022',
      legalName: 'Lavanya Attaluri',
      chiefMentor: 'DR. Kumar',
      phone: '123123123',
      country: 'US',
      city: 'Irvine',
      gender: 'Female'
    },
    {
      createdAt: 'October 5, 2022',
      legalName: 'Lavanya Attaluri',
      chiefMentor: 'DR. Kumar',
      phone: '123123123',
      country: 'US',
      city: 'Irvine',
      gender: 'Female'
    },
    {
      createdAt: 'October 5, 2022',
      legalName: 'Lavanya Attaluri',
      chiefMentor: 'DR. Kumar',
      phone: '123123123',
      country: 'US',
      city: 'Irvine',
      gender: 'Female'
    },
    {
      createdAt: 'October 5, 2022',
      legalName: 'Lavanya Attaluri',
      chiefMentor: 'DR. Kumar',
      phone: '123123123',
      country: 'US',
      city: 'Irvine',
      gender: 'Female'
    },
    {
      createdAt: 'October 5, 2022',
      legalName: 'Lavanya Attaluri',
      chiefMentor: 'DR. Kumar',
      phone: '123123123',
      country: 'US',
      city: 'Irvine',
      gender: 'Female'
    },
    {
      createdAt: 'October 5, 2022',
      legalName: 'Lavanya Attaluri',
      chiefMentor: 'DR. Kumar',
      phone: '123123123',
      country: 'US',
      city: 'Irvine',
      gender: 'Female'
    },
    {
      createdAt: 'October 5, 2022',
      legalName: 'Lavanya Attaluri',
      chiefMentor: 'DR. Kumar',
      phone: '123123123',
      country: 'US',
      city: 'Irvine',
      gender: 'Female'
    },
    {
      createdAt: 'October 5, 2022',
      legalName: 'Lavanya Attaluri',
      chiefMentor: 'DR. Kumar',
      phone: '123123123',
      country: 'US',
      city: 'Irvine',
      gender: 'Female'
    },
  ]
  return (
    <>
      <Tabs>
        <TabList className="resourceheader">
          <Tab>
            <div className="py-1 px-3">
              Active
            </div>
          </Tab>
          <Tab>
            <div className="py-1 px-3">
              Pending
            </div>
          </Tab>
          <Button className='bg-light mt-1 mx-1 text-primary' style={{ float: 'right' }}>
            Create Mentor
          </Button>
        </TabList>
        <div
          className="p-1 p-sm-4"
          style={{
            border: "1px solid #F96302",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTop: "none",
            marginTop: "-10px",
          }}
        >
          <TabPanel className="row">
            <div className="col-12 px-2">
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
                    <label>YA Access</label>
                    <input className="form-control mt-2" id="email" />
                  </Col>
                </Row>
              </div>
              <div className='mt-4'>
                <Table striped bordered hover >
                  <thead>
                    <tr className='bg-primary text-white'>
                      <th>Date Created</th>
                      <th>Legal Name</th>
                      <th>Chief Mentor</th>
                      <th style={{ width: 80 }}>Phone</th>
                      <th style={{ width: 60 }}>Country</th>
                      <th style={{ width: 60 }}>City</th>
                      <th style={{ width: 60 }}>Gender</th>
                      <th style={{ width: 60 }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentData.map((t, i) =>
                      <tr key={i}>
                        <td>{t.createdAt}</td>
                        <td>{t.legalName}</td>
                        <td>{t.chiefMentor}</td>
                        <td>{t.phone}</td>
                        <td>{t.country}</td>
                        <td>{t.city}</td>
                        <td>{t.gender}</td>
                        <td>
                          <div className="py-2 text-center text-white" style={{ background: '#6db100', cursor: 'pointer' }}>
                            <i className="bi bi-list-task"></i>
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
          </TabPanel>
          <TabPanel className="row">
            <div className="col-12 px-2">
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
                    <label>YA Access</label>
                    <input className="form-control mt-2" id="email" />
                  </Col>
                </Row>
              </div>
              <div className='mt-4'>
                <Table striped bordered hover >
                  <thead>
                    <tr className='bg-primary text-white'>
                      <th>Date Created</th>
                      <th>Legal Name</th>
                      <th>Chief Mentor</th>
                      <th style={{ width: 80 }}>Phone</th>
                      <th style={{ width: 60 }}>Country</th>
                      <th style={{ width: 60 }}>City</th>
                      <th style={{ width: 60 }}>Gender</th>
                      <th style={{ width: 60 }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentData.map((t, i) =>
                      <tr key={i}>
                        <td>{t.createdAt}</td>
                        <td>{t.legalName}</td>
                        <td>{t.chiefMentor}</td>
                        <td>{t.phone}</td>
                        <td>{t.country}</td>
                        <td>{t.city}</td>
                        <td>{t.gender}</td>
                        <td>
                          <div className="py-2 text-center text-white" style={{ background: '#6db100', cursor: 'pointer' }}>
                            <i className="bi bi-list-task"></i>
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
          </TabPanel>
        </div>
      </Tabs>
    </>
  )
}

export default MentorsManagement