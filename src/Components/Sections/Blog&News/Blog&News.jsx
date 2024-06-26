import { Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Box, Container, Stack } from "@mui/system";
import img from "../../../assets/Images/detox.png";
import docImg from "../../../assets/Images/drRebecca.png";
const BlogAndNews = () => {
  return (
    <>
      <Box py={5}>
        <Typography varinat="h1" color="primary.main" fontWeight={600}>
          Blog & News
        </Typography>
        <Typography variant="h1" color="primary.dark" mb={2} fontSize={40}>
          Read Our Latest News
        </Typography>
        <Stack
          direction={{ md: "row", sm: "column" }}
          spacing={4}
          justifyContent="center"
          alignItems={{ sm: "center" }}
        >
          {[...Array(3)].map((_, index) => (
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 240 }} image={img} title="detox" />
              <CardContent alignItems="center">
                <Typography
                  gutterBottom
                  variant="p"
                  color="secondary.light"
                  fontWeight={300}
                  textAlign="left"
                >
                  Medical | March 31, 2022
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight={400}
                  textAlign="left"
                  mb={2}
                >
                  6 Tips To Protect Your Mental Health When You're Sick
                </Typography>
                <Stack direction="row" alignItems="center">
                  <img src={docImg} width={30} alt="rebecca lee" />
                  <Typography>Rebecca Lee</Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default BlogAndNews;
