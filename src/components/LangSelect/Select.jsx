import React, { useState } from "react";

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "english", label: "English" },
    { value: "indonesian", label: "Indonesian" },
  ];

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    // Tambahkan logika atau tindakan lain yang diinginkan saat opsi dipilih
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-between w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm leading-5 focus:outline-none focus:border-blue-300 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {selectedOption ? selectedOption.label : "Select an option"}
          </button>
        </span>
      </div>

      {selectedOption && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                role="menuitem"
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
