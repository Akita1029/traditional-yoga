import { Col, Row, ProgressBar } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom"

const CourseProgressItem = (props) => {

  const navigate = useNavigate()

  const viewCourse = courseId => {
    navigate(`/tv/courses_detail?courseId=${courseId}`)
  }

  return (
    <>
      <Row className="border-primary-clr rounded p-2 mb-4">
        <Col md={4} sm={12} className="d-flex flex-column justify-content-center">
          <div>
            <img style={{ borderRadius: 15 }} alt="progressItem" width={'100%'} src={require(`../assets/images/${props.image}`)} />
          </div>
        </Col>
        <Col md={8} sm={12}>
          <div className="d-flex flex-column justify-content-between pt-3" style={{ height: '100%', paddingLeft: 15 }}>
            <div>
              <h5 className="mb-2"><b>{props.title}</b></h5>
              <span className="content" style={{ fontSize: 18 }}>
                {props.content}
              </span>
            </div>
            <div className="pb-2">
              <ProgressBar now={props.progress ? props.progress : 0} striped variant="success" className="mt-2 mb-3" />
              <div className="text-center mt-2">
                <button
                  style={{ width: 200 }}
                  className="border-primary rounded px-4 text-black py-1"
                  onClick={() => viewCourse(props.courseId)}
                >
                  View Course
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default CourseProgressItem