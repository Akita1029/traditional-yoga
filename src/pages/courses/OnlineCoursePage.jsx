import React from "react";

import SubTitleBar from "../../components/SubTitleBar";
import OnlineCourseListItem from "../../components/OnlineCourseListItem";

import "react-multi-carousel/lib/styles.css";
import Grid from '@mui/material/Grid';

import { styled } from '@mui/material/styles';
import ViewListIcon from '@mui/icons-material/ViewList';
import AppsIcon from '@mui/icons-material/Apps';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { IconButton, Typography } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

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

  const onlineCourses = [
    {
      title: '(RYIT 200) Free Online Traditional',
      description: 'Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.',
      type: 'Private Course',
      thumbnail: 'Rectangle 28.png',
    },
    {
      title: '(RYIT 200) Free Online Traditional',
      description: 'Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.',
      type: 'Private Course',
      thumbnail: 'Rectangle 28.png',
    },
    {
      title: '(RYIT 200) Free Online Traditional',
      description: 'Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.',
      type: 'Private Course',
      thumbnail: 'Rectangle 28.png',
    },
    {
      title: '(RYIT 200) Free Online Traditional',
      description: 'Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.',
      type: 'Private Course',
      thumbnail: 'Rectangle 28.png',
    },
    {
      title: '(RYIT 200) Free Online Traditional',
      description: 'Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.',
      type: 'Private Course',
      thumbnail: 'Rectangle 28.png',
    },
    {
      title: '(RYIT 200) Free Online Traditional',
      description: 'Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.',
      type: 'Private Course',
      thumbnail: 'Rectangle 28.png',
    },
    {
      title: '(RYIT 200) Free Online Traditional',
      description: 'Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.Free course for every one.',
      type: 'Private Course',
      thumbnail: 'Rectangle 28.png',
    },
  ]

  function handleSearchFilter(event) {
    console.log(event.target.value);
  };

  return (
    <div className="container mb-5">
      <SubTitleBar title='The Courses' detail='Yoga means getting on well with everything in life' />
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
        <SearchBox id="outlined-search" label="Enter search key" type="search" 
          onChange={this.handleSearchFilter}/>
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
            }}>Sort</Typography>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </SortCategory>
            <OutlineIconButton size="large"
              sx={{
                mr: 1,
              }}>
              <AppsIcon/>
            </OutlineIconButton>
            <OutlineIconButton size="large"
              sx={{
                mr: 1,
              }}>
              <ViewListIcon/>
            </OutlineIconButton>
          </Box>
        </Box>
      </Box>
      </>
      <Grid container columnSpacing={5} rowSpacing={2}>
        {
          onlineCourses.map(course => {
            return (
            <Grid item xs={12} sm={6} md={4}>
              <OnlineCourseListItem title = {course.title} description = { course.description }
              type={  course.type } image={ course.thumbnail } />
            </Grid>
            );
          })
        }
      </Grid>
    </div>
  );
}

export default OnlineCoursePage;