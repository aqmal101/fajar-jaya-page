import Image from "next/image";
import { FaRegEye, FaRegStar } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

export default function OurThree() {
  const PlanList = [
    { class: "Basic Package", amount: "240", cardHeight: "h-[500px]" },
    { class: "Regular Package", amount: "320", cardHeight: "h-[560px]" },
    { class: "Duluxe Package", amount: "450", cardHeight: "h-[500px]" },
  ];
  return (
    <>
      <div className="w-full h-20 bg-white"></div>
      <div className="w-full h-fit grid grid-cols-3 grid-row-2 px-12 ">
        <div className="w-full h-[320px] bg-white group hover:bg-[#2a2f27] flex flex-col items-center justify-between transition-all duration-300 ease-out p-10">
          <div className="text-[#da844a] text-5xl flex justify-center items-center group-hover:translate-y-[-10px] transition-300 duration-300 ease-in-out">
            <FaRegEye />
          </div>
          <span className="text-2xl group-hover:text-white">Our Vision</span>
          <span className="text-center text-gray-500 group-hover:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            quam velit, consequat eu auctor ac.
          </span>
          <span className="text-[#da844a] text-sm underline underline-offset-4 group-hover:text-white">
            LEARN MORE
          </span>
        </div>

        <div className="w-full h-[320px] bg-blue-500"></div>
        <div className="w-full h-[320px] bg-white group hover:bg-[#2a2f27] flex flex-col items-center justify-between transition-all duration-300 ease-out p-10">
          <div className="text-[#da844a] text-5xl flex justify-center items-center group-hover:translate-y-[-10px] transition-300 duration-300 ease-in-out">
            <FaRegStar />
          </div>
          <span className="text-2xl group-hover:text-white">Our Mission</span>
          <span className="text-center text-gray-500  group-hover:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            quam velit, consequat eu auctor ac.
          </span>
          <span className="text-[#da844a] text-sm underline underline-offset-4 group-hover:text-white">
            LEARN MORE
          </span>
        </div>
        <div className="w-full h-[320px] bg-blue-500"></div>
        <div className="w-full h-[320px] bg-white group hover:bg-[#2a2f27] flex flex-col items-center justify-between transition-all duration-300 ease-out p-10">
          <div className="text-[#da844a] text-5xl flex justify-center items-center group-hover:translate-y-[-10px] transition-300 duration-300 ease-in-out">
            <IoDiamondOutline />
          </div>
          <span className="text-2xl group-hover:text-white">Our Goal</span>
          <span className="text-center text-gray-500 group-hover:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            quam velit, consequat eu auctor ac.
          </span>
          <span className="text-[#da844a] text-sm underline underline-offset-4 group-hover:text-white">
            LEARN MORE
          </span>
        </div>
        <div className="w-full h-[320px] bg-blue-500"></div>
      </div>
      <div className="w-full h-20 bg-white"></div>
    </>
  );
}
