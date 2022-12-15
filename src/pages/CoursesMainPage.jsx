import React from "react";

import SubTitleBar from "../components/SubTitleBar";
import OnlineCourseItem from "../components/OnlineCourseItem";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import '../assets/css/coursespage.css'

const responsive = {
  superLargeDesktop: {
    breakpoint : {max:4000, min:3000},
    items:5,
    slidesToSlide: 5
  },
  desktop : {
    breakpoint : {max:3000, min:1024},
    items:3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint : {max:1024, min:600},
    items:2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint : {max:600, min:0},
    items:1,
    slidesToSlide: 1
  },

}

const responsive_one = {
  mobile: {
    breakpoint : {max:3000, min:0},
    items:1,
    slidesToSlide: 1
  },
}

const CoursesMainPage = (props) => {
  return (
    <>
      <div className="container">
        <SubTitleBar title='The Courses' detail='Yoga means getting on well with everything in life'/>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <p className="text-primary fw-bold" style={{fontSize:'20px'}}>Online Courses</p>
          <a className="text-primary fw-bold" style={{fontSize:'12px', cursor:'pointer', textDecoration:'none'}}>Read more...</a>
        </div>
        <Carousel 
          responsive = {responsive}
          swipeable = {false}
          draggable = {true}
          infinite = {true}
          autoPlay = {true}
          autoPlaySpeed = {3000}
          keyBoardControl = {true}
          // transitionDuration = {500}
          containerClass = "carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            <OnlineCourseItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
          type = "Private Course" image="Rectangle 28.png" />
            <OnlineCourseItem title = '(RYIT 200asdfasdonal' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
          type = "Private Course" image="Rectangle 28.png" />
            <OnlineCourseItem title = '(Raeatrwetyrraditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
          type = "Private Course" image="Rectangle 28.png" />
            <OnlineCourseItem title = '(RYIewqrqwertqweonal' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
          type = "Private Course" image="Rectangle 28.png" />
        </Carousel>
        <div className="d-flex flex-row justify-content-between align-items-center mt-3">
          <p className="text-primary fw-bold" style={{fontSize:'20px'}}>Retreats</p>
          <a className="text-primary fw-bold" style={{fontSize:'12px', cursor:'pointer', textDecoration:'none'}}>Read more...</a>
        </div>
        <div>
        <Tabs>
          <TabList>
            <Tab disabled><span className="text-white">Disable</span></Tab>
            <Tab selected><span className="fw-bold">Ongoing Retreats</span></Tab>
            <Tab><span className="fw-bold">Past Retreats</span></Tab>
          </TabList>
          <div style={{border:'1px solid #F96302', borderTop:'none', padding:'50px', marginTop:'-10px'}}>
            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <div className="col-12 col-sm-6">
                <Carousel style= {{width:400}}
                  responsive = {responsive_one}
                  swipeable = {false}
                  draggable = {true}
                  infinite = {true}
                  autoPlay = {true}
                  autoPlaySpeed = {3000}
                  keyBoardControl = {true}
                  // transitionDuration = {500}
                  containerClass = "carousel-container"
                >
                  <OnlineCourseItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
                type = "Private Course" image="Rectangle 28.png" />
                  <OnlineCourseItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
                  type = "Private Course" image="Rectangle 28.png" />
                  <OnlineCourseItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
                  type = "Private Course" image="Rectangle 28.png" />
                  <OnlineCourseItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
                  type = "Private Course" image="Rectangle 28.png" />
                   {/* <div className="d-flex flex-column justify-content-center align-items-center p-2 px-3">
                      <img src={image} width="100%" style={{boxShadow:'8px 8px 10px 3px #F96302', borderRadius:'10px'}}/>
                      <p className="fw-bold x-title mt-4">{props.title}</p>
                      <span className="content" style={{fontSize:'12px', textAlign:'center'}}>{props.description}</span>
                      <div className="primary-button mt-4 p-1 pe-3">
                        <i className="bi bi-lock px-2"></i>
                        {props.type}
                        </div>
                  </div> */}
                </Carousel>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </div>
        </Tabs>
        </div>
      </div>
    </>
  );
}

export default CoursesMainPage;