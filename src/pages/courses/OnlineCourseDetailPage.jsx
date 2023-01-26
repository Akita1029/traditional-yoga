import React, {useEffect, useState} from "react"

import SubTitleBar from "../../components/SubTitleBar"
import "react-multi-carousel/lib/styles.css"
import { styled } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ApplicationForm from "../../components/ApplicationForm"
import {useLocation} from "react-router-dom"
import config from "../../config/config"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid #F96302`,
  borderRadius: 10,
  marginTop: 10,
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: '1.5rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: 10,
  color: "#000",
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: '#F96302'
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
    color: '#FFF'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  "&.Mui-expanded": {
    backgroundColor: "#F96302",
    color: "#fff",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
}))


const OnlineCourseGridPage = (props) => {

  const accordionData = [
    {
      id: 1,
      title: 'Selection Process for the course',
      content: '1. Upon successful registration you will be assigned a mentor who can speak languages you mentioned.\n' +
        '2. Mentor will interact over phone/WhatsApp to check the suitability of the student for the course.\n' +
        '3. If you fail to lift the call, a message will be sent by mentor for interaction. Any failture to response this message within the stipulated time, will lead to rejection of your application.\n' +
        '4. Upon successful interaction only, you will be given access to the course.\n' +
        '5. Please note that, registration of application, does not give any right to access the course. It is sole disretion of the mentor to approve or reject the application after the intereaction'
    },
    {
      id: 2,
      title: 'Course Description',
      content: ''
    },
    {
      id: 3,
      title: 'Expectations from the Aspirants and Students',
      content: ''
    },
    {
      id: 4,
      title: 'GSP: Grusu Shishya Parampara',
      content: ''
    }
  ]

  const [modalShow, setModalShow] = React.useState(false)
  const [expanded, setExpanded] = React.useState('panel0')
  const navigate = useNavigate()

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
  const handleRoute = (data) =>{
    navigate(`/${data}`);
  }

  // const [courseId, setCourseId] = useState()
  // const [AuthUser, setAuthUser] = useState({})
  const [courseDetail, setCourseDetail] = useState()
  const search = useLocation().search

  useEffect(() => {
    let user
    if (localStorage.userToken) {
      user = (JSON.parse(localStorage.userToken)).user
      // setAuthUser(user)
    } else {
      navigate("/")
      toast.warning("You can't access this page", {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    let tmpId = new URLSearchParams(search).get('courseId')
    console.log("TMPID:", tmpId)
    if( tmpId === undefined) {
      navigate("/")
      toast.warning("Please select correct course", {
        position: toast.POSITION.TOP_RIGHT
      })
    } else {
      // setCourseId(tmpId)
      axios.post(`${config.server}api/courses/get_course_detail`, {
        courseId: tmpId, userId: user.id
      }).then(response => {
        if (response.status === 200) {
          console.log(response.data)
          setCourseDetail(response.data)
        }
      }).catch(e => console.log(e));
    }
  }, [])


  return (
    <>
      <div className="container mb-5">
        <SubTitleBar title='The Courses' detail='Course Informations' />
        <div className="row" style={{ paddingBottom: '10px' }}>
          <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8 d-flex flex-column justify-content-center">
            <img className="w-100" style={{ borderRadius: 10 }} src={require('../../assets/images/Rectangle 43.png')} />
          </div>
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4 d-flex flex-column justify-content-center">
            <p className="fw-bold text-black mb-3 sm-title">Course Title:</p>
            <p className="text-black "><span className="content"> {courseDetail !== undefined ? courseDetail.title : ''}</span></p>
            <p className="fw-bold text-black mt-3 s-title">Instructors:</p>
            <p className="fw-bold text-black mt-3 s-title">
              <div className="contact-code d-flex flex-row justify-content-between">
                <div className="d-flex flex-row justify-content-start">
                  {courseDetail === undefined || courseDetail.instructor_photo === undefined ?
                    (
                      <img src={require("../../assets/images/unknown_user.png")}></img>
                    ) :
                    (
                      <img src={require(`../../assets/images/${courseDetail.instructor_photo}`)}></img>
                    )
                  }

                  <div className="d-flex flex-column justifay-content-start ps-2 ">
                    <span className="content">{courseDetail !== undefined ? courseDetail.instructor_name : ''}</span>
                  </div>
                </div>
              </div>
            </p>
            <p className="fw-bold text-black mt-3 s-title">Course Timelines:</p>
            <p className="fw-bold text-black mt-3 s-title"><span className="content mt-2"> RYIT200 Dates: &nbsp;<span className="text-primary fw-bold">{courseDetail !== undefined ? courseDetail.duration : ''}</span></span></p>
            <p className="fw-bold text-black mt-3 s-title"><span className="content mt-2"> RYIT500 Dates: &nbsp;<span className="text-primary fw-bold">{courseDetail !== undefined ? courseDetail.duration_param : ''}</span></span></p>
            {
              courseDetail !== undefined  && courseDetail.status == 1 ?
                (
                  <button className="border-primary bg-primary rounded px-4 text-light fs-5 py-2 text-center"
                    onClick={() => handleRoute(`ty/courses_progress?courseId=${courseDetail.courseId}`)}
                    >Continue Course</button>
                ) :
                (
                  <button className="border-primary bg-primary rounded px-4 text-light fs-5 py-2 text-center"
                    onClick={() => setModalShow(true)}
                    >Take Course</button>
                )
            }

          </div>
        </div>

        <div>
          {accordionData.map((accordion, index) => (
            <Accordion expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography> {accordion.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {accordion.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        <ApplicationForm show={modalShow} handleClose={() => setModalShow(false)} />
      </div>
    </>
  )
}

export default OnlineCourseGridPage