import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Button,
  List,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import logo from "../../assets/Images/logo.png";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Box p={1} bgcolor="primary.main">
        <Typography
          textAlign="center"
          fontSize={{ md: 14, xs: 12 }}
          color="#ffff"
        >
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>

      <Container maxWidth="xl" sx={{ bgcolor: "transparent" }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          py={2}
          px={4}
        >
          <Link to="/">
            <img src={logo} alt="Logo" height={27} />
          </Link>

          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={4}
            alignItems={{ sm: "flex-start", md: "center" }}
            justifyContent="space-between"
            className={[styles.navlinks, menuOpen && styles.active]}
          >
            <Link to="">Find Doctors</Link>
            <Link to="/search">Hospitals</Link>
            <Link to="">Medicines</Link>
            <Link to="">Surgeries</Link>
            <Link to="">Software for Provider</Link>
            <Link to="">Facilitates</Link>
            <Link to="/bookings">
              <Button variant="contained" disableElevation>
                My Bookings
              </Button>
            </Link>
            {isMobile && (
              <IconButton
                onClick={() => setMenuOpen(false)}
                sx={{ position: "absolute", top: 0, right: 32, color: "#fff" }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Stack>

          {isMobile && (
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Container>
    </header>
  );
};
export default Navbar;
