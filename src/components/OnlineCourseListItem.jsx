import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import Badge from '@mui/material/Badge';
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const courseId = props.courseId
  const handleRoute = (data) =>{
    navigate(`/${data}`);
  }
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
                <strong>{ props.title } </strong>
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
              { props.description }
              </Typography>
            </Grid>
            <Grid item>
              <Button color="warning" variant="outlined" startIcon={<LockIcon />}
                sx={{
                  fontSize: 10
                }}
                onClick={()=> handleRoute(`ty/courses_detail?courseId=${courseId}`)}>
                { props.type }
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default OnlineCourseListItem;