import React from "react";

import SubTitleBar from "../../components/SubTitleBar";

import "react-multi-carousel/lib/styles.css";
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid #F96302`,
  borderRadius: 10,
  marginTop: 10,
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: '1.5rem'}} />}
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
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10, 
}));


const OnlineCourseGridPage = (props) => {

  const accordionData = [
    {
      id: 1,
      title: 'Todo 1',
      content: 'ascxvzxcvxcvzxdeweffaefsdfjk faskjf oijxcv opzxicjv ozxijv oaisdjv iwjeoiwejioaef piajsd kadjsf sdafoas difjasdofisajf asf'
    },
    {
      id: 2,
      title: 'Todo 2',
      content: 'ascxvzxcvxcvzxdeweffaefsdfjk faskjf oijxcv opzxicjv ozxijv oaisdjv iwjeoiwejioaef piajsd kadjsf sdafoas difjasdofisajf asf'
    },
    {
      id: 3,
      title: 'Todo 3',
      content: 'ascxvzxcvxcvzxdeweffaefsdfjk faskjf oijxcv opzxicjv ozxijv oaisdjv iwjeoiwejioaef piajsd kadjsf sdafoas difjasdofisajf asf'
    }
  ]

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <div className="container mb-5">
        <SubTitleBar title='The Courses' detail='Yoga means getting on well with everything in life' />
        <div>
          { accordionData.map((accordion, index) => (
            <Accordion expanded={expanded === 'panel' + index } onChange={handleChange('panel' + index )}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography> { accordion.title }</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  { accordion.content }
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}

export default OnlineCourseGridPage;