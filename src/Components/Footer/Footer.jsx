import { Grid, Stack, Link, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import React from "react";

import youtubeIcon from "../../assets/Icons/youtubeIcon.png";
import twitterIcon from "../../assets/Icons/twitterIcon.png";
import facebookIcon from "../../assets/Icons/facebookIcon.png";
import pinterestIcon from "../../assets/Icons/pinterestIcon.png";
import logo from "../../assets/Images/logo.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const FooterLink = ({ children }) => {
  return (
    <Link underline="none" color="#ffff" fontWeight={300} fontSize={14}>
      <Stack direction="row" gap={0.5}>
        <KeyboardArrowRightIcon />
        {children}
      </Stack>
    </Link>
  );
};

function Footer() {
  return (
    <Box bgcolor="primary.dark" py={5} textAlign="left">
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item md={4.5} xs={12}>
            <Stack
              spacing={1}
              justifyContent="space-between"
              alignItems={{ md: "center", sm: "left" }}
              height={1}
            >
              <Box component="img" src={logo} width={120} />

              <Stack direction="row" spacing={1}>
                <Box component="img" src={youtubeIcon} width={30} />
                <Box component="img" src={twitterIcon} width={30} />
                <Box component="img" src={facebookIcon} width={30} />
                <Box component="img" src={pinterestIcon} width={30} />
              </Stack>
            </Stack>
          </Grid>

          <Grid item md={2.5} xs={12}>
            <FooterLink>About Us</FooterLink>
            <FooterLink> Our Policy</FooterLink>
            <FooterLink>Our Gallery</FooterLink>
            <FooterLink>Appointment</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
          </Grid>

          <Grid item md={2.5} xs={12}>
            <FooterLink>Orthology</FooterLink>
            <FooterLink> Neurology</FooterLink>
            <FooterLink>Dental care</FooterLink>
            <FooterLink>Opthalomology</FooterLink>
            <FooterLink>Cardiology</FooterLink>
          </Grid>

          <Grid item md={2.5} xs={12}>
            <FooterLink>About Us</FooterLink>
            <FooterLink> Our Policy</FooterLink>
            <FooterLink>Our Gallery</FooterLink>
            <FooterLink>Appointment</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
          </Grid>
        </Grid>

        <Typography
          variant="h5"
          fontSize={14}
          pt={3}
          mt={5}
          color="#ffff"
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
