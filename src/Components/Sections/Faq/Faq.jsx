import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import plusIcon from "../../../assets/Icons/plusIcon.png";
import { Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import banner from "../../../assets/Images/faqbanner.jpg";
import Button from "@mui/material/Button";

const PlusIcon = () => {
  return <img src={plusIcon} width={20} />;
};

const data = [
  {
    question: "Why Choose Medify for your family?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur officia in quos expedita ex a, rem exercitationem repudiandae sequi, debitis, praesentium ipsa.",
  },
  {
    question: "Why we are different from Others?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur officia in quos expedita ex a, rem exercitationem repudiandae sequi, debitis, praesentium ipsa.",
  },
  {
    question: "Why you should trust us?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur officia in quos expedita ex a, rem exercitationem repudiandae sequi, debitis, praesentium ipsa.",
  },
  {
    question: "How to get Appointment in emergency cases?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur officia in quos expedita ex a, rem exercitationem repudiandae sequi, debitis, praesentium ipsa.",
  },
];

const Faq = () => {
  return (
    <Box py={5}>
      <Container>
        <Typography variant="p" color="primary.main" fontWeight={600}>
          Get Your Answer
        </Typography>
        <Typography variant="h1" color="primary.dark" fontSize={40}>
          Frequently Asked Questions
        </Typography>
        <Stack direction={{ md: "row", sm: "column" }} alignItems="center">
          <Box>
            <img src={banner} width={500} alt="FAQbanner" />
          </Box>
          <Box textAlign="left">
            <div>
              {data.map((item, index) => (
                <Accordion key={index}>
                  <AccordionSummary expandIcon={<PlusIcon />}>
                    <Typography fontWeight={600} color="primary.dark">
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>{item.answer}</AccordionDetails>
                </Accordion>
              ))}
            </div>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Faq;
