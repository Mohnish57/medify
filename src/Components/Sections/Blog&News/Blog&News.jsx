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
        <Typography
          variant="h1"
          color="primary.main"
          fontWeight={600}
          fontSize={{ md: 30, xs: 24 }}
        >
          Blog & News
        </Typography>
        <Typography
          variant="h1"
          color="primary.dark"
          mb={2}
          fontSize={{ md: 40, xs: 20 }}
        >
          Read Our Latest News
        </Typography>
        <Container>
          <Stack
            direction={{ md: "row", xs: "column" }}
            gap={2}
            justifyContent="center"
            alignItems="center"
          >
            {[...Array(3)].map((_, index) => (
              <Card key={index} sx={{ maxWidth: 245 }}>
                <CardMedia
                  sx={{ height: { md: 200, sm: 200, xs: 100 } }}
                  image={img}
                  title="detox"
                />
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
                  <Typography fontWeight={400} textAlign="left" mb={2}>
                    6 Tips To Protect Your Mental Health When You're Sick
                  </Typography>
                  <Stack direction="row" alignItems="center">
                    <Box
                      component="img"
                      src={docImg}
                      width={{ md: 30, sm: 20, xs: 20 }}
                      alt="rebecca lee"
                    />
                    <Typography>Rebecca Lee</Typography>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default BlogAndNews;
