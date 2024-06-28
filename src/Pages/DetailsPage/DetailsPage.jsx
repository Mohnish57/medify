import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { Box, Container, Typography } from "@mui/material";
import axios from "axios";
import { Stack } from "@mui/system";
import banner from "../../assets/Images/details_cta.png";
import HospitalCard from "../../Components/HospitalCard/HospitalCard";
import BookingModal from "../../Components/BookingModal/BookingModal";
import AutoHideSnackbar from "../../Components/SnackBar/SnackBar";
import icon from "../../assets/Icons/verifiedIcon.png";

function DetailsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));
  const [hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);

  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  useEffect(() => {
    try {
      const getHospitals = async () => {
        setHospitals([]);
        setIsLoading(true);
        const data = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        const response = await data.data;
        setHospitals(response);
        setIsLoading(false);
      };
      getHospitals();
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }, [state, city]);

  useEffect(() => {
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  }, [searchParams]);

  const handleBookingModal = (details) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };

  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
      >
        <Navbar />
        <Box
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              background: "#fff",
              p: 1,
              width: "90%",
              borderRadius: 2,
              transform: "translateY(50px)",
              mb: "50px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <SearchBar />
          </Container>
        </Box>
        {hospitals.length > 0 && (
          <Box sx={{ py: 3 }}>
            <Container maxWidth="xl">
              <Typography
                fontSize={{ md: 24, sm: 14 }}
                lineHeight={1.1}
                mb={2}
                textAlign={"left"}
                fontWeight={500}
              >
                {`${hospitals.length} medical center${
                  hospitals.length > 1 ? "s" : ""
                } available in `}
                <span style={{ textTransform: "capitalize" }}>
                  {city.toLocaleLowerCase()}
                </span>
              </Typography>

              <Stack direction="row" spacing={2} alignItems={"center"}>
                <img src={icon} height={24} width={24} alt="icon" />
                <Typography
                  color="#787887"
                  fontSize={{ md: 20, sm: 10 }}
                  lineHeight={1.4}
                  textAlign="left"
                >
                  Book appointments with minimum wait-time & verified doctor
                  details
                </Typography>
              </Stack>
            </Container>
          </Box>
        )}
        <Box py={2}>
          <Container maxWidth="xl">
            <Stack direction={{ md: "row", sm: "column" }} gap={4}>
              <Box width={{ xs: 1, md: "calc(100% - 384px)" }}>
                {hospitals.length > 0 &&
                  hospitals.map((item) => (
                    <HospitalCard
                      key={item["Hospital Name"]}
                      details={item}
                      availableSlots={availableSlots}
                      handleBooking={handleBookingModal}
                    />
                  ))}
                {!state && (
                  <Box p={2}>
                    <Typography
                      variant="h3"
                      bgcolor="#fff"
                      p={3}
                      borderRadius={2}
                      textAlign="left"
                    >
                      Please select a state and city
                    </Typography>
                  </Box>
                )}

                {isLoading && (
                  <Typography
                    variant="h3"
                    bgcolor="#fff"
                    p={3}
                    borderRadius={2}
                  >
                    Loading...
                  </Typography>
                )}
              </Box>

              <Box>
                <img src={banner} alt="banner" width={250} />
              </Box>
            </Stack>
          </Container>
        </Box>

        {isModalOpen && (
          <BookingModal
            open={isModalOpen}
            setOpen={setIsModalOpen}
            bookingDetails={bookingDetails}
            showSuccessMessage={setShowBookingSuccess}
          />
        )}
        {showBookingSuccess && (
          <AutoHideSnackbar
            open={showBookingSuccess}
            autoHideDuration={2000}
            message="Booking Successful"
            setOpen={setShowBookingSuccess}
          />
        )}
      </Box>
    </>
  );
}

export default DetailsPage;
