import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Mobile Navbar */}
      <NavbarMobile />

      {/* Desktop Navbar */}
      <NavbarDesktop />
    </header>
  );
}

export default Header;
