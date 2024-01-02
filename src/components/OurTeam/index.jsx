import Image from "next/image";
import {
  FaRegCalendarCheck,
  FaRegBuilding,
  FaRegSmileWink,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
  FaFacebook,
} from "react-icons/fa";

import { RiFile4Line } from "react-icons/ri";

export default function OurTeam() {
  const IconList = [<FaFacebook />, <FaFacebook />, <FaFacebook />];
  const TeamlList = [
    {
      name: "Ricky Martin",
      role: "MANAGER",
    },
    {
      name: "Linna Stones",
      role: "MARKETING",
    },
    {
      name: "Fanny Lawson",
      role: "HR STAFF",
    },
    {
      name: "Paula Frains",
      role: "DESIGNER",
    },
  ];
  return (
    <div className="w-full bg-white flex flex-col items-center text-sm px-20 py-28 space-y-20">
      <div className="w-full items-center flex flex-col text-center space-y-6">
        <p className="text-[#da844a] text-lg tracking-widest">OUR TEAM</p>
        <span className="text-5xl w-1/2 leading-tight">
          Meet The Professionals
        </span>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-10">
        {TeamlList.map((item, idx) => (
          <div className="flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-[280px] h-[280px] bg-[#141433] relative overflow-hidden group">
              <div className="w-[280px] h-[280px] bg-gray-300/20 absolute opacity-0 bottom-0 transition-all duration-500 ease-in-out group-hover:opacity-100 translate-y-[280px] group-hover:-translate-y-0 justify-center items-center flex flex-row space-x-4">
                <div className="w-10 h-10 border text-white hover:bg-[#da844a] border-gray-400 hover:border-[#da844a] transition-all duration-300 ease-in-out rounded-full flex justify-center items-center">
                  <FaFacebookF />
                </div>
                <div className="w-10 h-10 border text-white hover:bg-[#da844a] border-gray-400 hover:border-[#da844a] transition-all duration-300 ease-in-out rounded-full flex justify-center items-center">
                  <FaLinkedin />
                </div>
                <div className="w-10 h-10 border text-white hover:bg-[#da844a] border-gray-400 hover:border-[#da844a] transition-all duration-300 ease-in-out rounded-full flex justify-center items-center">
                  <FaYoutube />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center space-y-3">
              <p className="text-2xl">{item.name}</p>
              <span className="text-sm text-[#da844a] font-semibold w-[80%]">
                {item.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
