import React from "react";
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";

function IconCard({
  img,
  title,
  specialization = false,
  specialist = false,
  active = false,
  designation,
}) {
  return (
    <Stack
      gap={{ md: 1, sm: 0.5, xs: 0 }}
      alignItems="center"
      justifyContent="center"
      bgcolor={active ? "rgba(42,167,255,0.08)" : "secondary.main"}
      border={active ? "1px solid #2AA7FF" : "none"}
      borderRadius={
        specialist ? { md: "250px 240px 4px 4px", xs: "50px 40px 4px 4px" } : 2
      }
      boxShadow={
        specialization
          ? "0 0 24px rgba(0,0,0,0.09)"
          : specialist
          ? "0 14px 55px -20px rgba(0,0,0,0.09)"
          : "0px 0px 2px grey"
      }
    >
      <Box sx={{ p: 2 }}>
        <Box
          component="img"
          width={designation ? { md: 300, xs: 100 } : { md: 30, xs: 20 }}
          loading="lazy"
          src={img}
          alt={title}
          textAlign="center"
        />
        <Typography
          color="black"
          fontSize={{ md: 18, sm: 14, xs: 12 }}
          fontWeight={specialization ? 600 : 400}
          width="fit-content"
        >
          {title}
        </Typography>

        {designation ? (
          <Typography
            color="primary.main"
            fontWeight="light"
            fontSize={{ md: 20, sm: 14, xs: 12 }}
          >
            {designation}
          </Typography>
        ) : null}
      </Box>
    </Stack>
  );
}

export default IconCard;
