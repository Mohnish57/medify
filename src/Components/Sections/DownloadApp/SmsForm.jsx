import React from "react";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

function SmsForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("SMS Sent");
  };
  return (
    <Box>
      <Typography
        variant="h6"
        fontSize={18}
        fontWeight={500}
        color="primary.dark"
      >
        Get the link to download the app
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          sx={{
            border: "1px solid #F0F0F0",
            flex: 1,
          }}
          placeholder="Enter phone number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
          }}
          required
        />
        <Button type="submit" size="large" variant="contained" disableElevation>
          Send SMS
        </Button>
      </Box>
    </Box>
  );
}

export default SmsForm;
