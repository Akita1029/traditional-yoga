import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Row, Col, Button } from 'react-bootstrap'

const StudentManagementPage4Chief = (props) => {
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
            Create Student
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
            <div className="col-12 px-4">
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
            </div>
          </TabPanel>
          <TabPanel className="row">
            <div className="col-12 px-4">
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
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </>
  )
}

export default StudentManagementPage4Chief