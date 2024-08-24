// import { useState } from "react";
// import Hamburger from "@/assets/icons/hamburger-menu.svg";
// import mobileLogo from "@/assets/images/logoMobile.png";
// import lbImage from "@/assets/images/lightBlueDesk.png";

// const MobileHeader = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <>
//       <div className="relative hey">
//         <header className="container py-6 px-8">
//           <nav className="bg-black flex justify-between items-center">
//             <div className="mobile-logo-container max-w-28">
//               <img src={mobileLogo} alt="logoIcon" className="w-full" />
//             </div>

//             <div
//               className="hamburger-container text-white focus:outline-none"
//               onClick={toggleMenu}
//             >
//               <img src={Hamburger} alt="hamburgerIcon" />
//             </div>
//           </nav>
//         </header>
//         <div className="relative">
//           <img
//             src={lbImage}
//             alt="Crazy Border"
//             className="absolute h-10 min-w-full mt-[-3%] translate-y-4/4"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobileHeader;

import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Hamburger from "@/assets/icons/hamburger-menu.svg";
import mobileLogo from "@/assets/images/logoMobile.png";
import lbImage from "@/assets/images/lightBlueDesk.png";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative hey">
        <header className="container py-6 px-8">
          <nav className="bg-black flex justify-between items-center">
            <div className="mobile-logo-container max-w-28">
              <img src={mobileLogo} alt="logoIcon" className="w-full" />
            </div>

            <div
              className="hamburger-container text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <img src={Hamburger} alt="hamburgerIcon" />
            </div>
          </nav>
        </header>
        <div className="relative">
          <img
            src={lbImage}
            alt="Crazy Border"
            className="absolute h-10 min-w-full mt-[-3%] translate-y-4/4"
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
            <Link
              to="/"
              onClick={toggleMenu}
              className="text-white text-2xl font-semibold hover:text-purple-400"
            >
              Home
            </Link>
            <Link
              to="/Product"
              onClick={toggleMenu}
              className="text-white text-2xl font-semibold hover:text-purple-400"
            >
              Product
            </Link>
            <Link
              to="/Templates"
              onClick={toggleMenu}
              className="text-white text-2xl font-semibold hover:text-purple-400"
            >
              Templates
            </Link>
            <Link
              to="/ContactUs"
              onClick={toggleMenu}
              className="text-white text-2xl font-semibold hover:text-purple-400"
            >
              Contact Us
            </Link>
            <Link
              to="/SignUp"
              onClick={toggleMenu}
              className="text-white text-2xl font-semibold hover:text-purple-400"
            >
              Sign Up
            </Link>
            <Link
              to="/Login"
              onClick={toggleMenu}
              className="text-white text-2xl font-semibold hover:text-purple-400"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
