import React, { useEffect, useState } from "react"
import "../../assets/css/classroom.css"
import { Row, Col } from "react-bootstrap"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import {useLocation} from "react-router-dom";
import config from "../../config/config"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

const Classroom = (props) => {

  const navigate = useNavigate();
  const search = useLocation().search;
  const classId = new URLSearchParams(search).get('classId');
  const [currentClass, setCurrentClass] = useState({})
  const [AuthUser, setAuthUser] = useState({})

  useEffect(() => {
    if (localStorage.userToken) {
      setAuthUser((JSON.parse(localStorage.userToken)).user)
    } else {
      navigate("/")
      toast.warning("You can't access this page", {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    axios.post(`${config.server}api/courses/get_one_classroom`, {
      classId
    }).then(response => {
      if (response.status === 200) {
        setCurrentClass(response.data)
      }
    }).catch(e => console.log(e));
  }, [])

  const joinClass = (classId) => {
    axios.post(`${config.server}api/courses/join_to_classroom`, {
      classId, userId: AuthUser.id
    }).then(response => {
      if (response.status === 200) {
        toast.success("You joined successfully to this classroom! Now please wait the mentor's instruction...", {
          position: toast.POSITION.TOP_RIGHT
        })
        let tmp = currentClass
        tmp.members++
        setCurrentClass(tmp)
      } else if (response.status === 201) {
        toast.success("You already joined this classroom!", {
          position: toast.POSITION.TOP_RIGHT
        })
      } else {
        toast.warning("Join failed! Please try again", {
          position: toast.POSITION.TOP_RIGHT
        })
      }
    }).catch(e => console.log(e));
  }

  return (
    <div
      className={
        !props.expandflag
          ? "dashboard-container expandable"
          : "dashboard-container"
      }
    >
      <Row>
        <h5 className="text-primary mb-3 x-title">Live Classroom</h5>
        <Col md={5} sm={12}>
          { currentClass.phone === undefined ?
            (
              <img alt="classroomInfo"
                className="w-100 rounded"
                src={require("../../assets/images/Rectangle 43.png")}
              />
            )
          :
            (
              <img alt="classroomInfo"
                className="w-100 rounded"
                src={require(`../../assets/images/${currentClass.photo}`)}
              />
            )
          }
        </Col>
        <Col md={7} sm={12}>
          <h5 className="text-primary mb-3 x-title">Class Information</h5>
          <p><span className="mentor-title">Class Name:</span>
            &nbsp;{currentClass.name}
          </p>
          <p><span className="mentor-title">Place:</span>
            &nbsp;{currentClass.place}
          </p>
          <p><span className="mentor-title">Mentor name:</span>
            &nbsp;{currentClass.mentor}
          </p>
          <p><span className="mentor-title">Mentor PhoneNumber:</span>
            &nbsp;{currentClass.mentor_phonenumber}
          </p>
          <p><span className="mentor-title">Class Members:</span>
            &nbsp;{currentClass.members}
          </p>
          <button
            className="border-primary bg-primary rounded px-4 text-light py-1"
            onClick={() => joinClass(currentClass.id)}
          >Join Now</button>
        </Col>
      </Row>
      <Row>
        <h5 className="text-primary my-3 x-title">Resources</h5>
        <Tabs>
          <TabList className="resourceheader">
            <Tab>
              <div className="py-1 px-3">
                Description
              </div>
            </Tab>
            <Tab>
              <div className="py-1 px-3">
                Reviews
              </div>
            </Tab>
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
              <div className="col-12">
                <div className="d-flex flex-column justify-content-center align-items-start p-2 px-4">
                  <span className="content" style={{ fontSize: "12px" }}>
                    {currentClass.description}
                  </span>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="row">
              <div className="col-12">
                <div className="d-flex flex-column justify-content-center align-items-start p-2 px-4">
                  <span className="content" style={{ fontSize: "12px" }}>
                    {currentClass.reviews}
                  </span>
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </Row>
    </div>
  );
};

export default Classroom;
