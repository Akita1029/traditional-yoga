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
  const [liveclasses, setLiveClasses] = useState([])

  useEffect(() => {
    axios.post(`${config.server}api/courses/get_live_classrooms`).then(response => {
      if (response.status === 200) {
        setLiveClasses(response.data)
      }
    }).catch(e => console.log(e));
  }, [])

  const viewClassroom = (classId) => {
    console.log("ClassID:", classId)
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
      { liveclasses.length > 0 ?
        (<div>
          <Row>
            <Col lg={8} md={12}>
              <h5 className="text-primary mb-3 x-title">Live Classroom</h5>
              <Row>
                <Col lg={4} md={12}>
                  <div>
                    {liveclasses[0].photo === undefined ?
                      (
                        <img width='100%' style={{ borderRadius: 20 }} alt="dashboard"
                          src={require("../../assets/images/classroom.jpg")}
                        />
                      ) :
                      (
                        <img width='100%' style={{ borderRadius: 20 }} alt="dashboard"
                          src={require(`../../assets/images/${liveclasses[0].photo}`)}
                        />
                      )
                    }
                    <div className="px-4 position-relative" style={{ bottom: 70 }}>
                      <button
                        className="w-100 border-primary bg-primary rounded px-4 text-light py-1"
                        onClick={() => viewClassroom(liveclasses[0].classId)}
                      >View Classroom</button>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={12}>
                  <p className="text-primary x-title">Class Information</p>
                  <div>
                    <span className="mentor-title">Class Name:</span>&nbsp;
                    <span className="mentor-content">
                      {liveclasses[0].name}
                    </span>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <span className="mentor-title">Place : </span>&nbsp;
                    <span className="mentor-content">
                      {liveclasses[0].place}
                    </span>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <span className="mentor-title">Mentor Name : </span>&nbsp;
                    <span className="mentor-content">{liveclasses[0].mentor}</span>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <span className="mentor-title">Mentor PhoneNumber : </span>&nbsp;
                    <span className="mentor-content">{liveclasses[0].mentor_phonenumber}</span>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <span className="mentor-title">Class Members : </span>&nbsp;
                    <span className="mentor-content">{liveclasses[0].members}</span>
                  </div>
                  <p className="text-primary x-title mt-4">
                    Class Description
                  </p>
                  <div style={{ marginTop: "15px" }}>
                    <p className="classdescription">
                      {liveclasses[0].description}
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
                    {liveclasses[0].mentor}
                  </span>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <span className="mentor-title">PhoneNumber : </span>&nbsp;
                  <span className="mentor-content">{liveclasses[0].mentor_phonenumber}</span>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <span className="mentor-title">Address : </span>&nbsp;
                  <span className="mentor-content">
                    {liveclasses[0].mentor_address}
                  </span>
                </div>
                <p className="text-primary x-title mt-4">
                  Chief Mentor Information
                </p>
                <div>
                  <span className="mentor-title">Name : </span>&nbsp;
                  <span className="mentor-content">
                    {liveclasses[0].chief}
                  </span>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <span className="mentor-title">PhoneNumber : </span>&nbsp;
                  <span className="mentor-content">{liveclasses[0].chief_phonenumber}</span>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <span className="mentor-title">Address : </span>&nbsp;
                  <span className="mentor-content">
                    {liveclasses[0].chief_address}
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
                liveclasses.map((classe, index) => {
                  if(index != 0)
                    return (
                      <LastClassroomItem
                        image={classe.photo}
                        classId={classe.id}   />
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
