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

const Rooms = () => {
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
    borderRadius: "1rem",
  });

  return (
    <Box sx={{ py: { xs: "6rem", md: "10rem" }, color: "#515151", pb: "1rem" }}>
      <Container maxWidth="lg" sx={{}}>
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
                  marginTop: { xs: "0", md: "7rem" },
                  fontSize: { xs: "2.4rem", md: "3rem" },
                  marginBottom: { xs: "1rem", md: "1.5rem" },
                }}
              >
                Standard Room
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "1.4rem", md: "1.6rem" },
                  lineHeight: 1.6,
                  marginBottom: { xs: "2rem", md: "0" },
                }}
              >
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular standard room for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  pb: { xs: "2rem", md: "0" },
                }}
              >
                {" "}
                <Typography
                  variant="body1"
                  sx={{
                    mt: { xs: "1rem", md: "4rem" },
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    color: (theme) => theme.palette.primary.main,
                    mb: { xs: "1rem", md: "2rem" },
                  }}
                >
                  Rate starting at 3500++ BDT
                </Typography>
                <Button
                  component="a"
                  href="tel:8801720045840"
                  variant="contained"
                  sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: (theme) => theme.palette.primary.dark,
                    },
                    borderRadius: 0,
                    textDecoration: "none",
                  }}
                >
                  Call to Book Now!
                </Button>
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
                // placeholder="blur"
                quality={100}
                width={375}
                height={375}
                style={getImageStyles()}
                // fill
                // sizes="100vw"
                // style={{
                //   objectFit: "cover",
                // }}
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
                  marginTop: { xs: "0", md: "7rem" },
                  fontSize: { xs: "2.4rem", md: "3rem" },
                  marginBottom: { xs: "1rem", md: "1.5rem" },
                }}
              >
                Standard Deluxe
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "1.4rem", md: "1.6rem" },
                  lineHeight: 1.6,
                  marginBottom: { xs: "2rem", md: "0" },
                }}
              >
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular Standard Deluxe for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  pb: { xs: "2rem", md: "0" },
                }}
              >
                {" "}
                <Typography
                  variant="body1"
                  sx={{
                    mt: { xs: "1rem", md: "4rem" },
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    color: (theme) => theme.palette.primary.main,
                    mb: { xs: "1rem", md: "2rem" },
                  }}
                >
                  Rate starting at 4000++ BDT
                </Typography>
                <Button
                  component="a"
                  href="tel:8801720045840"
                  variant="contained"
                  sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: (theme) => theme.palette.primary.dark,
                    },
                    borderRadius: 0,
                    textDecoration: "none",
                  }}
                >
                  Call to Book Now!
                </Button>
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
                // placeholder="blur"
                quality={100}
                width={375}
                height={375}
                style={getImageStyles()}
                // fill
                // sizes="100vw"
                // style={{
                //   objectFit: "cover",
                // }}
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
                  marginTop: { xs: "0", md: "7rem" },
                  fontSize: { xs: "2.4rem", md: "3rem" },
                  marginBottom: { xs: "1rem", md: "1.5rem" },
                }}
              >
                Executive Deluxe
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "1.4rem", md: "1.6rem" },
                  lineHeight: 1.6,
                  marginBottom: { xs: "2rem", md: "0" },
                }}
              >
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular Executive Deluxe for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  pb: { xs: "2rem", md: "0" },
                }}
              >
                {" "}
                <Typography
                  variant="body1"
                  sx={{
                    mt: { xs: "1rem", md: "4rem" },
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    color: (theme) => theme.palette.primary.main,
                    mb: { xs: "1rem", md: "2rem" },
                  }}
                >
                  Rate starting at 4500++ BDT
                </Typography>
                <Button
                  component="a"
                  href="tel:8801720045840"
                  variant="contained"
                  sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: (theme) => theme.palette.primary.dark,
                    },
                    borderRadius: 0,
                    textDecoration: "none",
                  }}
                >
                  Call to Book Now!
                </Button>
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
                width={375}
                height={375}
                style={getImageStyles()}
                // fill
                // sizes="100vw"
                // style={{
                //   objectFit: "cover",
                // }}
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
                  marginTop: { xs: "0", md: "7rem" },
                  fontSize: { xs: "2.4rem", md: "3rem" },
                  marginBottom: { xs: "1rem", md: "1.5rem" },
                }}
              >
                Twin Deluxe
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "1.4rem", md: "1.6rem" },
                  lineHeight: 1.6,
                  marginBottom: { xs: "2rem", md: "0" },
                }}
              >
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular Twin Deluxe for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  pb: { xs: "2rem", md: "0" },
                }}
              >
                {" "}
                <Typography
                  variant="body1"
                  sx={{
                    mt: { xs: "1rem", md: "4rem" },
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    color: (theme) => theme.palette.primary.main,
                    mb: { xs: "1rem", md: "2rem" },
                  }}
                >
                  Rate starting at 5000++ BDT
                </Typography>
                <Button
                  component="a"
                  href="tel:8801720045840"
                  variant="contained"
                  sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: (theme) => theme.palette.primary.dark,
                    },
                    borderRadius: 0,
                    textDecoration: "none",
                  }}
                >
                  Call to Book Now!
                </Button>
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
                width={375}
                height={375}
                style={getImageStyles()}
                // fill
                // sizes="100vw"
                // style={{
                //   objectFit: "cover",
                // }}
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
                  marginTop: { xs: "0", md: "7rem" },
                  fontSize: { xs: "2.4rem", md: "3rem" },
                  marginBottom: { xs: "1rem", md: "1.5rem" },
                }}
              >
                Executive Suite
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "1.4rem", md: "1.6rem" },
                  lineHeight: 1.6,
                  marginBottom: { xs: "2rem", md: "0" },
                }}
              >
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular Executive Suite for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  pb: { xs: "2rem", md: "0" },
                }}
              >
                {" "}
                <Typography
                  variant="body1"
                  sx={{
                    mt: { xs: "1rem", md: "4rem" },
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    color: (theme) => theme.palette.primary.main,
                    mb: { xs: "1rem", md: "2rem" },
                  }}
                >
                  Rate starting at 5500++ BDT
                </Typography>
                <Button
                  component="a"
                  href="tel:8801720045840"
                  variant="contained"
                  sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: (theme) => theme.palette.primary.dark,
                    },
                    borderRadius: 0,
                    textDecoration: "none",
                  }}
                >
                  Call to Book Now!
                </Button>
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
                width={375}
                height={375}
                style={getImageStyles()}
                // fill
                // sizes="100vw"
                // style={{
                //   objectFit: "cover",
                // }}
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
              marginBottom: { xs: "3rem", md: "1rem" },
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
                  marginTop: { xs: "0", md: "7rem" },
                  fontSize: { xs: "2.4rem", md: "3rem" },
                  marginBottom: { xs: "1rem", md: "1.5rem" },
                }}
              >
                Park Suite
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "1.4rem", md: "1.6rem" },
                  lineHeight: 1.6,
                  marginBottom: { xs: "2rem", md: "0" },
                }}
              >
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular Park Suite for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  pb: { xs: "2rem", md: "0" },
                }}
              >
                {" "}
                <Typography
                  variant="body1"
                  sx={{
                    mt: { xs: "1rem", md: "4rem" },
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    color: (theme) => theme.palette.primary.main,
                    mb: { xs: "1rem", md: "2rem" },
                  }}
                >
                  Rate starting at 6000++ BDT
                </Typography>
                <Button
                  component="a"
                  href="tel:8801720045840"
                  variant="contained"
                  sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: (theme) => theme.palette.primary.dark,
                    },
                    borderRadius: 0,
                    textDecoration: "none",
                  }}
                >
                  Call to Book Now!
                </Button>
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
                width={375}
                height={375}
                style={getImageStyles()}
                // fill
                // sizes="100vw"
                // style={{
                //   objectFit: "cover",
                // }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Rooms;
