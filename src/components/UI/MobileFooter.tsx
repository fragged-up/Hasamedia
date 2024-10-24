import { Link, useNavigate } from "react-router-dom";
const MobielFooter = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/ContactUs");
  };

  return (
    <footer className="mx-auto grid w-full grid-rows-[auto] bg-black-primary p-1">
      <header className="wrapper mt-[8.75rem] h-full space-y-6 p-12 pb-[2.33rem]">
        <div className="footer-logo-container h-full max-h-[4rem] w-full max-w-[15rem] object-cover">
          <div className="h-[3.83rem] w-[13.625rem] bg-footer-logo-mobile bg-no-repeat"></div>
        </div>

        <div className="w-full">
          <button className="footer-btn-cnt w-full rounded-lg px-8 py-2 text-center text-sm text-white-primary font-gilroy-black">
            <Link to="/Lead">Get My Free Review</Link>
          </button>
        </div>
      </header>
      <nav className="grid w-full grid-cols-2 border-t border-dark-secondary px-8 py-16">
        <div className="left-side grid-cols-1">
          <div>
            <h4 className="text-sm text-white-primary font-gilroy-bold">
              Resources
            </h4>
            <div className="space-y-1 py-3">
              <p className="text-xs text-white-secondary font-gilroy-regular">
                Blog
              </p>
              <p
                className="cursor-pointer text-xs text-white-secondary font-gilroy-regular"
                onClick={handleNavigation}
              >
                Contact
              </p>
              <p className="text-xs text-white-secondary font-gilroy-regular">
                About
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-sm text-white-primary font-gilroy-bold">
              Legal
            </h4>
            <div className="space-y-1 py-3">
              <p className="text-xs text-white-secondary font-gilroy-regular">
                Privacy policy
              </p>
              <p className="text-xs text-white-secondary font-gilroy-regular">
                Terms and Conditions
              </p>
              <p className="text-xs text-white-secondary font-gilroy-regular">
                Cookie Settings
              </p>
            </div>
          </div>
        </div>
        <div className="right-side grid-cols-2">
          <div className="right-side-block">
            <h4 className="text-sm text-white-primary font-gilroy-bold">
              Social Media
            </h4>
            <div className="space-y-1 py-4">
              <p className="text-xs text-white-secondary font-gilroy-regular">
                <a
                  href="https://www.facebook.com/profile.php?id=61563268386310"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </p>
              <p className="text-xs text-white-secondary font-gilroy-regular">
                <a
                  href="https://www.instagram.com/hasamedia.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </p>

              <p className="text-xs text-white-secondary font-gilroy-regular">
                <a
                  href="https://www.linkedin.com/company/hasamedia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </p>
              <p className="text-xs text-white-secondary font-gilroy-regular">
                <a
                  href="https://www.tiktok.com/@hasamedia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tiktok
                </a>
              </p>
              <p className="text-xs text-white-secondary font-gilroy-regular">
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
      </nav>
      {/* h-[6.031rem] */}
      <div className="flex h-[6.031rem] items-center justify-center border-t border-dark-secondary">
        <p className="text-center text-xs text-white-primary font-gilroy-medium">
          &copy; 2024 Hasa Media LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default MobielFooter;
