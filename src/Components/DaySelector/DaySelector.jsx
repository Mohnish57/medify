import { Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import {
  format,
  isToday,
  isTomorrow,
  add,
  addDays,
  isEqual,
  startOfDay,
} from "date-fns";

const DaySelector = ({ totalSlots, selectedDate, setSelectedDate }) => {
  //   console.log(selectedDate);
  const date = startOfDay(new Date());

  const dateItems = [];

  for (let i = 0; i <= 7; i++) {
    dateItems.push(add(date, { days: i }));
  }
  const customDateFormat = (day) => {
    if (isToday(day)) {
      return "Today";
    } else if (isTomorrow(day + 1)) {
      return "Tommorow";
    } else {
      return format(day, "E,d LLL");
    }
  };
  const handleClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <Box py={3}>
      <Divider sx={{ mb: 3 }} />
      <Swiper
        slidesPerView={5}
        navigation={true}
        spaceBetween={5}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          767: {
            spaceBetween: 30,
            slidesPerView: 5,
          },
          580: {
            spaceBetween: 20,
            slidesPerView: 4,
          },
          320: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
        }}
      >
        {dateItems.map((day) => (
          <SwiperSlide key={day}>
            <Stack
              textAlign="center"
              onClick={() => handleClick(day)}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                fontSize={{ md: 12 }}
                fontWeight={isEqual(day, selectedDate) ? 600 : 400}
              >
                {customDateFormat(day)}
              </Typography>
              <Typography
                fontSize={8}
                color="green"
                fontWeight={500}
              >{`${totalSlots} Slots Available`}</Typography>
              <Box
                sx={{
                  position: "relative",
                  height: { md: "4px", sm: "3px", xs: "2px" },
                  width: "100%",
                }}
                bgcolor={
                  isEqual(day, selectedDate) ? "primary.main" : "lightgrey"
                }
              ></Box>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default DaySelector;
