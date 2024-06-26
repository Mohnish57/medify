import React from "react";

import { Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import banner from "../../../assets/Images/ourFamilesBanner.png";

const OurFamilies = () => {
  return (
    <Box py={5} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Stack direction={{ md: "row", sm: "column" }} alignItems="center">
          <Box textAlign="left">
            <Typography
              variant="p"
              fontSize={18}
              fontWeight={600}
              color="primary.main"
            >
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </Typography>
            <Typography
              variant="h1"
              color="primary.dark"
              fontSize={50}
              fontWeight={550}
            >
              Our Families
            </Typography>
            <Typography variant="p" color="secondary.light">
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </Typography>
          </Box>
          <Box>
            <img src={banner} width={500} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default OurFamilies;
