import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

import IconCard from "../IconCard/IconCard";
import drAhmed from "../../../assets/Images/drAhmed.png";
import drlesley from "../../../assets/Images/drLesley.png";
import drAnkur from "../../../assets/Images/drAnkur.png";
import drHeena from "../../../assets/Images/drHeena.png";
import drStevens from "../../../assets/Images/Drstevens.png";

const data = [
  { img: drlesley, title: "Dr. Lesley Hull", designation: "Medicine" },
  { img: drAhmed, title: "Dr. Ahmad Khan", designation: "Neurologist" },
  { img: drHeena, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
  { img: drAnkur, title: "Dr. Ankur Sharma", designation: "Medicine" },
  { img: drStevens, title: "Dr. George Stevens", designation: "Neurologist" },
  { img: drlesley, title: "Dr. Lesley Hull", designation: "Medicine" },
  { img: drAhmed, title: "Dr. Ahmad Khan", designation: "Neurologist" },
  { img: drHeena, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
  { img: drAnkur, title: "Dr. Ankur Sharma", designation: "Medicine" },
  { img: drStevens, title: "Dr. George Stevens", designation: "Neurologist" },
];

function Specialists() {
  return (
    <Box py={6}>
      <Typography variant="h1" mb={3} color="primary.dark" fontSize={40}>
        Our Medical Specialists
      </Typography>

      <Swiper
        slidesPerView={2}
        spaceBetween={40}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1200: { slidesPerView: 4 },
          800: { slidesPerView: 3 },
        }}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <IconCard
              img={item.img}
              title={item.title}
              designation={item.designation}
              specialist
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Specialists;
