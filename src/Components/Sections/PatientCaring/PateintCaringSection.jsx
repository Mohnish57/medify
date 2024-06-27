import { Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import banner from "../../../assets/Images/pateintCaring.png";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import checkIcon from "../../../assets/Icons/verifiedIcon.png";

function PateintCaringSection() {
  return (
    <Box py={3} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Stack
          direction={{ md: "row", sm: "column" }}
          gap={1}
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Container>
              <Box
                component="img"
                src={banner}
                width={{ md: 500, xs: 300, sm: 400 }}
                alt="caring"
              />
            </Container>
          </Box>

          <Box textAlign="left">
            <Container>
              <Typography
                color="primary.main"
                fontWeight={600}
                fontSize={{ md: 40, sm: 20 }}
              >
                HELPING PATIENTS FROM AROUND THE GLOBE!!
              </Typography>
              <Typography
                color="primary.dark"
                variant="h1"
                fontSize={{ md: 50, xs: 24 }}
              >
                Patient
                <Typography variant="span" ml={1} color="primary.main">
                  Caring
                </Typography>
              </Typography>
              <Typography
                variant="p"
                color="secondary.light"
                sx={{ textAlign: "left" }}
              >
                Our goal is to deliver quality of care in a courteous,
                respectful, and compassionate manner. We hope you will allow us
                to care for you and strive to be the first and best choice for
                healthcare.
              </Typography>
              <List sx={{ width: "100%", maxWidth: 360 }}>
                <ListItem>
                  <IconButton aria-label="comment">
                    <img src={checkIcon} width={20} />
                  </IconButton>
                  <ListItemText primary={`Stay Updated About Your Health`} />
                </ListItem>
                <ListItem>
                  <IconButton aria-label="comment">
                    <img src={checkIcon} width={20} />
                  </IconButton>
                  <ListItemText
                    primary={`
Check Your Results Online`}
                  />
                </ListItem>
                <ListItem>
                  <IconButton aria-label="comment">
                    <img src={checkIcon} width={20} />
                  </IconButton>
                  <ListItemText
                    primary={`
Manage Your Appointments`}
                  />
                </ListItem>
              </List>
            </Container>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default PateintCaringSection;
