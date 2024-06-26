import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import Home from "./Pages/HomePage/Home.jsx";
import { createTheme } from "@mui/material/styles";
import { fontSize, fontWeight, ThemeProvider } from "@mui/system";
import MyBookings from "./Pages/MyBookingsPage/MyBookings.jsx";
import DetailsPage from "./Pages/DetailsPage/DetailsPage.jsx";

export const theme = createTheme({
  typography: { fontFamily: "poppins, sans-serif" },
  palette: {
    primary: { main: "#2AA7FF", green: "#00A500", dark: "#1B3C74" },
    secondary: { main: "#FFFFFF", light: "#77829D" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
        contained: {
          color: "#fff",
        },
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        width: "90%",
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      h1: {
        color: "#000000",
        fontSize: "66px",
        fontWeight: "700",
      },
      h2: {
        color: "#1B3C74",
        fontWeight: "600",
        fontSize: "48px",
        lineHeight: 1.2,
      },
      h3: {
        color: "#102851",
        fontSize: "30px",
        fontWeight: "500",
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        background: "#FAFBFE",
        borderRadius: "8px",
        color: "#ABB6C7",
        "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#F0F0F0",
          },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

theme.typography.h2 = {
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
};
theme.typography.h1 = {
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
  },
};

theme.typography.h3 = {
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/search", element: <DetailsPage /> },
      { path: "/", element: <Home /> },
      { path: "/bookings", element: <MyBookings /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

reportWebVitals();
