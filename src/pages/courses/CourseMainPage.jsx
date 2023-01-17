import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import OnlineCourseItem from '../../components/OnlineCourseItem'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import '../../assets/css/coursespage.css'

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

const CourseMainPage = () => {

  const navigate = useNavigate();
  const handleRoute = (data) =>{
    navigate(`/${data}`);
  }
  const [date, setDate] = useState(new Date());

  return(
    <>
      <div className="d-flex flex-row justify-content-between align-items-center" id="OnlineCourses">
        <p className="text-primary fw-bold" style={{fontSize:'20px'}}>Online Courses</p>
        <a className="text-primary fw-bold" style={{fontSize:'12px', cursor:'pointer', textDecoration:'none'}} onClick={()=> handleRoute('ty/courses/online')}>Read more...</a>
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
          type = "Private Course" image="01_preview_large.png" />
        <OnlineCourseItem title = '(Raeatrwetyrraditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
          type = "Private Course" image="group-photo-sun-2-1-768x512-310x207.jpg" />
        <OnlineCourseItem title = '(RYIewqrqwertqweonal' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
          type = "Private Course" image="ayurveda-services-consultation.jpg" />
      </Carousel>
      <div className="d-flex flex-row justify-content-between align-items-center mt-3" id="Retreats">
        <p className="text-primary fw-bold" style={{fontSize:'20px'}}>Retreats</p>
        <a className="text-primary fw-bold" style={{fontSize:'12px', cursor:'pointer', textDecoration:'none'}}>Read more...</a>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab><span className="fw-bold">Ongoing Retreats</span></Tab>
            <Tab><span className="fw-bold">Past Retreats</span></Tab>
          </TabList>
          <div className="p-1 p-sm-4" style={{border:'1px solid #F96302', borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px', borderTop:'none', marginTop:'-10px'}}>

            <TabPanel className="row">
              <div className="col-12 col-md-6">
                <Carousel style= {{width:100}}
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
                  <div className="d-flex flex-column justify-content-center align-items-start p-2 px-3">
                      <img src={require('../../assets/images/Rectangle 28.png')} width="100%"/>
                  </div>
                </Carousel>
                <div className="d-flex flex-column justify-content-center align-items-start p-2 px-4">
                  <p className="fw-bold sm-title mt-4">Course Title</p>
                  <span className="content" style={{fontSize:'12px'}}>Winter Meditation Retreat with Dr.Kumar in Kerala in 2022</span>
                  <p className="fw-bold sm-title mt-4">Instructors</p>
                  <span className="content" style={{fontSize:'12px'}}>DR.KUMAR</span>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className='calendar-container'>
                  <Calendar
                    onChange={setDate}
                    value={date}
                    selectRange={true}
                  />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-start p-2 px-4">
                  <p className="fw-bold sm-title mt-4">Start And Dates and Times</p>
                  <span className="content" style={{fontSize:'12px'}}>12 pm on 28th December 20 ~ 9 am on 12th January</span>
                  <p className="fw-bold sm-title mt-4">Course Info</p>
                  <span className="content" style={{fontSize:'12px'}}>Saturday, December 28, 2019 @ 12:00 pm – Sunday, January 12, 2020 @ 9:00 am Lords Resort Thrissur, IV/290, Painkulam, Cheruthuruthy P.O, Thrissur Kerala 679531 India</span>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="col-6 col-sm-6">
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
                  <OnlineCourseItem title = '(RYIT 200asdfasdonal' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
                type = "Private Course" image="Rectangle 28.png" />
                  <OnlineCourseItem title = '(Raeatrwetyrraditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
                type = "Private Course" image="Rectangle 28.png" />
                  <OnlineCourseItem title = '(RYIewqrqwertqweonal' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
                type = "Private Course" image="Rectangle 28.png" />
                </Carousel>
              </div>  
            </TabPanel>
          </div>
        </Tabs>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center mt-4" id="InPersonTrainings">
        <p className="text-primary fw-bold" style={{fontSize:'20px'}}>In Person Trainings</p>
        <a className="text-primary fw-bold" style={{fontSize:'12px', cursor:'pointer', textDecoration:'none'}}>Read more...</a>
      </div>
      <div className="row mt-3">
        <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center">
          <img className="w-100" src={require('../../assets/images/Rectangle 43.png')} />
        </div>
        <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center  ps-3 mt-3 mt-md-0 ps-md-6">
          <p className="fw-bold  text-primary mb-3 x-title">Traditional Yoga Weekly Classes in Peoria, Illinois</p>
          <span className="content mt-2">We offer classes from beginner to advanced, to facilitate progressive practice on the path of yoga. The classes are designed to de-stess, detox, release and restore as we integrate various aspects of Yoga in a holistic and integrated way by exploring mind and body.</span>
          <span className="content mt-2">The classes include zero resistance yoga asanas, pranayama (breathing techniques), guided meditation and related theory as explained by Dr Kumar. The class will be a wonderful journey for those who are seeking authentic yogic knowledge and we welcome you to join no matter what stage you are at in your journey</span>
        </div>
        <div className="p-3">

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
            type = "Add to Cart" image="Rectangle 28.png" />
              <OnlineCourseItem title = '(RYIT 200asdfasdonal' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Add to Cart" image="01_preview_large.png" />
              <OnlineCourseItem title = '(Raeatrwetyrraditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Add to Cart" image="group-photo-sun-2-1-768x512-310x207.jpg" />
              <OnlineCourseItem title = '(RYIewqrqwertqweonal' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Add to Cart" image="ayurveda-services-consultation.jpg" />
          </Carousel>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-between align-items-center mt-4" id="PastInTrainings">
        <p className="text-primary fw-bold" style={{fontSize:'20px'}}>Past In-person Trainings</p>
        <a className="text-primary fw-bold" style={{fontSize:'12px', cursor:'pointer', textDecoration:'none'}}>Read more...</a>
      </div>
      <div className="row mt-3">
        <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center  ps-3 mt-3 mt-md-0 ps-md-3">
          <p className="fw-bold text-black mb-3 sm-title">Traditional Yoga Weekly Classes in Peoria, Illinois</p>
          <p className="fw-bold text-black mt-3 s-title">Course duration:<span className="content mt-2"> &nbsp; &nbsp; 3 months</span></p>
          <p className="fw-bold text-black mt-3 s-title">Course timings:<span className="content mt-2"> &nbsp; &nbsp; 5-7 am (Monday to Saturday)</span></p>
          <p className="fw-bold text-black mt-3 s-title">Eligibility:<span className="content mt-2"> &nbsp; &nbsp; Any RYIT200 or any yoga teacher or aspirant with a reasonable level of proficiency in Hatha Yoga</span></p>
        </div>
        <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center">
          <img className="w-100" src={require('../../assets/images/Guru.webp')} />
        </div>
        
        <div className="p-3">

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
            type = "Read More" image="Rectangle 28.png" />
              <OnlineCourseItem title = '(RYIT 200asdfasdonal' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Read More" image="01_preview_large.png" />
              <OnlineCourseItem title = '(Raeatrwetyrraditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Read More" image="group-photo-sun-2-1-768x512-310x207.jpg" />
              <OnlineCourseItem title = '(RYIewqrqwertqweonal' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Read more" image="ayurveda-services-consultation.jpg" />
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default CourseMainPage;