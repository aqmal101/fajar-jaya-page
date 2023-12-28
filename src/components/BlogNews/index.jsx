import Image from "next/image";
import GetStarted from "../button/GetStarted";
import { FaFacebookF, FaYoutube, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function BlogNews() {
  const CardDetail = [
    {
      date: "november 30, 2023",
      title: "Baldwin to display sustainable spray finishing",
      desc: "Integer pharetra lobortis mauris, nec feugiat felis semper ac. Vestibulum posuere euismod…",
    },
    {
      date: "november 30, 2023",
      title: "Baldwin to display sustainable spray finishing",
      desc: "Integer pharetra lobortis mauris, nec feugiat felis semper ac. Vestibulum posuere euismod…",
    },
    {
      date: "november 30, 2023",
      title: "Baldwin to display sustainable spray finishing",
      desc: "Integer pharetra lobortis mauris, nec feugiat felis semper ac. Vestibulum posuere euismod…",
    },
  ];
  return (
    <div className="w-full h-fit bg-white flex flex-col items-center text-sm px-28 py-28 space-y-14">
      <div className="w-full items-center flex flex-row justify-between space-y-6">
        <span className="w-[70%] flex flex-col text-left">
          <p className="text-[#da844a] text-lg tracking-widest">BLOG & NEWS</p>
          <span className="text-4xl leading-tight">
            Get Decorated With Our Best Products
          </span>
        </span>
        <span className="w-fit text-sm px-8 py-3 border bg-transparent text-[#da844a] border-gray-400 hover:cursor-pointer hover:border-[#da844a] hover:bg-[#da844a] hover:text-white transition-all ease-in-out duration-300">
          GET STARTED
        </span>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {CardDetail.map((item, idx) => (
          <div className="flex flex-col w-full h-96 bg-white" id={idx}>
            <div className="h-1/2 w-full bg-white overflow-hidden">
              <div className="h-full w-full hover:rotate-3 bg-purple-500 hover:grayscale-[10%] ease-in-out transition-all duration-500"></div>
            </div>
            <div className="h-1/2 w-full flex flex-col space-y-5 py-2">
              <p className="text-[#da844a] uppercase">{item.date}</p>
              <p className="text-xl">{item.title}</p>
              <p className="text-gray-400">{item.desc}</p>
              <span className="text-[#da844a] text-sm w-fit border-b border-gray-400 hover:border-[#da844a] hover:text-black">
                READ MORE
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
