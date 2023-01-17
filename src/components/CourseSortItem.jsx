import React from "react";

const CourseSortItem = (props) => {
  const image = require ("../assets/images/" + props.image);
  return(
    <>
      <div className="d-flex flex-row justify-content-start align-items-center mt-5">
        <img className="rounded-2" style={{width:'100px', height:'100px'}} src={image} />
        <div className="ps-4 d-flex flex-column justify-content-start">
          <h5 className="fw-bold">{props.title}</h5>
          <span className="mt-1 content">{props.description}</span>
        </div>
      </div>
    </>
  )
}

export default CourseSortItem;