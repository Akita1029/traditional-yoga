import React, { useRef, useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { toast } from 'react-toastify';
import axios from "axios";
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
import config from "../../config/config";
const ProfileWrapPage = (props) => {
  const [profileState, setProfileState] = useState(1)
  const [AuthUser, setAuthUser] = useState({})
  const navigate = useNavigate()
  const [role, setRole] = useState(4)
  const inputFile = useRef(null)

  // Save user token to redux
  useEffect(() => {
    if (localStorage.userToken) {
      setAuthUser((JSON.parse(localStorage.userToken)).user)
      setRole((JSON.parse(localStorage.userToken)).user.role)
    } else {
      navigate("/")
      toast.warning("You can't access this page", {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }, [])

  // const [image, setImage] = useState({ preview: '', data: '' })

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   let formData = new FormData()
  //   formData.append('file', image.data)
  //   fetch('http://localhost:8000/uploadAvatar', {
  //     method: 'POST',
  //     body: formData,
  //   }).then((response) => response.json())
  //     .then((data) => {
  //       axios.post(`${config.server}api/users/updateAvatar`, { AuthUser, filename: data.filename }).then((res) => {
  //         console.log(res.status === 200)
  //         if (res.status === 200) {
  //           toast.success('Uploaded successfully')
  //         } else {
  //           toast.warning('Upload failed')
  //         }
  //       });
  //     })
  // }

  const setSelectedImage = (e) => {
    e.preventDefault()
    const image = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    let formData = new FormData()
    formData.append('file', image.data)
    fetch(`${config.server}uploadAvatar`, {
      method: 'POST',
      body: formData,
    }).then((response) => response.json())
      .then((data) => {
        axios.post(`${config.server}api/users/updateAvatar`, { AuthUser, filename: data.filename }).then((res) => {
          if (res.status === 200) {
            toast.success('Updated  successfully')
            let user = {...AuthUser}
            user.avatar = data.filename
            setAuthUser(user)
            let token = JSON.parse(localStorage.userToken)
            token.user.avatar = data.filename
            localStorage.setItem("userToken", JSON.stringify(token))
          } else {
            toast.warning('Update failed')
          }
        });
      })
  }

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  return (
    <>
      <HeaderBar />
      <Container>
        <SubTitleBar title='Dashboard' detail='Please check your informations' />
        <Row className="mb-4">
          <Col lg={5}>
            <div className="rounded p-4 text-center border-primary-clr">

              {AuthUser.avatar === undefined || AuthUser.avatar === null ?
                (
                  <img style={{ width: 200, height: 200, borderRadius: 200 }}
                    src={require(`../../assets/images/unknown_user.png`)} alt="kumar" />
                ) :
                (
                  <img style={{ width: 200, height: 200, borderRadius: 200 }}
                    src={require(`../../assets/images/uploads/${AuthUser.avatar}`)} alt="kumar" />
                )
              }
              <h5 className="text-primary mt-4 mb-2"><b>{AuthUser.first_name + " " + AuthUser.last_name}</b></h5>
              <div className="d-flex justify-content-center">
                <input ref={inputFile} type="file" name="myImage" id="selectPhoto"
                  style={{display: 'none'}}
                  onChange={(e) => {
                    setSelectedImage(e)
                  }}
                />
                <a style={{cursor: 'pointer'}} onClick={onButtonClick}>
                  <h5 className="text-primary mt-4 mb-2"><b>Upload Photo</b></h5>
                </a>
                {/* <form className="w-50" onSubmit={handleSubmit}>
                  <input className="form-control" type='file' name='file' onChange={handleFileChange}></input>
                  <Button className="w-100 mt-2" type='submit'>Submit</Button>
                </form> */}
              </div>
              {/* <span className="text-primary" style={{ cursor: 'pointer' }}><b>Upload Photo</b></span> */}
            </div>
            {role === 3 ?
              (
                <div className={`${profileState === 0 ? 'bg-primary text-light' : 'text-primary'} rounded border-primary-clr w-100 py-2 px-3 mt-4`}
                  style={{ cursor: 'pointer' }} onClick={() => setProfileState(0)}>
                  <b>Courses</b>
                </div>
              ) : (<div />)
            }
            {role === 1 || role === 2 || role === 3 ?
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

            {role === 2 ?
              (
                <div className={`${profileState === 3 ? 'bg-primary text-light' : 'text-primary'} rounded border-primary-clr w-100 py-2 px-3 mt-2`}
                  style={{ cursor: 'pointer' }} onClick={() => setProfileState(3)}>
                  <b>Student Management</b>
                </div>
              ) : (<div />)
            }
            {role === 1 ?
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
              ) : (<div />)
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