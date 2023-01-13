import React, { useRef, useEffect, useState } from "react";
import CourseSortItem from "../components/CourseSortItem";
import SubTitleBar from "../components/SubTitleBar";
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Accordion from "react-bootstrap/Accordion";
import { styled } from '@mui/material/styles';
import DonationBlock from "../components/DonationBlock";

const SortCategory = styled(Select)({
  '& fieldset': {
    borderRadius: 10
  },
  width: 250,
})

const DonationPage = (props) => {
  return (
    <div className="container" style={{ marginBottom: 20 }}>
      <SubTitleBar title='Upcoming Course' detail='Traditional Yoga' />
      <div className="d-flex justify-content-end mt-4 mb-5">
        <SortCategory
          defaultValue={'onlineCourses'}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          sx={{
            mr: 1,
          }}
        >
          <MenuItem value='onlineCourses'>Online Courses</MenuItem>
        </SortCategory>
      </div>
      <div className="d-flex">
        <div style={{ width: 150 }}>
          December 2022
        </div>
        <div style={{ width: 'calc(100% - 150px)' }}>
          <hr style={{ borderTop: '2px solid #000' }}></hr>
        </div>
      </div>
      <DonationBlock image='Rectangle 43.png' title='Shoonya program for Men' time='Wendesday, December 7th 2022 - Saturday, December 10th 2022'
        position='Isha Institute of Inner-sciences, 951 Isha LaneMcMinnville, Tennessee, US - 37110'
        amount='USD 540' program='Men’s Program' course='Online Courses'
        content='Shoonya Meditation is a complete path to inner wellbeing. This four-day residential program combines Shakti Chalana Kriya, powerful and purifying breathing techniques utilized to encourage the flow of vital energy into the central energy channel, or sushumna nadi; and Shoonya meditation, an effortless process of conscious non-doing. Together, these practices stimulate the release of physical, mental and emotional blocks and activate the spontaneous expression of vital energy.'
        prerequisites='Completion of the Inner Engineering Program (including the Shambhavi Mahamudra Kriya)' />
    </div>
  );
}

export default DonationPage;