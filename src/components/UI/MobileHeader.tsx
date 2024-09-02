import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Hamburger from "@/assets/icons/hamburger-menu.svg";
// import mobileLogo from "@/assets/images/logoMobile.png";
import lbImage from "@/assets/images/BorderTwo.png";

const MobileHeader = () => {
  const [popUp, setPopUP] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-black">
      {popUp && (
        <div className="box-text mx-auto flex max-w-full flex-col items-center justify-center bg-black pt-2">
          <span className="mb-1 mt-2 inline-flex items-center justify-center gap-1">
            <input
              type="checkbox"
              name="hiring"
              id="hiring"
              className=""
              onClick={() => setPopUP(false)}
            />
            <p className="text-[.625rem] text-white font-gilroy-medium">
              We are hiring soon!
            </p>
          </span>
          <p className="text-[.625rem] text-white-secondary font-gilroy-medium">
            Keep in touch, we may be open for business in the US soon.
          </p>
        </div>
      )}
      <div className="relative bg-black">
        <header className="relative z-20 flex border-b border-[rgba(187,187,187,0.5)] bg-black px-6 pb-6 pt-3">
          <nav className="my-auto flex w-full items-center justify-between">
            <div className="mobile-logo-container max-h-[6.3rem] w-full max-w-32 sm:max-w-40">
              <div className="flex h-7 w-full bg-header-logo-mobile bg-contain bg-no-repeat object-fill sm:h-10"></div>
              {/* <img
                src={mobileLogo}
                alt="logoIcon"
                className="w-full max-md:max-w-28"
                /> */}
            </div>

            <div
              className="hamburger-container text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <img src={Hamburger} alt="hamburgerIcon" />
            </div>
          </nav>
        </header>
      </div>
      <div className="absolute bottom-[-2rem] left-0 z-10 h-[8rem] w-full">
        <img
          src={lbImage}
          alt="Crazy Border"
          className="h-full w-full object-cover"
          style={{ transform: "translateY(23.5%)" }}
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
