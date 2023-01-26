import React, { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Row, Col, Button, Form, Table, DropdownButton, Dropdown, Modal } from 'react-bootstrap'
import axios from 'axios'
import Pagination from 'rc-pagination';
import { toast } from 'react-toastify';
import config from "../../config/config";

const StudentManagementPage4Chief = (props) => {
  const [pageS1, setPageS1] = useState(10)
  const [pageN1, setPageN1] = useState(1)
  const [pageS2, setPageS2] = useState(10)
  const [pageN2, setPageN2] = useState(1)
  const [activeStudentData, setActiveStudentData] = useState([])
  const [pendingStudentData, setPendingStudentData] = useState([])
  const [mentorData, setMentorData] = useState([
    { id: 1, name: "Dr.Kumar" },
    { id: 2, name: "Dr.James" },
    { id: 3, name: "Dr.Lai" },
    { id: 4, name: "Dr.Jeremy" }
  ])
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [studentDetail, setStudentDetail] = useState({})
  const [studentCreateData, setStudentCreateData] = useState({})

  useEffect(() => {
    axios.post(`${config.server}api/students/getActiveStudents`).then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        setActiveStudentData(res.data)
      }
    }).catch((err) => {
      console.log(err)
    });
    // axios.post(`${config.server}api/mentors/getMentors`).then((res) => { // TODO
    //   console.log("Result:", res)
    //   if (res.status === 201) {
    //   } else if (res.status === 204) {
    //   } else if (res.status === 205) {
    //   } else if (res.status === 200) {
    //     setMentorData(res.data)
    //   }
    // }).catch((err) => {
    //   console.log(err)
    // });
  }, [])

  const onActiveTabClick = () => {
    axios.post(`${config.server}api/students/getActiveStudents`).then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        setActiveStudentData(res.data)
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  const onPendingTabClick = () => {
    axios.post(`${config.server}api/students/getPendingStudents`).then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        setPendingStudentData(res.data)
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  const deleteStudent = (id) => {
    axios.post(`${config.server}api/students/delete`, { id }).then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        toast.success('Deleted successfully')
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  const handleUpdate = () => {
    axios.post(`${config.server}api/students/update`, studentDetail).then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        toast.success('Updated successfully')
        setShowDetailModal(false)
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  const handleCreate = () => {
    axios.post(`${config.server}api/students/create`, studentCreateData).then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        toast.success('Created successfully')
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <>
      <Tabs>
        <TabList className="resourceheader">
          <Tab>
            <div className="py-1 px-3" onClick={() => onActiveTabClick()}>
              Active
            </div>
          </Tab>
          <Tab>
            <div className="py-1 px-3" onClick={() => onPendingTabClick()}>
              Pending
            </div>
          </Tab>
          <Button onClick={() => setShowCreateModal(true)} className='bg-light mt-1 mx-1 text-primary' style={{ float: 'right' }}>
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
                      <th style={{ width: 10 }}>
                        <Form.Check type='checkbox' />
                      </th>
                      <th>Name</th>
                      <th>Mentor</th>
                      <th style={{ width: 80 }}>Phone</th>
                      <th style={{ width: 120 }}>Created Date</th>
                      <th style={{ width: 120 }}>Status</th>
                      <th style={{ width: 60 }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeStudentData.map((t, i) => {
                      if (((pageN1 - 1) * pageS1) <= i && i < (pageN1 * pageS1)) {
                        return (
                          <tr key={i}>
                            <td>
                              <Form.Check type='checkbox' />
                            </td>
                            <td>{t.name}</td>
                            <td>
                              <Form.Select value={t.mentor}>
                                {mentorData.map((t, i) => <option key={i} value={t.id}>{t.name}</option>)}
                              </Form.Select>
                            </td>
                            <td>{t.phone}</td>
                            <td>{t.created_at}</td>
                            <td>
                              <Form.Select value={t.status}>
                                <option value="Active">Active</option>
                                <option value="Pendding">Pendding</option>
                              </Form.Select>
                            </td>
                            <td>
                              <DropdownButton variant='secondary' id="dropdown-basic-button" title={<i className="bi bi-list-task"></i>}>
                                <Dropdown.Item onClick={() => {
                                  setShowDetailModal(true)
                                  setStudentDetail(t)
                                }}>
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => deleteStudent(t.id)}>Delete</Dropdown.Item>
                              </DropdownButton>
                            </td>
                          </tr>
                        )
                      }
                    })}
                  </tbody>
                </Table>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <div className='pt-1'>
                      Show
                    </div>
                    <div className='px-1'>
                      <Form.Select value={pageS1} size='sm' onChange={e => setPageS1(e.target.value)}>
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
                    <Pagination onChange={e => setPageN1(e)} total={activeStudentData.length} current={pageN1} pageSize={pageS1} />
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
                      <th style={{ width: 10 }}>
                        <Form.Check type='checkbox' />
                      </th>
                      <th>Name</th>
                      <th>Mentor</th>
                      <th style={{ width: 80 }}>Phone</th>
                      <th style={{ width: 120 }}>Created Date</th>
                      <th style={{ width: 120 }}>Status</th>
                      <th style={{ width: 60 }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingStudentData.map((t, i) => {
                      if (((pageN2 - 1) * pageS2) <= i && i < (pageN2 * pageS2)) {
                        return (
                          <tr key={i}>
                            <td>
                              <Form.Check type='checkbox' />
                            </td>
                            <td>{t.name}</td>
                            <td>
                              <Form.Select value={t.mentor}>
                                {mentorData.map((t, i) => <option key={i} value={t.id}>{t.name}</option>)}
                              </Form.Select>
                            </td>
                            <td>{t.phone}</td>
                            <td>{t.created_at}</td>
                            <td>
                              <Form.Select value={t.status}>
                                <option value="Active">Active</option>
                                <option value="Pendding">Pendding</option>
                              </Form.Select>
                            </td>
                            <td>
                              <DropdownButton variant='secondary' id="dropdown-basic-button" title={<i className="bi bi-list-task"></i>}>
                                <Dropdown.Item onClick={() => {
                                  setShowDetailModal(true)
                                  setStudentDetail(t)
                                }}>
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => deleteStudent(t.id)}>Delete</Dropdown.Item>
                              </DropdownButton>
                            </td>
                          </tr>
                        )
                      }
                    })}
                  </tbody>
                </Table>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <div className='pt-1'>
                      Show
                    </div>
                    <div className='px-1'>
                      <Form.Select value={pageS2} size='sm' onChange={e => setPageS2(e.target.value)}>
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
                    <Pagination onChange={e => setPageN2(e)} total={pendingStudentData.length} current={pageN2} pageSize={pageS2} />
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
      <Modal show={showDetailModal} onHide={() => setShowDetailModal(false)} animation={false}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <label>Name</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...studentDetail }
              dt.name = e.target.value
              setStudentDetail(dt)
            }}
            value={studentDetail.name} />
          <label>Phone</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...studentDetail }
              dt.phone = e.target.value
              setStudentDetail(dt)
            }}
            value={studentDetail.phone} />
          <label>Mentor</label>
          <Form.Select onChange={e => {
            const dt = { ...studentDetail }
            dt.mentor = e.target.value
            setStudentDetail(dt)
          }}>
            {mentorData.map((t, i) => <option key={i} value={t.id}>{t.name}</option>)}
          </Form.Select>
          <label>Status</label>
          <Form.Select onChange={e => {
            const dt = { ...studentDetail }
            dt.status = e.target.value
            setStudentDetail(dt)
          }}>
            <option value="Active">Active</option>
            <option value="Pendding">Pendding</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDetailModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)} animation={false}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <label>Name</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...studentCreateData }
              dt.name = e.target.value
              setStudentCreateData(dt)
            }}
            value={studentCreateData.name} />
          <label>Phone</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...studentCreateData }
              dt.phone = e.target.value
              setStudentCreateData(dt)
            }}
            value={studentCreateData.phone} />
          <label>Mentor</label>
          <Form.Select onChange={e => {
            const dt = { ...studentCreateData }
            dt.mentor = e.target.value
            setStudentCreateData(dt)
          }}>
            {mentorData.map((t, i) => <option key={i} value={t.id}>{t.name}</option>)}
          </Form.Select>
          <label>Status</label>
          <Form.Select onChange={e => {
            const dt = { ...studentCreateData }
            dt.status = e.target.value
            setStudentCreateData(dt)
          }}>
            <option value="Active">Active</option>
            <option value="Pendding">Pendding</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCreateModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreate}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default StudentManagementPage4Chief