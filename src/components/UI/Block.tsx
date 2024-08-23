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
    <div className="block-section border-2 py-6 px-7 w-4/5 space-y-4 rounded-xl">
      <h3 className="text-purple-primary font-gilroy-black text-3xl">
        {header}
      </h3>
      <h4 className="font-gilroy-bold text-purple-primary text-lg">
        {subHeader}
      </h4>
      <div className="my-12">
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
  );
};
export default Block;
