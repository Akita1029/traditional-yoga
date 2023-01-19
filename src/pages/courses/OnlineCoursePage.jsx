import React, {useEffect, useState} from "react";
import OnlineCourseListItem from "../../components/OnlineCourseListItem";
import OnlineCourseItem from "../../components/OnlineCourseItem";

import "react-multi-carousel/lib/styles.css";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import axios from "axios"
import { Button, IconButton, Typography } from "@mui/material";
import ViewListIcon from '@mui/icons-material/ViewList';
import AppsIcon from '@mui/icons-material/Apps';

import { styled } from '@mui/material/styles';

const OutlineIconButton = styled(IconButton)({
  borderRadius: 10,
  border: '1px solid currentColor'
});

const SearchBox = styled(TextField)({
  '& fieldset': {
    borderRadius: 10,
  },
})

const SortCategory = styled(Select)({
  '& fieldset': {
    borderRadius: 10
  },
  width: 250,
})

const OnlineCoursePage = (props) => {
  useEffect(() => {
    axios.get('/api/courses/load_online_courses').then(response => {
      console.log(response)
      if (response.status === 200) {
        setOnlineCourses(response.data)
      }      
    }).catch(e => console.log(e));    
  }, []);

  const [onlineCourses, setOnlineCourses] = useState([]);
  const [grid, setGrid] = useState("grid");

  var gridRow = [];
  onlineCourses.forEach(course =>{
      gridRow.push(
        <Grid item xs={12} sm={6} md={4}>
          <OnlineCourseListItem
            key = {course.id}
            title = {course.title}
            description = {course.detail_content}
            type = {course.category === 0 ? "Private Course" : "Public Course"}
            image={course.instructor_photo} />
        </Grid>
      );
  });

  var listRow = [];
  onlineCourses.forEach(course =>{
    listRow.push(
      <Grid item xs={12} sm={6} md={4}>
        <OnlineCourseItem 
          key = {course.id}
          title = {course.title}
          description = {course.detail_content}
          type = {course.category === 0 ? "Private Course" : "Public Course"}
          image={course.instructor_photo} />            
      </Grid>
    );
  });
        

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          bgcolor: 'background.paper',
          borderRadius: 1,
          alignItems: 'center',
          mb: 3,
        }}
      >
        <SearchBox id="outlined-search" label="Enter search key" type="search" />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            bgcolor: 'background.paper',
            alignItems: 'center',
            borderRadius: 1,
          }}
        >
          <Typography
            sx={{
              mr: 1,
            }}>Sorts</Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              bgcolor: 'background.paper',
              alignItems: 'stretch',
              borderRadius: 1,
            }}
          >
            <SortCategory
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              sx={{
                mr: 1,
              }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </SortCategory>
            <OutlineIconButton size="large" style={{backgroundColor: grid === 'grid' ? '#ddd' : '#fff'}}
              sx={{
                mr: 1,
              }}
              onClick={()=>setGrid('grid')} >
              <AppsIcon/>
            </OutlineIconButton>
            <OutlineIconButton size="large" style={{backgroundColor: grid === 'list' ? '#ddd' : '#fff'}}
              sx={{
                mr: 1,
              }} onClick={()=>setGrid('list')}>
              <ViewListIcon/>
            </OutlineIconButton>
          </Box>
        </Box>
      </Box>

      <Grid container columnSpacing={5} rowSpacing={2} className="mb-4">

        {grid === "list" && (      
          <>{gridRow}</>
        )}

        {grid === 'grid' && (
          <>{listRow}</>
        )}
      </Grid>
    </>
  );
}

export default OnlineCoursePage;