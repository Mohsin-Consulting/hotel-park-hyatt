"use client";

import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  mapSection: {
    "& iframe": {
      filter: "grayscale(50%)",
    },
  },
}));

const MapSection = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        pt: { xs: "8rem", md: "14rem" },
        pb: { xs: "6rem", md: "11rem" },
        px: { xs: "2rem", md: "0" }
      }}
      className={classes.mapSection}
    >
      <Typography
        variant="h3"
        sx={{ 
          textAlign: "center", 
          marginBottom: { xs: "4rem", md: "8rem" },
          fontSize: { xs: "2.8rem", sm: "3.4rem", md: "4rem" }
        }}
      >
        Our Location
      </Typography>
      <Box sx={{ 
        display: "flex", 
        justifyContent: "center",
        width: "100%"
      }}>
        <Box sx={{ 
          border: (theme) => `2px solid ${theme.palette.primary.main}`,
          width: "100%",
          maxWidth: "1000px",
          height: { xs: "300px", sm: "400px", md: "500px" },
          position: "relative",
          overflow: "hidden"
        }}>
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=park+hyatt+banai+dhaka&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            style={{ 
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0
            }}
            allowFullScreen=""
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MapSection;
