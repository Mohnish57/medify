import { Box, Container, Stack } from "@mui/system";
import React, { useState } from "react";
import hospitalIcon from "../../assets/Images/hospitalicon.png";
import { Typography, Divider, Button } from "@mui/material";
import thumb from "../../assets/Icons/thumbsup.png";
import Calender from "../../Components/Calender/Calender";

function HospitalCard({
  details,
  availableSlots,
  booking = false,
  handleBooking,
}) {
  const [showCalender, setShowCalender] = useState(false);
  return (
    <Box p={2} mb={2} bgcolor="#ffff" borderRadius={2}>
      <Container maxWidth="xl">
        <Stack
          direction={{ md: "row", sm: "column" }}
          justifyContent="space-between"
          alignItems="end"
        >
          <Box>
            <Stack direction="row" flexWrap="wrap" spacing={2} mb={2}>
              <img src={hospitalIcon} alt="hospital" width={100} />
              <Box textAlign="left">
                <Typography variant="h3" color="primary.main">
                  {details["Hospital Name"]}
                </Typography>
                <Typography variant="h6" fontSize={14} fontWeight={500}>
                  {details["City"]},{details["State"]}
                </Typography>
                <Typography fontSize={12}>
                  {details["Hospital Type"]}
                </Typography>

                <Stack direction="row" spacing={0.5} alignItems="baseline">
                  <Typography fontWeight={600} fontSize={18} color="green">
                    Free
                  </Typography>
                  <Typography
                    color="secondary.light"
                    sx={{ textDecoration: "line-through" }}
                  >
                    500
                  </Typography>
                  <Typography fontSize={14}>
                    Consultation fee at clinic
                  </Typography>
                </Stack>
              </Box>
            </Stack>
            <Divider sx={{ borderStyle: "dashed", mb: 2 }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Stack
                direction="row"
                bgcolor="green"
                spacing={1}
                p={1}
                width="fit-content"
                borderRadius={2}
                alignItems="center"
              >
                <Box component="img" src={thumb} width={15} height={20} />
                <Typography variant="p" fontSize={12} color="white">
                  {details["Hospital overall rating"] === "Not Available"
                    ? 0
                    : details["Hospital overall rating"]}
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box>
            {!booking && (
              <Typography
                textAlign="center"
                color="primary.green"
                fontSize={12}
                fontWeight={500}
                mb={1}
              >
                Available Today
              </Typography>
            )}
            <Button
              size="small"
              onClick={() => setShowCalender((prev) => !prev)}
              variant="contained"
              disableElevation
            >
              <Typography fontSize={{ md: 10 }} fontWeight={500}>
                {!showCalender
                  ? "Book FREE Center Visit"
                  : "Hide Booking Calender"}
              </Typography>
            </Button>
          </Box>
        </Stack>

        {showCalender && (
          <Calender
            details={details}
            availableSlots={availableSlots}
            handleBooking={handleBooking}
          />
        )}
      </Container>
    </Box>
  );
}

export default HospitalCard;
