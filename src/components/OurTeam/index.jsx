import Image from "next/image";
import {
  FaRegCalendarCheck,
  FaRegBuilding,
  FaRegSmileWink,
} from "react-icons/fa";
import { RiFile4Line } from "react-icons/ri";

export default function OurTeam() {
  const TeamlList = [
    {
      icon: <FaRegCalendarCheck size={30} />,
      name: "Ricky Martin",
      role: "MANAGER",
    },
    {
      icon: <RiFile4Line size={30} />,
      name: "Linna Stones",
      role: "MARKETING",
    },
    {
      icon: <FaRegBuilding size={30} />,
      name: "Fanny Lawson",
      role: "HR STAFF",
    },
    {
      icon: <FaRegSmileWink size={30} />,
      name: "Paula Frains",
      role: "DESIGNER",
    },
  ];
  return (
    <div className="w-full bg-[#2a2f27] flex flex-col items-center text-sm px-20 py-28 space-y-20">
      <div className="w-full items-center flex flex-col text-center space-y-6">
        <p className="text-[#da844a] text-lg tracking-widest">OUR TEAM</p>
        <span className="text-5xl w-1/2 leading-tight text-white">
          Meet The Professionals
        </span>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-10 text-white">
        {TeamlList.map((item, idx) => (
          <div className="flex flex-col justify-center items-center text-center space-y-6">
            <div className="w-[280px] h-[280px] bg-white relative group">
              <div className="w-[280px] h-[280px] bg-purple-700 absolute opacity-0 bottom-0 transition-all duration-300 ease-in-out group-hover:opacity-100 translate-y-[280px] group-hover:-translate-y-0"></div>
              <p className="z-10 relative">Your Content</p>
            </div>

            <p className="text-2xl">{item.name}</p>
            <span className="text-[15px] w-[80%]">{item.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
