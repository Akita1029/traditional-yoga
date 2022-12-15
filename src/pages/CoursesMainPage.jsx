import React from "react";

import SubTitleBar from "../components/SubTitleBar";
import OnlineCourseItem from "../components/OnlineCourseItem";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const CoursesMainPage = (props) => {
  return (
    <>
      <div className="container">
        <SubTitleBar title='The Courses' detail='Yoga means getting on well with everything in life' />
        <Carousel 
          responsive = {responsive}
          swipeable = {false}
          infinite = {true}
          autoPlay = {true}
          autoPlaySpeed = {1000}
          keyBoardControl = {true}
          customTransition = "all .5"
          transitionDuration = {500}
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
        </Carousel>
        

      </div>
    </>
  );
}

export default CoursesMainPage;