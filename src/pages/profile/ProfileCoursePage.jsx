import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CourseProgressItem from "../../components/CourseProgressItem";
import CertificateItem from "../../components/CertificateItem";
import ProfileApplicationFrom from "../../components/ProfileApplicationFormItem";
import config from "../../config/config"
import axios from "axios"
import { toast } from 'react-toastify'

const ProfileCoursePage = (props) => {

  const [email, setEmail] = useState()
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])
  const [pastPractice, setPastPractice] = useState()
  const [certificates, setCertificates] = useState([])
  const [appForms, setAppForms] = useState({})

  useEffect(() => {
    if (localStorage.userToken) {
      let user = JSON.parse(localStorage.userToken).user
      setEmail(user.email)
      axios.post(`${config.server}api/courses/getUserCourses`, {
        email: user.email
        })
        .then(response => {
          setCourses(response.data.courses)
        })
        .catch(error => {
          console.log(error.data)
        })
      axios.post(`${config.server}api/students/getUserPastPractice`, {
        email: user.email
        })
        .then(response => {
          setPastPractice(response.data.pastPractice)
        })
        .catch(error => {
          console.log(error.data)
        })
      axios.post(`${config.server}api/students/getUserCertificates`, {
        email: user.email
        })
        .then(response => {
          setCertificates(response.data)
        })
        .catch(error => {
          console.log(error.data)
        })
      axios.post(`${config.server}api/students/getUserApplicationForm`, {
        email: user.email
        })
        .then(response => {
          setAppForms(response.data.appForms)
        })
        .catch(error => {
          console.log(error.data)
        })
    } else {
      navigate("/")
      toast.warning("You can't access this page", {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }, [])
  return (
    <>
      <Tabs>
        <TabList className="resourceheader">
          <Tab>
            <div className="py-1 px-3">
              My Courses
            </div>
          </Tab>
          <Tab>
            <div className="py-1 px-3">
              Past
            </div>
          </Tab>
          <Tab>
            <div className="py-1 px-3">
              My Certificates
            </div>
          </Tab>
          <Tab>
            <div className="py-1 px-3">
              Application Form
            </div>
          </Tab>
        </TabList>
        <div
          className="p-1 p-sm-4"
          style={{
            border: "1px solid #F96302",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTop: "none",
            marginTop: "-10px",
          }}
        >
          <TabPanel className="row">
            <div className="col-12 px-5">
              { courses && courses.map(course => {
                return (
                <CourseProgressItem
                  courseId = {course.id}
                  image={course.instructor_photo}
                  title={course.title}
                  progress={course.progress}
                  content={course.detail_content} />
                )
              })}
            </div>
          </TabPanel>
          <TabPanel className="row">
            <div className="col-12">
              <div className="d-flex flex-column justify-content-center align-items-start p-2 px-4">
                <span className="content" style={{ fontSize: "12px" }}>
                  { pastPractice ? pastPractice : ""}
                </span>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="row">
            <div className="col-12 px-5">
              { certificates && certificates.map(certification => {
                return (
                <CertificateItem
                  image={certification.bg_image}
                  title={certification.title}
                  content={certification.content} />
                )
              })}
            </div>
          </TabPanel>
          <TabPanel className="row">
            <div className="col-12 px-5">
              <ProfileApplicationFrom
                form = {appForms} />
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
}

export default ProfileCoursePage;