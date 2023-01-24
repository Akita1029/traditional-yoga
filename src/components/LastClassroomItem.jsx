import React from "react"
import { useNavigate } from "react-router-dom"

const OnlineCourseItem = (props) => {
  const navigate = useNavigate();
  let image = ''
  if(props.image == undefined )
    image = require("../assets/images/classroom.jpg");
  else
    image = require("../assets/images/" + props.image);

  const viewClassroom = (classId) => {
    console.log("ClassID:", classId)
    navigate(`classroom?classId=${classId}`)
  }

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center p-2 px-3">
        <img src={image} width="100%" height={230} style={{ borderRadius: '10px' }} />
        <div className="px-4 position-relative w-75" style={{ bottom: 50 }}>
          <button
            className="w-100 border-primary bg-primary rounded px-4 text-light py-1"
            onClick={() => viewClassroom(props.classId)}>
              View Classroom
          </button>
        </div>
      </div>
    </>
  );
}

export default OnlineCourseItem;