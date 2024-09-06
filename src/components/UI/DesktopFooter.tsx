const MobielFooter = () => {
  return (
    <footer className="container mx-auto grid max-w-[70%] grid-rows-[auto] bg-black-primary">
      <header className="wrapper px-12 py-12">
        <div className="flex items-center justify-between">
          <div className="cont-desk-logo">
            <div className="bg-footer-logo-mobile h-[3.83rem] w-[13.625rem] bg-no-repeat"></div>
          </div>
          <div className="desk-btn-container">
            <button className="footer-btn-cnt w-full rounded-lg px-8 py-2 text-center text-sm text-white-primary font-gilroy-black">
              Get My Free Review
            </button>
          </div>
        </div>
      </header>

      <nav className="flex items-center justify-between border-y border-dark-secondary px-8 py-16">
        <div className="col-span-1">
          <h4 className="text-base text-white-primary font-gilroy-bold">
            Resources
          </h4>
          <div className="space-y-3 py-3">
            <p className="text-sm text-white-secondary font-gilroy-regular">
              Blog
            </p>
            <p className="text-sm text-white-secondary font-gilroy-regular">
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
                Facebook
              </p>
              <p className="text-sm text-white-secondary font-gilroy-regular">
                Instagram
              </p>
              <p className="text-sm text-white-secondary font-gilroy-regular">
                Twitter
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-white-secondary font-gilroy-regular">
                Linkedin
              </p>
              <p className="text-sm text-white-secondary font-gilroy-regular">
                Tiktok
              </p>
              <p className="text-sm text-white-secondary font-gilroy-regular">
                Youtube
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

export default MobielFooter;

// <div className="col-span-1">
// <h4 className="text-white-primary font-gilroy-bold text-sm">
//   Resources
// </h4>
// <div className="py-3 space-y-1">
//   <p className="text-white-secondary text-xs font-gilroy-regular">
//     Blog
//   </p>
//   <p className="text-white-secondary text-xs font-gilroy-regular">
//     Contact
//   </p>
//   <p className="text-white-secondary text-xs font-gilroy-regular">
//     About
//   </p>
// </div>

// <div className="col-span-2">
// <h4 className="text-white-primary font-gilroy-bold text-sm">Legal</h4>
// <div className="py-3 space-y-1">
//   <p className="text-white-secondary text-xs font-gilroy-regular">
//     Privacy policy
//   </p>
//   <p className="text-white-secondary text-xs font-gilroy-regular">
//     Terms and Conditions
//   </p>
//   <p className="text-white-secondary text-xs font-gilroy-regular">
//     Cookie Settings
//   </p>
// </div>
// </div>
