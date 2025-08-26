"use client";

import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import WifiIcon from "@mui/icons-material/Wifi";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
// import Image from "next/image";

const useStyles = makeStyles((theme) => ({}));

const AboutSection = () => {
  const classes = useStyles();

  return (
    <Box sx={{ 
      px: { xs: "1rem", sm: "1.8rem" }, 
      py: { xs: "8rem", md: "12rem" }, 
      pb: { xs: "8rem", md: "32rem" }, 
      bgcolor: "#F8F4EB" 
    }}>
      <Container maxWidth="lg" sx={{ position: "relative", width: "100%" }}>
        <Box sx={{ 
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "4rem", md: "0" }
        }}>
          <Box sx={{ 
            padding: { xs: "1rem", md: "2.5rem" }, 
            flex: "1"
          }}>
            <Typography
              sx={{ 
                textAlign: "center", 
                color: (theme) => theme.palette.primary.main,
                fontSize: { xs: "1.6rem", md: "1.8rem" }
              }}
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
                fontSize: { xs: "2.8rem", sm: "3.4rem", md: "4rem" },
                lineHeight: { xs: 1.3, md: 1.2 }
              }}
            >
              The Most Relaxing Hotel at Banani in Dhaka{" "}
            </Typography>
            <Typography variant="body1" sx={{ 
              marginBottom: { xs: "3rem", md: "5rem" },
              fontSize: { xs: "1.6rem", md: "1.8rem" },
              lineHeight: { xs: 1.6, md: 1.5 }
            }}>
              The Park Hyatt, a newly established 3-star hotel in Dhaka, is
              located in Banani, right in the heart of the city's business
              district and diplomatic area, and is just a short distance from
              the International Airport. Dedicated to providing exceptional
              hospitality, Park Hyatt is designed to cater to the needs of
              corporate and business travelers. The hotel boasts elegantly
              furnished rooms and suites, while its all-day dining restaurants
              serve an array of delectable international dishes crafted by our
              skilled culinary team.
            </Typography>

            <Typography variant="body1" sx={{
              fontSize: { xs: "1.6rem", md: "1.8rem" },
              lineHeight: { xs: 1.6, md: 1.5 }
            }}>
              Each of our rooms offers a unique experience, featuring
              contemporary-style bedrooms and luxurious bathrooms equipped with
              the latest amenities, all set against a stunning interior design.
              Known as one of the top hotels in Banani, it is also highly
              accessible within Dhaka.
            </Typography>
          </Box>
          <Box sx={{ 
            flex: "1", 
            display: { xs: "none", md: "flex" }, 
            justifyContent: "center"
          }}>
            <Image
              alt="room"
              src={`/about.jpg`}
              quality={100}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "472px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
        
        {/* Image section for mobile - appears between text and feature cards */}
        <Box sx={{ 
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          mt: "4rem",
          mb: "2rem"
        }}>
          <Image
            alt="room"
            src={`/about.jpg`}
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "400px",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", lg: "flex-start" },
            gap: { xs: "3rem", lg: "2rem" },
            mt: { xs: "6rem", md: "10rem" },
            position: { xs: "static", lg: "absolute" },
            width: { xs: "100%", lg: "90%" },
          }}
        >
          <Box
            sx={{
              bgcolor: "#fff",
              height: { xs: "300px", md: "400px" },
              width: { xs: "280px", sm: "320px" },
              maxWidth: "100%",
              border: { xs: "5px solid #736758", md: "7px solid #736758" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mx: { xs: "auto", lg: "0" },
            }}
          >
            <Box
              sx={{
                color: "#736758",
                display: "flex",
                justifyContent: "center",
                marginBottom: { xs: "2rem", md: "4rem" },
              }}
            >
              <RestaurantIcon sx={{ 
                width: { xs: "50px", md: "70px" }, 
                height: { xs: "50px", md: "70px" } 
              }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: { xs: "1.5rem", md: "2rem" },
                fontSize: { xs: "2.2rem", md: "2.6rem" },
              }}
            >
              Free Breakfast
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#736758",
                fontSize: { xs: "1.5rem", md: "1.7rem" },
                px: { xs: "1rem", md: "0.5rem" },
              }}
            >
              Enjoy free breakfast from 6:30 AM - 10:30 AM
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "#fff",
              height: { xs: "300px", md: "400px" },
              width: { xs: "280px", sm: "320px" },
              maxWidth: "100%",
              border: { xs: "5px solid #736758", md: "7px solid #736758" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mx: { xs: "auto", lg: "0" },
            }}
          >
            <Box
              sx={{
                color: "#736758",
                display: "flex",
                justifyContent: "center",
                marginBottom: { xs: "2rem", md: "4rem" },
              }}
            >
              <WifiIcon sx={{ 
                width: { xs: "50px", md: "70px" }, 
                height: { xs: "50px", md: "70px" } 
              }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: { xs: "1.5rem", md: "2rem" },
                fontSize: { xs: "2.2rem", md: "2.6rem" },
              }}
            >
              Free WiFi
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#736758",
                fontSize: { xs: "1.5rem", md: "1.7rem" },
                px: { xs: "1rem", md: "0.5rem" },
              }}
            >
              Enjoy free high speed WiFi in all of our rooms
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "#fff",
              height: { xs: "300px", md: "400px" },
              width: { xs: "280px", sm: "320px" },
              maxWidth: "100%",
              border: { xs: "5px solid #736758", md: "7px solid #736758" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mx: { xs: "auto", lg: "0" },
            }}
          >
            <Box
              sx={{
                color: "#736758",
                display: "flex",
                justifyContent: "center",
                marginBottom: { xs: "2rem", md: "4rem" },
              }}
            >
              <AirportShuttleIcon sx={{ 
                width: { xs: "50px", md: "70px" }, 
                height: { xs: "50px", md: "70px" } 
              }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: { xs: "1.5rem", md: "2rem" },
                fontSize: { xs: "2.2rem", md: "2.6rem" },
              }}
            >
              Airport Pickup
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#736758",
                fontSize: { xs: "1.5rem", md: "1.7rem" },
                px: { xs: "1rem", md: "0.5rem" },
              }}
            >
              Free airport pick up if you book for 4+ days
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
