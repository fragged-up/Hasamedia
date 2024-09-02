const MobielFooter = () => {
  return (
    <footer className="mx-auto grid w-full grid-rows-[auto] bg-black-primary p-1">
      <header className="wrapper h-full space-y-6 p-12">
        <div className="footer-logo-container h-full max-h-[3.1rem] w-full max-w-[15rem] object-cover">
          <div className="footer-logo"></div>
        </div>

        <div className="w-full">
          <button className="footer-btn-cnt w-full rounded-lg px-8 py-2 text-center text-sm text-white-primary font-gilroy-black">
            Get My Free Review
          </button>
        </div>
      </header>
      <nav className="my-9 grid w-full grid-cols-2 border-y border-dark-secondary px-8 py-16">
        <div className="left-side grid-cols-1">
          <div>
            <h4 className="text-sm text-white-primary font-gilroy-bold">
              Resources
            </h4>
            <div className="space-y-1 py-3">
              <p className="text-xs text-white-secondary font-gilroy-regular">
                Blog
              </p>
              <p className="text-xs text-white-secondary font-gilroy-regular">
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
                Facebook
              </p>
              <p className="text-xs text-white-secondary font-gilroy-regular">
                Instagram
              </p>
              <p className="text-xs text-white-secondary font-gilroy-regular">
                Twitter
              </p>
              <p className="text-xs text-white-secondary font-gilroy-regular">
                Linkedin
              </p>
              <p className="text-xs text-white-secondary font-gilroy-regular">
                Tiktok
              </p>
              <p className="text-xs text-white-secondary font-gilroy-regular">
                Youtube
              </p>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center py-8">
        <p className="text-center text-xs text-white-primary font-gilroy-medium">
          &copy; 2024 Hasa Media LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default MobielFooter;
