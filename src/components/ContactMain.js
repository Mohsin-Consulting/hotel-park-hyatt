"use client";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import Image from "next/image";

const useStyles = makeStyles((theme) => ({}));

const ContactMain = () => {
  const classes = useStyles();

  return (
    <Box sx={{}}>
      <Container maxWidth="lg" sx={{}}>
        <Box
          sx={{
            borderRadius: { xs: "2rem", md: "200px" },
            bgcolor: "#F8F4EB",
            width: "100%",
            height: "auto",
            minHeight: { md: "360px" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            mt: { xs: "4rem", md: "7rem" },
            py: { xs: "3rem", md: "0" },
            gap: { xs: "3rem", md: "0" }
          }}
        >
          <Box
            component="a"
            href="tel:8801720045840"
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              px: { xs: "2rem", md: "0" },
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.02)",
                transition: "transform 0.2s ease"
              }
            }}
          >
            <Box
              sx={{
                color: "#736758",
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <CallIcon sx={{ width: { xs: "40px", md: "45px" }, height: { xs: "40px", md: "45px" } }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: { xs: "1rem", md: "2rem" },
                fontSize: { xs: "2rem", md: "2.4rem" }
              }}
            >
              Call Us
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#736758", fontSize: { xs: "1.4rem", md: "1.6rem" }, lineHeight: 1.6 }}
            >
              +880 1720-045840
            </Typography>
          </Box>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              px: { xs: "2rem", md: "0" }
            }}
          >
            <Box
              sx={{
                color: "#736758",
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <LocationOnIcon sx={{ width: { xs: "40px", md: "45px" }, height: { xs: "40px", md: "45px" } }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: { xs: "1rem", md: "2rem" },
                fontSize: { xs: "2rem", md: "2.4rem" }
              }}
            >
              Address
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#736758", fontSize: { xs: "1.4rem", md: "1.6rem" }, lineHeight: 1.6 }}
            >
              Plot # 35, Road#1/A, Block # I, <br />
              Banani, Dhaka - Bangladesh
            </Typography>
          </Box>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              px: { xs: "2rem", md: "0" }
            }}
          >
            <Box
              sx={{
                color: "#736758",
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <EmailIcon sx={{ width: { xs: "40px", md: "45px" }, height: { xs: "40px", md: "45px" } }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: { xs: "1rem", md: "2rem" },
                fontSize: { xs: "2rem", md: "2.4rem" }
              }}
            >
              Email Us
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#736758", fontSize: { xs: "1.4rem", md: "1.6rem" }, lineHeight: 1.6 }}
            >
              raafsar@gmail.com <br />
              rashid.afsar42@gmail.com
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactMain;
