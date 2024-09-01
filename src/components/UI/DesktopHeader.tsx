import desktopLogo from "@/assets/images/logoDesktop.png";
import lbImage from "@/assets/images/lightBlueDesk.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const DesktopHeader = () => {
  const [popUp, setPopUP] = useState(true);

  return (
    <>
      <div className="bg-black">
        <div className="relative max-h-[23rem]">
          <img
            src={lbImage}
            alt="Crazy Border"
            className="absolute top-16 mx-auto flex min-w-full translate-y-9 lg:max-h-[10rem] xl:max-h-[14.2rem] xl:translate-y-0"
          />
        </div>
        {popUp && (
          <div className="flex items-center justify-center bg-black py-2">
            <input
              type="checkbox"
              name="hiring"
              id="hiring"
              className="mr-2"
              onClick={() => setPopUP(false)}
            />
            <p className="text-center text-base text-white-secondary font-gilroy-regular">
              We are hiring soon keep in touch, we may be open for business in
              the US soon
            </p>
          </div>
        )}

        <header className="relative flex items-center justify-between bg-black-primary shadow-md">
          <div className="container flex items-center gap-x-6 py-10">
            <div className="left-side ml-8 flex items-center justify-center">
              <div className="desktop-logo-container flex max-w-56 items-center justify-center">
                <div className="fade-slide-up text-4xl font-bold text-white">
                  {" "}
                  <img src={desktopLogo} alt="desktopLogo" className="flex" />
                </div>
              </div>
            </div>
            <nav className="flex items-center justify-center gap-x-6 pt-6">
              <Link
                to="/product"
                className="text-base text-white-secondary font-gilroy-regular"
              >
                Product
              </Link>
              <Link
                to="/templates"
                className="text-base text-white-secondary font-gilroy-regular"
              >
                Templates
              </Link>
              <Link
                to="/contact"
                className="text-base text-white-secondary font-gilroy-regular"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="right-side flex gap-5 px-10 pt-6">
            <div className="desk-rev-btn flex items-center justify-center text-nowrap rounded-lg px-4 py-2">
              <Link
                to="/free-website-review"
                className="text-center text-white transition duration-300 font-gilroy-black"
              >
                Free Website Review
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default DesktopHeader;
