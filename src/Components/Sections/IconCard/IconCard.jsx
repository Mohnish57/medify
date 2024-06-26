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
      spacing={2}
      alignItems="center"
      bgcolor={active ? "rgba(42,167,255,0.08)" : "secondary.main"}
      border={active ? "1px solid #2AA7FF" : "none"}
      borderRadius={specialist ? "250px 240px 4px 4px" : 2}
      boxShadow={
        specialization
          ? "0 0 24px rgba(0,0,0,0.09)"
          : specialist
          ? "0 14px 55px -20px rgba(0,0,0,0.09)"
          : "0px 0px 2px grey"
      }
    >
      <Box sx={{ p: 2 }}>
        <img
          width={designation ? 350 : 50}
          loading="lazy"
          src={img}
          alt={title}
        />
        <Typography
          color="black"
          fontSize={18}
          fontWeight={specialization ? 600 : 400}
        >
          {title}
        </Typography>
        {designation ? (
          <Typography
            color="primary.main"
            variant="h2"
            fontWeight="light"
            fontSize={12}
          >
            {designation}
          </Typography>
        ) : null}
      </Box>
    </Stack>
  );
}

export default IconCard;
