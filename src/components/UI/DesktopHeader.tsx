import desktopLogo from "@/assets/images/logoDesktop.png";
import lbImage from "@/assets/images/lightBlueDesk.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const DesktopHeader = () => {
  const [popUp, setPopUP] = useState(true);

  return (
    <>
      <div className="bg-black">
        {popUp && (
          <div className="bg-black flex justify-center items-center py-2">
            <input
              type="checkbox"
              name="hiring"
              id="hiring"
              className="mr-2"
              onClick={() => setPopUP(false)}
            />
            <p className="text-base font-gilroy-regular text-white-secondary text-center">
              We are hiring soon keep in touch, we may be open for business in
              the US soon
            </p>
          </div>
        )}
        <header className="bg-black-primary shadow-md flex justify-between items-center relative">
          <div className="container flex items-center gap-x-6 py-10">
            <div className="left-side flex justify-center items-center ml-8">
              <div className="desktop-logo-container flex justify-center items-center max-w-56">
                <div className="fade-slide-up text-4xl text-white font-bold">
                  {" "}
                  <img src={desktopLogo} alt="desktopLogo" className="flex" />
                </div>
              </div>
            </div>
            <nav className="flex justify-center items-center gap-x-6 pt-6">
              <Link
                to="/product"
                className="text-white-secondary font-gilroy-regular text-base"
              >
                Product
              </Link>
              <Link
                to="/templates"
                className="text-white-secondary font-gilroy-regular text-base"
              >
                Templates
              </Link>
              <Link
                to="/contact"
                className="text-white-secondary font-gilroy-regular text-base"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="right-side flex gap-5 pt-6 px-10">
            <div className="desk-rev-btn flex justify-center items-center text-nowrap py-2 px-4 rounded-lg">
              <Link
                to="/free-website-review"
                className="text-white font-gilroy-black transition duration-300 text-center"
              >
                Free Website Review
              </Link>
            </div>
          </div>
        </header>
        <div>
          <img
            src={lbImage}
            alt="Crazy Border"
            className="absolute h-10 min-w-full mt-[-3%] translate-y-4/4"
          />
        </div>
      </div>
    </>
  );
};

export default DesktopHeader;
