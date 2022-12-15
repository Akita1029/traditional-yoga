import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import Badge from '@mui/material/Badge';

const Img = styled('img')({
  margin: 'auto',
  objectFit: 'cover',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: 10,
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    top: 14,
    left: 35,
    padding: '0 7px',
  },
}));

const OnlineCourseListItem = (props) => {
  const image = require ("../assets/images/" + props.image);
  return (
    <Paper
     variant="outlined"
      sx={{
        p: 2,
        borderRadius: 2,
        maxWidth: 500,
        flexGrow: 1,
        borderColor: "#FE6731"
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <StyledBadge badgeContent={"Private"} color="warning" 
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}>
            <Img alt="complex" src={image} sx={{ width: 100, height: 100 }}/>
          </StyledBadge>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item>
              <Typography variant="subtitle2"
                  sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical',
                  }}>
                <strong>(RYIT 200) Free Online Traditional</strong>
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="body2"
                  sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '2',
                      WebkitBoxOrient: 'vertical',
                  }}>
              Vedic Nutraceuticals provides high quality products for healthy living, informed by the ancient sciences of Yoga and Ayurveda alongside cutting edge contemporary scientific research. Every single input into the body matters. Pramana, standards, as taught by Saint Patanjali are fundamental to Yoga. The standards of ingredient in every product is of the finest and purest. These formulations are what our DNA desperately needs in order to cope with human’s rapidly changing lifestyle and inputs that cause a much higher level of stress and demand on the cell.
              </Typography>
            </Grid>
            <Grid item>
              <Button color="warning" variant="outlined" startIcon={<LockIcon />}
                sx={{
                  fontSize: 10
                }}>
                Private Course
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default OnlineCourseListItem;