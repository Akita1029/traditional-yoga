import React from "react";
import "../../assets/css/home.css";

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
      <div className="row mt-3">
        <div className="col-md-8">
          <h5
            className="fw-bold  text-primary mb-3 x-title"
            style={{ paddingLeft: "0" }}
          >
            Live Classroom
          </h5>
          <div style={{ marginTop: "35px" }} className="liveclassroomsec">
            <div className="imagesec">
              <img
                style={{
                  width: "450px",
                  height: "466px",
                  borderRadius: "10px",
                }}
                src={require("../../assets/images/dashboard-image.png")}
              />
              <button className="viewclassroombtn">View Classroom</button>
            </div>
            <div>
              <p className="fw-bold  text-primary x-title">Class Information</p>
              <div>
                <span className="mentor-title">Class Name : </span>
                <span className="mentor-content">
                  (RYIT 200) Free Online Traditional
                </span>
              </div>
              <div style={{ marginTop: "15px" }}>
                <span className="mentor-title">Place : </span>
                <span className="mentor-content">
                  Lorem Ipsum is simply dummy text of the print{" "}
                </span>
              </div>
              <div style={{ marginTop: "15px" }}>
                <span className="mentor-title">Mentor Name : </span>
                <span className="mentor-content">Lorem Ipsum</span>
              </div>
              <div style={{ marginTop: "15px" }}>
                <span className="mentor-title">Mentor PhoneNumber : </span>
                <span className="mentor-content">+123-456-7890</span>
              </div>
              <div style={{ marginTop: "15px" }}>
                <span className="mentor-title">Class Members : </span>
                <span className="mentor-content">351</span>
              </div>
              <p
                className="fw-bold  text-primary x-title"
                style={{ marginTop: "10px" }}
              >
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
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h5 className="fw-bold  text-primary mb-3 x-title">Information</h5>
          <div className="information-section">
            <p className="fw-bold  text-primary x-title">Mentor Information</p>
            <div>
              <span className="mentor-title">Name : </span>
              <span className="mentor-content">
                (RYIT 200) Free Online Traditional
              </span>
            </div>
            <div style={{ marginTop: "15px" }}>
              <span className="mentor-title">PhoneNumber : </span>
              <span className="mentor-content">+123-456-7890</span>
            </div>
            <div style={{ marginTop: "15px" }}>
              <span className="mentor-title">Address : </span>
              <span className="mentor-content">
                Lorem Ipsum is simply dummy text of the pr
              </span>
            </div>
            <p className="fw-bold  text-primary x-title">
              Chief Mentor Information
            </p>
            <div>
              <span className="mentor-title">Name : </span>
              <span className="mentor-content">
                (RYIT 200) Free Online Traditional
              </span>
            </div>
            <div style={{ marginTop: "15px" }}>
              <span className="mentor-title">PhoneNumber : </span>
              <span className="mentor-content">+123-456-7890</span>
            </div>
            <div style={{ marginTop: "15px" }}>
              <span className="mentor-title">Address : </span>
              <span className="mentor-content">
                Lorem Ipsum is simply dummy text of the pr
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3">
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          // transitionDuration = {500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <LastClassroomItem image="dashboard-image1.png" />
          <LastClassroomItem image="dashboard-image1.png" />
          <LastClassroomItem image="dashboard-image1.png" />
          <LastClassroomItem image="dashboard-image1.png" />
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
