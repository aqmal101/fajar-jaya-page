import Image from "next/image";
import { FaRegEye, FaRegStar } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

export default function Achievement() {
  const PlanList = [
    { class: "Basic Package", amount: "240", cardHeight: "h-[500px]" },
    { class: "Regular Package", amount: "320", cardHeight: "h-[560px]" },
    { class: "Duluxe Package", amount: "450", cardHeight: "h-[500px]" },
  ];
  return (
    <div className="w-full h-[400px] max-sm:h-fit bg-[#231f20] flex flex-row max-sm:flex-col px-16 py-20 max-sm:py-14 max-sm:px-7 items-center justify-center max-sm:space-y-16">
      <div className="w-[50%] max-sm:w-full h-full flex flex-col max-sm:text-center justify-center space-y-5">
        <span className="text-base text-[#32bab3] font-semibold tracking-[0.3rem]">
          ACHIEVEMENT
        </span>
        <span className="text-5xl max-sm:text4xl max-sm:text-4xl text-white">
          Milestone That We Have Achieved
        </span>
      </div>
      <div className="w-[50%] max-sm:w-full h-full grid grid-cols-2 grid-rows-2 gap-10 max-sm:gap-5">
        <div className="w-full h-full flex flex-col text-white space-y-2 justify-center items-center">
          <span className="text-5xl max-sm:text-4xl">25+</span>
          <span className="text-gray-400">Years Experience</span>
        </div>
        <div className="w-full h-full flex flex-col text-white space-y-2 justify-center items-center">
          <span className="text-5xl max-sm:text-4xl">1,450+</span>
          <span className="text-gray-400">Textile Project</span>
        </div>
        <div className="w-full h-full flex flex-col text-white space-y-2 justify-center items-center">
          <span className="text-5xl max-sm:text-4xl">87+</span>
          <span className="text-gray-400">Award Winnings</span>
        </div>
        <div className="w-full h-full flex flex-col text-white space-y-2 justify-center items-center">
          <span className="text-5xl max-sm:text-4xl">999+</span>
          <span className="text-gray-400">Positive Reviews</span>
        </div>
      </div>
    </div>
  );
}
