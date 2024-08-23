import Hamburger from "@/assets/icons/hamburger-menu.svg";
import mobileLogo from "@/assets/images/logoMobile.png";
import lbImage from "@/assets/images/lightBlueDesk.png";

const MobileHeader = () => {
  return (
    <>
      <div className="relative hey">
        <header className="container py-6 px-8">
          <nav className="bg-black flex justify-between items-center">
            <div className="mobile-logo-container max-w-28">
              <img src={mobileLogo} alt="logoIcon" className="w-full" />
            </div>

            <div className="hamburger-container">
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
      </div>
    </>
  );
};

export default MobileHeader;
