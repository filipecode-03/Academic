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
    <section className="p-8">
      <Accordion elevation={0} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 35, color: '#7e22ce' }} />}>
          <Typography variant="h7">
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
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 35, color: '#7e22ce' }} />}>
          <Typography variant="h7">
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
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 35, color: '#7e22ce' }} />}>
          <Typography variant="h7">
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
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 35, color: '#7e22ce' }} />}>
          <Typography variant="h7">
            What about other Chromium browsers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}

export default SectionAccordion;