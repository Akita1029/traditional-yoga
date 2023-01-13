import React from "react";
import { useNavigate } from "react-router-dom";

const OnlineCourseItem = (props) => {
  const image = require ("../assets/images/" + props.image);

  const navigate = useNavigate();
  const handleRoute = (data) =>{
    navigate(`/${data}`);
  }

  return (
    <>
     <div className="d-flex flex-column justify-content-center align-items-center p-2 px-3">
         <img src={image} width="100%" height={230} style={{boxShadow:'8px 8px 10px 3px #F96302', borderRadius:'10px'}}/>
         <p className="fw-bold x-title mt-4">{props.title}</p>
         <span className="content" style={{fontSize:'12px', textAlign:'center'}}>{props.description}</span>
         <div className="primary-button mt-4 p-1 pe-3" onClick={()=> handleRoute('ty/courses_detail')}>
           <i className="bi bi-lock px-2"></i>
           {props.type}
          </div>
     </div>
    </>
  );
}

export default OnlineCourseItem;