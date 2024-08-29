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
    <div className="block-section border-2 sm:py-6 lg:py-10 px-7 w-4/5 space-y-4 rounded-xl whitespace-pre-line">
      <h3 className="text-purple-primary font-gilroy-black sm:text-3xl lg:text-[3rem]">
        {header}
      </h3>
      <h4 className="font-gilroy-bold text-purple-primary sm:text-lg lg:text-[1.625rem]">
        {subHeader}
      </h4>
      <div className="sm:block lg:flex justify-between">
        <div className="sm:pb-6 lg:max-w-[70%]">
          <p className="text-white-primary font-gilroy-regular text-base">
            {text}
          </p>
        </div>

        <div className="flex text-center justify-center items-center p-2">
          <button className="find-out-btn-container text-white-primary font-gilroy-bold text-center py-2 px-12">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Block;
