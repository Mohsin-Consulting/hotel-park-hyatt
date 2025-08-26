"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
// import Image from "next/image";

const useStyles = makeStyles((theme) => ({}));

const AboutMain = () => {
  const classes = useStyles();

  return (
    <Box sx={{ px: { xs: "1rem", md: "1.8rem" }, py: { xs: "6rem", md: "12rem" }, pb: { xs: "8rem", md: "15rem" }, bgcolor: "#F8F4EB" }}>
      <Container maxWidth="lg" sx={{ position: "relative", width: "100%" }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: "3rem", md: "0" } }}>
          <Box sx={{ padding: { xs: "1rem", md: "2.5rem" }, flex: "1", order: { xs: 2, md: 1 } }}>
            <Typography
              sx={{ textAlign: "center", color: (theme) => theme.palette.primary.main, fontSize: { xs: "1.4rem", md: "1.6rem" } }}
              variant="h6"
            >
              PARK HYATT
            </Typography>

            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: (theme) => theme.palette.primary.main,
                marginBottom: { xs: "2rem", md: "3rem" },
                fontSize: { xs: "2.6rem", sm: "2.8rem", md: "3.4rem" }
              }}
            >
              Stay luxuriously in Banani, Dhaka{" "}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: { xs: "2rem", md: "5rem" }, fontSize: { xs: "1.4rem", md: "1.6rem" }, lineHeight: 1.6 }}>
              The Park Hyatt, a recently opened 3-star hotel in Dhaka, is
              situated in Banani, at the center of the city's business and
              diplomatic districts, and conveniently close to the International
              Airport. Committed to offering outstanding hospitality, Park Hyatt
              is tailored to meet the needs of corporate and business guests.
              The hotel features stylishly furnished rooms and suites, and its
              all-day dining restaurants present a variety of exquisite
              international cuisine prepared by our expert chefs.
            </Typography>

            {/* <Typography variant="body1">
              Park Hyatt is committed to deliver utmost hospitality services and
              facilities to meet the needs of corporate and business travelers.
            </Typography> */}

            <Typography variant="body1" sx={{ fontSize: { xs: "1.4rem", md: "1.6rem" }, lineHeight: 1.6, marginBottom: { xs: "2rem", md: "3rem" } }}>
              Each of our rooms is uniquely designed, showcasing
              contemporary-style bedrooms and luxurious bathrooms fitted with
              the latest amenities and facilities, all set within a stunning
              interior. Recognized as one of Banani’s finest hotels, it also
              stands out as one of Dhaka’s most accessible accommodations.
            </Typography>
            
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button 
                component="a"
                href="tel:8801720045840"
                variant="contained" 
                sx={{ 
                  backgroundColor: (theme) => theme.palette.primary.main, 
                  "&:hover": { backgroundColor: (theme) => theme.palette.primary.dark }, 
                  borderRadius: 0,
                  textDecoration: "none",
                  px: { xs: "2rem", md: "3rem" },
                  py: { xs: "1rem", md: "1.2rem" },
                  fontSize: { xs: "1.4rem", md: "1.6rem" }
                }}
              >
                Call to Book Now
              </Button>
            </Box>
          </Box>
          <Box sx={{ flex: "1", display: "flex", justifyContent: "center", order: { xs: 1, md: 2 } }}>
            <Image
              alt="room"
              src={`/about-main.jpg`}
              quality={100}
              width={472.5}
              height={630}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "472px",
                borderRadius: "1rem"
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMain;
