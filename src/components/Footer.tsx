// import FooterLogo from "@/assets/images/logoFooterMobile.png";
const Footer = () => {
  return (
    <footer className="container bg-black-primary grid grid-rows-[auto]">
      <header className="wrapper px-12 py-12 space-y-6 ">
        <div className="footer-logo-container max-w-48">
          <div className="footer-logo"></div>
        </div>

        <div className="w-full">
          <button className="w-full footer-btn-cnt text-center text-sm font-gilroy-black text-white-primary py-2 px-8 rounded-lg">
            Get My Free Review
          </button>
        </div>
      </header>
      <nav className="grid grid-cols-2 px-8 border-y border-dark-secondary py-16">
        <div className="left-side grid-cols-1">
          <div>
            <h4 className="text-white-primary font-gilroy-bold text-sm">
              Resources
            </h4>
            <div className="py-3 space-y-1">
              <p className="text-white-secondary text-xs font-gilroy-regular">
                Blog
              </p>
              <p className="text-white-secondary text-xs font-gilroy-regular">
                Contact
              </p>
              <p className="text-white-secondary text-xs font-gilroy-regular">
                About
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-white-primary font-gilroy-bold text-sm">
              Legal
            </h4>
            <div className="py-3 space-y-1">
              <p className="text-white-secondary text-xs font-gilroy-regular">
                Privacy policy
              </p>
              <p className="text-white-secondary text-xs font-gilroy-regular">
                Terms and Conditions
              </p>
              <p className="text-white-secondary text-xs font-gilroy-regular">
                Cookie Settings
              </p>
            </div>
          </div>
        </div>
        <div className="right-side grid-cols-2">
          <div className="right-side-block">
            <h4 className="text-white-primary font-gilroy-bold text-sm">
              Social Media
            </h4>
            <div className="py-4 space-y-1">
              <p className="text-white-secondary text-xs font-gilroy-regular">
                Facebook
              </p>
              <p className="text-white-secondary text-xs font-gilroy-regular">
                Instagram
              </p>
              <p className="text-white-secondary text-xs font-gilroy-regular">
                Twitter
              </p>
              <p className="text-white-secondary text-xs font-gilroy-regular">
                Linkedin
              </p>
              <p className="text-white-secondary text-xs font-gilroy-regular">
                Tiktok
              </p>
              <p className="text-white-secondary text-xs font-gilroy-regular">
                Youtube
              </p>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center py-8">
        <p className="text-white-primary font-gilroy-medium text-center text-xs">
          &copy; 2024 Hasa Media LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
// #2C2C2C
