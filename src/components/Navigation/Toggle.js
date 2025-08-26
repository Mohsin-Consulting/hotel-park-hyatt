"use client";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  toggle: {
    width: "40px",
    height: "46px",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 0",
    cursor: "pointer",
    "& > div": {
      width: "90%",
      height: "3px",
      backgroundColor: theme.palette.primary.main,
      borderRadius: "2px",
      transition: "all 0.3s ease",
    },
    "&:hover > div:first-of-type": {
      transform: "translateY(-3px)",
    },
    "&:hover > div:last-of-type": {
      transform: "translateY(3px)",
    },
  },
}));

const Toggle = ({ onToggle }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.toggle}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onToggle();
        }
      }}
      aria-label="Toggle navigation menu"
    >
      <div />
      <div />
      <div />
    </div>
  );
};

export default Toggle;
