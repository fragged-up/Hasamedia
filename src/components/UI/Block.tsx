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
    <div className="block-section border-2 max-sm:p-6 sm:p-6 w-4/5 rounded-xl whitespace-pre-line">
      <h3 className="text-purple-primary font-gilroy-black max-sm:text-3xl sm:text-[2.2rem] lg:text-[3rem]">
        {header}
      </h3>
      <h4 className="font-gilroy-bold text-purple-primary max-sm:pt-1 max-sm:text-lg sm:text-xl lg:text-[1.625rem]">
        {subHeader}
      </h4>
      <div className="max-sm:block sm:flex justify-between">
        <div className="max-sm:pb-6 max-sm:pt-3 sm:py-4 lg:py-9 sm:max-w-[70%]">
          <p className="text-white-primary font-gilroy-regular text-base">
            {text}
          </p>
        </div>

        <div className="flex text-center justify-center items-center sm:p-2">
          <button className="find-out-btn-container text-white-primary font-gilroy-bold text-center py-2 px-12 sm:px-5 lg:px-12 text-nowrap">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Block;
