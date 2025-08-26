"use client";

import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const LoadingAnimation = ({ onAnimationComplete }) => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [logoScale, setLogoScale] = useState(0);
  const [logoOpacity, setLogoOpacity] = useState(1);

  useEffect(() => {
    // Animation sequence
    const timer1 = setTimeout(() => {
      // Logo appears and scales up
      setLogoScale(1);
    }, 300);

    const timer2 = setTimeout(() => {
      // Logo scales up a bit more
      setLogoScale(1.3);
    }, 1200);

    const timer3 = setTimeout(() => {
      // Logo starts to fade and shrink
      setLogoScale(0);
      setLogoOpacity(0);
    }, 2300);

    const timer4 = setTimeout(() => {
      // Overlay starts to fade
      setIsVisible(false);
    }, 2800);

    const timer5 = setTimeout(() => {
      // Animation complete
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 3300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onAnimationComplete]);

  if (!isVisible && logoOpacity === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-out",
      }}
    >
      <Box
        component="img"
        src="/logo-mobile-flyout.png"
        alt="Hotel Park Hyatt"
        sx={{
          maxWidth: "200px",
          maxHeight: "200px",
          width: "auto",
          height: "auto",
          transform: `scale(${logoScale})`,
          opacity: logoOpacity,
          transition:
            "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-out",
          "@media (max-width: 600px)": {
            maxWidth: "150px",
            maxHeight: "150px",
          },
        }}
      />
    </Box>
  );
};

export default LoadingAnimation;
