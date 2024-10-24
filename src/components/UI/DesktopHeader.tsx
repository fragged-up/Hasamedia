import { useEffect, useState } from "react";
import desktopLogo from "@/assets/icons/hasa-logo-header.svg";
import lbImage from "@/assets/images/lightBlueDesk.png";
import HiringIcon from "@/assets/icons/HiringIcon.svg";
import { Link } from "react-router-dom";

const DesktopHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine if the image should disappear based on scroll position
  const shouldHideImage = scrollPosition > 25; // Image disappears after 5px of scroll

  return (
    <div className="">
      <div className="fixed z-50 w-full">
        <div className="relative max-h-[15rem]">
          <img
            src={lbImage}
            alt="Crazy Border"
            draggable="false"
            style={{
              opacity: shouldHideImage ? 0 : 1, // Hide image after 5px scroll
              transition: "opacity 0.3s ease", // Smooth transition for fading out
            }}
            className="absolute mx-auto flex min-w-full lap-range:top-16 end-lap-range:top-8"
          />
        </div>

        <div className="z-50 flex items-center justify-center bg-black pb-2 pt-4">
          <div className="mr-1.5">
            <img
              src={HiringIcon}
              alt="HiringIcon"
              className="h-[12.85px] w-[12.85px]"
            />
          </div>
          <div className="flex gap-1.5">
            <p className="text-center text-base text-white font-gilroy-medium">
              We are hiring soon!
            </p>
            <p className="text-center text-base text-white font-gilroy-regular">
              Keep in touch, we may be open for business in the US soon
            </p>
          </div>
        </div>
        <header className="relative flex items-center justify-between border-b border-[#1c1c1c] bg-black">
          <div className="flex w-full items-center justify-between px-12 py-8">
            <div className="left-side">
              <div className="flex items-center justify-between gap-[2rem]">
                <Link to="/">
                  <img
                    src={desktopLogo}
                    alt="desktopLogo"
                    className="h-[61px] w-[233px]"
                    draggable="false"
                  />
                </Link>
                <div
                  className="con flex h-[61px] items-center justify-center pt-7"
                  draggable="false"
                >
                  <Link
                    to="/ContactUs"
                    className="text-center text-[.9375rem] text-gray-400 font-gilroy-regular"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/Lead">
              <div className="right-side">
                <div className="desk-rev-btn flex items-center justify-center text-nowrap rounded-lg px-4 py-3">
                  <button className="text-center text-xl text-white transition duration-300 font-gilroy-black">
                    Free Website Review
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default DesktopHeader;
