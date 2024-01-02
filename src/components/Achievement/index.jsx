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
    <div className="w-full h-[400px] bg-[#141414] flex flex-row px-16 py-20 items-center justify-center">
      <div className="w-[50%] h-full flex flex-col justify-center space-y-5">
        <span className="text-base text-[#da844a] font-semibold tracking-[0.3rem]">
          ACHIEVEMENT
        </span>
        <span className="text-5xl text-white">
          Milestone That We Have Achieved
        </span>
      </div>
      <div className="w-[50%] h-full grid grid-cols-2 grid-rows-2 gap-10">
        <div className="w-full h-full flex flex-col text-white space-y-2 justify-center items-center">
          <span className="text-5xl">25+</span>
          <span className="text-white">Years Experience</span>
        </div>
        <div className="w-full h-full flex flex-col text-white space-y-2 justify-center items-center">
          <span className="text-5xl">1,450+</span>
          <span className="text-white">Textile Project</span>
        </div>
        <div className="w-full h-full flex flex-col text-white space-y-2 justify-center items-center">
          <span className="text-5xl">87+</span>
          <span className="text-white">Award Winnings</span>
        </div>
        <div className="w-full h-full flex flex-col text-white space-y-2 justify-center items-center">
          <span className="text-5xl">999+</span>
          <span className="text-white">Positive Reviews</span>
        </div>
      </div>
    </div>
  );
}
