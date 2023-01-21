import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterBar from "../../components/FooterBar";
import HeaderBar from "../../components/HeaderBar";
import SubTitleBar from "../../components/SubTitleBar";
import CoursesManagement from "./CourseManagement";
import MentorsManagement from "./MentorsManagement";
import NotificationsPage from "./NotificationsPage";
import ProfileCoursePage from "./ProfileCoursePage";
import ProfilePage from "./ProfilePage";
import StudentManagementPage from "./StudentsManagement";
import StudentManagementPage4Chief from "./StudentsManagement4Chief";
import { useNavigate } from "react-router-dom"
import "../../assets/css/profile.css";
import { toast } from 'react-toastify';

const ProfileWrapPage = (props) => {
  const [profileState, setProfileState] = useState(1)
  const [AuthUser, setAuthUser] = useState({})
  const navigate = useNavigate()
  const [role, setRole] = useState(4)
  // Save user token to redux
  useEffect(() => {
    if (localStorage.userToken) {
      setAuthUser((JSON.parse(localStorage.userToken)).user)
      setRole((JSON.parse(localStorage.userToken)).user.role)
    } else {
      navigate("/")
      toast.warning("You can't access this page", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }, []);

  return (
    <>
      <HeaderBar />
      <Container>
        <SubTitleBar title='Dashboard' detail='Please check your informations' />
        <Row className="mb-4">
          <Col lg={5}>
            <div className="rounded p-4 text-center border-primary-clr">
              <img style={{ width: 200, height: 200, borderRadius: 200 }} src={require("../../assets/images/Guru.webp")} alt="kumar" />
              <h5 className="mt-4 mb-2"><b>{AuthUser.first_name + " " + AuthUser.last_name}</b></h5>
              <span className="text-primary" style={{ cursor: 'pointer' }}><b>Upload Photo</b></span>
            </div>
            { role == 3 ?
              (
                <div className={`${profileState === 0 ? 'bg-primary text-light' : 'text-primary'} rounded border-primary-clr w-100 py-2 px-3 mt-4`}
                  style={{ cursor: 'pointer' }} onClick={() => setProfileState(0)}>
                  <b>Courses</b>
                </div>
              ) : (<div />)
            }
            { role == 1 || role == 2 || role == 3 ?
              (
                <div>
                  <div className={`${profileState === 1 ? 'bg-primary text-light' : 'text-primary'} rounded border-primary-clr w-100 py-2 px-3 mt-2`}
                    style={{ cursor: 'pointer' }} onClick={() => setProfileState(1)}>
                    <b>Profile</b>
                  </div>
                  <div className={`${profileState === 2 ? 'bg-primary text-light' : 'text-primary'} rounded border-primary-clr w-100 py-2 px-3 mt-2`}
                    style={{ cursor: 'pointer' }} onClick={() => setProfileState(2)}>
                    <b>Notifications</b>
                  </div>
                </div>
              ) : (<div />)
            }

            { role == 2 ?
              (
                <div className={`${profileState === 3 ? 'bg-primary text-light' : 'text-primary'} rounded border-primary-clr w-100 py-2 px-3 mt-2`}
                  style={{ cursor: 'pointer' }} onClick={() => setProfileState(3)}>
                  <b>Student Management</b>
                </div>
              ) : ( <div />)
            }
            { role == 1 ?
              (
                <div>
                  <div className={`${profileState === 4 ? 'bg-primary text-light' : 'text-primary'} rounded border-primary-clr w-100 py-2 px-3 mt-2`}
                    style={{ cursor: 'pointer' }} onClick={() => setProfileState(4)}>
                    <b>Student Management</b>
                  </div>
                  <div className={`${profileState === 5 ? 'bg-primary text-light' : 'text-primary'} rounded border-primary-clr w-100 py-2 px-3 mt-2`}
                    style={{ cursor: 'pointer' }} onClick={() => setProfileState(5)}>
                    <b>Mentors Management</b>
                  </div>
                  <div className={`${profileState === 6 ? 'bg-primary text-light' : 'text-primary'} rounded border-primary-clr w-100 py-2 px-3 mt-2`}
                    style={{ cursor: 'pointer' }} onClick={() => setProfileState(6)}>
                    <b>Courses Management</b>
                  </div>
                </div>
              ): (<div />)
            }
          </Col>
          <Col lg={7}>
            {profileState === 0 && <ProfileCoursePage />}
            {profileState === 1 && <ProfilePage />}
            {profileState === 2 && <NotificationsPage />}
            {profileState === 3 && <StudentManagementPage />}
            {profileState === 4 && <StudentManagementPage4Chief />}
            {profileState === 5 && <MentorsManagement />}
            {profileState === 6 && <CoursesManagement />}
          </Col>
        </Row>
      </Container>
      <FooterBar />
    </>
  )
}

export default ProfileWrapPage