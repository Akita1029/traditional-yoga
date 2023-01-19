import React from "react";
import "../../assets/css/home.css";
import { Row, Col } from "react-bootstrap";
import LastClassroomItem from "../../components/LastClassroomItem";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  };
  return (
    <div
      className={
        !props.expandflag
          ? "dashboard-container expandable"
          : "dashboard-container"
      }
    >
      <Row>
        <Col lg={8} md={12}>
          <h5 className="text-primary mb-3 x-title">Live Classroom</h5>
          <Row>
            <Col lg={4} md={12}>
              <div>
                <img width='100%' style={{ borderRadius: 20 }} alt="dashboard"
                  src={require("../../assets/images/dashboard-image.png")}
                />
                <div className="px-4 position-relative" style={{ bottom: 70 }}>
                  <button className="w-100 border-primary bg-primary rounded px-4 text-light py-1">View Classroom</button>
                </div>
              </div>
            </Col>
            <Col lg={8} md={12}>
              <p className="text-primary x-title">Class Information</p>
              <div>
                <span className="mentor-title">Class Name:</span>&nbsp;
                <span className="mentor-content">
                  (RYIT 200) Free Online Traditional
                </span>
              </div>
              <div style={{ marginTop: "15px" }}>
                <span className="mentor-title">Place : </span>&nbsp;
                <span className="mentor-content">
                  Lorem Ipsum is simply dummy text of the print{" "}
                </span>
              </div>
              <div style={{ marginTop: "15px" }}>
                <span className="mentor-title">Mentor Name : </span>&nbsp;
                <span className="mentor-content">Lorem Ipsum</span>
              </div>
              <div style={{ marginTop: "15px" }}>
                <span className="mentor-title">Mentor PhoneNumber : </span>&nbsp;
                <span className="mentor-content">+123-456-7890</span>
              </div>
              <div style={{ marginTop: "15px" }}>
                <span className="mentor-title">Class Members : </span>&nbsp;
                <span className="mentor-content">351</span>
              </div>
              <p className="text-primary x-title mt-4">
                Class Description
              </p>
              <div style={{ marginTop: "15px" }}>
                <p className="classdescription">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
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
                (RYIT 200) Free Online Traditional
              </span>
            </div>
            <div style={{ marginTop: "15px" }}>
              <span className="mentor-title">PhoneNumber : </span>&nbsp;
              <span className="mentor-content">+123-456-7890</span>
            </div>
            <div style={{ marginTop: "15px" }}>
              <span className="mentor-title">Address : </span>&nbsp;
              <span className="mentor-content">
                Lorem Ipsum is simply dummy text of the pr
              </span>
            </div>
            <p className="text-primary x-title mt-4">
              Chief Mentor Information
            </p>
            <div>
              <span className="mentor-title">Name : </span>&nbsp;
              <span className="mentor-content">
                (RYIT 200) Free Online Traditional
              </span>
            </div>
            <div style={{ marginTop: "15px" }}>
              <span className="mentor-title">PhoneNumber : </span>&nbsp;
              <span className="mentor-content">+123-456-7890</span>
            </div>
            <div style={{ marginTop: "15px" }}>
              <span className="mentor-title">Address : </span>&nbsp;
              <span className="mentor-content">
                Lorem Ipsum is simply dummy text of the pr
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
          <LastClassroomItem image="Rectangle 28.png" />
          <LastClassroomItem image="01_preview_large.png" />
          <LastClassroomItem image="group-photo-sun-2-1-768x512-310x207.jpg" />
          <LastClassroomItem image="ayurveda-services-consultation.jpg" />
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
