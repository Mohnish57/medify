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
      <Box
        sx={{ background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))" }}
      >
        <Navbar />
        <Container>
          <Typography
            variant="h1"
            color="primary.dark"
            fontSize={{ md: 30, xs: 18 }}
            textAlign="left"
            mb={2}
          >
            My Bookings
          </Typography>

          {bookings.length > 0 ? (
            bookings.map((hospital) => (
              <>
                <Box mb={2} bgcolor={"#fff"} borderRadius={5} py={2}>
                  <Container>
                    <Stack direction="column" alignItems="left" spacing={1}>
                      <HospitalCard details={hospital} bookingPage />
                      <Stack direction="row" spacing={1} px={2}>
                        <Chip
                          sx={{ borderRadius: 1, fontWeight: 600 }}
                          color="primary"
                          variant="outlined"
                          label={formatDate(hospital.bookingDate)}
                        />
                        <Chip
                          sx={{ borderRadius: 1, fontWeight: 600 }}
                          color="success"
                          variant="outlined"
                          label={hospital.bookingTime}
                        />
                      </Stack>
                    </Stack>
                  </Container>
                </Box>
              </>
            ))
          ) : (
            <Typography>No Bookings Found!</Typography>
          )}
        </Container>
      </Box>
    </>
  );
}

export default MyBookings;
