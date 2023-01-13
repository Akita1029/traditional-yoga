import React from "react";
import { useNavigate } from "react-router-dom";

const CourseLessonItem = (props) => {
  const navigate = useNavigate();
  const handleRoute = (data) =>{
    navigate(`/${data}`);
  }

  return (
    <>
     <div className="d-flex flex-column justify-content-center p-2 px-3" style={{backgroundColor: '#F963021A',
        borderColor: '#E35B03FF', borderLeft: '1px solid', borderRight: '1px solid' }}>
         <p className="fw-bold x-title mt-4">{props.title}</p>
         <span className="content" style={{fontSize:'12px'}}>{props.description}</span>
         {/* <div className="primary-button mt-4 p-1 pe-3" onClick={()=> handleRoute('ty/courses_progress')}>
           <i className="bi bi-lock px-2"></i>
           {props.type}
          </div> */}
     </div>
    </>
  );
}

export default CourseLessonItem;