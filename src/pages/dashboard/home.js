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
              <div className="d-flex">
                <p className="mentor-title">Class Name : </p>
                <p className="mentor-content">
                  (RYIT 200) Free Online Traditional
                </p>
              </div>
              <div className="d-flex" style={{ marginTop: "15px" }}>
                <p className="mentor-title">Place : </p>
                <p className="mentor-content">
                  Lorem Ipsum is simply dummy text of the print{" "}
                </p>
              </div>
              <div className="d-flex" style={{ marginTop: "15px" }}>
                <p className="mentor-title">Mentor Name : </p>
                <p className="mentor-content">Lorem Ipsum</p>
              </div>
              <div className="d-flex" style={{ marginTop: "15px" }}>
                <p className="mentor-title">Mentor PhoneNumber : </p>
                <p className="mentor-content">+123-456-7890</p>
              </div>
              <div className="d-flex" style={{ marginTop: "15px" }}>
                <p className="mentor-title">Class Members : </p>
                <p className="mentor-content">351</p>
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
            <div className="d-flex">
              <p className="mentor-title">Name : </p>
              <p className="mentor-content">
                (RYIT 200) Free Online Traditional
              </p>
            </div>
            <div className="d-flex" style={{ marginTop: "15px" }}>
              <p className="mentor-title">PhoneNumber : </p>
              <p className="mentor-content">+123-456-7890</p>
            </div>
            <div className="d-flex" style={{ marginTop: "15px" }}>
              <p className="mentor-title">Address : </p>
              <p className="mentor-content">
                Lorem Ipsum is simply dummy text of the pr
              </p>
            </div>
            <p className="fw-bold  text-primary x-title">
              Chief Mentor Information
            </p>
            <div className="d-flex">
              <p className="mentor-title">Name : </p>
              <p className="mentor-content">
                (RYIT 200) Free Online Traditional
              </p>
            </div>
            <div className="d-flex" style={{ marginTop: "15px" }}>
              <p className="mentor-title">PhoneNumber : </p>
              <p className="mentor-content">+123-456-7890</p>
            </div>
            <div className="d-flex" style={{ marginTop: "15px" }}>
              <p className="mentor-title">Address : </p>
              <p className="mentor-content">
                Lorem Ipsum is simply dummy text of the pr
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
