import React, {useEffect, useState} from "react"
import ReactPlayer from "react-player"
import SubTitleBar from "../../components/SubTitleBar"
import CourseLessonItem from "../../components/CourseLessonItem"
import {useLocation} from "react-router-dom"
import config from "../../config/config"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const CourseProgressPage = () => {

  const navigate = useNavigate()
  const handleRoute = (data) =>{
    navigate(`/${data}`)
  }
  const [courseProgress, setCourseProgress] = useState()

  const search = useLocation().search
  const [courseId, setCourseId] = useState()
  const [AuthUser, setAuthUser] = useState()

  useEffect(() => {
    let user
    if (localStorage.userToken) {
      user = (JSON.parse(localStorage.userToken)).user
      setAuthUser(user)
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
      setCourseId(tmpId)
      axios.post(`${config.server}api/courses/get_course_progress`, {
        courseId: tmpId, userId: user.id
      }).then(response => {
        if (response.status === 200) {
          console.log(response.data)
          setCourseProgress(response.data)
        }
      }).catch(e => console.log(e));
    }
  }, [])

  const updateProgress = progress => {
    axios.post(`${config.server}api/courses/update_course_progress`, {
      unitId: courseProgress.unitId, studentId: courseProgress.studentId, progress: progress
    }).then(response => {
      if(response.status === 200) {
        console.log('Success:', progress)
      }
    })
  }

  return (
    <>
      <div className="container mb-5">
        <SubTitleBar title='The Courses' detail='Course Progress' />
        <div>
          <ReactPlayer url={require('../../assets/test_video.mp4')}
            width='100%'
            height='100%'
            playing={true}
            controls={true} />
          <LinearProgressWithLabel value={courseProgress == undefined ? 0 : courseProgress.done} color={"primary"} />
        </div>
        <p className="fw-bold text-black mt-3 s-title">Playlist</p>
        <div className="row">
          { courseProgress != undefined ?
            (
              courseProgress.units.map(unit => {
                return (
                  <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center mb-4">
                    <CourseLessonItem
                      state={unit.done == undefined || unit.done < 100 ? 1 : 2}
                      title={unit.title}
                      description={unit.content}  />
                  </div>
                )
              })
            ) : (<div />)
          }
        </div>
      </div>
    </>
  )
}

export default CourseProgressPage