import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AboutUsPage from './pages/AboutUsPage';
import LandingPage from './pages/LandingPage';
import MainLayout from './pages/MainLayout';
import CoursesPage from './pages/CoursesPage';
import CourseMainPage from './pages/courses/CourseMainPage';
import OnlineCoursePage from './pages/courses/OnlineCoursePage';
import OnlineCourseDetailPage from './pages/courses/OnlineCourseDetailPage'
import CourseProgressPage from './pages/courses/CourseProgressPage'
import SignInPage from './pages/SignInPage';
import ContactUs from './pages/ContactUsPage'
import Donation from './pages/Donation'

import DashboardLayout from './layout/DashboardLayout';
import Home from './pages/dashboard/home';
import Classroom from './pages/dashboard/classroom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/global.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LandingPage /> }/>

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
          <Route path="donations" element={ <Donation /> } />
          {/* <Route path="profile/" element={ <ProfilePage /> } /> */}
          {/* <Route path="profile/course" element={ <ProfileCoursePage /> } /> */}
          {/* <Route path="profile/notifications" element={ <ProfileCoursePage /> } /> */}
        </Route>
          <Route path="/signin" element={ <SignInPage /> } />
        <Route
          path="/dashboard"
          element={<DashboardLayout/>}
        >
          <Route path="" element={<Home/>}/>
          <Route path="classroom" element={<Classroom/>}/>
          <Route path="playlist" element={<></>}/>
          <Route path="library" element={<></>}/>
          <Route path="community" element={<></>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
