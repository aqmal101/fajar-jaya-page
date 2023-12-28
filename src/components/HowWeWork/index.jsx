import Image from "next/image";
import {
  FaRegCalendarCheck,
  FaRegBuilding,
  FaRegSmileWink,
} from "react-icons/fa";
import { RiFile4Line } from "react-icons/ri";

export default function HowWeWork() {
  const SkillList = [
    { icon: <FaRegCalendarCheck size={30} />, skill: "Linnen Outter" },
    { icon: <RiFile4Line size={30} />, skill: "Textile Material" },
    { icon: <FaRegBuilding size={30} />, skill: "White Blazer" },
    { icon: <FaRegSmileWink size={30} />, skill: "White Outfit" },
  ];
  return (
    <div className="w-full bg-[#2a2f27] flex flex-col items-center text-sm px-20 py-28 space-y-20">
      <div className="w-full items-center flex flex-col text-center space-y-6">
        <p className="text-[#da844a] text-lg tracking-widest">HOW WE WORK</p>
        <span className="text-5xl w-1/2 leading-tight text-white">
          Bringing You the Elements of Style
        </span>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-8 text-white">
        {SkillList.map((item, idx) => (
          <div className="flex flex-col justify-center items-center text-center space-y-6">
            <div className="w-16 h-16 bg-white flex text-[#da844a] hover:text-[#2a2f27] justify-center items-center hover:bg-[#da844a] duration-300 ease-in-out">
              {item.icon}
            </div>
            <p className="text-2xl">{item.skill}</p>
            <span className="text-[15px] w-[80%]">
              Lorem ipsum dolor sit amet, adipiscing elit.
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
