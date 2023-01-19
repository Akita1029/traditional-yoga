import React from "react";

import SubTitleBar from "../../components/SubTitleBar";
import OnlineCourseListItem from "../../components/OnlineCourseListItem";

import "react-multi-carousel/lib/styles.css";
import Grid from '@mui/material/Grid';

import ProfileLeftView from "./ProfileLeftView";

const ProfileCoursePage = (props) => {

  return (
    <div className="container mb-5">
      <SubTitleBar title='Profile' detail='Please check your informations.' />
      <Grid container direction="column">
        <Grid item>
          <ProfileLeftView/>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileCoursePage;