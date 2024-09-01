import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Hamburger from "@/assets/icons/hamburger-menu.svg";
import mobileLogo from "@/assets/images/logoMobile.png";
import lbImage from "@/assets/images/BorderTwo.png";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-black">
      <header className="relative z-20 flex bg-black px-8 py-6">
        <nav className="flex w-full items-center justify-between">
          <div className="mobile-logo-container">
            <img
              src={mobileLogo}
              alt="logoIcon"
              className="max-md:max-w-28 w-full"
            />
          </div>

          <div
            className="hamburger-container text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <img src={Hamburger} alt="hamburgerIcon" />
          </div>
        </nav>
      </header>

      <div className="absolute bottom-[-2rem] left-0 z-10 h-[8rem] w-full">
        <img
          src={lbImage}
          alt="Crazy Border"
          className="h-full w-full object-cover"
          style={{ transform: "translateY(25%)" }}
        />
      </div>

      <div
        className={`fixed inset-0 z-40 transform bg-black bg-opacity-90 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex min-h-screen flex-col items-center justify-center space-y-8">
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-2xl font-semibold text-white hover:text-purple-400"
          >
            Home
          </Link>
          <Link
            to="/Product"
            onClick={toggleMenu}
            className="text-2xl font-semibold text-white hover:text-purple-400"
          >
            Product
          </Link>
          <Link
            to="/Templates"
            onClick={toggleMenu}
            className="text-2xl font-semibold text-white hover:text-purple-400"
          >
            Templates
          </Link>
          <Link
            to="/ContactUs"
            onClick={toggleMenu}
            className="text-2xl font-semibold text-white hover:text-purple-400"
          >
            Contact Us
          </Link>
          <Link
            to="/SignUp"
            onClick={toggleMenu}
            className="text-2xl font-semibold text-white hover:text-purple-400"
          >
            Sign Up
          </Link>
          <Link
            to="/Login"
            onClick={toggleMenu}
            className="text-2xl font-semibold text-white hover:text-purple-400"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
