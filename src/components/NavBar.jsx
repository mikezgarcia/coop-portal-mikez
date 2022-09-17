import React from "react";
import logoImg from "../images/logo-white-orange.png";
import { Icon } from "@iconify/react";
// import OpenNavbarMobile from "./utilities/OpenNavbarMobile";

export default function NavBar() {
  return (
    // Opened Menu Navbar - Mobile View
    // <OpenNavbarMobile />
    // Closed Menu Navbar - Mobile View
    // Navbar Container
    <div className="bg-primary w-full flex flex-row justify-between">
      {/* Logo */}
      <div className="flex flex-row m-4">
        <img className="h-12 " src={logoImg} alt="" />
        {/* Logo Text */}
        <div className="flex flex-col items-start font-sans text-white">
          <h2 className="hidden sm:flex ml-4">
            Virtual Asset Credit Cooperative
          </h2>
          <h3 className="hidden sm:flex  ml-4">
            Community Building, Enriching through Technology
          </h3>
        </div>
        {/* Logo Text Ends Here */}
      </div>
      {/* Menu Icon Mobile Only - Default Hidden*/}
      <Icon
        className="text-secondary text-7xl mr-4 md:hidden"
        icon="charm:menu-hamburger"
      />
    </div>
  );
}
