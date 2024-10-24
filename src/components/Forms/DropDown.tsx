import { useState } from "react";
import PolygonDw from "@/assets/icons/polygon-dw.svg";

interface DropdownProps {
  selectedOption: string;
  onOptionSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  selectedOption,
  onOptionSelect,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative w-full">
      {/* Top-level container with the border wrapping everything */}
      <div
        className={`contact-us-border w-full rounded-[23px] border border-[#7a3bff8b] bg-[#00151c] p-1 shadow-lg`}
      >
        {/* Dropdown header */}
        <div
          onClick={toggleDropdown}
          className="flex cursor-pointer items-center justify-between px-4 py-2 text-[.9375rem] text-white font-gilroy-regular"
        >
          {/* Keep the label "What are you looking for?" in gray even when an option is selected */}
          {isDropdownOpen || selectedOption === "What are you looking for?" ? (
            <p className="text-[.9375rem] text-gray-400 font-gilroy-regular">
              What are you looking for?
            </p>
          ) : (
            <p>{selectedOption}</p>
          )}
          <img src={PolygonDw} alt="Dropdown Icon" />
        </div>
      </div>

      {/* Dropdown options - Absolutely positioned so it doesn't shift layout */}
      {isDropdownOpen && (
        <ul className="add-border absolute left-0 z-40 mt-[-16px] w-full rounded-b-[23px] border border-[#7a3bff8b] bg-[#00151c] pt-6 shadow-lg">
          <li
            onClick={() => {
              onOptionSelect("Marketing Services");
              setDropdownOpen(false);
            }}
            className="options-bordering mx-auto w-[85%] cursor-pointer border-b text-[.9375rem] text-white font-gilroy-regular hover:bg-[#1b1b1b]"
          >
            Marketing Services
          </li>
          <li
            onClick={() => {
              onOptionSelect("Social Media Services");
              setDropdownOpen(false);
            }}
            className="options-bordering mx-auto w-[85%] cursor-pointer border-b text-[.9375rem] text-white font-gilroy-regular hover:bg-[#1b1b1b]"
          >
            Social Media Services
          </li>
          <li
            onClick={() => {
              onOptionSelect("Websites Development");
              setDropdownOpen(false);
            }}
            className="options-bordering mx-auto w-[85%] cursor-pointer border-b text-[.9375rem] text-white font-gilroy-regular hover:bg-[#1b1b1b]"
          >
            Websites Development
          </li>
          <li
            onClick={() => {
              onOptionSelect("Graphic Design");
              setDropdownOpen(false);
            }}
            className="options-bordering mx-auto w-[85%] cursor-pointer border-b text-[.9375rem] text-white font-gilroy-regular hover:bg-[#1b1b1b]"
          >
            Graphic Design
          </li>
          <li
            onClick={() => {
              onOptionSelect("Content Creation");
              setDropdownOpen(false);
            }}
            className="options-bordering mx-auto w-[85%] cursor-pointer border-b text-[.9375rem] text-white font-gilroy-regular hover:bg-[#1b1b1b]"
          >
            Content Creation
          </li>
          <li
            onClick={() => {
              onOptionSelect("Other");
              setDropdownOpen(false);
            }}
            className="options-bordering mx-auto w-[85%] cursor-pointer text-[.9375rem] text-white font-gilroy-regular hover:bg-[#1b1b1b]"
          >
            Other
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
