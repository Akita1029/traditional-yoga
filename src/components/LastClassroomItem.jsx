import React from "react";

const LastClassroomItem = (props) => {
  const image = require("../assets/images/" + props.image);
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center p-2 px-3">
        <img
          src={image}
          width="280px"
          height="320px"
          style={{
            borderRadius: "10px",
          }}
        />
        <button className="viewclassroom-button mt-4 p-1">
          View Classroom
        </button>
      </div>
    </>
  );
};

export default LastClassroomItem;
