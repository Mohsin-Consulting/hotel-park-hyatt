"use client";

import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  // mapSection: {
  //   "& iframe": {
  //     filter: "grayscale(50%)",
  //     maxHeight: "35rem",
  //     maxWidth: "100%",
  //   },
  // },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        color: "white",
        bgcolor: "#000",
        height: { xs: "60px", md: "70px" },
        px: { xs: "1rem", md: "0" }
      }}
    >
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box sx={{
            fontSize: { xs: "1.4rem", md: "1.6rem" },
            textAlign: "center"
          }}>
            HOTEL PARK HYATT 2024 &copy; All Rights Reserved
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
