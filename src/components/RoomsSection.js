"use client";

import "@/slick-arrows.css";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const useStyles = makeStyles((theme) => ({
  slider: {
    height: "100%",
    // // height: "80rem",
    // height: "100vh",
    // width: "100%",
    // // maxWidth: "158rem",
    // // margin: "0 auto",
    // cursor: "move" /* fallback if grab cursor is unsupported */,
    // cursor: "grab",
    // // overflow: 'visible',
    // "&:active": {
    //   cursor: "grabbing",
    // },
    "& div": {
      // width: "100%",
      height: "100%",
    },
  },
  button: {
    position: "absolute",
    left: "9%",
    bottom: "15%",
    "@media (max-width: 1525px)": {
      left: "6%",
      bottom: "20%",
    },
    [theme.breakpoints.down("md")]: {
      bottom: "25%",
      left: "7%",
      transform: "scale(0.9)",
    },
    "@media (max-width: 1245px)": {
      left: "5%",
    },
    "@media (max-width: 1125px)": {
      left: "2%",
      bottom: "35%",
      transform: "scale(0.75)",
    },
    [theme.breakpoints.down("sm")]: {
      position: "static",
      transform: "scale(1)",
      margin: "6rem auto",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "1rem auto",
      right: "15%",
    },
  },
}));

const RoomsSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const settings = {
    fade: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: "true",
    autoplaySpeed: 3500,
    pauseOnHover: false,
  };

  const list = [1, 2, 3, 4];

  const getImageStyles = () => ({
    width: "100%",
    height: "auto",
    maxWidth: isMobile ? "none" : "375px",
    minHeight: "300px",
    maxHeight: "375px",
    objectFit: "cover",
    borderRadius: "1rem",
  });

  return (
    <Box
      sx={{
        py: { xs: "8rem", md: "14rem" },
        color: "#515151",
        paddingTop: { xs: "8rem", md: "38rem" },
      }}
    >
      <Container maxWidth="lg" sx={{}}>
        <Typography
          sx={{
            textAlign: "center",
            color: "#000",
            marginBottom: { xs: "5rem", md: "8rem" },
            fontSize: { xs: "2.8rem", sm: "3.4rem", md: "4rem" },
          }}
          variant="h3"
        >
          Choose Your Room
        </Typography>
        <Box>
          <Box
            sx={{
              padding: {
                xs: "2rem",
                sm: "3rem 4rem",
                md: "3rem 5rem 3rem 8rem",
              },
              bgcolor: "#F8F4EB",
              marginBottom: { xs: "3rem", md: "5rem" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: { xs: "2rem", md: "4rem" },
              height: "auto",
              minHeight: { md: "435px" },
              alignItems: "center",
              gap: { xs: "2rem", md: "0" },
            }}
          >
            <Box
              sx={{
                flex: 1,
                order: { xs: 2, md: 1 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  marginTop: { xs: "0", md: "10rem" },
                  marginBottom: { xs: "1.5rem", md: "1rem" },
                  fontSize: { xs: "2.4rem", md: "3rem" },
                }}
              >
                Standard Room
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "1.5rem", md: "1.6rem" },
                  lineHeight: { xs: 1.6, md: 1.5 },
                  marginBottom: { xs: "2rem", md: "1rem" },
                }}
              >
                Choose Park Hyatt's popular standard room for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Link href="/rooms">
                  <Button
                    variant="contained"
                    sx={{
                      mt: { xs: "1rem", md: "3rem" },
                      backgroundColor: (theme) => theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: "#A67B32",
                      },
                      borderRadius: 0,
                    }}
                  >
                    See Details
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: { xs: "block", md: "flex" },
                justifyContent: { md: "right" },
                order: { xs: 1, md: 2 },
                width: { xs: "100%", md: "auto" },
              }}
            >
              <Image
                alt="Room"
                src={`/room-1.jpg`}
                quality={100}
                width={0}
                height={0}
                sizes="100vw"
                style={getImageStyles()}
              />
            </Box>
          </Box>

          <Box
            sx={{
              padding: {
                xs: "2rem",
                sm: "3rem 4rem",
                md: "3rem 5rem 3rem 8rem",
              },
              bgcolor: "#F8F4EB",
              marginBottom: { xs: "3rem", md: "5rem" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: { xs: "2rem", md: "4rem" },
              height: "auto",
              minHeight: { md: "435px" },
              alignItems: "center",
              gap: { xs: "2rem", md: "0" },
            }}
          >
            <Box
              sx={{
                flex: 1,
                order: { xs: 2, md: 1 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  marginTop: { xs: "0", md: "10rem" },
                  marginBottom: { xs: "1.5rem", md: "1rem" },
                  fontSize: { xs: "2.4rem", md: "3rem" },
                }}
              >
                Standard Deluxe
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "1.5rem", md: "1.6rem" },
                  lineHeight: { xs: 1.6, md: 1.5 },
                  marginBottom: { xs: "2rem", md: "1rem" },
                }}
              >
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular Standard Deluxe for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <Link href="/rooms">
                  <Button
                    variant="contained"
                    sx={{
                      mt: { xs: "1rem", md: "3rem" },
                      backgroundColor: (theme) => theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: "#A67B32",
                      },
                      borderRadius: 0,
                    }}
                  >
                    See Details
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: { xs: "block", md: "flex" },
                justifyContent: { md: "right" },
                order: { xs: 1, md: 2 },
                width: { xs: "100%", md: "auto" },
              }}
            >
              <Image
                alt="Room"
                src={`/room-2.jpg`}
                quality={100}
                width={0}
                height={0}
                sizes="100vw"
                style={getImageStyles()}
              />
            </Box>
          </Box>

          <Box
            sx={{
              padding: {
                xs: "2rem",
                sm: "3rem 4rem",
                md: "3rem 5rem 3rem 8rem",
              },
              bgcolor: "#F8F4EB",
              marginBottom: { xs: "3rem", md: "5rem" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: { xs: "2rem", md: "4rem" },
              height: "auto",
              minHeight: { md: "435px" },
              alignItems: "center",
              gap: { xs: "2rem", md: "0" },
            }}
          >
            <Box
              sx={{
                flex: 1,
                order: { xs: 2, md: 1 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  marginTop: { xs: "0", md: "10rem" },
                  marginBottom: { xs: "1.5rem", md: "1rem" },
                  fontSize: { xs: "2.4rem", md: "3rem" },
                }}
              >
                Executive Deluxe
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "1.5rem", md: "1.6rem" },
                  lineHeight: { xs: 1.6, md: 1.5 },
                  marginBottom: { xs: "2rem", md: "1rem" },
                }}
              >
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular Executive Deluxe for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <Link href="/rooms">
                  <Button
                    variant="contained"
                    sx={{
                      mt: { xs: "1rem", md: "3rem" },
                      backgroundColor: (theme) => theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: "#A67B32",
                      },
                      borderRadius: 0,
                    }}
                  >
                    See Details
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: { xs: "block", md: "flex" },
                justifyContent: { md: "right" },
                order: { xs: 1, md: 2 },
                width: { xs: "100%", md: "auto" },
              }}
            >
              <Image
                alt="Room"
                src={`/room-3.jpg`}
                // placeholder="blur"
                quality={100}
                width={0}
                height={0}
                sizes="100vw"
                style={getImageStyles()}
              />
            </Box>
          </Box>

          <Box
            sx={{
              padding: {
                xs: "2rem",
                sm: "3rem 4rem",
                md: "3rem 5rem 3rem 8rem",
              },
              bgcolor: "#F8F4EB",
              marginBottom: { xs: "3rem", md: "5rem" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: { xs: "2rem", md: "4rem" },
              height: "auto",
              minHeight: { md: "435px" },
              alignItems: "center",
              gap: { xs: "2rem", md: "0" },
            }}
          >
            <Box
              sx={{
                flex: 1,
                order: { xs: 2, md: 1 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  marginTop: { xs: "0", md: "10rem" },
                  marginBottom: { xs: "1.5rem", md: "1rem" },
                  fontSize: { xs: "2.4rem", md: "3rem" },
                }}
              >
                Twin Deluxe
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "1.5rem", md: "1.6rem" },
                  lineHeight: { xs: 1.6, md: 1.5 },
                  marginBottom: { xs: "2rem", md: "1rem" },
                }}
              >
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular Twin Deluxe for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <Link href="/rooms">
                  <Button
                    variant="contained"
                    sx={{
                      mt: { xs: "1rem", md: "3rem" },
                      backgroundColor: (theme) => theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: "#A67B32",
                      },
                      borderRadius: 0,
                    }}
                  >
                    See Details
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: { xs: "block", md: "flex" },
                justifyContent: { md: "right" },
                order: { xs: 1, md: 2 },
                width: { xs: "100%", md: "auto" },
              }}
            >
              <Image
                alt="Room"
                src={`/room-4.jpg`}
                // placeholder="blur"
                quality={100}
                width={0}
                height={0}
                sizes="100vw"
                style={getImageStyles()}
              />
            </Box>
          </Box>

          <Box
            sx={{
              padding: {
                xs: "2rem",
                sm: "3rem 4rem",
                md: "3rem 5rem 3rem 8rem",
              },
              bgcolor: "#F8F4EB",
              marginBottom: { xs: "3rem", md: "5rem" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: { xs: "2rem", md: "4rem" },
              height: "auto",
              minHeight: { md: "435px" },
              alignItems: "center",
              gap: { xs: "2rem", md: "0" },
            }}
          >
            <Box
              sx={{
                flex: 1,
                order: { xs: 2, md: 1 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  marginTop: { xs: "0", md: "10rem" },
                  marginBottom: { xs: "1.5rem", md: "1rem" },
                  fontSize: { xs: "2.4rem", md: "3rem" },
                }}
              >
                Executive Suite
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "1.5rem", md: "1.6rem" },
                  lineHeight: { xs: 1.6, md: 1.5 },
                  marginBottom: { xs: "2rem", md: "1rem" },
                }}
              >
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular Executive Suite for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <Link href="/rooms">
                  <Button
                    variant="contained"
                    sx={{
                      mt: { xs: "1rem", md: "3rem" },
                      backgroundColor: (theme) => theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: "#A67B32",
                      },
                      borderRadius: 0,
                    }}
                  >
                    See Details
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: { xs: "block", md: "flex" },
                justifyContent: { md: "right" },
                order: { xs: 1, md: 2 },
                width: { xs: "100%", md: "auto" },
              }}
            >
              <Image
                alt="Room"
                src={`/room-5.jpg`}
                // placeholder="blur"
                quality={100}
                width={0}
                height={0}
                sizes="100vw"
                style={getImageStyles()}
              />
            </Box>
          </Box>

          <Box
            sx={{
              padding: {
                xs: "2rem",
                sm: "3rem 4rem",
                md: "3rem 5rem 3rem 8rem",
              },
              bgcolor: "#F8F4EB",
              marginBottom: { xs: "3rem", md: "5rem" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: { xs: "2rem", md: "4rem" },
              height: "auto",
              minHeight: { md: "435px" },
              alignItems: "center",
              gap: { xs: "2rem", md: "0" },
            }}
          >
            <Box
              sx={{
                flex: 1,
                order: { xs: 2, md: 1 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  marginTop: { xs: "0", md: "10rem" },
                  marginBottom: { xs: "1.5rem", md: "1rem" },
                  fontSize: { xs: "2.4rem", md: "3rem" },
                }}
              >
                Park Suite
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "1.5rem", md: "1.6rem" },
                  lineHeight: { xs: 1.6, md: 1.5 },
                  marginBottom: { xs: "2rem", md: "1rem" },
                }}
              >
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular Park Suite for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <Link href="/rooms">
                  <Button
                    variant="contained"
                    sx={{
                      mt: { xs: "1rem", md: "3rem" },
                      backgroundColor: (theme) => theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: "#A67B32",
                      },
                      borderRadius: 0,
                    }}
                  >
                    See Details
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: { xs: "block", md: "flex" },
                justifyContent: { md: "right" },
                order: { xs: 1, md: 2 },
                width: { xs: "100%", md: "auto" },
              }}
            >
              <Image
                alt="Room"
                src={`/room-6.jpg`}
                // placeholder="blur"
                quality={100}
                width={0}
                height={0}
                sizes="100vw"
                style={getImageStyles()}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RoomsSection;
