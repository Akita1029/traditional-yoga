import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
// Import View Components

import AboutUsPage from "./pages/AboutUsPage"
import LandingPage from "./pages/LandingPage"
import MainLayout from "./pages/MainLayout"
import CoursesPage from "./pages/CoursesPage"
import CourseMainPage from "./pages/courses/CourseMainPage"
import OnlineCoursePage from "./pages/courses/OnlineCoursePage"
import SignInPage from "./pages/auth/SignInPage"
import SignUpPage from "./pages/auth/SignUpPage"
import ForgetPage from "./pages/auth/ForgetPage"
import RequestResetPage from "./pages/auth/RequestResetPage"
import ResetPasswordPage from "./pages/auth/ResetPasswordPage"

import OnlineCourseDetailPage from "./pages/courses/OnlineCourseDetailPage"
import CourseProgressPage from "./pages/courses/CourseProgressPage"
import ContactUs from "./pages/ContactUsPage"
import DonationPage from "./pages/donations/DonationPage"
import UpcomingPage from "./pages/donations/UpcomingPage"
import PaymentPage from "./pages/donations/PaymentPage"

// Admin Page

import AdminDashboardLayout from "./layout/AdminDashboardLayout"
import AdminUserManagement from "./pages/dashboard/admin/user"
import AdminCourseManagement from "./pages/dashboard/admin/course"

// User Page
import DashboardLayout from "./layout/DashboardLayout"
import Home from "./pages/dashboard/home"
import UserSetting from "./pages/dashboard/usersetting"
import Classroom from "./pages/dashboard/classroom"
import CurrentCourse from "./pages/dashboard/currentcourse"
// Profile Page
import ProfileCoursePage from "./pages/profile/ProfileCoursePage"
// Import privateroute
import PrivateRoute from "./validation/PrivateRoute"

// Not Found page
import Pagenotfound from "./validation/Pagenotfound";

// Import Styles
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileWrapPage from "./pages/profile/ProfileWrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/global.css";
import "./assets/css/profile.css";
import { setCurrentUser } from "./actions/auth";

// import "bootstrap/dist/css/bootstrap.min.css";

// import { Dashboard } from "@mui/icons-material";

function App() {
  const [expandflag, setExpandflag] = useState(false);
  const [auth, setAuth] = useState();
  // Save user token to redux
  useEffect(() => {
    if (localStorage.userToken) {
      store.dispatch(setCurrentUser(JSON.parse(localStorage.userToken)));
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  const setfunc = (flag) => {
    setExpandflag(flag);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/ty" element={<MainLayout />}>
            <Route path="about" element={<AboutUsPage />} />
            <Route path="courses" element={<CoursesPage />}>
              <Route path="main" element={<CourseMainPage />} />
              <Route path="online" element={<OnlineCoursePage />} />
            </Route>
            <Route path="courses_detail" element={<OnlineCourseDetailPage />} />
            <Route path="courses_progress" element={<CourseProgressPage />} />
            <Route path="library" element={<></>} />
            <Route path="contactus" element={<ContactUs />} />
          </Route>

          {/* <Route path="profile/" element={ <ProfilePage /> } /> */}
          {/* <Route path="profile/course" element={ <ProfileCoursePage /> } /> */}
          {/* <Route path="profile/notifications" element={ <ProfileCoursePage /> } /> */}
          <Route path="/donations" element={<DonationPage />}>
            <Route path="payment" element={<PaymentPage />} />
            <Route path="upcomings" element={<UpcomingPage />} />
          </Route>
          <Route path="/profile" element={<ProfileWrapPage />} />
          <Route path="/forget" element={<ForgetPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/requestreset" element={<RequestResetPage />} />
          <Route path="/reset" element={<ResetPasswordPage />} />
          {auth === true ? (
            <>
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
              <Route
                path="/admindashboard"
                element={<AdminDashboardLayout setfunc={setfunc} />}
              >
                <Route
                  path="user_manage"
                  element={<AdminUserManagement expandflag={expandflag} />}
                />
                <Route
                  path="course_manage"
                  element={<AdminCourseManagement expandflag={expandflag} />}
                />
              </Route>
            </>
          ) : (
            <></>
          )}
          <Route exact path="/*" element={<Pagenotfound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
