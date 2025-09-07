import React, { useState } from "react";
import Button from "../ui/Button";
import Logo from "../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";

function NavbarDesktop() {
  const [language, setLanguage] = useState("EN");

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Check Symptoms", href: "/symptoms" },
    { label: "Find a Doctor", href: "/find-doctor" },
    { label: "Health Tips", href: "/health-tips" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <div className="hidden lg:flex items-center justify-between p-4 md:p-6">
      {/* Logo */}
      <NavLink to="/" className="flex items-center">
        <div className="bg-gradient-accent p-2 rounded-md mr-2">
          <img src={Logo} className="h-6 w-6" alt="DOCCA Logo" />
        </div>
        <span className="text-2xl font-extrabold">DOCCA</span>
      </NavLink>

      {/* Desktop Links */}
      <div className="hidden space-x-6 lg:flex">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            className={({ isActive }) =>
              `font-medium transition-transform duration-200 ${
                isActive
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "hover:text-secondary hover:scale-105"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Desktop Actions */}
      <div className="hidden items-center space-x-4 lg:flex">
        {/* Language Switch Toggle */}
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">EN</span>
          <button
            onClick={() => setLanguage(language === "EN" ? "PID" : "EN")}
            className="relative inline-flex h-6 w-11 items-center bg-light-gray rounded-full transition-colors duration-300 cursor-pointer"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full transition-transform duration-300 ${
                language === "EN"
                  ? "translate-x-1 bg-primary"
                  : "translate-x-6 bg-secondary"
              }`}
            />
          </button>
          <span className="text-sm font-medium">PID</span>
        </div>

        <Button variant="tertiary" size="md">
          LogIn
        </Button>
        <Button variant="secondary" size="md">
          SignUp
        </Button>
      </div>
    </div>
  );
}

export default NavbarDesktop;
