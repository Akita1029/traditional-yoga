import React from "react";

const OnlineCourseItem = (props) => {
  const image = require("../assets/images/" + props.image);
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center p-2 px-3">
        <img src={image} width="100%" height={230} style={{ borderRadius: '10px' }} />
        <div className="px-4 position-relative w-75" style={{ bottom: 50 }}>
          <button className="w-100 border-primary bg-primary rounded px-4 text-light py-1">View Classroom</button>
        </div>
      </div>
    </>
  );
}

export default OnlineCourseItem;