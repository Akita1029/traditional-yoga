import React from "react";

const CourseLessonItem = (props) => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center p-2 px-3"
        style={{
          backgroundColor: props.complete ? '#02f92c1a' : '#F963021A', borderColor: '#E35B03FF', borderLeft: '1px solid', borderRight: '1px solid'
        }}>
        <p className="fw-bold x-title">{props.title}</p>
        <span className="content" style={{ fontSize: '12px' }}>{props.description}</span>
      </div>
    </>
  );
}

export default CourseLessonItem;