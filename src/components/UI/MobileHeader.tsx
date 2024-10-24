import { useState, useEffect } from "react";
import lbImage from "@/assets/images/BorderTwo.png";
import HiringIcon from "@/assets/icons/HiringIcon.svg";

const MobileHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      console.log("scrollPosition : ", scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const maxTranslate = 25;
  const scrollRange = 2000;

  // Calculate translateYValue for smoother transition
  const translateYValue = Math.min(
    scrollRange / scrollPosition / 0.25,
    maxTranslate,
  );

  // Very subtle shrinking on Y-axis as you scroll (with a shrinking limit)
  const scaleYValue = Math.max(1.5 - scrollPosition * 0.00005, 0.995); // Shrinks minimally, down to 99.5% of original height

  // Immediate full opacity shading as soon as the user scrolls
  const lightness = scrollPosition > 10 ? 60 : 0; // Full opacity once the user scrolls

  return (
    <div
      className="fixed top-0 z-50 w-full"
      style={{
        backgroundColor: `hsl(0, 0%, ${lightness}%)`, // HSL shading effect
        transition: "background-color 0.3s ease", // Smooth shading transition
      }}
    >
      <div className="relative" draggable="false">
        <header className="relative z-20 flex-col border-b border-[#2c2c2c] bg-black px-6 pb-6 pt-3">
          <div className="box-text mx-auto flex max-w-full flex-col items-center justify-center bg-black pt-2">
            <div className="mb-1 mt-2 inline-flex items-center justify-center gap-1">
              <div>
                <img src={HiringIcon} alt="hiringIcon" className="h-2 w-2" />
              </div>
              <p className="text-[.625rem] text-white font-gilroy-medium">
                We are hiring soon!
              </p>
            </div>
            <p className="text-[.625rem] text-white-secondary font-gilroy-medium">
              Keep in touch, we may be open for business in the US soon.
            </p>
          </div>
          <nav className="my-auto flex w-full items-center justify-between">
            <div className="mobile-logo-container max-h-[6.3rem] w-full max-w-32 sm:max-w-40">
              <div className="flex h-[2.3rem] w-full bg-header-logo-mobile bg-no-repeat sm:h-14"></div>
            </div>
          </nav>
        </header>
      </div>

      {/* Image (BorderTwo) positioned below the header */}
      <div className="absolute bottom-[-2rem] left-0 z-10 h-[8rem] w-full">
        <img
          src={lbImage}
          draggable="false"
          alt="Crazy Border"
          className="linear-dodoge sticky h-full w-full object-cover"
          style={{
            transform: `translateY(${translateYValue}%) scaleY(${scaleYValue} )`, // Very minimal shrinking on Y-axis
            transition: "transform 0.3s ease", // Smooth transform transition
          }}
        />
      </div>
    </div>
  );
};

export default MobileHeader;
