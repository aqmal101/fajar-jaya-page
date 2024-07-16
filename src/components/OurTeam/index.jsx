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

import { FaXTwitter } from "react-icons/fa6";

import { RiFile4Line } from "react-icons/ri";

export default function OurTeam() {
  const teamlList = [
    {
      id: 1,
      name: "Pany Nuary Z",
      role: "Finance and Accounting Manager",
      image: "bg-[#32bab3]",
    },
    {
      id: 2,
      name: "Alva Lidya",
      role: "HRGA Manager",
      image: "bg-[url('/assets/team/alva_lidya.jpg')]",
    },
    {
      id: 3,
      name: "Irwan Budianto",
      role: "Marketing Manager",
      image: "bg-[url('/assets/team/irwan_budianto.jpg')]",
    },
    {
      id: 4,
      name: "Resti Caroline",
      role: "Operational Manager",
      image: "bg-[url('/assets/team/resti_caroline.jpg')]",
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col items-center text-sm px-20 max-sm:px-10 py-28 max-sm:py-10 space-y-20">
      <div className="w-full items-center flex flex-col text-center space-y-6">
        <p className="text-[#32bab3] text-lg max-sm:text-base tracking-widest">
          OUR TEAM
        </p>
        <span className="text-5xl max-sm:text-4xl w-1/2 max-sm:w-full leading-tight">
          Meet The Professionals
        </span>
      </div>
      <div
        className="flex flex-col justify-center items-center text-center space-y-4"
        // id={idx}
        // key={item.id}
      >
        <div className="w-[280px] h-[280px] bg-[url('/assets/team/aditya_putra.jpg')] bg-cover bg-center relative overflow-hidden group">
          <div className="w-[280px] h-[280px] bg-gray-500/20 absolute opacity-0 bottom-0 transition-all duration-500 ease-in-out group-hover:opacity-100 translate-y-[280px] group-hover:-translate-y-0 justify-center items-center flex flex-row space-x-4">
            <div className="w-10 h-10 border text-white hover:bg-[#32bab3] border-gray-400 hover:border-[#32bab3] transition-all duration-300 ease-in-out rounded-full flex justify-center items-center">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 border text-white hover:bg-[#32bab3] border-gray-400 hover:border-[#32bab3] transition-all duration-300 ease-in-out rounded-full flex justify-center items-center">
              <FaLinkedin />
            </div>
            <div className="w-10 h-10 border text-white hover:bg-[#32bab3] border-gray-400 hover:border-[#32bab3] transition-all duration-300 ease-in-out rounded-full flex justify-center items-center">
              <FaXTwitter />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center space-y-3">
          <p className="text-2xl">M Aditya Putra Pratama</p>
          <span className="text-md text-[#32bab3] font-semibold w-full">
            President Director
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 grid-rows-1 gap-10">
        {teamlList.map((item, idx) => (
          <div
            className="flex flex-col justify-center items-center text-center space-y-4"
            id={idx}
            key={item.id}
          >
            <div
              className={`w-[280px] h-[280px] ${item.image} bg-cover bg-center relative overflow-hidden group`}
            >
              <div className="w-[280px] h-[280px] bg-gray-500/20 absolute opacity-0 bottom-0 transition-all duration-500 ease-in-out group-hover:opacity-100 translate-y-[280px] group-hover:-translate-y-0 justify-center items-center flex flex-row space-x-4">
                <div className="w-10 h-10 border text-white hover:bg-[#32bab3] border-gray-400 hover:border-[#32bab3] transition-all duration-300 ease-in-out rounded-full flex justify-center items-center">
                  <FaFacebookF />
                </div>
                <div className="w-10 h-10 border text-white hover:bg-[#32bab3] border-gray-400 hover:border-[#32bab3] transition-all duration-300 ease-in-out rounded-full flex justify-center items-center">
                  <FaLinkedin />
                </div>
                <div className="w-10 h-10 border text-white hover:bg-[#32bab3] border-gray-400 hover:border-[#32bab3] transition-all duration-300 ease-in-out rounded-full flex justify-center items-center">
                  <FaXTwitter />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center space-y-3">
              <p className="text-2xl">{item.name}</p>
              <span className="text-md text-[#32bab3] font-semibold w-full">
                {item.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
