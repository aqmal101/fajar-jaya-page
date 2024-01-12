import Image from "next/image";
import {
  FaRegCalendarCheck,
  FaRegBuilding,
  FaRegSmileWink,
} from "react-icons/fa";
import { RiFile4Line } from "react-icons/ri";

export default function HowWeWork() {
  const SkillList = [
    { id: 1, icon: <FaRegCalendarCheck size={30} />, skill: "Linnen Outter" },
    { id: 2, icon: <RiFile4Line size={30} />, skill: "Textile Material" },
    { id: 3, icon: <FaRegBuilding size={30} />, skill: "White Blazer" },
    { id: 4, icon: <FaRegSmileWink size={30} />, skill: "White Outfit" },
  ];
  return (
    <div className="w-full bg-[#2a2f27] flex flex-col items-center text-sm px-20 max-sm:px-7 py-28 max-sm:py-10 space-y-20">
      <div className="w-full items-center flex flex-col text-center space-y-6">
        <p className="text-[#da844a] text-lg max-sm:text-base tracking-widest">
          HOW WE WORK
        </p>
        <span className="text-5xl max-sm:text-3xl w-1/2 max-sm:w-full leading-tight text-white">
          Bringing You the Elements of Style
        </span>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 max-sm:grid-cols-2 gap-8 max-sm:gap-6 text-white">
        {SkillList.map((item, idx) => (
          <div
            className="flex flex-col justify-center items-center text-center space-y-6"
            id={idx}
            key={item.id}
          >
            <div className="w-16 h-16 bg-white flex text-[#da844a] hover:text-[#2a2f27] justify-center items-center hover:bg-[#da844a] duration-300 ease-in-out">
              {item.icon}
            </div>
            <p className="text-2xl max-sm:text-xl">{item.skill}</p>
            <span className="text-[15px] max-sm:text-sm w-[80%]">
              Lorem ipsum dolor sit amet, adipiscing elit.
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
