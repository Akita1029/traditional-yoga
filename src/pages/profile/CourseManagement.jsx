import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Button } from 'react-bootstrap'

const CoursesManagement = (props) => {
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
          </TabPanel>
          <TabPanel className="row">
            <div className="col-12 px-4 d-flex justify-content-end">
              <div className='pt-2 px-3'>Search</div>
              <div style={{ width: 200 }}><input className="form-control" id="email" /></div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </>
  )
}

export default CoursesManagement