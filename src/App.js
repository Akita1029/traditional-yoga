import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import LandingPage from "./pages/LandingPage";
import MainLayout from "./pages/MainLayout";
import CoursesPage from "./pages/CoursesPage";
import CourseMainPage from "./pages/courses/CourseMainPage";
import OnlineCoursePage from "./pages/courses/OnlineCoursePage";
import SignInPage from "./pages/SignInPage";
import OnlineCourseDetailPage from './pages/courses/OnlineCourseDetailPage'
import CourseProgressPage from './pages/courses/CourseProgressPage'
import ContactUs from './pages/ContactUsPage'
import DonationPage from './pages/donations/DonationPage'
import UpcomingPage from './pages/donations/UpcomingPage'
import PaymentPage from './pages/donations/PaymentPage'

import DashboardLayout from "./layout/DashboardLayout";
import Home from "./pages/dashboard/home";
import UserSetting from "./pages/dashboard/usersetting";
import Classroom from "./pages/dashboard/classroom";
import CurrentCourse from "./pages/dashboard/currentcourse";
import ProfilePage from './pages/profile/profile'
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/global.css";
import "./assets/css/profile.css";

function App() {
  const [expandflag, setExpandflag] = useState(false);

  const setfunc = (flag) => {
    setExpandflag(flag);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/ty' element={ <MainLayout /> }>
          <Route path="about" element={ <AboutUsPage /> } />
          <Route path="courses" element={ <CoursesPage /> }>
            <Route path="main" element={ <CourseMainPage /> }/>
            <Route path="online" element={ <OnlineCoursePage /> } />            
          </Route>
          <Route path="courses_detail" element={ <OnlineCourseDetailPage /> } />
          <Route path="courses_progress" element={ <CourseProgressPage /> } />
          <Route path="library" element={ <></> } />
          <Route path="contactus" element={ <ContactUs /> } />          
          {/* <Route path="profile/" element={ <ProfilePage /> } /> */}
          {/* <Route path="profile/course" element={ <ProfileCoursePage /> } /> */}
          {/* <Route path="profile/notifications" element={ <ProfileCoursePage /> } /> */}
        </Route>
        <Route path="/donations" element={ <DonationPage /> } >
          <Route path="payment" element={ <PaymentPage /> } />
          <Route path="upcomings" element={ <UpcomingPage /> } />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signin" element={ <SignInPage /> } />
        <Route
          path="/dashboard"
          element={<DashboardLayout setfunc={setfunc} />}
        >
          <Route path="" element={<Home expandflag={expandflag} />} />
          <Route
            path="usersetting"
            element={<UserSetting expandflag={expandflag} />}
          />
          <Route
            path="classroom"
            element={<Classroom expandflag={expandflag} />}
          />
          <Route
            path="currentcourse"
            element={<CurrentCourse expandflag={expandflag} />}
          />
          <Route path="playlist" element={<></>} />
          <Route path="library" element={<></>} />
          <Route path="community" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
