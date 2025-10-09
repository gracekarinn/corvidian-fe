import React from "react";
import { NavbarDesktop } from "./navbar-desktop";
import { NavbarMobile } from "./navbar-mobile";

export const Navbar = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <NavbarDesktop />
      </div>
      <div className="block lg:hidden">
        <NavbarMobile />
      </div>
    </div>
  );
};
