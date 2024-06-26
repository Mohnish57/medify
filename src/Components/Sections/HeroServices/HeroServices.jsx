import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import IconCard from "../IconCard/IconCard";

import doctorIcon from "../../../assets/Icons/doctorIcon.png";
import labsIcon from "../../../assets/Icons/labsIcon.png";
import hospitalIcon from "../../../assets/Icons/hospitalIcon.png";
import capsuleIcon from "../../../assets/Icons/medicineIcon.png";
import ambulanceIcon from "../../../assets/Icons/ambulanceIcon.png";

const services = [
  { name: "Doctors", icon: doctorIcon },
  { name: "Labs", icon: labsIcon },
  { name: "Hospitals", icon: hospitalIcon, active: true },
  { name: "Medical Store", icon: capsuleIcon },
  { name: "Ambulance", icon: ambulanceIcon },
];

function HeroServices() {
  return (
    <Box>
      <Typography mb={4}>You may be looking for</Typography>
      <Grid container columnSpacing={{ xs: 1, md: 2 }} justifyContent="center">
        {services.map((item, index) => (
          <Grid key={index} item xs={4} md={2}>
            <IconCard
              img={item.icon}
              title={item.name}
              active={item.active || false}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HeroServices;
