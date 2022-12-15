import React from "react";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
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

const CourseSearchBar = (props) => {
  return (
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
  )
}

export default CourseSearchBar;
