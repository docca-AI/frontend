import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import Logo from "../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";
import SideDrawer from "../ui/SideDrawer";

const NavbarMobile = () => {
  const [language, setLanguage] = useState("EN");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Mobile Navbar with Drawer */}
      <div className="flex items-center justify-between p-4 lg:hidden">
        <div className="drawer">
          <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Hamburger Left */}
            <label
              htmlFor="mobile-drawer"
              className="btn btn-ghost p-2 cursor-pointer"
            >
              <Menu size={24} />
            </label>
          </div>

          {/* Drawer Sidebar */}
          <SideDrawer />
        </div>

        {/* Logo Center */}
        <NavLink
          to="/"
          className="flex items-center absolute left-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-accent p-2 rounded-md mr-2">
            <img src={Logo} className="h-4 w-4" alt="DOCCA Logo" />
          </div>
          <span className="text-md font-bold">DOCCA</span>
        </NavLink>

        {/* Language Switch Right */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">EN</span>
            <button
              onClick={() => setLanguage(language === "EN" ? "PID" : "EN")}
              className="relative inline-flex h-4 w-6 items-center bg-light-gray rounded-full transition-colors duration-300 cursor-pointer"
            >
              <span
                className={`inline-block h-2 w-2 transform rounded-full transition-transform duration-300 ${
                  language === "EN"
                    ? "translate-x-1 bg-primary"
                    : "translate-x-3 bg-secondary"
                }`}
              />
            </button>
            <span className="text-sm font-medium">PID</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="tertiary" size="md">
              LogIn
            </Button>
            <Button variant="secondary" size="md">
              SignUp
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;
