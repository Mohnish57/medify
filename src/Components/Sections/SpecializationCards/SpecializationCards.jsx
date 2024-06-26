import { Grid, Typography, Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import IconCard from "../../Sections/IconCard/IconCard";

import dentistryIcon from "../../../assets/Icons/labsIcon.png";
import primaryCareIcon from "../../../assets/Icons/stethoscopeIcon.png";
import cardiologyIcon from "../../../assets/Icons/cardiologyIcon.png";
import MriIcon from "../../../assets/Icons/mriIcon.png";
import testTubeIcon from "../../../assets/Icons/testTube.png";
import psychologistIcon from "../../../assets/Icons/psycologistIcon.png";
import labIcon from "../../../assets/Icons/labsIcon.png";
import xrayIcon from "../../../assets/Icons/xrayIcon.png";

const data = [
  { icon: dentistryIcon, title: "Dentistry" },
  { icon: primaryCareIcon, title: "Primary Care" },
  { icon: cardiologyIcon, title: "Cardiology" },
  { icon: MriIcon, title: "MRI Resonance" },
  { icon: testTubeIcon, title: "Blood Test" },
  { icon: psychologistIcon, title: "Psychologist" },
  { icon: labIcon, title: "Laboratory" },
  { icon: xrayIcon, title: "X-Ray" },
];

function SpecializationCards() {
  return (
    <Box sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)", py: 6 }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          component="h1"
          mb={5}
          fontSize={40}
          color="primary.dark"
        >
          Find By Specialization
        </Typography>
        <Grid container spacing={{ xs: 1, md: 3 }} mb={5}>
          {data.map((item) => (
            <Grid item md={3} xs={4} key={item.title}>
              <IconCard img={item.icon} title={item.title} specialization />
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" size="large" disableElevation>
          View All
        </Button>
      </Container>
    </Box>
  );
}

export default SpecializationCards;
