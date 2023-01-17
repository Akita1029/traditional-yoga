import React from "react";
import ReactPlayer from "react-player"
import SubTitleBar from "../../components/SubTitleBar";
import CourseLessonItem from "../../components/CourseLessonItem";
import { useNavigate } from "react-router-dom";

const CourseProgressPage = () => {
  
  const navigate = useNavigate();
  const handleRoute = (data) =>{
    navigate(`/${data}`);
  }

  return (
    <>
      <div className="container mb-5">
        <SubTitleBar title='The Courses' detail='Course Progress' />
        <div>
          <ReactPlayer url={require('../../assets/test_video.mp4')} 
            width='100%'
            height='100%'
            playing='true'
            controls='true' />
        </div>
        <p className="fw-bold text-black mt-3 s-title">Playlist</p>
        <div className="row">
          <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center mb-4">
            <CourseLessonItem complete={true} title='Unit1' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer took a galley of type and"  />
          </div>  
          <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center mb-4">
            <CourseLessonItem complete={true} title='Unit2' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer took a galley of type and" />
          </div>
          <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center mb-4">
            <CourseLessonItem title='Unit3' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer took a galley of type and" />
          </div>
          <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center mb-4">
            <CourseLessonItem title='Unit4' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer took a galley of type and" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseProgressPage;