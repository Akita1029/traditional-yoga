import React, { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Button, Table, Form, DropdownButton, Dropdown, Modal } from 'react-bootstrap'
import Pagination from 'rc-pagination';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import store from "../../store"
import {
  getCoursesForCourseManagement, updateCoursesForCourseManagement, createCoursesForCourseManagement, deleteCoursesForCourseManagement
} from "../../actions/course";

const CoursesManagementPage = (props) => {
  const [pageS, setPageS] = useState(10)
  const [pageN, setPageN] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editCourse, setEditCourse] = useState({})
  const [createCourse, setCreateCourse] = useState({})
  useEffect(() => {
    store.dispatch(getCoursesForCourseManagement());
  }, []);
  const courseData = props.courses.data
  const handleSave = () => {
    setShowModal(false)
    store.dispatch(updateCoursesForCourseManagement(editCourse))
  }
  const handleCreate = () => {
    setShowModal(false)
    store.dispatch(createCoursesForCourseManagement(createCourse))
  }
  return (
    <>
      <Tabs>
        <TabList className="resourceheader">
          <Tab>
            <div className="py-1 px-3">
              Online
            </div>
          </Tab>
          <Tab>
            <div className="py-1 px-3">
              Retreats
            </div>
          </Tab>
          <Button className='bg-light mt-1 mx-1 text-primary' style={{ float: 'right' }}
            onClick={() => setShowCreateModal(true)}>
            Create Course
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
            <div className="col-12 px-4 d-flex justify-content-end">
              <div className='pt-2 px-3'>Search</div>
              <div style={{ width: 200 }}><input className="form-control" id="email" /></div>
            </div>
            <div className='mt-4'>
              <Table striped bordered hover >
                <thead>
                  <tr className='bg-primary text-white'>
                    <th>Date Created</th>
                    <th>Course Name</th>
                    <th style={{ width: 180 }}>Start Date</th>
                    <th style={{ width: 16 }}>Place</th>
                    <th style={{ width: 60 }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courseData.map((t, i) => {
                    if (((pageN - 1) * pageS) <= i && i < (pageN * pageS))
                      return (
                        <tr key={i}>
                          <td>{t.createdAt}</td>
                          <td>{t.title}</td>
                          <td>{t.startedAt}</td>
                          <td>{t.place}</td>
                          <td>
                            <DropdownButton variant='secondary' id="dropdown-basic-button" title={<i className="bi bi-list-task"></i>}>
                              <Dropdown.Item onClick={() => {
                                setShowModal(true)
                                setEditCourse(t)
                              }}>
                                Edit
                              </Dropdown.Item>
                              <Dropdown.Item onClick={() => store.dispatch(deleteCoursesForCourseManagement(t.id))}>Delete</Dropdown.Item>
                            </DropdownButton>
                          </td>
                        </tr>
                      )
                  })}
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
                  <Pagination onChange={e => setPageN(e)} total={courseData.length} current={pageN} pageSize={pageS} />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="row">
            <div className="col-12 px-4 d-flex justify-content-end">
              <div className='pt-2 px-3'>Search</div>
              <div style={{ width: 200 }}><input className="form-control" id="email" /></div>
            </div>
            <div className='mt-4'>
              <Table striped bordered hover >
                <thead>
                  <tr className='bg-primary text-white'>
                    <th>Date Created</th>
                    <th>Course Name</th>
                    <th style={{ width: 180 }}>Start Date</th>
                    <th style={{ width: 16 }}>Place</th>
                    <th style={{ width: 60 }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courseData.map((t, i) => {
                    if (((pageN - 1) * pageS) <= i && i < (pageN * pageS))
                      return (
                        <tr key={i}>
                          <td>{t.createdAt}</td>
                          <td>{t.title}</td>
                          <td>{t.startedAt}</td>
                          <td>{t.place}</td>
                          <td>
                            <DropdownButton variant='secondary' id="dropdown-basic-button" title={<i className="bi bi-list-task"></i>}>
                              <Dropdown.Item onClick={() => {
                                setShowModal(true)
                                setEditCourse(t)
                              }}>
                                Edit
                              </Dropdown.Item>
                              <Dropdown.Item onClick={() => store.dispatch(deleteCoursesForCourseManagement(t.id))}>Delete</Dropdown.Item>
                            </DropdownButton>
                          </td>
                        </tr>
                      )
                  })}
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
                  <Pagination onChange={e => setPageN(e)} total={courseData.length} current={pageN} pageSize={pageS} />
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
      <Modal show={showModal} onHide={() => setShowModal(false)} animation={false}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <label>Date Created</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...editCourse }
              dt.createdAt = e.target.value
              // setEditCourse(dt)
            }}
            value={editCourse.createdAt} />
          <label>Course Name</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...editCourse }
              dt.title = e.target.value
              setEditCourse(dt)
            }}
            value={editCourse.title} />
          <label>Start Date</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...editCourse }
              dt.startedAt = e.target.value
              // setEditCourse(dt)
            }}
            value={editCourse.startedAt} />
          <label>Place</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...editCourse }
              dt.place = e.target.value
              // setEditCourse(dt)
            }}
            value={editCourse.place} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)} animation={false}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <label>Date Created</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...createCourse }
              dt.createdAt = e.target.value
              // setCreateCourse(dt)
            }}
            value={createCourse.createdAt} />
          <label>Course Name</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...createCourse }
              dt.title = e.target.value
              setCreateCourse(dt)
            }}
            value={createCourse.title} />
          <label>Start Date</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...createCourse }
              dt.startedAt = e.target.value
              // setCreateCourse(dt)
            }}
            value={createCourse.startedAt} />
          <label>Place</label>
          <input
            className="form-control mt-2"
            onChange={e => {
              const dt = { ...createCourse }
              dt.place = e.target.value
              // setCreateCourse(dt)
            }}
            value={createCourse.place} />
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

CoursesManagementPage.propTypes = {
  getCoursesForCourseManagement: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  courses: state.courses,
});

export default connect(mapStateToProps, { getCoursesForCourseManagement })(CoursesManagementPage);