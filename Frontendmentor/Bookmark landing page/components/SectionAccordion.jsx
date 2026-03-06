import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

function SectionAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="p-8 lg:w-[35%] lg:mx-auto lg:mt-20">
      <h2 className='text-[25px] lg:text-[30px] font-medium text-center'>Frequently Asked Questions</h2>
      <p className='text-gray-500 mt-2 mb-10 text-center'>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
      <Accordion elevation={0} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 35, color: '#7e22ce' }} />}
          sx={{
            '&:hover .MuiTypography-root': {
              color: '#FB5859'
            }
          }}
        >
          <Typography>
            What is Bookmark
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
    borderTop: '1px solid #e5e7eb',
    '&:before': { display: 'none' },
    '&.Mui-expanded': { margin: 0 },
  }} elevation={0} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 35, color: '#7e22ce' }} />}
          sx={{
            '&:hover .MuiTypography-root': {
              color: '#FB5859'
            }
          }}
        >
          <Typography>
            How can I request a new browser?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
    borderTop: '1px solid #e5e7eb',
    '&:before': { display: 'none' },
    '&.Mui-expanded': { margin: 0 },
  }} elevation={0} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 35, color: '#7e22ce' }} />}
          sx={{
            '&:hover .MuiTypography-root': {
              color: '#FB5859'
            }
          }}
        >
          <Typography>
            Is there a mobile app?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
    borderTop: '1px solid #e5e7eb',
    '&:before': { display: 'none' },
    '&.Mui-expanded': { margin: 0 },
  }} elevation={0} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 35, color: '#7e22ce' }} />}
          sx={{
            '&:hover .MuiTypography-root': {
              color: '#FB5859'
            }
          }}
        >
          <Typography>
            What about other Chromium browsers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className="flex justify-center">
        <button className="cursor-pointer bg-[#5266DF] text-white p-2.5 px-4 rounded-[5px] mt-10 font-medium">
          More Info
        </button>
      </div>
    </section>
  );
}

export default SectionAccordion;