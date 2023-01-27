import React, { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Row, Col, Button, Table, Form, DropdownButton, Dropdown, Modal } from 'react-bootstrap'
import { toast } from 'react-toastify';
import axios from 'axios'
import Pagination from 'rc-pagination';
import config from "../../config/config";
import { formatDateTime } from '../../utilities/utils';

const MentorsManagement = (props) => {
  const [pageS1, setPageS1] = useState(10)
  const [pageN1, setPageN1] = useState(1)
  const [pageS2, setPageS2] = useState(10)
  const [pageN2, setPageN2] = useState(1)
  const [activeMentorData, setActiveMentorData] = useState([])
  const [pendingMentorData, setPendingMentorData] = useState([])
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [mentorDetail, setMentorDetail] = useState({})
  const [mentorCreateData, setMentorCreateData] = useState({})

  useEffect(() => {
    axios.post(`${config.server}api/mentors/getActiveMentors`).then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        setActiveMentorData(res.data)
      }
    }).catch((err) => {
      console.log(err)
    });
  }, [])

  const onActiveTabClick = () => {
    axios.post(`${config.server}api/mentors/getActiveMentors`).then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        setActiveMentorData(res.data)
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  const onPendingTabClick = () => {
    axios.post(`${config.server}api/mentors/getPendingMentors`).then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        setPendingMentorData(res.data)
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  const deleteMentor = (id) => {
    axios.post(`${config.server}api/mentors/delete`, { id }).then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
        console.log('code 204')
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        toast.success('Deleted successfully')
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  const handleUpdate = () => {
    axios.post(`${config.server}api/mentors/update`, mentorDetail).then((res) => {
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
    axios.post(`${config.server}api/mentors/create`, mentorCreateData).then((res) => {
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
                    {activeMentorData.map((t, i) => {
                      if (((pageN1 - 1) * pageS1) <= i && i < (pageN1 * pageS1)) {
                        return (
                          <tr key={i}>
                            <td>{formatDateTime(t.created_at)}</td>
                            <td>{t.legalName}</td>
                            <td>{t.chiefMentor}</td>
                            <td>{t.phone}</td>
                            <td>{t.country}</td>
                            <td>{t.city}</td>
                            <td>{t.gender === 1 ? 'male' : 'female'}</td>
                            <td>
                              <DropdownButton variant='secondary' id="dropdown-basic-button" title={<i className="bi bi-list-task"></i>}>
                                <Dropdown.Item onClick={() => {
                                  setShowDetailModal(true)
                                  setMentorDetail(t)
                                }}>
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => deleteMentor(t.id)}>Delete</Dropdown.Item>
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
                    <Pagination onChange={e => setPageN1(e)} total={activeMentorData.length} current={pageN1} pageSize={pageS1} />
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
                    {pendingMentorData.map((t, i) => {
                      if (((pageN2 - 1) * pageS2) <= i && i < (pageN2 * pageS2)) {
                        return (
                          <tr key={i}>
                            <td>{formatDateTime(t.created_at)}</td>
                            <td>{t.legalName}</td>
                            <td>{t.chiefMentor}</td>
                            <td>{t.phone}</td>
                            <td>{t.country}</td>
                            <td>{t.city}</td>
                            <td>{t.gender === 1 ? 'male' : 'female'}</td>
                            <td>
                              <DropdownButton variant='secondary' id="dropdown-basic-button" title={<i className="bi bi-list-task"></i>}>
                                <Dropdown.Item onClick={() => {
                                  setShowDetailModal(true)
                                  setMentorDetail(t)
                                }}>
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => deleteMentor(t.id)}>Delete</Dropdown.Item>
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
                    <Pagination onChange={e => setPageN2(e)} total={pendingMentorData.length} current={pageN2} pageSize={pageS2} />
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
      <Modal show={showDetailModal} onHide={() => setShowDetailModal(false)} animation={false}>
        <Modal.Body>
          <label>Legal Name</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...mentorDetail }
              dt.name = e.target.value
              setMentorDetail(dt)
            }}
            value={mentorDetail.name} />
          <label>Chief Mentor</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...mentorDetail }
              dt.chiefMentor = e.target.value
              setMentorDetail(dt)
            }}
            value={mentorDetail.chiefMentor} />
          <label>Phone</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...mentorDetail }
              dt.phone = e.target.value
              setMentorDetail(dt)
            }}
            value={mentorDetail.phone} />
          <label>Country</label>
          <Form.Select value={mentorDetail.country} onChange={e => {
            const dt = { ...mentorDetail }
            dt.country = e.target.value
            setMentorDetail(dt)
          }}>
            <option value={'India'}>India</option>
            <option value={'China'}>China</option>
          </Form.Select>
          <label>City</label>
          <Form.Select value={mentorDetail.city} onChange={e => {
            const dt = { ...mentorDetail }
            dt.city = e.target.value
            setMentorDetail(dt)
          }}>
            <option value={'Bombei'}>Bombei</option>
            <option value={'Mumbai'}>Mumbai</option>
          </Form.Select>
          <label>Gender</label>
          <Form.Select value={mentorDetail.gender} onChange={e => {
            const dt = { ...mentorDetail }
            dt.gender = e.target.value
            setMentorDetail(dt)
          }}>
            <option value={1}>Male</option>
            <option value={2}>Female</option>
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
        <Modal.Body>
          <label>Legal Name</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...mentorCreateData }
              dt.name = e.target.value
              setMentorCreateData(dt)
            }}
            value={mentorCreateData.name} />
          <label>Chief Mentor</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...mentorCreateData }
              dt.chiefMentor = e.target.value
              setMentorCreateData(dt)
            }}
            value={mentorCreateData.chiefMentor} />
          <label>Phone</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...mentorCreateData }
              dt.phone = e.target.value
              setMentorCreateData(dt)
            }}
            value={mentorCreateData.phone} />
          <label>Country</label>
          <Form.Select value={mentorCreateData.country} onChange={e => {
            const dt = { ...mentorCreateData }
            dt.country = e.target.value
            setMentorCreateData(dt)
          }}>
            <option value={'India'}>India</option>
            <option value={'China'}>China</option>
          </Form.Select>
          <label>City</label>
          <Form.Select value={mentorCreateData.city} onChange={e => {
            const dt = { ...mentorCreateData }
            dt.city = e.target.value
            setMentorCreateData(dt)
          }}>
            <option value={'Bombei'}>Bombei</option>
            <option value={'Mumbai'}>Mumbai</option>
          </Form.Select>
          <label>Gender</label>
          <Form.Select value={mentorCreateData.gender} onChange={e => {
            const dt = { ...mentorCreateData }
            dt.gender = e.target.value
            setMentorCreateData(dt)
          }}>
            <option value={1}>Male</option>
            <option value={2}>Female</option>
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

export default MentorsManagement