import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Header/Navbar";
import HospitalCard from "../../Components/HospitalCard/HospitalCard";
import { Box, Container } from "@mui/system";
import { Chip, Stack, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(savedBookings);
  }, []);
  console.log(bookings);

  const formatDate = (day) => {
    if (day) {
      const date = new Date(day);
      return format(date, "E, d LLL");
    } else {
      return null;
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h1" color="primary.dark" textAlign="left">
          My Bookings
        </Typography>
        <Divider />
        {bookings
          ? bookings.map((hospital) => (
              <>
                <Box>
                  <Container>
                    <Stack direction="column" alignItems="left" spacing={1}>
                      <HospitalCard details={hospital} bookingPage="true" />
                      <Stack direction="row" spacing={1} px={2}>
                        <Chip
                          sx={{ borderRadius: 1 }}
                          color="primary"
                          variant="outlined"
                          label={formatDate(hospital.bookingDate)}
                        />
                        <Chip
                          sx={{ borderRadius: 1 }}
                          color="success"
                          variant="outlined"
                          label={hospital.bookingTime}
                        />
                      </Stack>
                    </Stack>
                  </Container>
                </Box>
                <Divider />
              </>
            ))
          : "No Bookings Found"}
      </Container>
    </>
  );
}

export default MyBookings;
