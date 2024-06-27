import OfferCard from "../../Components/Sections/Offers/OfferCard";
import Navbar from "../../Components/Header/Navbar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import SpecializationCards from "../../Components/Sections/SpecializationCards/SpecializationCards";
import Specialists from "../../Components/Sections/Specialists/Specialists";
import PateintCaringSection from "../../Components/Sections/PatientCaring/PateintCaringSection";
import BlogAndNews from "../../Components/Sections/Blog&News/Blog&News";
import OurFamilies from "../../Components/Sections/OurFamilies/OurFamilies";
import Faq from "../../Components/Sections/Faq/Faq";
import DownloadApp from "../../Components/Sections/DownloadApp/DownloadApp";
import Footer from "../../Components/Footer/Footer";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { Box, Container } from "@mui/system";
import { Stack } from "@mui/material";
import HeroServices from "../../Components/Sections/HeroServices/HeroServices";

const Home = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            background:
              "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
          }}
          mb={4}
        >
          <Navbar />
          <HeroSection />

          <Container maxWidth="xl" sx={{ transform: "translatey(-5%)" }}>
            <Stack
              direction="column"
              p={{ xs: 2.5, md: 8 }}
              mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
              position="relative"
              zIndex={99}
              bgcolor="#fff"
              borderRadius="15px"
              gap={1}
              boxShadow="0 0 12px rgba(0,0,0,0.1)"
            >
              <SearchBar />
              <HeroServices />
            </Stack>
          </Container>
        </Box>

        <OfferCard />
        <SpecializationCards />
        <Specialists />
        <PateintCaringSection />
        <BlogAndNews />
        <OurFamilies />
        <Faq />
      </Box>
    </>
  );
};
export default Home;
