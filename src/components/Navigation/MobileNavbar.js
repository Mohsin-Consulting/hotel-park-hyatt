import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Toggle from "./Toggle";

const useStyles = makeStyles((theme) => ({
  mobileNavbar: {
    backgroundColor: "black",
    padding: "0.5rem 1rem",
    position: "fixed",
    top: 0,
    width: "100%",
    boxShadow: "0px 5px 5px rgb(46 46 46 / 30%)",
    zIndex: 1000,
  },
  leftSideContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoContainer: {
    width: "3rem",
    padding: "0.25rem",
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  },
  logoText: {
    color: "white",
    fontSize: "2.2rem",
    paddingLeft: "1.75rem",
    paddingTop: "0.70rem",
    fontWeight: 300,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const MobileCtaNavbar = ({ toggleSideDrawer }) => {
  const classes = useStyles();
  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.mobileNavbar}
      >
        <div className={classes.leftSideContainer}>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <div className={classes.logoContainer}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className={classes.logo}
              />
            </div>
            <Typography variant="h6" className={classes.logoText}>
              Hotel Park Hyatt
            </Typography>
          </Link>
        </div>
        <Toggle onToggle={toggleSideDrawer} />
      </Grid>
    </Box>
  );
};

export default MobileCtaNavbar;
