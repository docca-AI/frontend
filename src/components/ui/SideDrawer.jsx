import { X } from "lucide-react";
import Button from "../ui/Button";
import Logo from "../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";

function SideDrawer() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Check Symptoms", href: "/symptoms" },
    { label: "Find a Doctor", href: "/find-doctor" },
    { label: "Health Tips", href: "/health-tips" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <div className="drawer-side z-50">
      <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 w-72 min-h-full bg-white space-y-2">
        {/* Drawer Header with Logo + Close */}
        <div className="flex items-center justify-between mb-4">
          <NavLink to="/" className="flex items-center">
            <div className="bg-gradient-accent p-2 rounded-md mr-2">
              <img src={Logo} className="h-5 w-5" alt="DOCCA Logo" />
            </div>
            <span className="text-lg font-bold">DOCCA</span>
          </NavLink>
          <label htmlFor="mobile-drawer" className="btn btn-ghost btn-sm p-1">
            <X size={20} />
          </label>
        </div>

        {navItems.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "text-primary font-semibold"
                    : "hover:text-secondary"
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}

        {/* Mobile Actions */}
        <div className="mt-6 border-t pt-4 flex justify-center space-x-3">
          <Button variant="tertiary" size="md">
            LogIn
          </Button>
          <Button variant="secondary" size="md">
            SignUp
          </Button>
        </div>
      </ul>
    </div>
  );
}

export default SideDrawer;
