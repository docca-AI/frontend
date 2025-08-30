// src/components/layout/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [activeNav, setActiveNav] = useState("Home");

  const navItems = [
    "Home",
    "Check Symptoms",
    "Find a Doctor",
    "Health Tips",
    "About Us",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="flex items-center justify-between p-4 md:p-6">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <div className="bg-gradient-accent p-3 rounded-md mr-2">
              <img src={Logo} className="h-4 w-4" alt="DOCCA Logo" />
            </div>
            <span className="text-2xl font-extrabold">DOCCA</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden space-x-6 md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`font-medium transition-transform duration-200 ${
                  activeNav === item
                    ? "text-primary font-semibold border-b-2 border-primary"
                    : " hover:text-secondary hover:scale-105"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center space-x-4 md:flex">
            {/* Language Switch Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">EN</span>
              <button
                onClick={() => setLanguage(language === "EN" ? "PID" : "EN")}
                className={
                  "relative inline-flex h-6 w-11 items-center bg-light-gray rounded-full transition-colors duration-300 cursor-pointer"
                }
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

            {/* Buttons using your Button.jsx */}
            <Button variant="tertiary" size="md">
              LogIn
            </Button>
            <Button variant="secondary" size="md">
              SignUp
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 cursor-pointer"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-white h-screen p-4 shadow-inner md:hidden">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveNav(item);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left p-2 font-medium rounded-md ${
                  activeNav === item
                    ? "text-primary font-semibold bg-light-gray"
                    : "text-natural-dark hover:bg-light-gray hover:text-secondary"
                }`}
              >
                {item}
              </button>
            ))}

            {/* Mobile actions */}
            <div className="mt-4 border-t pt-4">
              {/* Language toggle */}
              <div className="flex justify-center space-x-2 rounded-full border border-gray-300 p-1 mb-4">
                <span className="text-sm font-medium">EN</span>
                <button
                  onClick={() => setLanguage(language === "EN" ? "PID" : "EN")}
                  className={
                    "relative inline-flex h-6 w-11 items-center bg-light-gray rounded-full transition-colors duration-300"
                  }
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

              {/* Login & Sign Up Buttons */}
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
