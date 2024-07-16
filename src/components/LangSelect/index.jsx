import { useState } from "react";
import Image from "next/image";
import Indo from "./id.svg";
import Eng from "./gb.svg";

export default function LangSelect() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-transparent text-transparent flex flex-col justify-between items-center relative">
      <div className="relative">
        <div
          className="bg-transparent h-fit w-fit text-black py-2 px-4 rounded leading-tight focus:outline-none select-language cursor-pointer"
          onClick={toggleDropdown}
        >
          <div className="flex items-center">
            <p className="text-transparent">English</p>
            <Image
              src={Eng}
              alt="English Flag"
              className="mr-2"
              width={20}
              height={15}
            />
          </div>
        </div>

        {isDropdownOpen && (
          <div className="absolute w-[120px] top-0 left-0 px-4 right-0 mt-10 bg-white text-black shadow-md overflow-hidden z-10">
            <div className="flex items-center py-2">
              <Image
                src={Eng}
                alt="English Flag"
                className="mr-2"
                width={20}
                height={15}
              />
              English
            </div>
            <div className="flex items-center py-2">
              <Image
                src={Indo}
                alt="Indonesian Flag"
                className="mr-2"
                width={20}
                height={15}
              />
              Indonesia
            </div>
            {/* Tambahkan opsi lain sesuai kebutuhan */}
          </div>
        )}
      </div>
    </div>
  );
}
