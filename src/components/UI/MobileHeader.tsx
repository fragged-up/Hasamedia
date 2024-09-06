import lbImage from "@/assets/images/BorderTwo.png";
import HiringIcon from "@/assets/icons/HiringIcon.svg";

const MobileHeader = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-black">
      <div className="box-text mx-auto flex max-w-full flex-col items-center justify-center bg-black pt-2">
        <div className="mb-1 mt-2 inline-flex items-center justify-center gap-1">
          <div className="">
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

      <div className="relative bg-black">
        <header className="relative z-20 flex border-b border-[#707070] bg-black px-6 pb-6 pt-3">
          <nav className="my-auto flex w-full items-center justify-between">
            <div className="mobile-logo-container max-h-[6.3rem] w-full max-w-32 sm:max-w-40">
              <div className="flex h-[2.3rem] w-full bg-header-logo-mobile bg-no-repeat sm:h-10"></div>
            </div>
          </nav>
        </header>
      </div>
      <div className="absolute bottom-[-2rem] left-0 z-10 h-[8rem] w-full">
        <img
          src={lbImage}
          alt="Crazy Border"
          className="sticky top-0 h-full w-full object-cover"
          style={{ transform: "translateY(23.5%)" }}
        />
      </div>
    </div>
  );
};

export default MobileHeader;
