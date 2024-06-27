import { useEffect, useState } from "react";
import Navbar from "../Header/Navbar";
import { Box, Container, Stack } from "@mui/system";
import { Button, MenuItem, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const stateApi = "https://meddata-backend.onrender.com/states";
const cityApi = "https://meddata-backend.onrender.com/cities";
const SearchBar = () => {
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const fetchState = async () => {
      try {
        const data = await axios.get(stateApi);
        const response = await data.data;

        setState(response);
      } catch (e) {
        console.log("Error in fetching data from API");
        alert("Facing Server Issue, try again later");
      }
    };
    fetchState();
  }, []);

  useEffect(() => {
    if (selectedState) {
      const fetchCity = async (selectedState) => {
        try {
          const data = await axios.get(`${cityApi}/${selectedState}`);
          const response = await data.data;
          setCity(response);
        } catch (e) {
          console.log("Error in fetching data from API");
        }
      };

      fetchCity(selectedState);
    } else {
      setCity([]);
    }
  }, [selectedState]);

  // console.log(state);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedState && selectedCity) {
      navigate(`/search?state=${selectedState}&city=${selectedCity}`);
    }
  };

  return (
    <>
      <Box
        component="form"
        py={2}
        bgcolor="#ffff"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Container maxWidth="xl">
          <Stack direction={{ md: "row", sm: "column" }} gap={2}>
            <FormControl fullWidth>
              <InputLabel id="state">State</InputLabel>
              <Select
                labelId="state"
                value={selectedState}
                label="state"
                startAdornment={<SearchIcon />}
                outline="primary.main"
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {state !== undefined
                  ? state.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))
                  : null}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="city">City</InputLabel>
              <Select
                labelId="city"
                value={selectedCity}
                label="city"
                outline="primary.main"
                startAdornment={<SearchIcon />}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedState}
              >
                {city.length > 0
                  ? city.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))
                  : null}
              </Select>
            </FormControl>
            <Button
              startIcon={<SearchIcon />}
              variant="contained"
              disableElevation
              fullWidth
              type="submit"
            >
              Search
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default SearchBar;
