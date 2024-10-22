import { useState } from "react";
import BarbahLogo from "../assets/barbah_logo.svg";
import "./Navbar.css";
const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  return (
    <>
      <nav className="container">
        <img className="logo" src={BarbahLogo} alt="BARBAH Logo" />
        <div className="linksContainer">
          <a className="navLink" href="#About">
            About
          </a>
          <a className="navLink" href="#Contact Us">
            Contact Us
          </a>
          <a className="navLink" href="#Log in">
            Log in
          </a>
          <a className="navLink navlink-signup" href="#Sign Up">
            Sign Up
          </a>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <div className="hamburger" onClick={() => setNavBar(!navBar)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {navBar && (
        <nav className="mobile-linksContainer">
          <a className="mobile-navLink" href="#About">
            About
          </a>
          <a className="mobile-navLink" href="#Contact Us">
            Contact Us
          </a>
          <a className="mobile-navLink" href="#Log in">
            Log in
          </a>
          <a className="mobile-navLink" href="#Sign Up">
            Sign Up
          </a>
        </nav>
      )}
    </>
  );
};

export default Navbar;
