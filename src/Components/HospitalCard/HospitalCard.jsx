import { Box, Container, Stack } from "@mui/system";
import React from "react";
import hospitalIcon from "../../assets/Images/hospitalicon.png";
import { Typography, Divider } from "@mui/material";
import thumb from "../../assets/Icons/thumbsup.png";

function HospitalCard({
  name,
  city,
  state,
  type,
  rating,
  availableSlots,
  booking = false,
  handleBooking,
}) {
  return (
    <Box p={2} mb={2} bgcolor="#ffff" borderRadius={2}>
      <Container maxWidth="xl">
        <Stack
          direction={{ md: "row", sm: "column" }}
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Box>
            <Stack direction="row" flexWrap="wrap" spacing={2} mb={2}>
              <img src={hospitalIcon} alt="hospital" width={100} />
              <Box textAlign="left">
                <Typography variant="h3" color="primary.main">
                  {name}
                </Typography>
                <Typography variant="h6" fontSize={14} fontWeight={500}>
                  {city},{state}
                </Typography>
                <Typography fontSize={12}>{type}</Typography>

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
              >
                <Box component="img" src={thumb} width={20} />
                <Typography variant="p" color="white">
                  {rating === "Not Available" ? 0 : rating}
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Box>
            {!booking && (
              <Typography
                textAlign="center"
                color="primary.green"
                fontSize={14}
                fontWeight={500}
                mb={1}
              >
                Available Today
              </Typography>
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default HospitalCard;
