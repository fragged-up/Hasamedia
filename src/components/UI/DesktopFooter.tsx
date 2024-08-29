import FooterLogo from "@/assets/images/logoFooterMobile.png";
const MobielFooter = () => {
  return (
    <footer className="max-w-[70%] mx-auto container bg-black-primary grid grid-rows-[auto]">
      <header className="wrapper px-12 py-12">
        <div className="flex justify-between items-center">
          <div className="cont-desk-logo max-h-12">
            <img
              src={FooterLogo}
              alt="logoFooterDesk"
              className="w-full h-12"
            />
          </div>
          <div className="desk-btn-container">
            <button className="w-full footer-btn-cnt text-center text-sm font-gilroy-black text-white-primary py-2 px-8 rounded-lg">
              Get My Free Review
            </button>
          </div>
        </div>
      </header>

      <nav className="flex justify-between items-center px-8 border-y border-dark-secondary py-16">
        <div className="col-span-1">
          <h4 className="text-white-primary font-gilroy-bold text-sm">
            Resources
          </h4>
          <div className="py-3 space-y-3">
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

        <div className="col-span-2">
          <h4 className="text-white-primary font-gilroy-bold text-sm">
            Social Media
          </h4>
          <div className="grid grid-cols-2 py-4 gap-x-8">
            <div className="space-y-3">
              <p className="text-white-secondary text-xs font-gilroy-regular">
                Facebook
              </p>
              <p className="text-white-secondary text-xs font-gilroy-regular">
                Instagram
              </p>
              <p className="text-white-secondary text-xs font-gilroy-regular">
                Twitter
              </p>
            </div>
            <div className="space-y-3">
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
        <div className="col-span-3">
          <h4 className="text-white-primary font-gilroy-bold text-sm">Legal</h4>
          <div className="py-3 space-y-3">
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
      </nav>
      <div className="flex justify-center items-center py-8">
        <p className="text-white-primary font-gilroy-medium text-center text-xs">
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
