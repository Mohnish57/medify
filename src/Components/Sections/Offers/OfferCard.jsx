import { Box, Container } from "@mui/material";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import offer1 from "../../../assets/Images/offer1.png";
import offer2 from "../../../assets/Images/offer2.png";

export default function Offers() {
  return (
    <Box py={6}>
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
            600: { slidesPerView: 2 },
            200: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide>
            <Box
              component={"img"}
              src={offer1}
              width={{ lg: 400, md: 300, sm: 250, xs: 400 }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              component={"img"}
              src={offer2}
              width={{ lg: 400, md: 300, sm: 250, xs: 400 }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              component={"img"}
              src={offer1}
              width={{ lg: 400, md: 300, sm: 300, xs: 400 }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              component={"img"}
              src={offer2}
              width={{ lg: 400, md: 300, sm: 300, xs: 400 }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              component={"img"}
              src={offer1}
              width={{ lg: 400, md: 300, sm: 300, xs: 400 }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              component={"img"}
              src={offer2}
              width={{ lg: 400, md: 300, sm: 300, xs: 400 }}
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
}