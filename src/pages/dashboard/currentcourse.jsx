import React, { useEffect, useState } from "react"
import "../../assets/css/currentcourse.css";
import Accordion from "react-bootstrap/Accordion";
import CourseLessonItem from "../../components/CourseLessonItem";
import config from "../../config/config"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { getMenuItemUnstyledUtilityClass } from "@mui/base";

const CurrentCourse = (props) => {
  const navigate = useNavigate()
  const [AuthUser, setAuthUser] = useState({})
  const [currentCourse, setCurrentCourse] = useState()
  const [sections, setSections] = useState([])
  const [activeSections, setActiveSections] = useState([])
  const [sectionUnits, setSectionUnits] = useState({})

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
    axios.post(`${config.server}api/courses/get_current_course`, {
      userId: user.id
    }).then(response => {
      if (response.status === 200) {
        setCurrentCourse(response.data.course_id)
        setSections(response.data.sections)
        if(response.data.sections !== undefined && response.data.sections.length > 0){
          response.data.sections.map(section => {
            getUnitsFromSection(section.id)
          })
        }
      }
    }).catch(e => console.log(e));
  }, [])

  const selectActiveSection = index => {
    let tmp = activeSections
    if(tmp.indexOf(index) > 0) tmp.splice(tmp.indexOf(index), 1)
    else tmp.push(index)
    setActiveSections(tmp)
  }

  const getUnitsFromSection = id => {
    console.log("getUnitsFromSection:", id)
    axios.post(`${config.server}api/courses/get_units_from_section`, {
      sectionId: id
    }).then(response => {
      if(response.status === 200){
        let tmp = sectionUnits
        tmp[`'${id}'`] = response.data
        console.log("TMP:", tmp)
        setSectionUnits({...tmp})
        console.log("GET_SECTION_UNITS:", sectionUnits)
      }
    })
  }

  const viewClassroom = classId => {
    navigate(`/dashboard/classroom?classId=${classId}`)
  }
  console.log("Out Section Units:", sectionUnits)
  return (
    <div
      className={
        !props.expandflag
          ? "dashboard-container expandable"
          : "dashboard-container"
      }
    >
      <h5 className="text-primary">Model View</h5>
      <div className="row">
        <div className="col-md-3">
          <div className="col-sm-12 col-xs-12 d-flex flex-column justify-content-center mb-4">
            {
              sections !== undefined && sections.length > 0 ?
              (
                sections.map(section => {
                  return (
                    <CourseLessonItem
                      state={section.status == undefined ? 0 : 1}
                      title={section.title}
                      description={section.content}
                    />
                  )
                })
              ) :
              ( <div />)
            }
          </div>
        </div>
        <div className="col-md-9">
          <Accordion
            className="currentcourseviewsec"
          >
            {
              sections !== undefined && sections.length > 0 ?
              (
                sections.map(section => {
                  return (
                    <Accordion.Item eventKey={`${section.id}`}>
                      <Accordion.Header
                        className="currentcoursebutton"
                        // onClick={() => getUnitsFromSection(section.id)}
                        >
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                          }}
                        >
                          <p style={{ margin: "0px" }}>{section.title}</p>
                          {section.done == 1 ?
                            (<p
                              style={{
                                margin: "0px",
                                fontSize: "13px",
                                color: "#6da544",
                              }}
                            >
                              Classes Completed
                            </p>)
                            :
                            (<div />)
                          }
                        </div>
                      </Accordion.Header>
                      <Accordion.Body
                        className="accordioncontent"
                        >
                          {
                            console.log("SectionUnits:", sectionUnits[`'${section.id}'`])
                          }
                          {

                          sectionUnits[`'${section.id}'`] !== undefined ?
                            (
                              sectionUnits[`'${section.id}'`].map(unit => {
                                console.log("Unit:", unit)
                                return (
                                  <div className="largesec">
                                    <div className="largesec">
                                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                                        {unit.title}
                                      </p>
                                      <button className="plusbutton">+</button>
                                    </div>
                                    <div className="largesec">
                                      <p style={{ color: "#777", fontSize: "12px" }}>
                                        {unit.duration_param}
                                      </p>
                                      <button
                                        style={{ cursor: 'pointer'}}
                                        className="viewclassroombutton"
                                        onClick={() => viewClassroom(unit.id)}>
                                        View Classroom
                                      </button>
                                    </div>
                                  </div>
                                )
                              })
                            ) : (<div />)
                        }
                      </Accordion.Body>
                    </Accordion.Item>
                  )
                })
              ) :
              ( <div />)
            }
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CurrentCourse;
