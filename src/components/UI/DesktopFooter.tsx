import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DesktopFooter = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/ContactUs");
  };
  return (
    <footer className="container mx-auto grid w-4/5 grid-rows-[auto] bg-black-primary max-sm:w-[90%]">
      <header className="wrapper py-12 max-md:pb-12 max-md:pt-6">
        {/* visible from 495px to width:768px */}
        <div className="flex flex-col items-center justify-center gap-8 md:hidden">
          <div className="cont-desk-logo mr-8">
            <div className="h-[3.83rem] w-[13.625rem] bg-footer-logo-mobile bg-no-repeat"></div>
          </div>
          <div className="desk-btn-container">
            <button className="desk-rev-btn w-full rounded-lg px-8 py-2 text-center text-[17.5px] text-white-primary font-gilroy-black">
              <Link to="/Lead">Get My Free Review</Link>
            </button>
          </div>
        </div>
        {/* desktop visible from min-width:768px */}
        <div className="items-center justify-between md:flex max-md:hidden">
          <div className="cont-desk-logo">
            <div className="h-[3.83rem] w-[13.625rem] bg-footer-logo-mobile bg-no-repeat"></div>
          </div>
          <div className="desk-btn-container">
            <button className="desk-rev-btn w-full rounded-lg px-6 py-2 text-center text-xl text-white-primary font-gilroy-black">
              <Link to="/Lead">Get My Free Review</Link>
            </button>
          </div>
        </div>
      </header>

      <nav className="flex items-center justify-between border-y border-dark-secondary px-8 py-16 max-sm:px-4 max-sm:py-8">
        <div className="col-span-1">
          <h4 className="text-base text-white-primary font-gilroy-bold">
            Resources
          </h4>
          <div className="space-y-3 py-3">
            <p className="text-sm text-white-secondary font-gilroy-regular">
              Blog
            </p>
            <p
              className="cursor-pointer text-sm text-white-secondary font-gilroy-regular"
              onClick={handleNavigation}
            >
              Contact
            </p>
            <p className="text-sm text-white-secondary font-gilroy-regular">
              About
            </p>
          </div>
        </div>

        <div className="col-span-2">
          <h4 className="text-base text-white-primary font-gilroy-bold">
            Social Media
          </h4>
          <div className="grid grid-cols-2 gap-x-8 py-4">
            <div className="space-y-3">
              <p className="text-sm text-white-secondary font-gilroy-regular">
                <a
                  href="https://www.facebook.com/profile.php?id=61563268386310"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </p>
              <p className="text-sm text-white-secondary font-gilroy-regular">
                <a
                  href="https://www.instagram.com/hasamedia.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-white-secondary font-gilroy-regular">
                <a
                  href="https://www.linkedin.com/company/hasamedia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </p>
              <p className="text-sm text-white-secondary font-gilroy-regular">
                <a
                  href="https://www.tiktok.com/@hasamedia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tiktok
                </a>
              </p>
              <p className="text-sm text-white-secondary font-gilroy-regular">
                <a
                  href="https://www.youtube.com/@HasaMediaOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <h4 className="text-base text-white-primary font-gilroy-bold">
            Legal
          </h4>
          <div className="space-y-3 py-3">
            <p className="text-sm text-white-secondary font-gilroy-regular">
              Privacy policy
            </p>
            <p className="text-sm text-white-secondary font-gilroy-regular">
              Terms and Conditions
            </p>
            <p className="text-sm text-white-secondary font-gilroy-regular">
              Cookie Settings
            </p>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center py-8">
        <p className="text-center text-sm text-white-primary font-gilroy-medium">
          &copy; 2024 Hasa Media LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default DesktopFooter;
