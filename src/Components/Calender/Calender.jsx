import React, { useState } from "react";
import DaySelector from "../DaySelector/DaySelector";
import TimeSlotPicker from "../TimeSlotPicker/TimeSlotPicker";
import { startOfDay } from "date-fns";
import { Box } from "@mui/system";

function Calender({ details, availableSlots, handleBooking }) {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const totalSlots =
    availableSlots.morning.length +
    availableSlots.afternoon.length +
    availableSlots.evening.length;
  //   console.log(new Date(), startOfDay(new Date()));
  return (
    <>
      <Box>
        <DaySelector
          totalSlots={totalSlots}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <TimeSlotPicker
          availableSlots={availableSlots}
          selectedDate={selectedDate}
          details={details}
          handleBooking={handleBooking}
        />
      </Box>
    </>
  );
}

export default Calender;
