"use client";

import { useState } from "react";
import MobileCtaNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer";

const Navigation = () => {
  const [showingSideDrawer, setShowingSideDrawer] = useState(false);

  const toggleSideDrawer = () => {
    setShowingSideDrawer((showingSideDrawer) => !showingSideDrawer);
  };

  const closeSideDrawer = () => setShowingSideDrawer(false);

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
