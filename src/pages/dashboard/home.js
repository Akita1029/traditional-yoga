import React from "react";
import "../../assets/css/home.css";

import LastClassroomItem from "../../components/LastClassroomItem";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = (props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <div className="w-100 bg-primary">
        dDDD
      </div>
    </>
  );
};

export default Home;
