"use client";

import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
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

const ContactFooter = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        color: "white",
        bgcolor: "#000",
        height: { xs: "150px", sm: "180px", md: "216px" },
        position: "relative",
      }}
    >
      <Box
        sx={{ position: "absolute", zIndex: 10, width: "100%", height: "100%" }}
      >
        <Image
          alt="Mountains"
          src={`/hotel-hero-1.jpg`}
          // placeholder="blur"
          quality={100}
          // layout="fill"
          // objectFit="cover"
          fill
          // sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: 50,
          width: "100%",
          height: "100%",
          bgcolor: "#0D0D0D",
          opacity: "0.5",
        }}
      ></Box>
      <Container
        maxWidth="lg"
        sx={{ height: "100%", zIndex: 500, position: "relative" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography 
            component="a"
            href="tel:8801720045840"
            variant="h4" 
            sx={{ 
              fontSize: { xs: "2.8rem", sm: "3.8rem", md: "4.6rem" },
              textAlign: "center",
              px: { xs: "1rem", md: "0" },
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.02)",
                transition: "transform 0.2s ease"
              }
            }}
          >
            <Box component="span" sx={{ display: { xs: "block", md: "inline" } }}>
              Call For Booking
            </Box>
            <Box component="span" sx={{ display: { xs: "block", md: "inline" } }}>
              {" "}+880 1720-045840
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactFooter;
