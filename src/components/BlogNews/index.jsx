import Image from "next/image";
import GetStarted from "../button/GetStarted";
import { FaFacebookF, FaYoutube, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function BlogNews() {
  const CardDetail = [
    {
      id: 1,
      date: "november 30, 2023",
      title: "Baldwin to display sustainable spray finishing",
      desc: "Integer pharetra lobortis mauris, nec feugiat felis semper ac. Vestibulum posuere euismod…",
    },
    {
      id: 2,
      date: "november 30, 2023",
      title: "Lenzing Concl Surat, Mumbai engages weaver",
      desc: "Integer pharetra lobortis mauris, nec feugiat felis semper ac. Vestibulum posuere euismod…",
    },
    {
      id: 3,
      date: "november 30, 2023",
      title: "Cheap polyester bring relief for India industry",
      desc: "Integer pharetra lobortis mauris, nec feugiat felis semper ac. Vestibulum posuere euismod…",
    },
  ];
  return (
    <div className="w-full h-fit bg-white flex flex-col items-center text-sm px-16 max-sm:px-8 py-28 max-sm:py-12 space-y-14">
      <div className="w-full items-center flex flex-row max-sm:flex-col justify-between space-y-6 max-sm:space-y-10">
        <span className="w-[70%] max-sm:w-full flex flex-col text-left max-sm:text-center max-sm:space-y-5">
          <p className="text-[#32bab3] text-lg max-sm:text-base tracking-widest">
            BLOG & NEWS
          </p>
          <span className="text-4xl leading-tight">
            Articles About Garment Textile
          </span>
        </span>
        <span className="w-fit text-sm px-8 py-3 border bg-transparent text-[#32bab3] border-gray-400 hover:cursor-pointer hover:border-[#32bab3] hover:bg-[#32bab3] hover:text-white transition-all ease-in-out duration-300">
          VIEW MORE
        </span>
      </div>
      <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-1">
        {CardDetail.map((item, idx) => (
          <div
            className="flex flex-col w-full h-fit bg-white"
            id={idx}
            key={item.id}
          >
            <div className="h-[250px] w-full bg-white overflow-hidden">
              <div className="h-full w-full hover:rotate-3 bg-purple-500 hover:grayscale-[10%] ease-in-out transition-all duration-500"></div>
            </div>
            <div className="h-1/2 w-full flex flex-col space-y-5 py-2">
              <p className="text-[#32bab3] uppercase">{item.date}</p>
              <p className="text-2xl">{item.title}</p>
              <p className="text-gray-500">{item.desc}</p>
              <span className="text-[#32bab3] text-sm w-fit border-b border-gray-400 hover:border-[#32bab3] hover:text-black">
                READ MORE
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
