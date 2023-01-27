import React, { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Row, Col, Button, Table, DropdownButton, Dropdown, Modal } from 'react-bootstrap'
import axios from 'axios'
import Pagination from 'rc-pagination'
import { toast } from 'react-toastify'
import config from "../../config/config"
import { Checkbox, MenuItem, TextField } from '@mui/material'
import { formatDateTime } from '../../utilities/utils'
import { useNavigate } from 'react-router-dom'
import { useConfirm } from 'material-ui-confirm'

const statusArr = ['Pending_Mentor_Assignment', 'Pending_Mentor_Interaction', 'Approved', 'Removed', 'Withdrawn', 'Blacklist']

const StudentManagementPage4Chief = (props) => {
  const [pageS1, setPageS1] = useState(10)
  const [pageN1, setPageN1] = useState(1)
  const [pageS2, setPageS2] = useState(10)
  const [pageN2, setPageN2] = useState(1)
  const [activeStudentData, setActiveStudentData] = useState([])
  const [pendingStudentData, setPendingStudentData] = useState([])
  const [mentorData, setMentorData] = useState([])
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [studentDetail, setStudentDetail] = useState({})
  const [studentCreateData, setStudentCreateData] = useState({})
  const [activeOrpending, setActiveOrPending] = useState(true)
  const [selectedActiveStudent, setSelectedActiveStudent] = useState({
    first_name: '',
    last_name: '',
    created_at: formatDateTime(new Date())
  })
  const [selectedPendingStudent, setSelectedPendingStudent] = useState({
    first_name: '',
    last_name: '',
    created_at: formatDateTime(new Date())
  })
  const [authUser, setAuthUser] = useState()
  const confirm = useConfirm()
  const navigate = useNavigate()

  useEffect(() => {
    let user
    if (localStorage.userToken) {
      user = (JSON.parse(localStorage.userToken)).user
      setAuthUser(user)
    } else {
      navigate("/")
      toast.warning("You can't access this page", {
        position: toast.POSITION.TOP_RIGHT
      })
    }

    axios.post(`${config.server}api/students/getActiveStudents`, {
      chief_id: user.id
    }).then((res) => {
      if (res.status === 200) {
        setActiveStudentData(res.data)
      }
    }).catch((err) => {
      console.log(err)
    })

    axios.post(`${config.server}api/students/getActiveMentors`, {
      chief_id: user.id
    }).then((res) => {
      if (res.status === 200) {
        setMentorData(res.data)
      }
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const onActiveTabClick = () => {
    setActiveOrPending(true)
    axios.post(`${config.server}api/students/getActiveStudents`, {
      chief_id: authUser.id
    }).then((res) => {
      if (res.status === 200) {
        setActiveStudentData(res.data)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  const onPendingTabClick = () => {
    setActiveOrPending(false)
    axios.post(`${config.server}api/students/getPendingStudents`)
    .then((res) => {
      if (res.status === 200) {
        setPendingStudentData(res.data)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  const deleteStudent = (id) => {
    confirm({ title: <span className="text-primary">Are you sure?</span>,
          description: <p className="text-bold">Are you sure remove this student?</p>,
          confirmationText: 'Yes',
          cancellationText: 'No',
          allowClose: true,
          cancellationButtonProps: { autoFocus: true }})
      .then(() => {
        // axios.post(`${config.server}api/students/delete`, { id }).then((res) => {
        //   console.log("Result:", res)
        //   if (res.status === 201) {
        //   } else if (res.status === 204) {
        //     console.log('code 204')
        //   } else if (res.status === 205) {
        //   } else if (res.status === 200) {
        //     toast.success('Deleted successfully')
        //   }
        // }).catch((err) => {
        //   console.log(err)
        // })
      })
      .catch(() => {
        /* ... */
      })
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
    })
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
    })
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
                    <TextField
                      className="form-control mt-2"
                      variant="outlined"
                      size="small"
                      id="email"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={selectedActiveStudent.email} />
                  </Col>
                  <Col lg={3} md={6} className="mt-2">
                    <label>Legal Name</label>
                    <TextField
                      className="form-control mt-2"
                      variant="outlined"
                      size="small"
                      id="legalName"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={selectedActiveStudent.first_name + " " + selectedActiveStudent.last_name } />
                  </Col>
                  <Col lg={3} md={6} className="mt-2">
                    <label>Gender</label>
                    <TextField
                      className="form-control mt-2"
                      variant="outlined"
                      size="small"
                      id="gender"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={selectedActiveStudent.gender == 1 ? "Male" : "Female"} />
                  </Col>

                  <Col lg={3} md={6} className="mt-2">
                    <label>Start Date</label>
                    <TextField
                      className="form-control mt-2"
                      variant="outlined"
                      size="small"
                      id="access"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={selectedActiveStudent.created_at} />
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} md={6} className="mt-2">
                    <label>YA Access</label>
                    <TextField
                      className="form-control mt-2"
                      variant="outlined"
                      size="small"
                      id="yaAccess"
                      InputProps={{
                        readOnly: true,
                      }}
                       />
                  </Col>
                  <Col lg={3} md={6} className="mt-2">
                    <label>Country</label>
                    <TextField
                      className="form-control mt-2"
                      variant="outlined"
                      size="small"
                      id="country"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={selectedActiveStudent.country} />
                  </Col>
                  <Col lg={3} md={6} className="mt-2">
                    <label>State</label>
                    <TextField
                      className="form-control mt-2"
                      variant="outlined"
                      size="small"
                      id="state"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={selectedActiveStudent.province} />
                  </Col>
                  <Col lg={3} md={6} className="mt-2">
                    <label>City</label>
                    <TextField
                      className="form-control mt-2"
                      variant="outlined"
                      size="small"
                      id="city"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={selectedActiveStudent.province} />
                  </Col>
                </Row>
              </div>
              <div className='mt-4'>
                <Table striped bordered hover style={{maxWidth: '100%'}}>
                  <thead>
                    <tr className='bg-primary text-white'>
                      <th style={{ width: 10 }}>
                        <Checkbox />
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
                    {activeStudentData.map((student, i) => {
                      if (((pageN1 - 1) * pageS1) <= i && i < (pageN1 * pageS1)) {
                        return (
                          <tr key={i}>
                            <td>
                              <Checkbox
                                onChange={(e) => {
                                  // this.props.checked == true ?
                                  // setSelectedActiveStudent(student) :
                                  // setSelectedActiveStudent({})
                                  console.log(e)
                                }}
                              />
                            </td>
                            <td onClick={()=> setSelectedActiveStudent(student)}>
                              {student.first_name + " " + student.last_name }
                            </td>
                            <td onClick={()=> setSelectedActiveStudent(student)}>
                              <TextField
                                style={{ width: 100 }}
                                className="form-control mt-2"
                                select
                                id="mentor"
                                // onChange={(e) => setRYITCert(e)}
                                size="small"
                                value={student.mentor_id}
                              >
                                { mentorData.map(mentor => {
                                    return(
                                      <MenuItem key={mentor.id} value={mentor.id}>{mentor.first_name + " " + mentor.last_name}</MenuItem>
                                    )
                                  })
                                }
                              </TextField>
                            </td>
                            <td onClick={()=> setSelectedActiveStudent(student)}>
                              {student.whatsapp_phonenumber}
                            </td>
                            <td onClick={()=> setSelectedActiveStudent(student)}>
                              {formatDateTime(student.created_at)}
                            </td>
                            <td onClick={()=> setSelectedActiveStudent(student)}>
                              <TextField
                                style={{ width: 100 }}
                                className="form-control mt-2"
                                select
                                id="status"
                                // onChange={(e) => setRYITCert(e)}
                                size="small"
                                value={student.status}
                              >
                                <MenuItem key={0} value={0}>{statusArr[0]}</MenuItem>
                                <MenuItem key={1} value={1}>{statusArr[1]}</MenuItem>
                                <MenuItem key={2} value={2}>{statusArr[2]}</MenuItem>
                                <MenuItem key={3} value={3}>{statusArr[3]}</MenuItem>
                                <MenuItem key={4} value={4}>{statusArr[4]}</MenuItem>
                                <MenuItem key={5} value={5}>{statusArr[5]}</MenuItem>
                              </TextField>
                            </td>
                            <td>
                              <DropdownButton
                                variant='secondary'
                                title={<i className="bi bi-list-task"></i>}>
                                <Dropdown.Item onClick={() => {
                                  setShowDetailModal(true)
                                  setSelectedActiveStudent(student)
                                }}>
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                  // updateStudentDetail()
                                }}>
                                  Update
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => deleteStudent(student.id)}>Delete</Dropdown.Item>
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
                      <TextField
                        select
                        size="small"
                        value={pageS1}
                        onChange={e => setPageS1(e.target.value)}
                      >
                        <MenuItem key={10} value={10}>10</MenuItem>
                        <MenuItem key={20} value={20}>20</MenuItem>
                        <MenuItem key={30} value={30}>30</MenuItem>
                        <MenuItem key={50} value={50}>50</MenuItem>
                      </TextField>
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
                    <TextField
                      className="form-control mt-2"
                      variant="outlined"
                      size="small"
                      id="email"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={selectedPendingStudent.email} />
                  </Col>
                  <Col lg={3} md={6} className="mt-2">
                    <label>Legal Name</label>
                    <TextField
                      className="form-control mt-2"
                      variant="outlined"
                      size="small"
                      id="legalName"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={selectedPendingStudent.first_name + " " + selectedPendingStudent.last_name } />
                  </Col>
                  <Col lg={3} md={6} className="mt-2">
                    <label>Gender</label>
                    <TextField
                      className="form-control mt-2"
                      variant="outlined"
                      size="small"
                      id="gender"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={selectedPendingStudent.gender == 1 ? "Male" : "Female"} />
                  </Col>

                  <Col lg={3} md={6} className="mt-2">
                    <label>Start Date</label>
                    <TextField
                      className="form-control mt-2"
                      variant="outlined"
                      size="small"
                      id="access"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={formatDateTime(selectedPendingStudent.created_at)} />
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} md={6} className="mt-2">
                    <label>YA Access</label>
                    <TextField
                      className="form-control mt-2"
                      variant="outlined"
                      size="small"
                      id="yaAccess"
                      InputProps={{
                        readOnly: true,
                      }}
                       />
                  </Col>
                  <Col lg={3} md={6} className="mt-2">
                    <label>Country</label>
                    <TextField
                      className="form-control mt-2"
                      variant="outlined"
                      size="small"
                      id="country"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={selectedPendingStudent.country} />
                  </Col>
                  <Col lg={3} md={6} className="mt-2">
                    <label>State</label>
                    <TextField
                      className="form-control mt-2"
                      variant="outlined"
                      size="small"
                      id="state"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={selectedPendingStudent.province} />
                  </Col>
                  <Col lg={3} md={6} className="mt-2">
                    <label>City</label>
                    <TextField
                      className="form-control mt-2"
                      variant="outlined"
                      size="small"
                      id="city"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={selectedPendingStudent.province} />
                  </Col>
                </Row>
              </div>
              <div className='mt-4'>
                <Table striped bordered hover style={{maxWidth: '100%'}}>
                  <thead>
                    <tr className='bg-primary text-white'>
                      <th style={{ width: 10 }}>
                        <Checkbox />
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
                    {pendingStudentData.map((student, i) => {
                      if (((pageN2 - 1) * pageS2) <= i && i < (pageN2 * pageS2)) {
                        return (
                          <tr key={i}>
                            <td>
                              <Checkbox
                                // onChange={this.props.checked == true ?
                                //   setSelectedPendingStudent(student) :
                                //   setSelectedPendingStudent({})
                                // }
                              />
                            </td>
                            <td onClick={()=> setSelectedPendingStudent(student)}>
                              {student.first_name + " " + student.last_name }
                            </td>
                            <td onClick={()=> setSelectedPendingStudent(student)}>
                              <TextField
                                style={{ width: 100 }}
                                className="form-control mt-2"
                                select
                                id="mentor"
                                // onChange={(e) => setRYITCert(e)}
                                size="small"
                                value={student.mentor_id}
                              >
                                { mentorData.map(mentor => {
                                    return(
                                      <MenuItem key={mentor.id} value={mentor.id}>{mentor.first_name + " " + mentor.last_name}</MenuItem>
                                    )
                                  })
                                }
                              </TextField>
                            </td>
                            <td onClick={()=> setSelectedPendingStudent(student)}>
                              {student.whatsapp_phonenumber}
                            </td>
                            <td onClick={()=> setSelectedPendingStudent(student)}>
                              {formatDateTime(student.created_at)}
                            </td>
                            <td  onClick={()=> setSelectedPendingStudent(student)}>
                              <TextField
                                style={{ width: 100 }}
                                className="form-control mt-2"
                                select
                                id="status"
                                // onChange={(e) => setRYITCert(e)}
                                size="small"
                                value={student.status}
                              >
                                <MenuItem key={0} value={0}>{statusArr[0]}</MenuItem>
                                <MenuItem key={1} value={1}>{statusArr[1]}</MenuItem>
                                <MenuItem key={2} value={2}>{statusArr[2]}</MenuItem>
                                <MenuItem key={3} value={3}>{statusArr[3]}</MenuItem>
                                <MenuItem key={4} value={4}>{statusArr[4]}</MenuItem>
                                <MenuItem key={5} value={5}>{statusArr[5]}</MenuItem>
                              </TextField>
                            </td>
                            <td>
                              <DropdownButton
                                variant='secondary'
                                title={<i className="bi bi-list-task"></i>}>
                                <Dropdown.Item onClick={() => {
                                  setShowDetailModal(true)
                                  setSelectedPendingStudent(student)
                                }}>
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                  // updateStudentDetail()
                                }}>
                                  Update
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => deleteStudent(student.id)}>Delete</Dropdown.Item>
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
                      <TextField
                        select
                        size="small"
                        value={pageS2}
                        onChange={e => setPageS2(e.target.value)}
                      >
                        <MenuItem key={10} value={10}>10</MenuItem>
                        <MenuItem key={20} value={20}>20</MenuItem>
                        <MenuItem key={30} value={30}>30</MenuItem>
                        <MenuItem key={50} value={50}>50</MenuItem>
                      </TextField>
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
        <Modal.Body>
          <label>First_Name</label>
          <TextField
            className="form-control mt-2"
            variant="outlined"
            size="small"
            onChange={e => {
              if(activeOrpending){
                const dt = { ...selectedActiveStudent }
                dt.first_name = e.target.value
                setSelectedActiveStudent(dt)
              } else {
                const dt = { ...selectedPendingStudent }
                dt.first_name = e.target.value
                setSelectedActiveStudent(dt)
              }
            }}
            value={activeOrpending ? selectedActiveStudent.first_name : selectedPendingStudent.first_name} />
          <label>Last_Name</label>
          <TextField
            className="form-control mt-2"
            variant="outlined"
            size="small"
            onChange={e => {
              if(activeOrpending){
                const dt = { ...selectedActiveStudent }
                dt.last_name = e.target.value
                setSelectedActiveStudent(dt)
              } else {
                const dt = { ...selectedPendingStudent }
                dt.last_name = e.target.value
                setSelectedActiveStudent(dt)
              }
            }}
            value={activeOrpending ? selectedActiveStudent.last_name : selectedPendingStudent.last_name} />
          <label>Phone</label>
          <TextField
            className="form-control mt-2"
            variant="outlined"
            size="small"
            onChange={e => {
              if(activeOrpending){
                const dt = { ...selectedActiveStudent }
                dt.whatsapp_phonenumber = e.target.value
                setSelectedActiveStudent(dt)
              } else {
                const dt = { ...selectedPendingStudent }
                dt.whatsapp_phonenumber = e.target.value
                setSelectedActiveStudent(dt)
              }
            }}
            value={activeOrpending ? selectedActiveStudent.whatsapp_phonenumber : selectedPendingStudent.whatsapp_phonenumber} />
          <label>Mentor</label>
          <TextField
            className="form-control mt-2"
            select
            id="mentor"
            onChange={(e) => {
              if(activeOrpending){
                const dt = { ...selectedActiveStudent }
                dt.mentor_id = e.target.value
                setSelectedActiveStudent(dt)
              } else {
                const dt = { ...selectedPendingStudent }
                dt.mentor_id = e.target.value
                setSelectedPendingStudent(dt)
              }
            }}
            size="small"
            value={activeOrpending ? selectedActiveStudent.mentor_id : selectedPendingStudent.mentor_id}
          >
            {
              mentorData.map((mentor, i) => {
                return (
                  <MenuItem key={i} value={mentor.id}>{mentor.first_name + " " +mentor.last_name}</MenuItem>
                )
              })
            }
          </TextField>
          <label>Status</label>
          <TextField
            className="form-control mt-2"
            select
            id="status"
            onChange={(e) => {
              if(activeOrpending){
                const dt = { ...selectedActiveStudent }
                dt.status = e.target.value
                setSelectedActiveStudent(dt)
              } else {
                const dt = { ...selectedPendingStudent }
                dt.status = e.target.value
                setSelectedPendingStudent(dt)
              }
            }}
            size="small"
            value={activeOrpending ? selectedActiveStudent.status : selectedPendingStudent.status}
          >
            <MenuItem key={0} value={0}>{statusArr[0]}</MenuItem>
            <MenuItem key={1} value={1}>{statusArr[1]}</MenuItem>
            <MenuItem key={2} value={2}>{statusArr[2]}</MenuItem>
            <MenuItem key={3} value={3}>{statusArr[3]}</MenuItem>
            <MenuItem key={4} value={4}>{statusArr[4]}</MenuItem>
            <MenuItem key={5} value={5}>{statusArr[5]}</MenuItem>
          </TextField>
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
          <label>First_Name</label>
          <TextField
            className="form-control mt-2"
            variant="outlined"
            size="small"
            onChange={e => {
              const dt = { ...studentCreateData }
              dt.first_name = e.target.value
              setStudentCreateData(dt)
            }}
            value={studentCreateData.first_name} />
          <label>Last_Name</label>
          <TextField
            className="form-control mt-2"
            variant="outlined"
            size="small"
            onChange={e => {
              const dt = { ...studentCreateData }
              dt.last_name = e.target.value
              setStudentCreateData(dt)
            }}
            value={studentCreateData.last_name} />
          <label>Phone</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...studentCreateData }
              dt.whatsapp_phonenumber = e.target.value
              setStudentCreateData(dt)
            }}
            value={studentCreateData.whatsapp_phonenumber} />
          <label>Mentor</label>
          <TextField
            className="form-control mt-2"
            select
            id="mentor"
            onChange={(e) => {
              const dt = { ...studentCreateData }
              dt.mentor_id = e.target.value
              setStudentCreateData(dt)
            }}
            size="small"
            value={studentCreateData.mentor_id}
          >
            {
              mentorData.map((mentor, i) =>
                {
                  return (
                    <MenuItem key={mentor.id} value={mentor.id}>{mentor.first_name + " " + mentor.last_name}</MenuItem>
                  )
                }
              )
            }
          </TextField>
          <label>Status</label>
          <TextField
            className="form-control mt-2"
            select
            id="status"
            onChange={(e) => {
              const dt = { ...studentCreateData }
              dt.status = e.target.value
              setStudentCreateData(dt)
            }}
            size="small"
            value={studentCreateData.status}
          >
            <MenuItem key={0} value={0}>{statusArr[0]}</MenuItem>
            <MenuItem key={1} value={1}>{statusArr[1]}</MenuItem>
            <MenuItem key={2} value={2}>{statusArr[2]}</MenuItem>
            <MenuItem key={3} value={3}>{statusArr[3]}</MenuItem>
            <MenuItem key={4} value={4}>{statusArr[4]}</MenuItem>
            <MenuItem key={5} value={5}>{statusArr[5]}</MenuItem>
          </TextField>
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