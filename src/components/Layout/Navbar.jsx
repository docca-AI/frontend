// src/components/layout/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import Logo from "../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Check Symptoms", href: "/symptoms" },
    { label: "Find a Doctor", href: "/find-doctor" },
    { label: "Health Tips", href: "/health-tips" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Mobile Navbar */}
      <div className="flex items-center justify-between p-4 md:hidden">
        {/* Hamburger Left */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 cursor-pointer"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo Center */}
        <NavLink to="/" className="flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-accent p-2 rounded-md mr-2">
            <img src={Logo} className="h-2 w-2" alt="DOCCA Logo" />
          </div>
          <span className="text-md font-bold">DOCCA</span>
        </NavLink>

        {/* Language Switch Right */}
        <div className="flex items-center space-x-1">
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
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <div className="bg-gradient-accent p-3 rounded-md mr-2">
            <img src={Logo} className="h-4 w-4" alt="DOCCA Logo" />
          </div>
          <span className="text-2xl font-extrabold">DOCCA</span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden space-x-6 md:flex">
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
        <div className="hidden items-center space-x-4 md:flex">
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-white h-screen p-4 shadow-inner md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full text-left p-2 font-medium rounded-md ${
                  isActive
                    ? "text-primary font-semibold bg-light-gray"
                    : "text-natural-dark hover:bg-light-gray hover:text-secondary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Mobile actions */}
          <div className="mt-4 border-t pt-4">
            <div className="flex items-center justify-center space-x-6">
              <Button variant="tertiary" size="md">
                LogIn
              </Button>
              <Button variant="secondary" size="md">
                SignUp
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
