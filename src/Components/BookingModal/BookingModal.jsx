import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack, Box, TextField } from "@mui/material";
import { format } from "date-fns";

function BookingModal({ open, setOpen, bookingDetails, showSuccessMessage }) {
  const [email, setEmail] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    const oldBookings = JSON.parse(localStorage.getItem("bookings") || "[]");

    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...oldBookings,
        { ...bookingDetails, bookingEmail: email },
      ])
    );

    showSuccessMessage(true);
    setOpen(false);
  };
  const formatDate = (day) => {
    if (day) {
      const date = new Date(day);
      return format(date, "E, d LLL");
    } else {
      return null;
    }
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          width: "95%",
          maxWidth: 600,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: { xs: 3, md: 4 },
          outline: 0,
          bgcolor: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          Confirm Booking
        </Typography>
        <Typography sx={{ my: 2 }}>
          Please enter your email for
          <Typography component="span" sx={{ ml: 1 }} fontWeight={600}>
            {`${bookingDetails.bookingTime} on ${formatDate(
              bookingDetails.bookingDate
            )}`}
          </Typography>
        </Typography>
        <form onSubmit={handleBooking}>
          <Stack spacing={2} direction="column">
            <TextField
              type="email"
              label="Enter your email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Stack direction="row" spacing={1}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disableElevation
              >
                Confirm
              </Button>
              <Button
                variant="outlined"
                size="large"
                disableElevation
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}

export default BookingModal;
