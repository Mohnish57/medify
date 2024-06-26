import React from "react";

import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import banner from "../../../assets/Images/mobileApp.jpg";
import arrowIcon from "../../../assets/Icons/arrowIcon.png";
import SmsForm from "./SmsForm";
import playstore from "../../../assets/Icons/playstore.png";
import apple from "../../../assets/Icons/apple-logo.png";

const DownloadApp = () => {
  return (
    <Box pt={5} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Stack
          direction={{ md: "row", sm: "column" }}
          alignItems="center"
          spacing={10}
        >
          <Box>
            <img src={banner} width={500} />
          </Box>
          <Box textAlign="left" sx={{ position: "relative" }}>
            <img
              src={arrowIcon}
              width={50}
              style={{ position: "absolute", left: "-15%", top: 30 }}
            />
            <Typography
              variant="h1"
              fontSize={40}
              fontWeight={700}
              color="primary.dark"
            >
              Download the
            </Typography>
            <Typography
              variant="h1"
              color="primary.main"
              fontSize={50}
              fontWeight={550}
            >
              Medify{" "}
              <Typography variant="span" color="primary.dark">
                App
              </Typography>
            </Typography>
            <SmsForm />
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 2 }}
              my={2}
            >
              <Button
                sx={{
                  bgcolor: "#333",
                  color: "#fff",
                  py: 1.5,
                  borderRadius: 1.5,
                }}
                size={"large"}
                startIcon={<img src={playstore} height={24} />}
                variant="contained"
                disableElevation
              >
                Google Play
              </Button>
              <Button
                sx={{
                  bgcolor: "#333",
                  color: "#fff",
                  py: 1.5,
                  borderRadius: 1.5,
                }}
                size="large"
                startIcon={<img src={apple} height={24} />}
                variant="contained"
                disableElevation
              >
                App Store
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default DownloadApp;
