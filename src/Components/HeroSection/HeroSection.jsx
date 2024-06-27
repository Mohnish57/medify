import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import heroImage from "../../assets/Images/heroImage.png";
import ticTicImage from "../../assets/Images/titik-titik.png";
import verifiedIcon from "../../assets/Icons/verifiedIcon.png";
import styles from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      gap={1}
      sx={{
        alignItems: { md: "center" },
        justifyContent: "center",
        padding: "1rem",
        background: "linear-gradient(#E7F0FF, #E8F1FF)",
      }}
      width="100%"
    >
      <Box textAlign="left" px={{ md: 20, sm: 10 }} flex={1}>
        <Typography
          variant="p"
          color="secondary.light"
          sx={{ fontSize: { md: 16, sm: 12 } }}
        >
          Skip the travel! Find Online
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: { md: 40, sm: 16 }, lineHeight: 1 }}
        >
          Medical
          <span style={{ color: "#2AA7FF" }}> Centers</span>
        </Typography>
        <Typography
          variant="h2"
          fontWeight={400}
          sx={{ fontSize: { md: 18, xs: 14, sm: 14 } }}
        >
          Connect instantly with 24X7 specialist or choose to video visit a
          particular doctor.
        </Typography>
        <Link to="/search">
          <Button
            sx={{ mt: 2 }}
            variant="contained"
            size="large"
            disableElevation
          >
            Find Centers
          </Button>
        </Link>
      </Box>

      <Box className={styles.section2} flex={1}>
        <Box
          component="img"
          sx={{ width: { md: 400, xs: 300, sm: 300 } }}
          className={styles.heroImage}
          src={heroImage}
          alt="HeroImage"
        />
        <Stack
          direction="row"
          bgcolor="white"
          p={1}
          justifyContent="center"
          alignItems="center"
          gap=".3rem"
          className={styles.regularcheckup}
        >
          <img width={20} height={20} src={verifiedIcon} alt="verified" />
          Regular Checkup
        </Stack>
        <Box
          component="img"
          width={{ md: 200, xs: 100, sm: 100 }}
          src={ticTicImage}
          alt="design"
          className={styles.ticTicImage}
        />
      </Box>
    </Stack>
  );
};

export default HeroSection;
