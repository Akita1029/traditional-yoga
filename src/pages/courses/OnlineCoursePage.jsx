import React from "react";

import SubTitleBar from "../../components/SubTitleBar";
import OnlineCourseListItem from "../../components/OnlineCourseListItem";

import "react-multi-carousel/lib/styles.css";
import Grid from '@mui/material/Grid';
import CourseSearchBar from "../../components/CourseSearchBar";


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

const OnlineCoursePage = (props) => {
  return (
    <>
      <div className="container mb-5">
        <SubTitleBar title='The Courses' detail='Yoga means getting on well with everything in life' />
        <CourseSearchBar/>
        <Grid container columnSpacing={5} rowSpacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
            type = "Private Course" image="Rectangle 28.png" />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default OnlineCoursePage;