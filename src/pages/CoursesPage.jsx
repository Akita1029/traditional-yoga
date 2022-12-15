import React from "react";

import {
  Outlet
} from "react-router-dom";

import SubTitleBar from "../components/SubTitleBar";


import '../assets/css/coursespage.css'



const CoursesPage = (props) => {
  

  return (
    <>
      <div className="container">
        <SubTitleBar title='The Courses' detail='Yoga means getting on well with everything in life'/>

        <Outlet />
      </div>
    </>
  );
}

export default CoursesPage;