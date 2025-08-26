"use client";

import { useState, useEffect } from "react";
import MobileCtaNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer";

const Navigation = () => {
  const [showingSideDrawer, setShowingSideDrawer] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const toggleSideDrawer = () => {
    setShowingSideDrawer((showingSideDrawer) => !showingSideDrawer);
  };

  const closeSideDrawer = () => setShowingSideDrawer(false);

  if (!isHydrated) {
    return null;
  }

  return (
    <>
      <Navbar />
      <MobileCtaNavbar toggleSideDrawer={toggleSideDrawer} />
      <SideDrawer
        showing={showingSideDrawer}
        closeSideDrawer={closeSideDrawer}
      />
    </>
  );
};

export default Navigation;
