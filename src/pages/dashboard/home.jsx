import React, { useEffect, useState } from "react"
import "../../assets/css/home.css";
import { Row, Col } from "react-bootstrap";
import LastClassroomItem from "../../components/LastClassroomItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { toast } from 'react-toastify'
import config from "../../config/config"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }
  const navigate = useNavigate();
  const [liveclass, setLiveClass] = useState()
  const [lastclasses, setLastClasses] = useState()
  const [AuthUser, setAuthUser] = useState()

  useEffect(() => {
    let user = ''
    if (localStorage.userToken) {
      user = (JSON.parse(localStorage.userToken)).user
      setAuthUser(user)
    } else {
      navigate("/")
      toast.warning("You can't access this page", {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    axios.post(`${config.server}api/courses/get_live_classrooms`, {
      email: user.email
    }).then(response => {
      if (response.status === 200) {
        setLiveClass(response.data)
      }
    }).catch(e => console.log(e))
    axios.post(`${config.server}api/courses/get_last_classrooms`, {
      email: user.email
    }).then(response => {
      if (response.status === 200) {
        setLastClasses(response.data)
      }
    }).catch(e => console.log(e))
  }, [])

  const viewClassroom = (classId) => {
    navigate(`classroom?classId=${classId}`)
  }

  return (
    <div
      className={
        !props.expandflag
          ? "dashboard-container expandable"
          : "dashboard-container"
      }
    >
      { liveclass !== undefined ?
        (<div>
          <Row>
            <Col lg={8} md={12}>
              <h5 className="text-primary mb-3 x-title">Live Classroom</h5>
              <Row>
                <Col lg={4} md={12}>
                  <div>
                    {liveclass.photo === undefined ?
                      (
                        <img width='100%' style={{ borderRadius: 20 }} alt="dashboard"
                          src={require("../../assets/images/classroom.jpg")}
                        />
                      ) :
                      (
                        <img width='100%' style={{ borderRadius: 20 }} alt="dashboard"
                          src={require(`../../assets/images/uploads/${liveclass.photo}`)}
                        />
                      )
                    }
                    <div className="px-4 position-relative" style={{ bottom: 70 }}>
                      <button
                        className="w-100 border-primary bg-primary rounded px-4 text-light py-1"
                        onClick={() => viewClassroom(liveclass.classId)}
                      >View Classroom</button>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={12}>
                  <p className="text-primary x-title">Class Information</p>
                  <div>
                    <span className="mentor-title">Class Title:</span>&nbsp;
                    <span className="mentor-content">
                      {liveclass.title}
                    </span>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <span className="mentor-title">Place : </span>&nbsp;
                    <span className="mentor-content">
                      {liveclass.place}
                    </span>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <span className="mentor-title">Mentor Name : </span>&nbsp;
                    <span className="mentor-content">{liveclass.mentor}</span>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <span className="mentor-title">Mentor PhoneNumber : </span>&nbsp;
                    <span className="mentor-content">{liveclass.mentor_phonenumber}</span>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <span className="mentor-title">Class Members : </span>&nbsp;
                    <span className="mentor-content">{liveclass.members}</span>
                  </div>
                  <p className="text-primary x-title mt-4">
                    Class Description
                  </p>
                  <div style={{ marginTop: "15px" }}>
                    <p className="classdescription">
                      {liveclass.content}
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={12}>
              <h5 className="text-primary mb-3 x-title">Information</h5>
              <div className="information-section p-3">
                <p className="text-primary x-title">Mentor Information</p>
                <div>
                  <span className="mentor-title">Name : </span>&nbsp;
                  <span className="mentor-content">
                    {liveclass.mentor}
                  </span>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <span className="mentor-title">PhoneNumber : </span>&nbsp;
                  <span className="mentor-content">{liveclass.mentor_phonenumber}</span>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <span className="mentor-title">Address : </span>&nbsp;
                  <span className="mentor-content">
                    {liveclass.mentor_address}
                  </span>
                </div>
                <p className="text-primary x-title mt-4">
                  Chief Mentor Information
                </p>
                <div>
                  <span className="mentor-title">Name : </span>&nbsp;
                  <span className="mentor-content">
                    {liveclass.chief}
                  </span>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <span className="mentor-title">PhoneNumber : </span>&nbsp;
                  <span className="mentor-content">{liveclass.chief_phonenumber}</span>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <span className="mentor-title">Address : </span>&nbsp;
                  <span className="mentor-content">
                    {liveclass.chief_address}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <div className="p-3">
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {
                lastclasses !== undefined && lastclasses.map((per_class, index) => {
                  if(index != 0)
                    return (
                      <LastClassroomItem
                        key = {per_class.classId}
                        image={per_class.photo}
                        classId={per_class.classId}   />
                    )
                })
              }
            </Carousel>
          </div>
        </div>) : (<div />)
      }
    </div>
  )
}

export default Home
