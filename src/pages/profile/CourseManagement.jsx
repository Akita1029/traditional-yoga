import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Button, Table, Form } from 'react-bootstrap'
import Pagination from 'rc-pagination';

const CoursesManagement = (props) => {
  const [pageS, setPageS] = useState(10)
  const studentData = [
    {
      createdAt: 'October 5, 2022',
      courseName: '(RYIT 200) Free Online Traditional Medit...',
      startedAt: 'Jun 15th, 2022 – Sep 30th, 2022',
      place: 'Online',
    },
    {
      createdAt: 'October 5, 2022',
      courseName: '(RYIT 200) Free Online Traditional Medit...',
      startedAt: 'Jun 15th, 2022 – Sep 30th, 2022',
      place: 'Online',
    },
    {
      createdAt: 'October 5, 2022',
      courseName: '(RYIT 200) Free Online Traditional Medit...',
      startedAt: 'Jun 15th, 2022 – Sep 30th, 2022',
      place: 'Online',
    },
    {
      createdAt: 'October 5, 2022',
      courseName: '(RYIT 200) Free Online Traditional Medit...',
      startedAt: 'Jun 15th, 2022 – Sep 30th, 2022',
      place: 'Online',
    },
    {
      createdAt: 'October 5, 2022',
      courseName: '(RYIT 200) Free Online Traditional Medit...',
      startedAt: 'Jun 15th, 2022 – Sep 30th, 2022',
      place: 'Online',
    },
    {
      createdAt: 'October 5, 2022',
      courseName: '(RYIT 200) Free Online Traditional Medit...',
      startedAt: 'Jun 15th, 2022 – Sep 30th, 2022',
      place: 'Online',
    },
    {
      createdAt: 'October 5, 2022',
      courseName: '(RYIT 200) Free Online Traditional Medit...',
      startedAt: 'Jun 15th, 2022 – Sep 30th, 2022',
      place: 'Online',
    },
    {
      createdAt: 'October 5, 2022',
      courseName: '(RYIT 200) Free Online Traditional Medit...',
      startedAt: 'Jun 15th, 2022 – Sep 30th, 2022',
      place: 'Online',
    },
    {
      createdAt: 'October 5, 2022',
      courseName: '(RYIT 200) Free Online Traditional Medit...',
      startedAt: 'Jun 15th, 2022 – Sep 30th, 2022',
      place: 'Online',
    },
  ]
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
          <Button className='bg-light mt-1 mx-1 text-primary' style={{ float: 'right' }}>
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
                  {studentData.map((t, i) =>
                    <tr key={i}>
                      <td>{t.createdAt}</td>
                      <td>{t.courseName}</td>
                      <td>{t.startedAt}</td>
                      <td>{t.place}</td>
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
                  {studentData.map((t, i) =>
                    <tr key={i}>
                      <td>{t.createdAt}</td>
                      <td>{t.courseName}</td>
                      <td>{t.startedAt}</td>
                      <td>{t.place}</td>
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
          </TabPanel>
        </div>
      </Tabs>
    </>
  )
}

export default CoursesManagement