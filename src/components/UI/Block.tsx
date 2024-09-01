// import React from "react";
// import { Link } from "react-router-dom";
type BlockProps = {
  header: string;
  subHeader: string;
  text: string;
  btnText?: string;
};

const Block = ({
  header,
  subHeader,
  text,
  btnText = "Find Out More",
}: BlockProps) => {
  return (
    <div className="block-section w-4/5 whitespace-pre-line rounded-xl border-2 p-6">
      <h3 className="max-md:text-[2rem] text-purple-primary font-gilroy-black md:text-[2.5rem] lg:text-[3rem]">
        {header}
      </h3>
      <h4 className="max-md:pt-1 max-md:text-[1.0625rem] text-purple-primary font-gilroy-bold md:text-xl lg:text-[1.625rem]">
        {subHeader}
      </h4>
      <div className="block justify-between sm:flex">
        <div className="max-md:pb-6 max-md:pt-3 sm:max-w-[70%] sm:py-4 lg:py-9">
          <p className="text-[.9375rem] text-white-primary font-gilroy-regular">
            {text}
          </p>
        </div>

        <div className="max-md:py-4 flex items-center justify-center text-center sm:p-2">
          <button className="find-out-btn-container text-nowrap px-12 py-2 text-center text-white-primary font-gilroy-bold sm:px-5 lg:px-12">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Block;
