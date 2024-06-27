import { Chip, Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

function TimeSlotPicker({
  availableSlots,
  details,
  handleBooking,
  selectedDate,
}) {
  const CustomChip = (props) => {
    return (
      <Chip
        variant="outlined"
        label={props.label}
        color="primary"
        onClick={props.handleClick}
        sx={{
          borderRadius: "5px",
          fontSize: { xs: 10, md: 14 },
          cursor: "pointer",
          mb: 2,
        }}
      />
    );
  };

  const handleClick = (slot) => {
    handleBooking({ ...details, bookingDate: selectedDate, bookingTime: slot });
  };
  return (
    <>
      <Stack divider={<Divider orientation="horizontal" flexItem />}>
        <Stack direction="column" flexWrap="wrap" textAlign={"left"} gap={1}>
          <Typography>Morning</Typography>
          <Stack direction="row" flexWrap={"wrap"} gap={1}>
            {availableSlots.morning.map((slot) => (
              <CustomChip
                key={slot}
                label={slot}
                handleClick={() => handleClick(slot)}
              />
            ))}
          </Stack>
        </Stack>

        <Stack direction="column" flexWrap="wrap" textAlign={"left"} gap={1}>
          <Typography>Afternoon</Typography>
          <Stack direction="row" flexWrap={"wrap"} gap={1}>
            {availableSlots.afternoon.map((slot) => (
              <CustomChip
                key={slot}
                label={slot}
                onClick={() => handleClick(slot)}
              />
            ))}
          </Stack>
        </Stack>

        <Stack direction="column" flexWrap="wrap" textAlign={"left"} gap={1}>
          <Typography>Evening</Typography>
          <Stack direction="row" flexWrap={"wrap"} gap={1}>
            {availableSlots.evening.map((slot) => (
              <CustomChip
                key={slot}
                label={slot}
                onClick={() => handleClick(slot)}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default TimeSlotPicker;
