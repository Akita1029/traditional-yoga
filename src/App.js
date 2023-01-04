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
<<<<<<< HEAD
=======
import OnlineCourseGridPage from './pages/courses/OnlineCourseGridPage';
import OnlineCourseDetailPage from './pages/courses/OnlineCourseDetailPage';
import ProfileCoursePage from './pages/profile/ProfileCoursePage';
>>>>>>> 1f6c867d68b92410c30531fa1f2ad37c8cb6699c
import SignInPage from './pages/SignInPage';

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
<<<<<<< HEAD
          <Route path="courses" element={ <CoursesPage /> }>
            <Route path="main" element={ <CourseMainPage /> }/>
            <Route path="online" element={ <OnlineCoursePage /> } />
          </Route>
=======
          <Route path="courses" element={ <CoursesMainPage /> } />
          <Route path="courses/online" element={ <OnlineCoursePage /> } />
          <Route path="courses/online-grid" element={ <OnlineCourseGridPage /> } />
          <Route path="courses/online/detail" element={ <OnlineCourseDetailPage /> } />
>>>>>>> 1f6c867d68b92410c30531fa1f2ad37c8cb6699c
          <Route path="library" element={ <></> } />
          <Route path="contactus" element={ <></> } />
          <Route path="donations" element={ <></> } />
          {/* <Route path="profile/" element={ <ProfilePage /> } /> */}
          <Route path="profile/course" element={ <ProfileCoursePage /> } />
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
