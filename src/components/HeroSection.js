"use client";

import "@/slick-arrows.css";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const useStyles = makeStyles((theme) => ({
  // SliderSection: {
  //   height: "100rem",
  //   padding: "16.5rem 6rem",
  //   position: "relative",
  //   "& > .gatsby-image-wrapper-constrained": {
  //     position: "absolute",
  //     top: 0,
  //     bottom: 0,
  //     right: 0,
  //     left: 0,
  //   },
  //   [theme.breakpoints.down("md")]: {
  //     height: "125rem",
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     padding: "14rem 0",
  //     height: "90rem",
  //   },
  // },
  // bgImg: {
  //   zIndex: -10,
  // },
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

const SliderSection = () => {
  const classes = useStyles();

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

  return (
    <Box
      sx={{
        height: {
          xs: "100vh",
          sm: "100vh",
          md: "94vh",
        },
      }}
    >
      <Slider {...settings} className={classes.slider}>
        {list.map((item) => (
          <Box
            key={item}
            sx={{
              bgcolor: "gray",
              height: "100%",
            }}
          >
            <Image
              alt="Hotel Park Hyatt"
              src={`/hotel-hero-${item}.jpg`}
              // placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Slider>
      <Box
        sx={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          width: {
            xs: "90%",
            sm: "80%",
            md: "65%",
          },
          px: { xs: "1rem", sm: "2rem" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "4rem",
              sm: "6rem",
              md: "8rem",
            },
            textShadow:
              "3px 3px 12px rgba(0,0,0,0.9), 0px 0px 30px rgba(0,0,0,0.7), 1px 1px 3px rgba(0,0,0,1)",
            textAlign: "center",
            fontWeight: "bold",
            lineHeight: { xs: 1.2, md: 1.1 },
            mb: { xs: "1rem", md: "0.5rem" },
          }}
        >
          <Box component="span" sx={{ display: { xs: "block", md: "block" } }}>
            Welcome to
          </Box>{" "}
          Hotel Park Hyatt
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: "2.4rem",
              sm: "3.6rem",
              md: "4.4rem",
            },
            textShadow:
              "2px 2px 8px rgba(0,0,0,0.8), 0px 0px 20px rgba(0,0,0,0.5)",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: {
              xs: "3rem",
              sm: "4rem",
              md: "45px",
            },
            lineHeight: { xs: 1.3, md: 1.2 },
          }}
        >
          Amazing Luxury Hotel in Dhaka
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "1.5rem", sm: "2rem" },
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              fontSize: {
                xs: "1.4rem",
                sm: "1.5rem",
                md: "1.6rem",
              },
              py: { xs: "1rem", md: "0.8rem" },
              px: { xs: "2rem", md: "1.6rem" },
              borderRadius: 0,
              backgroundColor: (theme) => theme.palette.primary.main,
              "&:hover": {
                backgroundColor: "#9A7530",
              },
            }}
            variant="contained"
            href="tel:8801720045840"
          >
            Call Now +880 1720-045840
          </Button>
          <Button
            sx={{
              fontSize: {
                xs: "1.3rem",
                sm: "1.4rem",
                md: "1.5rem",
              },
              py: { xs: "0.7rem", md: "0.5rem" },
              px: { xs: "1.5rem", md: "1.2rem" },
              borderRadius: 0,
              backgroundColor: "#fff",
              color: (theme) => theme.palette.primary.main,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: "#fff",
              },
            }}
            variant="contained"
            href="/rooms"
          >
            Check Rooms
          </Button>
        </Box>
        {/* <Box
          sx={{
            bgcolor: "#2F3953",
            padding: "1rem",
            color: "white",
            "& fieldset": {
              borderColor: "#ffbd59",
            },
            "& svg": {
              color: "#ffbd59",
            },
            "& label": {
              color: "#ffbd59",
            },
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Check In"
                renderInput={(params) => {
                  return (
                    <TextField
                      {...params}
                      sx={{
                        svg: { color: "#fff" },
                        input: { color: "#fff" },
                        label: { color: "#fff" },
                      }}
                    />
                  );
                }}
              />
              <DatePicker label="Check Out" />
              <Box sx={{ width: 190 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Guests</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Guests"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Button variant="contained">Search Hotels</Button>
            </DemoContainer>
          </LocalizationProvider>
        </Box> */}
      </Box>
    </Box>
  );
};

export default SliderSection;
