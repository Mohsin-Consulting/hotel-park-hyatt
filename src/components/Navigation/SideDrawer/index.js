// import { Link } from 'gatsby'
// import { makeStyles } from "@material-ui/core";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { StaticImage } from "gatsby-plugin-image";
import Image from "next/image";
import Link from "next/link";
import CSSTransition from "react-transition-group/CSSTransition";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  sideDrawer: {
    position: "fixed",
    width: "280px",
    maxWidth: "74%",
    height: "100%",
    left: 0,
    top: 0,
    backgroundColor: "white",
    boxShadow: "3px 0px 10px 2px rgba(0, 0, 0, 0.4)",
    transition: "transform 0.4s ease-out, visibility 0.4s ease-out",
    transform: "translateX(-100%)",
    visibility: "hidden",
    zIndex: 1100,
    overflowY: "scroll",
    scrollbarWidth: "none",
    "&.showing": {
      transform: "translateX(0)",
      visibility: "visible",
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  backdrop: {
    width: "100%",
    height: "100%",
    position: "fixed",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    transition: "all 0.5s",
    zIndex: 1050,
    "&.fade-enter": {
      opacity: 0,
    },
    "&.fade-enter-active": {
      opacity: 1,
    },
    "&.fade-exit": {
      opacity: 1,
    },
    "&.fade-exit-active": {
      opacity: 0,
    },
  },
  sideDrawerNav: {
    backgroundColor: "white",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },

  link: {
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    wordSpacing: "1.2px",
    fontSize: "1.3rem",
    display: "flex",
    height: "5rem",
    borderBottom: `1px solid #eee`,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontWeight: "500",
    textDecoration: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#f5f5f5",
      color: theme.palette.primary.main,
    },
  },
  logoContainer: {
    padding: "6.5rem 1.5rem 3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    marginBottom: "1rem",
  },
  logo: {
    width: "80px",
    height: "80px",
    marginBottom: "1rem",
  },
  logoText: {
    color: theme.palette.primary.main,
    fontSize: "3rem",
    fontWeight: 300,
    textAlign: "center",
  },
  subMenuUl: {
    boxShadow: "inset 0 0 5px 2px rgba(0,0,0,.2)",
  },
  subMenuSectionLink: {
    paddingLeft: "3.6rem",
  },
  callButton: {
    margin: "3rem 1.5rem 2rem",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: "1rem 0.5rem",
    fontSize: "1.1rem",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    borderRadius: "4px",
    width: "calc(100% - 3rem)",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const SideDrawer = ({ showing, closeSideDrawer }) => {
  const classes = useStyles();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const sideDrawerClasses = [classes.sideDrawer];
  if (showing) {
    sideDrawerClasses.push("showing");
  }
  
  // Inline styles to prevent hydration flash - only show after hydration
  const sideDrawerInlineStyle = {
    // Only apply initial hidden state before hydration, then let CSS handle transitions
    ...(isHydrated ? {} : { 
      transform: "translateX(-100%)",
      visibility: "hidden",
      opacity: 0 
    }),
  };

  return (
    <>
      <CSSTransition in={showing} unmountOnExit classNames="fade" timeout={500}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
        <Box
          className={classes.backdrop}
          onClick={closeSideDrawer}
          sx={{ display: { xs: "block", md: "none" } }}
        />
      </CSSTransition>

      <Box
        className={sideDrawerClasses.join(" ")}
        style={sideDrawerInlineStyle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <div className={classes.logoContainer}>
          <Image
            src="/logo.png"
            width={80}
            height={80}
            alt="Logo"
            className={classes.logo}
          />
          <Typography variant="h6" className={classes.logoText}>
            Hotel Park Hyatt
          </Typography>
        </div>

        <nav className={classes.sideDrawerNav}>
          <ul>
            <li>
              <Link href={`/`} className={classes.link} onClick={closeSideDrawer}>
                Home
              </Link>
            </li>

            <li>
              <Link href={`/about`} className={classes.link} onClick={closeSideDrawer}>
                About
              </Link>
            </li>

            <li>
              <Link href={`/rooms`} className={classes.link} onClick={closeSideDrawer}>
                Rooms
              </Link>
            </li>

            <li>
              <Link href={`/gallery`} className={classes.link} onClick={closeSideDrawer}>
                Gallery
              </Link>
            </li>
            {/* 
            <li>
              <Link href={`/careers`} className={classes.link} onClick={closeSideDrawer}>
                Careers
              </Link>
            </li> */}

            <li>
              <Link href={`/contact`} className={classes.link} onClick={closeSideDrawer}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <Button
          className={classes.callButton}
          fullWidth
          variant="contained"
          href="tel:+1-555-PARK-HYATT"
        >
          Call Now
        </Button>
      </Box>
    </>
  );
};

export default SideDrawer;
