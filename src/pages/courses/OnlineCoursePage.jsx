import React, {useState} from "react";
import OnlineCourseListItem from "../../components/OnlineCourseListItem";
import OnlineCourseItem from "../../components/OnlineCourseItem";

import "react-multi-carousel/lib/styles.css";
import Grid from '@mui/material/Grid';
<<<<<<< HEAD
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { Button, IconButton, Typography } from "@mui/material";
import ViewListIcon from '@mui/icons-material/ViewList';
import AppsIcon from '@mui/icons-material/Apps';

import { styled } from '@mui/material/styles';
=======

import { styled } from '@mui/material/styles';
import ViewListIcon from '@mui/icons-material/ViewList';
import AppsIcon from '@mui/icons-material/Apps';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { IconButton, Typography } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
>>>>>>> 1f6c867d68b92410c30531fa1f2ad37c8cb6699c

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
  const [grid, setGrid] = useState("grid");

  var gridRow = [];
  for (var i = 0; i < 9; i++) {
      gridRow.push(
        <Grid item xs={12} sm={6} md={4}>
          <OnlineCourseListItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
          type = "Private Course" image="Rectangle 28.png" />
        </Grid>
      );
  }

  var listRow = [];
  for (var j = 0; j < 9; j++) {
      listRow.push(
        <Grid item xs={12} sm={6} md={4}>
          <OnlineCourseItem title = '(RYIT 200) Free Online Traditional' description = "Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharam For Yoga Teachers and Students to become a ..."
          type = "Private Course" image="Rectangle 28.png" />
        </Grid>
      );
  }

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

      <Grid container columnSpacing={5} rowSpacing={2}>

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