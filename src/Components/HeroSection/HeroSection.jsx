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
      sx={{
        alignItems: { md: "center", sm: "flex-start" },
        justifyContent: "center",
        padding: "1rem",
        background: "linear-gradient(#E7F0FF, #E8F1FF)",
      }}
    >
      <Box textAlign="left" px={{ md: 20, sm: 10 }}>
        <Typography
          variant="p"
          color="secondary.light"
          sx={{ fontSize: { md: 20, sm: 12 } }}
        >
          Skip the travel! Find Online
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { md: 40, sm: 12 } }}>
          Medical
          <span style={{ color: "#2AA7FF" }}> Centers</span>
        </Typography>
        <Typography variant="h2" fontWeight={400}>
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

      <Box className={styles.section2}>
        <img
          width={600}
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
        <img
          width={200}
          src={ticTicImage}
          alt="design"
          className={styles.ticTicImage}
        />
      </Box>
    </Stack>
  );
};

export default HeroSection;
