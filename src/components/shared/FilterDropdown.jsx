import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FilterDropdown = ({
  label,
  options,
  isOpen,
  setIsOpen,
  dropdownKey,
  zIndex,
  onFilterChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(label);

  const handleToggle = () => {
    setIsOpen(isOpen ? "" : dropdownKey);
  };

  const handleOptionClick = (option) => {
    const newSelectedOption = option === "Tất cả" ? label : option;
    setSelectedOption(newSelectedOption);
    setIsOpen("");
    if (onFilterChange) {
      onFilterChange(dropdownKey, option);
    }
  };

  return (
    <li
      onClick={handleToggle}
      className=" border border-black rounded-md flex justify-center relative w-full"
    >
      <button className="flex justify-center items-center gap-1 hover:text-white hover:bg-black px-3 py-2 w-full">
        {selectedOption} <ChevronDown size={19} />
      </button>
      {isOpen && (
        <div
          className="absolute top-9 left-0 mt-2 text-gray-400 rounded-md shadow-lg bg-white border border-gray-200 w-full"
          style={{ zIndex: zIndex }}
        >
          <ul>
            {options.map((option, index) => (
              <li
                key={index}
                className="px-5 py-2 hover:text-black cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default FilterDropdown;